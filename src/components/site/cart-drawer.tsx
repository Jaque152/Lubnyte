"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatMXN, useCart } from "@/lib/cart";
import { Action } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, iva, total, setQty, remove, count } = useCart();
  const { t } = useLanguage();

  return (
    <>
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={close}
        className={`fixed inset-0 z-[70] bg-ink/70 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        aria-hidden={!isOpen}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        className={`fixed right-0 top-0 z-[80] flex h-[100dvh] w-full max-w-[440px] flex-col border-l-2 border-tangerine bg-ink transition-transform duration-[420ms] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b-2 border-ink-line px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4 text-tangerine" strokeWidth={2.5} />
            <p className="kicker text-bone">
              {t.cart.title} <span className="text-tangerine">[{String(count).padStart(2, "0")}]</span>
            </p>
          </div>
          <button type="button" onClick={close} aria-label="Cerrar" className="border-2 border-ink-line p-2 text-bone-dim transition-colors hover:border-tangerine hover:text-tangerine">
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-6 px-8 text-center">
              <div className="relative">
                <div className="absolute -inset-6 animate-spin-slow border border-dashed border-ink-line" />
                <ShoppingBag className="h-10 w-10 text-ink-line" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-bone">{t.cart.empty_title}</p>
                <p className="mt-2 text-sm text-bone-dim/70">{t.cart.empty_desc}</p>
              </div>
              <Action href="/#planes" tone="tangerine" onClick={close}>{t.cart.btn_plans}</Action>
            </div>
          ) : (
            <ul>
              {lines.map((line) => (
                <li key={line.tierId} className="group border-b border-ink-line px-6 py-5 transition-colors hover:bg-ink-raise">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-tangerine">{line.packageTitle}</p>
                      <p className="mt-1 font-display text-lg font-bold leading-tight text-bone">{line.name}</p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-bone-dim/60">{line.blurb}</p>
                    </div>
                    <button type="button" onClick={() => remove(line.tierId)} aria-label={`Quitar ${line.name}`} className="shrink-0 p-1 text-bone-dim/40 transition-colors hover:text-tangerine">
                      <Trash2 className="h-4 w-4" strokeWidth={2} />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center border-2 border-ink-line">
                      <button type="button" onClick={() => setQty(line.tierId, line.qty - 1)} className="px-2.5 py-1.5 text-bone-dim transition-colors hover:bg-tangerine hover:text-ink"><Minus className="h-3 w-3" strokeWidth={3} /></button>
                      <span className="min-w-[2.25rem] text-center font-mono text-sm font-bold text-bone">{String(line.qty).padStart(2, "0")}</span>
                      <button type="button" onClick={() => setQty(line.tierId, line.qty + 1)} className="px-2.5 py-1.5 text-bone-dim transition-colors hover:bg-tangerine hover:text-ink"><Plus className="h-3 w-3" strokeWidth={3} /></button>
                    </div>
                    <p className="font-display text-lg font-extrabold text-amber">{formatMXN(line.lineTotal)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t-2 border-ink-line bg-ink-raise px-6 py-5">
            <dl className="space-y-2 font-mono text-xs uppercase tracking-[0.12em]">
              <div className="flex justify-between text-bone-dim/70"><dt>{t.cart.subtotal}</dt><dd>{formatMXN(subtotal)}</dd></div>
              <div className="flex justify-between text-bone-dim/70"><dt>{t.cart.vat}</dt><dd>{formatMXN(iva)}</dd></div>
              <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-ink-line pt-3"><dt className="text-bone">{t.cart.total}</dt><dd className="font-display text-2xl font-extrabold tracking-tight text-tangerine">{formatMXN(total)}</dd></div>
            </dl>
            <Action href="/checkout" tone="tangerine" className="mt-5 w-full" onClick={close}>{t.cart.btn_checkout}</Action>
            <Link href="/#planes" onClick={close} className="mt-3 block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim/50 underline-offset-4 transition-colors hover:text-tangerine hover:underline">{t.cart.btn_explore}</Link>
          </footer>
        )}
      </aside>
    </>
  );
}