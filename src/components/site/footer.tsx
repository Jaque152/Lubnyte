"use client";

import Link from "next/link";
import { getCatalog } from "@/lib/catalog";
import { Action, Marquee } from "@/components/site/primitives";
import { Logo } from "@/components/site/logo";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t, lang } = useLanguage();
  const { missions, packages } = getCatalog(lang); // Extraemos los datos traducidos
  
  const half = Math.ceil(missions.length / 2);

  const legal = [
    { label: t.footer.legal.privacy, href: "/#contacto" },
    { label: t.footer.legal.terms, href: "/#contacto" },
    { label: t.footer.legal.returns, href: "/#contacto" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink">
      <div className="border-y-2 border-ink-line bg-ink-raise py-10 md:py-14">
        <div className="shell flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-tangerine">
              {t.footer.tag}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.7rem,4vw,3rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-bone">
              {t.footer.title}
            </h2>
          </div>
          <Action href="/#planes" tone="tangerine">
            {t.footer.btn_plans}
          </Action>
        </div>
      </div>

      <div className="shell py-14">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-bone-dim/45">
              {t.footer.desc}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {["Visa", "Mastercard", "AmEx", "SPEI"].map((m) => (
                <span key={m} className="border border-ink-line px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-bone-dim/40">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim/40">
                {t.footer.missions}
              </p>
              <div aria-hidden className="my-4 h-px w-full slash-rule text-bone-dim/20" />
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <ul className="space-y-2">
                  {missions.slice(0, half).map((m) => (
                    <li key={m.n}>
                      <Link href="/#misiones" className="text-[13px] text-bone-dim/55 underline-offset-4 transition-colors hover:text-tangerine hover:underline">{m.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {missions.slice(half).map((m) => (
                    <li key={m.n}>
                      <Link href="/#misiones" className="text-[13px] text-bone-dim/55 underline-offset-4 transition-colors hover:text-tangerine hover:underline">{m.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim/40">
                {t.footer.plans}
              </p>
              <div aria-hidden className="my-4 h-px w-full slash-rule text-bone-dim/20" />
              <ul className="space-y-2">
                {packages.map((p) => (
                  <li key={p.id}>
                    <Link href="/#planes" className="text-[13px] text-bone-dim/55 underline-offset-4 transition-colors hover:text-tangerine hover:underline">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim/35">
            {t.footer.copyright} {new Date().getFullYear()} {t.footer.rights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim/35 underline-offset-4 transition-colors hover:text-tangerine hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}