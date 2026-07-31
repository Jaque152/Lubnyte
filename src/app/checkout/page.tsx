// src/app/checkout/page.tsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { formatMXN, useCart, type Order } from "@/lib/cart";
import { Action, Kicker } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

const fieldBase =
  "w-full border-2 border-ink-line bg-ink px-4 py-3 font-body text-sm text-bone placeholder:text-bone-dim/25 transition-colors focus:border-tangerine focus:outline-none";
const labelBase =
  "mb-1.5 block font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/45";

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, subtotal, iva, total, count, setQty, remove, clear, saveOrder, hydrated } = useCart();
  const { t, lang } = useLanguage();

  const [mounted, setMounted] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [folio, setFolio] = useState("");
  const [form, setForm] = useState({
    nombre: "", email: "", telefono: "", empresa: "", rfc: "",
    calle: "", ciudad: "", cp: "", notas: "", tarjeta: "", exp: "", cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
    setFolio(`LB-${Math.floor(100000 + Math.random() * 899999)}`);
  }, []);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  function validate() {
    const next: Record<string, string> = {};
    if (form.nombre.trim().length < 3) next.nombre = t.checkout.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = t.checkout.errors.email;
    if (form.telefono.replace(/\D/g, "").length < 10) next.telefono = t.checkout.errors.phone;
    if (invoice && form.rfc.trim().length < 12) next.rfc = t.checkout.errors.rfc;
    if (form.tarjeta.replace(/\D/g, "").length < 15) next.tarjeta = t.checkout.errors.card;
    if (!/^\d{2}\/\d{2}$/.test(form.exp)) next.exp = t.checkout.errors.exp;
    if (form.cvv.replace(/\D/g, "").length < 3) next.cvv = t.checkout.errors.cvv;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      document.querySelector("[data-error='true']")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    const order: Order = {
      folio: folio || `LB-${Math.floor(100000 + Math.random() * 899999)}`,
      createdAt: new Date().toISOString(),
      name: form.nombre,
      email: form.email,
      company: form.empresa || undefined,
      method: t.checkout.methods.card.label,
      lines: lines.map((l) => ({ name: l.name, packageTitle: l.packageTitle, qty: l.qty, price: l.price })),
      subtotal,
      iva,
      total,
    };

    try {
      // Llamada al servidor (Etomin + Resend)
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order, form, lang }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Hubo un error al procesar el pago");
      }

      saveOrder(order);
      clear();
      router.push("/checkout/confirmacion");
    } catch (err: unknown) {
      toast.error(lang === "es" ? "Error en el pago" : "Payment Error", { description: (err as Error).message });
      setSubmitting(false);
    }
  }

  if (hydrated && lines.length === 0) {
    return (
      <div className="relative min-h-[100dvh] bg-ink pt-[132px]">
        {/* Renderizado de empty cart... (Omitido para no repetir, usas el mismo del código anterior) */}
      </div>
    );
  }

  return (
    <div className="relative min-h-[100dvh] bg-ink pt-[112px] md:pt-[140px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-tangerine/8 blur-[130px]" />

      <div className="shell relative pb-24">
        <Link
          href="/#planes"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim/45 transition-colors hover:text-tangerine"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
          {t.checkout.header.back}
        </Link>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink-line pb-8">
          <div>
            <Kicker>{t.checkout.header.kicker}</Kicker>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.4rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-bone">
              {t.checkout.header.title.p1} <span className="text-tangerine">{t.checkout.header.title.tangerine}</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim/45">
            <ShieldCheck className="h-4 w-4 text-tangerine" strokeWidth={2} />
            {t.checkout.header.folio} {mounted ? folio : "—"}
          </div>
        </div>

        <form onSubmit={submit} className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            {/* 01 Datos */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-tangerine px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                {t.checkout.sections.s1}
              </legend>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <Field label={t.checkout.fields.name} error={errors.nombre} value={form.nombre} onChange={set("nombre")} placeholder={t.checkout.fields.name_ph} />
                <Field label={t.checkout.fields.email} error={errors.email} value={form.email} onChange={set("email")} type="email" placeholder={t.checkout.fields.email_ph} />
                <Field label={t.checkout.fields.phone} error={errors.telefono} value={form.telefono} onChange={set("telefono")} placeholder={t.checkout.fields.phone_ph} />
                <Field label={t.checkout.fields.company} value={form.empresa} onChange={set("empresa")} placeholder={t.checkout.fields.company_ph} />
              </div>
            </fieldset>

            {/* 02 Facturación */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-bone px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                {t.checkout.sections.s2}
              </legend>
              <div className="p-6">
                <button
                  type="button"
                  onClick={() => setInvoice((v) => !v)}
                  className="flex w-full items-center gap-3 border-2 border-ink-line bg-ink px-4 py-3 text-left transition-colors hover:border-bone-dim/40"
                >
                  <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center border-2 transition-colors", invoice ? "border-tangerine bg-tangerine text-ink" : "border-ink-line")}>
                    {invoice && <span className="text-[11px] font-bold">✓</span>}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim/70">
                    {t.checkout.fields.invoice}
                  </span>
                </button>

                {invoice && (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field label={t.checkout.fields.rfc} error={errors.rfc} value={form.rfc} onChange={set("rfc")} placeholder={t.checkout.fields.rfc_ph} />
                    <Field label={t.checkout.fields.zip} value={form.cp} onChange={set("cp")} placeholder={t.checkout.fields.zip_ph} />
                    <Field label={t.checkout.fields.address} value={form.calle} onChange={set("calle")} placeholder={t.checkout.fields.address_ph} />
                    <Field label={t.checkout.fields.city} value={form.ciudad} onChange={set("ciudad")} placeholder={t.checkout.fields.city_ph} />
                  </div>
                )}
              </div>
            </fieldset>

            {/* 03 Pago (Solo Etomin) */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-amber px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                {t.checkout.sections.s3}
              </legend>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-ink-line">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-tangerine" strokeWidth={2} />
                    <div>
                      <span className="block font-display text-sm font-bold uppercase tracking-tight text-bone">
                        {t.checkout.methods.card.label}
                      </span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-bone-dim/40">
                        {t.checkout.methods.card.note}
                      </span>
                    </div>
                  </div>
                  
                  {/* Etomin Logos */}
                  <div className="flex items-center gap-4 bg-ink px-3 py-2 border border-ink-line">
                    <img src="/etomin_logo.svg" alt="Etomin" className="h-4 w-auto grayscale opacity-60" />
                    <span className="w-px h-4 bg-ink-line" />
                    <img src="/etomin_secbadge.svg" alt="Seguridad" className="h-5 w-auto" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[2fr_1fr_1fr]">
                  <Field
                    label={t.checkout.fields.card} error={errors.tarjeta} value={form.tarjeta}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
                      const spaced = digits.replace(/(.{4})/g, "$1 ").trim();
                      setForm((f) => ({ ...f, tarjeta: spaced }));
                      setErrors((p) => { const n = { ...p }; delete n.tarjeta; return n; });
                    }}
                    placeholder="4242 4242 4242 4242" inputMode="numeric"
                  />
                  <Field
                    label={t.checkout.fields.exp} error={errors.exp} value={form.exp}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, "").slice(0, 4);
                      if (v.length > 2) v = `${v.slice(0, 2)}/${v.slice(2)}`;
                      setForm((f) => ({ ...f, exp: v }));
                      setErrors((p) => { const n = { ...p }; delete n.exp; return n; });
                    }}
                    placeholder="09/28" inputMode="numeric"
                  />
                  <Field
                    label={t.checkout.fields.cvv} error={errors.cvv} value={form.cvv}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) }));
                      setErrors((p) => { const n = { ...p }; delete n.cvv; return n; });
                    }}
                    placeholder="123" inputMode="numeric" type="password"
                  />
                </div>
              </div>
            </fieldset>

            {/* 04 Brief */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-ink-line px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-bone-dim">
                {t.checkout.sections.s4}
              </legend>
              <div className="p-6">
                <label className={labelBase} htmlFor="notas">{t.checkout.fields.notes}</label>
                <textarea
                  id="notas" rows={4} value={form.notas} onChange={set("notas")}
                  placeholder={t.checkout.fields.notes_ph} className={`${fieldBase} resize-none`}
                />
              </div>
            </fieldset>
          </div>

          {/* Aside de Resumen (Se queda igual que en tu código anterior) */}
          <aside className="lg:sticky lg:top-[120px] lg:h-fit">
            {/* Omito el código html del aside para ahorrar espacio, mantienes el mismo que tenías */}
            <div className="border-2 border-tangerine bg-ink-raise">
              {/* ... Items del carrito ... */}
              
              <div className="border-t-2 border-ink-line p-5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 border-2 border-tangerine bg-tangerine px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:-translate-y-[1px] hover:bg-amber hover:shadow-[5px_5px_0_0_hsl(var(--bone))] active:translate-y-0 active:shadow-none disabled:pointer-events-none disabled:opacity-60"
                >
                  {submitting ? (
                    <><span className="h-3 w-3 animate-spin border-2 border-ink border-t-transparent" /> {t.checkout.summary.btn_loading}</>
                  ) : (
                    <><Lock className="h-3.5 w-3.5" strokeWidth={2.5} /> {t.checkout.summary.btn}</>
                  )}
                </button>
                <p className="mt-3 text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-bone-dim/35">
                  {t.checkout.summary.secure}
                </p>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

function Field({ label, error, className, ...props }: { label: string; error?: string; } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div data-error={error ? "true" : "false"} className={className}>
      <label className={labelBase}>{label}</label>
      <input {...props} className={cn(fieldBase, error && "border-destructive")} />
      {error && <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-destructive">{error}</p>}
    </div>
  );
}