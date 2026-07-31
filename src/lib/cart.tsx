"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IVA_RATE, findTier } from "@/lib/catalog";
import { useLanguage } from "@/lib/language-context";

// 1. Ampliamos CartLine para soportar campos personalizados
export type CartLine = {
  tierId: string;
  qty: number;
  customPrice?: number;
  customFolio?: string;
  customName?: string;
};

export type ResolvedLine = CartLine & {
  name: string;
  packageTitle: string;
  price: number;
  blurb: string;
  lineTotal: number;
};

export type Order = {
  folio: string;
  createdAt: string;
  name: string;
  email: string;
  company?: string;
  method: string;
  lines: { name: string; packageTitle: string; qty: number; price: number }[];
  subtotal: number;
  iva: number;
  total: number;
};

const STORAGE_KEY = "lunbyte.cart.v1";
const ORDER_KEY = "lunbyte.order.v1";

type CartCtx = {
  lines: ResolvedLine[];
  count: number;
  subtotal: number;
  iva: number;
  total: number;
  isOpen: boolean;
  hydrated: boolean;
  open: () => void;
  close: () => void;
  // 2. Modificamos add para aceptar la data extra
  add: (tierId: string, qty?: number, customData?: { price: number; folio: string; name: string }) => void;
  setQty: (tierId: string, qty: number) => void;
  remove: (tierId: string) => void;
  clear: () => void;
  saveOrder: (order: Order) => void;
  lastOrder: Order | null;
};

const CartContext = createContext<CartCtx | null>(null);

export function formatMXN(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [raw, setRaw] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  
  const { lang } = useLanguage();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setRaw(JSON.parse(stored) as CartLine[]);
      const order = window.localStorage.getItem(ORDER_KEY);
      if (order) setLastOrder(JSON.parse(order) as Order);
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch {
      /* storage unavailable */
    }
  }, [raw, hydrated]);

  const lines = useMemo<ResolvedLine[]>(() => {
    return raw.flatMap((line) => {
      // 3. Resolución de líneas personalizadas vs de catálogo
      if (line.tierId === "custom") {
        return [
          {
            ...line,
            name: line.customName || "Plan personalizado",
            packageTitle: `Folio: ${line.customFolio}`,
            price: line.customPrice || 0,
            blurb: "Servicio a la medida",
            lineTotal: (line.customPrice || 0) * line.qty,
          },
        ];
      }

      const tier = findTier(line.tierId, lang);
      if (!tier) return [];
      return [
        {
          ...line,
          name: tier.name,
          packageTitle: tier.packageTitle,
          price: tier.price,
          blurb: tier.blurb,
          lineTotal: tier.price * line.qty,
        },
      ];
    });
  }, [raw, lang]);

  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const iva = Math.round(subtotal * IVA_RATE * 100) / 100;
  const total = subtotal + iva;
  const count = lines.reduce((sum, l) => sum + l.qty, 0);

  // 4. Adaptamos la inserción para planes a la medida
  const add = useCallback((tierId: string, qty = 1, customData?: { price: number; folio: string; name: string }) => {
    setRaw((prev) => {
      if (tierId === "custom" && customData) {
        // Evitar duplicados del mismo folio personalizado
        const existing = prev.find((l) => l.tierId === "custom" && l.customFolio === customData.folio);
        if (existing) {
          return prev.map((l) =>
            l.tierId === "custom" && l.customFolio === customData.folio ? { ...l, qty: Math.min(l.qty + qty, 99) } : l
          );
        }
        return [...prev, { tierId, qty, customPrice: customData.price, customFolio: customData.folio, customName: customData.name }];
      }

      const existing = prev.find((l) => l.tierId === tierId);
      if (existing) {
        return prev.map((l) =>
          l.tierId === tierId ? { ...l, qty: Math.min(l.qty + qty, 99) } : l,
        );
      }
      return [...prev, { tierId, qty }];
    });
    setIsOpen(true);
  }, []);

  const setQty = useCallback((tierId: string, qty: number) => {
    setRaw((prev) =>
      qty <= 0
        ? prev.filter((l) => l.tierId !== tierId)
        : prev.map((l) =>
            l.tierId === tierId ? { ...l, qty: Math.min(qty, 99) } : l,
          ),
    );
  }, []);

  // Permitimos borrar custom items
  const remove = useCallback((tierId: string) => {
    setRaw((prev) => prev.filter((l) => l.tierId !== tierId));
  }, []);

  const clear = useCallback(() => setRaw([]), []);

  const saveOrder = useCallback((order: Order) => {
    setLastOrder(order);
    try {
      window.localStorage.setItem(ORDER_KEY, JSON.stringify(order));
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value: CartCtx = {
    lines, count, subtotal, iva, total, isOpen, hydrated,
    open: () => setIsOpen(true), close: () => setIsOpen(false),
    add, setQty, remove, clear, saveOrder, lastOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}