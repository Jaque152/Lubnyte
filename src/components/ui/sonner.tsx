"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="bottom-right"
      className="toaster group"
      toastOptions={{
        unstyled: false,
        classNames: {
          toast:
            "group toast !rounded-none !border-2 !border-tangerine !bg-ink !text-bone !shadow-[6px_6px_0_0_hsl(var(--ink-line))] !font-mono",
          title:
            "!font-mono !text-[11px] !uppercase !tracking-[0.14em] !font-bold !text-bone",
          description:
            "!font-body !text-[12px] !normal-case !tracking-normal !text-bone-dim/55",
          icon: "!text-tangerine",
          actionButton: "!rounded-none !bg-tangerine !text-ink",
          cancelButton: "!rounded-none !bg-ink-line !text-bone-dim",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
