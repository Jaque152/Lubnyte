"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Reveal — scroll-triggered entrance                                 */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", seen && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Kicker — bracketed mono eyebrow                                    */
/* ------------------------------------------------------------------ */

export function Kicker({
  children,
  className,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "kicker inline-flex items-center gap-2 text-tangerine",
        className,
      )}
    >
      {dot && (
        <span className="inline-block h-[6px] w-[6px] animate-blip bg-tangerine" />
      )}
      <span>{children}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                            */
/* ------------------------------------------------------------------ */

export function Marquee({
  items,
  className,
  speed = "normal",
  separator = "✦",
}: {
  items: string[];
  className?: string;
  speed?: "normal" | "fast";
  separator?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max whitespace-nowrap",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee",
        )}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 pr-6 font-display text-[clamp(1.4rem,3.4vw,2.6rem)] font-extrabold uppercase leading-none tracking-tight"
          >
            {item}
            <span className="text-tangerine">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Action — brutalist button / link                                   */
/* ------------------------------------------------------------------ */

type Tone = "tangerine" | "bone" | "ink" | "ghost" | "amber";

const toneMap: Record<Tone, string> = {
  tangerine:
    "bg-tangerine text-ink border-ink hover:bg-amber shadow-[5px_5px_0_0_hsl(var(--ink))]",
  amber:
    "bg-amber text-ink border-ink hover:bg-tangerine shadow-[5px_5px_0_0_hsl(var(--ink))]",
  bone: "bg-bone text-ink border-ink hover:bg-amber shadow-[5px_5px_0_0_hsl(var(--tangerine))]",
  ink: "bg-ink text-bone border-bone hover:bg-ink-raise shadow-[5px_5px_0_0_hsl(var(--tangerine))]",
  ghost:
    "bg-transparent text-current border-current hover:bg-tangerine hover:text-ink hover:border-ink shadow-none",
};

const baseAction =
  "group inline-flex items-center justify-center gap-3 border-2 px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangerine focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function Action({
  children,
  href,
  tone = "tangerine",
  className,
  icon,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  tone?: Tone;
  className?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const content = (
    <>
      <span>{children}</span>
      {icon ?? (
        <span
          aria-hidden
          className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={cn(baseAction, toneMap[tone], "hover:-translate-y-[1px]", className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseAction, toneMap[tone], "hover:-translate-y-[1px]", className)}
      {...props}
    >
      {content}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */

export function SectionRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("hairline h-px w-full text-current opacity-40", className)}
    />
  );
}
