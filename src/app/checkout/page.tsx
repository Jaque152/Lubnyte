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
  const { lines, subtotal, iva, total, count, setQty, remove, clear, saveOrder, hydrated } =
    useCart();
  const { t, lang } = useLanguage();

  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [folio, setFolio] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    rfc: "",
    calle: "",
    ciudad: "",
    cp: "",
    pais: "México", // Añadimos el país por defecto
    notas: "",
    nombreTarjeta: "", // Añadimos el nombre de la tarjeta
    tarjeta: "",
    exp: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
    setFolio(`LB-${Math.floor(100000 + Math.random() * 899999)}`);
  }, []);

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    const reqMsg = lang === "es" ? "Campo requerido" : "Required field";

    if (form.nombre.trim().length < 3) next.nombre = t.checkout.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = t.checkout.errors.email;
    if (form.telefono.replace(/\D/g, "").length < 10) next.telefono = t.checkout.errors.phone;
    
    // RFC opcional, pero si se llena debe tener mínimo 12 caracteres
    if (form.rfc.trim().length > 0 && form.rfc.trim().length < 12) next.rfc = t.checkout.errors.rfc;
    
    // Dirección Obligatoria
    if (form.cp.trim().length < 4) next.cp = reqMsg;
    if (form.calle.trim().length < 5) next.calle = reqMsg;
    if (form.ciudad.trim().length < 3) next.ciudad = reqMsg;
    if (form.pais.trim().length < 2) next.pais = reqMsg;

    // Tarjeta Obligatoria
    if (form.nombreTarjeta.trim().length < 3) next.nombreTarjeta = reqMsg;
    if (form.tarjeta.replace(/\D/g, "").length < 15) next.tarjeta = t.checkout.errors.card;
    if (!/^\d{2}\/\d{2}$/.test(form.exp)) next.exp = t.checkout.errors.exp;
    if (form.cvv.replace(/\D/g, "").length < 3) next.cvv = t.checkout.errors.cvv;
    
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      document
        .querySelector("[data-error='true']")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    const currentFolio = folio || `LB-${Math.floor(100000 + Math.random() * 899999)}`;

    const order: Order = {
      folio: currentFolio,
      createdAt: new Date().toISOString(),
      name: form.nombre,
      email: form.email,
      company: form.empresa || undefined,
      method: t.checkout.methods.card.label,
      lines: lines.map((l) => ({
        name: l.name,
        packageTitle: l.packageTitle,
        qty: l.qty,
        price: l.price,
      })),
      subtotal,
      iva,
      total,
    };

    const expParts = form.exp.split("/");
    const month = expParts[0] ? expParts[0].trim() : "";
    const year = expParts[1] ? expParts[1].trim() : "";

    const nameParts = form.nombre.trim().split(" ");
    const firstName = nameParts[0] || form.nombre;
    const lastName = nameParts.slice(1).join(" ") || "";

    const cardInformation = {
      cardNumber: form.tarjeta.replace(/\s/g, ""),
      cardholderName: form.nombreTarjeta.trim(), // Nombre exacto de la tarjeta
      expirationMonth: month,
      expirationYear: year,
      cvv: form.cvv,
    };

    const customerInformation = {
      firstName,
      lastName,
      email: form.email,
      phone1: form.telefono,
      city: form.ciudad.trim(),
      address1: form.calle.trim(),
      postalCode: form.cp.trim(),
      state: form.ciudad.trim(),
      country: form.pais.trim(), // Enviamos el país
    };

    const itemsPayload = lines.map((l) => ({
      id: l.tierId || l.name,
      title: l.name,
      amount: l.price,
      quantity: l.qty,
    }));

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: order.total,
          subtotal: order.subtotal,
          iva: order.iva,
          reference: order.folio,
          customerInformation,
          cardInformation,
          items: itemsPayload,
          lang,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error ||
            (lang === "es"
              ? "Hubo un error al procesar el pago."
              : "An error occurred while processing the payment.")
        );
      }

      saveOrder(order);
      clear();
      router.push("/checkout/confirmacion");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : lang === "es" ? "Error al procesar el pago" : "Payment error";

      toast.error(lang === "es" ? "Error en el pago" : "Payment Error", {
        description: msg,
      });
      setSubmitting(false);
    }
  }

  if (hydrated && lines.length === 0) {
    return (
      <div className="relative min-h-[100dvh] bg-ink pt-[132px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
        <div className="shell relative flex flex-col items-center justify-center py-28 text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-8 animate-spin-slow border border-dashed border-ink-line" />
            <ShoppingBag className="h-12 w-12 text-ink-line" strokeWidth={1.4} />
          </div>
          <Kicker>{t.checkout.empty.kicker}</Kicker>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-bone">
            {t.checkout.empty.title}
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-bone-dim/55">
            {t.checkout.empty.desc}
          </p>
          <div className="mt-8">
            <Action href="/#planes" tone="tangerine">
              {t.checkout.empty.btn}
            </Action>
          </div>
        </div>
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
              {t.checkout.header.title.p1}{" "}
              <span className="text-tangerine">{t.checkout.header.title.tangerine}</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim/45">
            <ShieldCheck className="h-4 w-4 text-tangerine" strokeWidth={2} />
            {t.checkout.header.folio} {mounted ? folio : "—"}
          </div>
        </div>

        <form onSubmit={submit} className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-6">
            {/* 01 Datos Personales */}
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

            {/* 02 Facturación y Dirección Obligatoria */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-bone px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                {t.checkout.sections.s2}
              </legend>
              <div className="p-6">
                <p className="mb-5 text-sm text-bone-dim/60">
                  {lang === "es" ? "Estos datos son requeridos para procesar el pago seguro de forma exitosa." : "These details are required to successfully process secure payment."}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={`${t.checkout.fields.rfc} (Opcional)`} error={errors.rfc} value={form.rfc} onChange={set("rfc")} placeholder={t.checkout.fields.rfc_ph} className="sm:col-span-2" />
                  <Field label={`${t.checkout.fields.address} *`} error={errors.calle} value={form.calle} onChange={set("calle")} placeholder={t.checkout.fields.address_ph} required className="sm:col-span-2" />
                  <Field label={`${t.checkout.fields.city} *`} error={errors.ciudad} value={form.ciudad} onChange={set("ciudad")} placeholder={t.checkout.fields.city_ph} required />
                  <Field label={`${t.checkout.fields.country} *`} error={errors.pais} value={form.pais} onChange={set("pais")} placeholder={t.checkout.fields.country_ph} required />
                  <Field label={`${t.checkout.fields.zip} *`} error={errors.cp} value={form.cp} onChange={set("cp")} placeholder={t.checkout.fields.zip_ph} required className="sm:col-span-2" />
                </div>
              </div>
            </fieldset>

            {/* 03 Método de Pago (Etomin Tarjeta) */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-amber px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                {t.checkout.sections.s3}
              </legend>
              <div className="p-6">
                <div className="mb-6 flex flex-col justify-between gap-4 border-b border-ink-line pb-6 sm:flex-row sm:items-center">
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

                  {/* Badges de Etomin */}
                  <div className="flex items-center gap-4 border border-ink-line bg-ink px-3 py-2">
                    <img src="/etomin_logo.svg" alt="Etomin" className="h-4 w-auto " />
                    <span className="h-4 w-px bg-ink-line" />
                    <img src="/etomin_secbadge.svg" alt="Etomin Secure" className="h-5 w-auto" />
                  </div>
                </div>

                {/* Nuevo campo de nombre de tarjeta y cuadricula de datos */}
                <div className="grid gap-4 mb-4">
                  <Field
                    label={t.checkout.fields.cardName}
                    error={errors.nombreTarjeta}
                    value={form.nombreTarjeta}
                    onChange={set("nombreTarjeta")}
                    placeholder={t.checkout.fields.cardName_ph}
                    required
                  />
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

            {/* 04 Brief del Proyecto */}
            <fieldset className="border-2 border-ink-line bg-ink-raise">
              <legend className="ml-5 bg-ink-line px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-bone-dim">
                {t.checkout.sections.s4}
              </legend>
              <div className="p-6">
                <label className={labelBase} htmlFor="notas">
                  {t.checkout.fields.notes}
                </label>
                <textarea
                  id="notas"
                  rows={4}
                  value={form.notas}
                  onChange={set("notas")}
                  placeholder={t.checkout.fields.notes_ph}
                  className={`${fieldBase} resize-none`}
                />
              </div>
            </fieldset>
          </div>

          {/* Lateral Derecho: Resumen del Pedido */}
          <aside className="lg:sticky lg:top-[120px] lg:h-fit">
            <div className="border-2 border-tangerine bg-ink-raise">
              <div className="flex items-center justify-between border-b-2 border-ink-line px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone">
                  {t.checkout.summary.title}
                </p>
                <span className="bg-tangerine px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                  {String(count).padStart(2, "0")}
                </span>
              </div>

              <ul className="max-h-[340px] overflow-y-auto">
                {lines.map((line) => (
                  <li key={line.tierId} className="border-b border-ink-line px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-tangerine">
                          {line.packageTitle}
                        </p>
                        <p className="mt-1 font-display text-sm font-bold leading-tight text-bone">
                          {line.name}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(line.tierId)}
                        aria-label={`Quitar ${line.name}`}
                        className="shrink-0 text-bone-dim/30 transition-colors hover:text-tangerine"
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={2} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink-line">
                        <button
                          type="button"
                          onClick={() => setQty(line.tierId, line.qty - 1)}
                          className="px-2 py-1 text-bone-dim transition-colors hover:bg-tangerine hover:text-ink"
                        >
                          <Minus className="h-3 w-3" strokeWidth={3} />
                        </button>
                        <span className="min-w-[2rem] text-center font-mono text-xs font-bold text-bone">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(line.tierId, line.qty + 1)}
                          className="px-2 py-1 text-bone-dim transition-colors hover:bg-tangerine hover:text-ink"
                        >
                          <Plus className="h-3 w-3" strokeWidth={3} />
                        </button>
                      </div>
                      <span className="font-mono text-sm tabular-nums text-bone">
                        {formatMXN(line.lineTotal)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="space-y-2 border-t-2 border-ink-line px-5 py-5 font-mono text-[11px] uppercase tracking-[0.12em]">
                <div className="flex justify-between text-bone-dim/60">
                  <dt>{t.checkout.summary.subtotal}</dt>
                  <dd className="tabular-nums">{formatMXN(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-bone-dim/60">
                  <dt>{t.checkout.summary.vat}</dt>
                  <dd className="tabular-nums">{formatMXN(iva)}</dd>
                </div>
                <div className="flex justify-between text-bone-dim/60">
                  <dt>{t.checkout.summary.mgmt}</dt>
                  <dd className="text-tangerine">{t.checkout.summary.mgmt_val}</dd>
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-ink-line pt-4">
                  <dt className="text-bone">{t.checkout.summary.total}</dt>
                  <dd className="font-display text-2xl font-extrabold tracking-tight text-tangerine">
                    {formatMXN(total)}
                  </dd>
                </div>
              </dl>

              <div className="border-t-2 border-ink-line p-5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-3 border-2 border-tangerine bg-tangerine px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-200 hover:-translate-y-[1px] hover:bg-amber hover:shadow-[5px_5px_0_0_hsl(var(--bone))] active:translate-y-0 active:shadow-none disabled:pointer-events-none disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="h-3 w-3 animate-spin border-2 border-ink border-t-transparent" />
                      {t.checkout.summary.btn_loading}
                    </>
                  ) : (
                    <>
                      <Lock className="h-3.5 w-3.5" strokeWidth={2.5} />
                      {t.checkout.summary.btn}
                    </>
                  )}
                </button>
                <p className="mt-3 text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-bone-dim/35">
                  {t.checkout.summary.secure}
                </p>
              </div>
            </div>

            <div className="mt-4 border-2 border-ink-line bg-ink p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/40">
                {t.checkout.next.title}
              </p>
              <ol className="mt-3 space-y-2.5">
                {t.checkout.next.steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-mono text-[10px] font-bold text-tangerine">
                      0{i + 1}
                    </span>
                    <span className="text-[12px] leading-relaxed text-bone-dim/55">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  className,
  ...props
}: {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div data-error={error ? "true" : "false"} className={className}>
      <label className={labelBase}>{label}</label>
      <input {...props} className={cn(fieldBase, error && "border-destructive")} />
      {error && (
        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}