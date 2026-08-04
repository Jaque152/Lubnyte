"use client";

import { CalendarClock, Check, Mail, Rocket } from "lucide-react";
import { formatMXN, useCart } from "@/lib/cart";
import { Action, Kicker, Marquee } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

// Mapeo dinámico de íconos para la confirmación basado en el array traducido
const icons = [Mail, CalendarClock, Rocket];

export default function ConfirmacionPage() {
  const { lastOrder, hydrated } = useCart();
  const { t, lang } = useLanguage();

  if (!hydrated) {
    return (
      <div className="min-h-[70vh] bg-ink pt-[140px]">
        <div className="shell">
          <div className="h-6 w-40 animate-pulse bg-ink-line" />
        </div>
      </div>
    );
  }

  if (!lastOrder) {
    return (
      <div className="relative min-h-[100dvh] bg-ink pt-[140px]">
        <div className="shell flex flex-col items-center py-24 text-center">
          <Kicker>{t.confirmation.empty.kicker}</Kicker>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-bone">
            {t.confirmation.empty.title}
          </h1>
          <p className="mt-4 max-w-md text-[15px] text-bone-dim/55">
            {t.confirmation.empty.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Action href="/#planes" tone="tangerine">
              {t.confirmation.empty.btn_plans}
            </Action>
            <Action href="/#contacto" tone="ghost" className="text-bone">
              {t.confirmation.empty.btn_contact}
            </Action>
          </div>
        </div>
      </div>
    );
  }

  // Localización dinámica de la fecha
  const dateLocale = lang === "es" ? "es-MX" : "en-US";
  const date = new Date(lastOrder.createdAt).toLocaleDateString(dateLocale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-ink pt-[112px] md:pt-[140px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-30" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-10 h-[440px] w-[640px] -translate-x-1/2 rounded-full bg-tangerine/12 blur-[140px]" />

      <div className="shell relative pb-24">
        <div className="flex flex-col items-start gap-6 border-b-2 border-ink-line pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center border-2 border-tangerine bg-tangerine text-ink">
              <Check className="h-7 w-7" strokeWidth={3} />
            </div>
            <div className="mt-6">
              <Kicker>{t.confirmation.success.kicker}</Kicker>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.6rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-bone">
              {t.confirmation.success.title.p1}
              <br />
              <span className="text-tangerine">{t.confirmation.success.title.tangerine}</span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-bone-dim/55">
              {t.confirmation.success.desc.p1} {lastOrder.name.split(" ")[0]}{t.confirmation.success.desc.p2}{" "}
              <span className="text-bone">{lastOrder.email}</span>{t.confirmation.success.desc.p3}
            </p>
          </div>

          <div className="w-full max-w-xs border-2 border-ink-line bg-ink-raise">
            {[
              { k: t.confirmation.details.folio, v: lastOrder.folio },
              { k: t.confirmation.details.date, v: date },
              { k: t.confirmation.details.method, v: lastOrder.method },
            ].map((row) => (
              <div key={row.k} className="flex items-center justify-between border-b border-ink-line px-4 py-3 last:border-0">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/40">{row.k}</span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-bone">{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* items */}
          <div className="border-2 border-ink-line bg-ink-raise">
            <div className="border-b-2 border-ink-line px-6 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim/45">
                {t.confirmation.items.title}
              </p>
            </div>
            <ul>
              {lastOrder.lines.map((line, i) => (
                <li key={`${line.name}-${i}`} className="flex items-start justify-between gap-4 border-b border-ink-line px-6 py-5 last:border-0">
                  <div className="flex gap-4">
                    <span className="font-display text-2xl font-extrabold leading-none tracking-tighter text-ink-line">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-tangerine">{line.packageTitle}</p>
                      <p className="mt-1 font-display text-base font-bold text-bone">{line.name}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-bone-dim/40">{line.qty} × {formatMXN(line.price)}</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm tabular-nums text-bone">
                    {formatMXN(line.price * line.qty)}
                  </span>
                </li>
              ))}
            </ul>
            <dl className="space-y-2 border-t-2 border-ink-line px-6 py-5 font-mono text-[11px] uppercase tracking-[0.12em]">
              <div className="flex justify-between text-bone-dim/60"><dt>{t.confirmation.totals.subtotal}</dt><dd className="tabular-nums">{formatMXN(lastOrder.subtotal)}</dd></div>
              <div className="flex justify-between text-bone-dim/60"><dt>{t.confirmation.totals.vat}</dt><dd className="tabular-nums">{formatMXN(lastOrder.iva)}</dd></div>
              <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-ink-line pt-4">
                <dt className="text-bone">{t.confirmation.totals.total}</dt>
                <dd className="font-display text-2xl font-extrabold tracking-tight text-tangerine">{formatMXN(lastOrder.total)}</dd>
              </div>
            </dl>
          </div>

          {/* next steps */}
          <div className="space-y-4">
            {t.confirmation.steps.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={step.title} className="flex gap-4 border-l-2 border-tangerine bg-ink-raise p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-tangerine text-tangerine">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold uppercase tracking-tight text-bone">{step.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-bone-dim/55">{step.body}</p>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-wrap gap-3 pt-2">
              <Action href="/" tone="tangerine">
                {t.confirmation.actions.home}
              </Action>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-ink-line bg-tangerine py-3 text-ink">
        <Marquee items={t.confirmation.marquee} separator="◆" />
      </div>
    </div>
  );
}