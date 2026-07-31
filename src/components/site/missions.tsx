"use client";

import { Boxes, Gamepad2, Link2, PenTool, Smartphone, Trophy } from "lucide-react";
import { getCatalog } from "@/lib/catalog";
import { Action, Kicker, Reveal } from "@/components/site/primitives";
import { useLanguage } from "@/lib/language-context";

const icons = [Gamepad2, Trophy, Boxes, PenTool, Smartphone, Link2];

export function Missions() {
  const { t, lang } = useLanguage();
  const { missions } = getCatalog(lang); // Extraemos los datos traducidos

  return (
    <section id="misiones" className="relative bg-bone py-20 text-ink md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 linegrid" />

      <div className="shell relative">
        <Reveal>
          <div className="inline-flex items-center border border-ink/20 bg-ink/[0.04] px-3 py-2">
            <Kicker className="text-clay">{t.missionsUI.kicker}</Kicker>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5.2vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
              {t.missionsUI.title.p1}
              <br />
              {t.missionsUI.title.p2} <span className="text-tangerine">{t.missionsUI.title.tangerine}</span>
              <br />
              {t.missionsUI.title.p3}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-lg text-[15px] leading-relaxed text-ink/60 lg:pb-3">
              {t.missionsUI.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-px border-t-2 border-ink">
          {missions.map((m, i) => {
            const Icon = icons[i % icons.length];
            const flipped = i % 2 === 1;
            return (
              <Reveal key={m.n} className="group border-b-2 border-ink bg-bone transition-colors duration-500 hover:bg-ink/[0.03]">
                <article className="grid gap-8 py-10 lg:grid-cols-12 lg:gap-10">
                  <div className={`lg:col-span-4 ${flipped ? "lg:order-2" : ""}`}>
                    <div className="flex items-start gap-5">
                      <span className="font-display text-[clamp(3.4rem,9vw,6rem)] font-extrabold leading-[0.8] tracking-tighter text-ink/10 transition-colors duration-500 group-hover:text-tangerine">
                        {m.n}
                      </span>
                      <div className="relative mt-2 flex h-24 w-24 shrink-0 items-center justify-center border-2 border-ink bg-ink text-bone transition-all duration-500 group-hover:bg-tangerine group-hover:text-ink sm:h-28 sm:w-28">
                        <span aria-hidden className="absolute inset-0 slash-rule text-bone/10" />
                        <Icon className="relative h-9 w-9" strokeWidth={1.6} />
                      </div>
                    </div>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-clay">
                      {t.missionsUI.mission_prefix} {m.n} — {m.code}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.3rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
                      {m.title}
                    </h3>
                  </div>

                  <div className={`lg:col-span-8 ${flipped ? "lg:order-1" : ""}`}>
                    <p className="max-w-2xl text-[15px] leading-relaxed text-ink/65">{m.lead}</p>
                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      {m.blocks.map((b) => (
                        <div key={b.title} className="border-l-2 border-tangerine pl-4">
                          <h4 className="font-display text-base font-bold uppercase leading-tight tracking-tight">{b.title}</h4>
                          <p className="mt-2 text-[13px] leading-relaxed text-ink/55">{b.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Action href="/#planes" tone="ink">
            {t.missionsUI.btn}
          </Action>
        </div>
      </div>
    </section>
  );
}