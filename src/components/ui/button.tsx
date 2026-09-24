import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(180deg,#2470b8_0%,#1e62a3_60%,#1a5892_100%)] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_1px_2px_rgb(21_57_111/0.35),0_6px_16px_-8px_rgb(30_98_163/0.6)] hover:bg-[linear-gradient(180deg,#1e62a3_0%,#1a5892_60%,#15396f_100%)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(21_57_111/0.35),0_10px_22px_-8px_rgb(30_98_163/0.55)] active:translate-y-px",
        secondary:
          "border border-border bg-[linear-gradient(180deg,#ffffff,#f7f9fc)] text-ink shadow-[0_1px_2px_rgb(12_26_43/0.05),inset_0_1px_0_#fff] hover:border-brand/40 hover:text-brand hover:shadow-raise active:translate-y-px",
        ghost: "text-ink-muted hover:bg-surface-muted hover:text-ink",
        inverse:
          "bg-white text-brand-deep shadow-[0_1px_2px_rgb(0_0_0/0.2)] hover:bg-brand-subtle active:translate-y-px",
        "outline-inverse":
          "border border-white/25 text-white hover:border-white/60 hover:bg-white/5 active:translate-y-px",
        link: "px-0 text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-small",
        md: "h-11 px-5 text-small",
        lg: "h-12 px-6 text-[0.9375rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
