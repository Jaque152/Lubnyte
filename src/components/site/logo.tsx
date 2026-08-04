import { cn } from "@/lib/utils";

export function TowerGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("h-7 w-7", className)}
    >
      <rect x="1" y="1" width="30" height="30" className="fill-tangerine" />
      <rect x="13" y="4" width="6" height="4" className="fill-ink" />
      <rect x="10" y="10" width="12" height="4" className="fill-ink" />
      <rect x="7" y="16" width="18" height="4" className="fill-ink" />
      <rect x="4" y="22" width="24" height="5" className="fill-ink" />
      <rect x="15" y="0" width="2" height="4" className="fill-ink" />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <TowerGlyph className={compact ? "h-6 w-6" : "h-8 w-8"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold uppercase tracking-[-0.03em]",
            compact ? "text-base" : "text-xl",
          )}
        >
          LUN<span className="text-tangerine">BYTE</span>
        </span>
        <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.32em] text-bone-dim/50">
          Game &amp; App Studio
        </span>
      </span>
    </span>
  );
}
