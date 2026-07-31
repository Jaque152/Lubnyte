"use client";

import { Gamepad2 } from "lucide-react";
import { Kicker, Marquee, Reveal } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

export function Tools() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tangerine to-transparent" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-clay/20 blur-[130px]" />

      <div className="shell relative">
        <Reveal>
          <div className="inline-flex items-center border border-ink-line bg-ink-raise px-3 py-2">
            <Kicker>{t.tools.kicker}</Kicker>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(1.9rem,4.6vw,3.7rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-bone">
                {t.tools.title.p1} <span className="text-tangerine">{t.tools.title.t1}</span> {t.tools.title.p2} <span className="text-amber">{t.tools.title.t2}</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-bone-dim/60">
                {t.tools.desc}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex gap-5 border-l-2 border-tangerine bg-ink-raise p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-tangerine text-ink">
                  <Gamepad2 className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-bone">
                    {t.tools.sub_title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-bone-dim/55">
                    {t.tools.sub_desc}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="border-2 border-ink-line bg-ink-raise">
              <div className="flex items-center justify-between border-b border-ink-line px-5 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim/45">
                  {t.tools.stack_config}
                </p>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 bg-tangerine" />
                  <span className="h-2 w-2 bg-amber" />
                  <span className="h-2 w-2 bg-ink-line" />
                </div>
              </div>
              <ul>
                {t.tools.stack.map((s, i) => (
                  <li key={s.name} className="group border-b border-ink-line px-5 py-4 last:border-0 transition-colors hover:bg-ink">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="font-display text-base font-bold uppercase tracking-tight text-bone">{s.name}</p>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-bone-dim/40">{s.role}</p>
                      </div>
                      <span className="font-mono text-xs tabular-nums text-tangerine">{s.level}%</span>
                    </div>
                    <div className="mt-3 h-[3px] w-full bg-ink">
                      <div
                        className="h-full bg-gradient-to-r from-tangerine to-amber transition-[width] duration-700"
                        style={{ width: `${s.level}%`, transitionDelay: `${i * 80}ms` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 border-y-2 border-ink-line py-4 text-bone-dim/25">
        <Marquee items={t.tools.marquee} separator="/" speed="fast" />
      </div>
    </section>
  );
}