// src/app/pago/page.tsx
"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { Kicker, Reveal } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

const fieldBase = "w-full border-2 border-ink-line bg-ink px-4 py-3.5 font-body text-sm text-bone placeholder:text-bone-dim/30 transition-colors focus:border-tangerine focus:outline-none";
const labelBase = "mb-1.5 block font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/45";

export default function PagoPersonalizadoPage() {
  const { t } = useLanguage();
  const { add } = useCart();
  const [form, setForm] = useState({ monto: "", folio: "", nombre: "" });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = parseFloat(form.monto);
    if (isNaN(price) || price <= 0) return;
    
    // Identificador 'custom' avisa al carrito que es un plan dinámico
    add("custom", 1, { price, folio: form.folio, name: form.nombre });
    toast.success(t.customPayment.form.added);
    setForm({ monto: "", folio: "", nombre: "" });
  };

  return (
    <div className="relative min-h-[100dvh] bg-ink pt-[112px] md:pt-[140px] pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-tangerine/8 blur-[130px]" />

      <div className="shell relative mx-auto max-w-2xl">
        <Reveal>
          <div className="inline-flex items-center border border-ink-line bg-ink-raise px-3 py-2">
            <Kicker>{t.customPayment.kicker}</Kicker>
          </div>
        </Reveal>
        
        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-[clamp(2.2rem,6vw,4.4rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-bone">
            {t.customPayment.title.p1} <span className="text-tangerine">{t.customPayment.title.tangerine}</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-bone-dim/55">
            {t.customPayment.desc}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <form onSubmit={submit} className="mt-10 border-2 border-ink-line bg-ink-raise p-6 sm:p-8">
            <div className="grid gap-6">
              <div>
                <label className={labelBase}>{t.customPayment.form.amount}</label>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="1"
                  name="monto"
                  value={form.monto}
                  onChange={set("monto")}
                  placeholder={t.customPayment.form.amount_ph}
                  className={fieldBase}
                />
              </div>

              <div>
                <label className={labelBase}>{t.customPayment.form.folio}</label>
                <input
                  required
                  type="text"
                  name="folio"
                  value={form.folio}
                  onChange={set("folio")}
                  placeholder={t.customPayment.form.folio_ph}
                  className={fieldBase}
                />
              </div>

              <div>
                <label className={labelBase}>{t.customPayment.form.name}</label>
                <input
                  required
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={set("nombre")}
                  placeholder={t.customPayment.form.name_ph}
                  className={fieldBase}
                />
              </div>

              <div className="mt-2 pt-6 border-t-2 border-ink-line">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 border-2 border-tangerine bg-tangerine px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:-translate-y-[1px] hover:bg-amber hover:shadow-[5px_5px_0_0_hsl(var(--bone))] active:translate-y-0 active:shadow-none"
                >
                  <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
                  {t.customPayment.form.btn}
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}