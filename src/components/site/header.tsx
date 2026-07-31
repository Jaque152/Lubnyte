// src/components/site/header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { formatMXN, useCart } from "@/lib/cart";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

const navKeys = [
  { key: "home", href: "/#top" },
  { key: "studio", href: "/#estudio" },
  { key: "missions", href: "/#misiones" },
  { key: "plans", href: "/#planes" },
  { key: "contact", href: "/#contacto" },
] as const;

export function Header() {
  const { count, total, open, hydrated } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* status strip */}
      <div className="hidden overflow-hidden border-b border-ink-line bg-ink py-1.5 md:block">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...t.header.strip, ...t.header.strip].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="flex items-center gap-4 pr-4 font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim/45"
            >
              {s}
              <span className="text-tangerine">/</span>
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "border-b-2 transition-all duration-300",
          scrolled
            ? "border-ink-line bg-ink/92 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label="Lunbyte — inicio"
          >
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-dim/70 transition-colors hover:text-bone"
              >
                {t.nav[item.key as keyof typeof t.nav]}
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-tangerine transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Language Toggle */}
            <div className="hidden items-center border border-ink-line font-mono text-[10px] uppercase tracking-[0.16em] sm:flex">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={cn(
                  "px-2 py-1 transition-colors",
                  lang === "es" ? "bg-tangerine font-bold text-ink" : "text-bone-dim/40 hover:text-bone"
                )}
              >
                Esp
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-1 transition-colors",
                  lang === "en" ? "bg-tangerine font-bold text-ink" : "text-bone-dim/40 hover:text-bone"
                )}
              >
                Eng
              </button>
            </div>

            <button
              type="button"
              onClick={open}
              className="group relative flex items-center gap-2.5 border-2 border-bone bg-bone px-3 py-2 text-ink transition-all duration-200 hover:-translate-y-[1px] hover:bg-tangerine hover:shadow-[4px_4px_0_0_hsl(var(--bone))]"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden font-mono text-[11px] font-bold tabular-nums sm:inline">
                {hydrated ? formatMXN(total) : "$0.00"}
              </span>
              <span className="flex h-[18px] min-w-[18px] items-center justify-center bg-ink px-1 font-mono text-[10px] font-bold text-bone">
                {hydrated ? count : 0}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-label="Menú"
              className="border-2 border-ink-line p-2 text-bone transition-colors hover:border-tangerine hover:text-tangerine lg:hidden"
            >
              {menu ? (
                <X className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-b-2 border-ink-line bg-ink transition-[max-height] duration-500 ease-out lg:hidden",
          menu ? "max-h-[420px]" : "max-h-0",
        )}
      >
        <nav className="shell flex flex-col py-4">
          {navKeys.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenu(false)}
              className="flex items-baseline gap-4 border-b border-ink-line py-3.5 font-display text-2xl font-extrabold uppercase tracking-tight text-bone transition-colors hover:text-tangerine"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-tangerine">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t.nav[item.key as keyof typeof t.nav]}
            </Link>
          ))}
          {/* Mobile Language Toggle */}
          <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim/50">
            <button
              onClick={() => { setLang("es"); setMenu(false); }}
              className={cn("px-2 py-1 transition-colors", lang === "es" ? "bg-tangerine font-bold text-ink" : "hover:text-bone")}
            >
              Esp
            </button>
            <button
              onClick={() => { setLang("en"); setMenu(false); }}
              className={cn("px-2 py-1 transition-colors", lang === "en" ? "bg-tangerine font-bold text-ink" : "hover:text-bone")}
            >
              Eng
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}