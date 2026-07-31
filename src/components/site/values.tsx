"use client";

import { getCatalog } from "@/lib/catalog";
import { Kicker, Reveal } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

export function Values() {
  const { t, lang } = useLanguage();
  const { values } = getCatalog(lang); // Extraemos los datos traducidos

  return (
    <section id="estudio" className="relative overflow-hidden bg-bone py-20 text-ink md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 linegrid" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-tangerine/10 blur-[90px]" />

      <div className="shell relative">
        <Reveal>
          <div className="inline-flex items-center border border-ink/20 bg-ink/[0.04] px-3 py-2">
            <Kicker className="text-clay">{t.valuesUI.kicker}</Kicker>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-[clamp(2.1rem,5.4vw,4.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
              {t.valuesUI.title.p1}
              <br />
              {t.valuesUI.title.p2}
              <br />
              <span className="text-tangerine">{t.valuesUI.title.tangerine}</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink/60 lg:pb-3">
              {t.valuesUI.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 90} className="group relative flex min-h-[268px] flex-col justify-between bg-bone p-6 transition-colors duration-300 hover:bg-ink">
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-extrabold leading-none tracking-tighter text-ink/12 transition-colors duration-300 group-hover:text-tangerine">
                  {v.n}
                </span>
                <span className="mt-1 h-2.5 w-2.5 bg-tangerine transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-bone">
                  {v.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-bone/60">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}