"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { getCatalog, type Package } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { Action, Kicker, Reveal } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

function PackageCard({ pkg, delay }: { pkg: Package; delay: number }) {
  const [activeId, setActiveId] = useState(pkg.tiers[0].id);
  const { add } = useCart();
  const { t } = useLanguage();
  const active = pkg.tiers.find((t) => t.id === activeId) ?? pkg.tiers[0];

  return (
    <Reveal delay={delay} className="group relative flex flex-col border-2 border-ink-line bg-ink-raise transition-colors duration-300 hover:border-tangerine">
      <div className="flex items-start justify-between gap-4 border-b-2 border-ink-line px-6 py-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-tangerine">
            {t.pricing.plan} {pkg.index}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-extrabold uppercase leading-[1.05] tracking-tight text-bone sm:text-2xl">
            {pkg.title}
          </h3>
        </div>
        <span className="mt-1 shrink-0 border border-ink-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-bone-dim/40">
          {pkg.tiers.length} {t.pricing.levels}
        </span>
      </div>

      <p className="border-b border-ink-line px-6 py-4 text-[13px] leading-relaxed text-bone-dim/55">
        {pkg.summary}
      </p>

      <div className="grid flex-1 gap-6 px-6 py-6 sm:grid-cols-[1.05fr_0.95fr]">
        <ul className="space-y-2">
          {pkg.tiers.map((tier) => {
            const isActive = tier.id === activeId;
            return (
              <li key={tier.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(tier.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 border-2 px-3.5 py-2.5 text-left font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-200",
                    isActive ? "border-tangerine bg-tangerine font-bold text-ink" : "border-ink-line bg-ink text-bone-dim/60 hover:border-bone-dim/40 hover:text-bone",
                  )}
                >
                  <span className="leading-tight">{tier.name}</span>
                  {isActive ? (
                    <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
                  ) : (
                    <span className="shrink-0 tabular-nums opacity-45">
                      ${new Intl.NumberFormat("es-MX").format(tier.price)}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col justify-between border-l-0 sm:border-l sm:border-dashed sm:border-ink-line sm:pl-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-dim/40">MXN</p>
            <p className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-extrabold leading-none tracking-tighter text-bone">
                {new Intl.NumberFormat("es-MX").format(active.price)}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-tangerine">+ IVA</span>
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-bone-dim/55">{active.blurb}</p>
          </div>

          <button
            type="button"
            onClick={() => {
              add(active.id);
              toast.success(`${active.name} ${t.pricing.added}`, { description: pkg.title });
            }}
            className="group/btn mt-5 inline-flex items-center justify-between gap-3 border-2 border-bone bg-bone px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:-translate-y-[1px] hover:bg-tangerine hover:shadow-[4px_4px_0_0_hsl(var(--bone))] active:translate-y-0 active:shadow-none"
          >
            {t.pricing.btn_start}
            <ShoppingBag className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:scale-110" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export function Pricing() {
  const { t, lang } = useLanguage();
  const { packages } = getCatalog(lang); // Extraemos los datos traducidos
  
  const planes = packages.filter((p) => p.group === "planes");
  const medida = packages.filter((p) => p.group === "medida");

  return (
    <section id="planes" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-tangerine/8 blur-[130px]" />

      <div className="shell relative">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center border border-ink-line bg-ink-raise px-3 py-2">
              <Kicker>{t.pricing.kicker_plans}</Kicker>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2rem,5.2vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-bone">
              {t.pricing.title_plans.p1} <span className="text-tangerine">{t.pricing.title_plans.tangerine}</span> {t.pricing.title_plans.p2}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-bone-dim/55">
              {t.pricing.desc_plans}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {planes.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 80} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Reveal>
            <div className="inline-flex items-center border border-ink-line bg-ink-raise px-3 py-2">
              <Kicker>{t.pricing.kicker_custom}</Kicker>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-7 font-display text-[clamp(1.8rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-bone">
              {t.pricing.title_custom.p1} <span className="text-amber">{t.pricing.title_custom.amber}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {medida.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomPlan() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-y-2 border-ink bg-amber py-20 text-ink md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12] slash-rule text-ink" />
      <div className="shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/60">
            {t.customPlan.tag}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
            {t.customPlan.title}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70">
            {t.customPlan.desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action href="/pago" tone="ink">{t.customPlan.btn_pay}</Action>
            <Action href="/#contacto" tone="ghost" className="text-ink">{t.customPlan.btn_req}</Action>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-2">
            {t.customPlan.perks.map((perk, i) => (
              <li key={perk} className="flex gap-4 bg-amber p-6 transition-colors duration-300 hover:bg-ink hover:text-amber">
                <span className="font-mono text-xs font-bold tabular-nums opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] font-medium leading-snug">{perk}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}