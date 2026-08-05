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
    { label: t.footer.legal.privacy, href: "/privacidad" },
    { label: t.footer.legal.terms, href: "/terminos" },
    { label: t.footer.legal.returns, href: "/reembolsos" },
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
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-white rounded flex items-center justify-center">
                <svg className="h-4" viewBox="0 0 780 500" fill="none"><rect width="780" height="500" rx="40" fill="white"/><path fill="#1434CB" d="M293.2 348.7l33.3-190.4h53.3l-33.3 190.4h-53.3zM500.8 163c-10.5-3.9-27-8.1-47.6-8.1-52.4 0-89.3 26.4-89.6 64.2-.3 28 26.5 43.6 46.7 52.9 20.7 9.5 27.7 15.6 27.6 24.1-.1 13-16.6 19-31.9 19-21.3 0-32.6-3-50.1-10.3l-6.9-3.1-7.5 43.8c12.4 5.4 35.5 10.1 59.4 10.4 55.7 0 91.9-26.1 92.3-66.5.2-22.2-14-39.1-44.6-53-18.6-9-30-15-29.9-24.1 0-8.1 9.6-16.7 30.5-16.7 17.4-.3 30 3.5 39.8 7.5l4.8 2.3 7.2-42.4h.8zM581.8 158.3h-41c-12.7 0-22.2 3.5-27.8 16.2l-78.8 178.2h55.7l11.1-29.1h68.1l6.5 29.1H624l-42.2-194.4zm-65.6 125.2c4.4-11.2 21.3-54.4 21.3-54.4-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.2h-44.4z"/><path fill="#1434CB" d="M239.5 158.3L187.4 289l-5.5-26.8c-9.6-30.7-39.5-64-73-80.6l47.5 166.9h56l83.2-190.2h-56.1z"/><path fill="#F7B600" d="M146.9 158.3H61.3l-.6 3.5c66.4 16 110.3 54.7 128.5 101.2l-18.5-88.8c-3.2-12.1-12.5-15.5-23.8-15.9z"/></svg>
              </div>
              <div className="px-3 py-1.5 bg-white rounded flex items-center justify-center">
                <svg className="h-4" viewBox="0 0 152 100" fill="none"><rect width="152" height="100" rx="8" fill="white"/><circle cx="55" cy="50" r="30" fill="#EB001B"/><circle cx="97" cy="50" r="30" fill="#F79E1B"/><path d="M76 27.5C82.6 32.8 87 40.8 87 50C87 59.2 82.6 67.2 76 72.5C69.4 67.2 65 59.2 65 50C65 40.8 69.4 32.8 76 27.5Z" fill="#FF5F00"/></svg>
              </div>
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