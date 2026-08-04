"use client";

import { Action, Kicker, Marquee } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink pt-[104px] md:pt-[132px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 dotgrid opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-tangerine/12 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-amber/8 blur-[120px]" />

      <div className="shell relative">
        <div className="grid items-end gap-10 pb-14 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pb-20 lg:pt-16">
          <div>
            <div className="inline-flex items-center border border-ink-line bg-ink-raise px-3 py-2">
              <Kicker>{t.hero.kicker}</Kicker>
            </div>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,7.6vw,6.2rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-bone">
              {t.hero.title.p1}
              <br />
              {t.hero.title.p2} <span className="text-stroke">{t.hero.title.stroke}</span>{" "}
              <span className="text-tangerine">{t.hero.title.tangerine}</span>
              <br />
              {t.hero.title.p3} <span className="text-amber">{t.hero.title.amber}</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-bone-dim/70 sm:text-base">
              {t.hero.desc}
            </p>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {t.hero.pillars.map((p) => (
                <li key={p.label} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center border border-tangerine text-[10px] font-bold text-tangerine">✓</span>
                  <span className="flex flex-col leading-tight">
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-bone">{p.label}</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-bone-dim/40">{p.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:mb-4">
            <div className="absolute inset-[6%] animate-spin-slow rounded-full border border-dashed border-bone/12" />
            <div className="absolute inset-[20%] animate-spin-slow-rev rounded-full border border-bone/10" />
            <div className="absolute inset-[34%] animate-spin-slow rounded-full border border-tangerine/25" />

            {[
              { t: "UNITY", x: "50%", y: "2%" },
              { t: "UNREAL", x: "95%", y: "38%" },
              { t: "SWIFT", x: "78%", y: "88%" },
              { t: "KOTLIN", x: "18%", y: "88%" },
              { t: "REACT N.", x: "3%", y: "38%" },
            ].map((chip, i) => (
              <span
                key={chip.t}
                style={{ left: chip.x, top: chip.y, animationDelay: `${i * 420}ms` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float border border-ink-line bg-ink-raise px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-bone-dim/70"
              >
                {chip.t}
              </span>
            ))}

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[3px]">
              <span className="h-4 w-[2px] bg-tangerine" />
              <span className="h-3 w-3 border-2 border-tangerine bg-amber" />
              <span className="h-5 w-8 bg-tangerine" />
              <span className="h-5 w-14 bg-bone" />
              <span className="h-5 w-20 bg-tangerine" />
              <span className="h-6 w-28 bg-bone" />
              <span className="h-2 w-32 bg-amber" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y-2 border-ink-line bg-ink-raise">
        <div className="shell grid grid-cols-2 divide-x divide-ink-line md:grid-cols-4">
          {t.hero.stats.map((s) => (
            <div key={s.k} className="px-4 py-5 first:pl-0 md:px-6">
              <p className="font-display text-2xl font-extrabold tracking-tight text-tangerine md:text-3xl">{s.k}</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-bone-dim/50 md:text-[10px]">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b-2 border-ink bg-tangerine py-3 text-ink">
        <Marquee items={t.hero.marquee} separator="◆" />
      </div>
    </section>
  );
}