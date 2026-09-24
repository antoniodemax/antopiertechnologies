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
          "bg-brand text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(21_57_111/0.3)] hover:bg-brand-deep active:translate-y-px",
        secondary:
          "border border-border bg-surface text-ink shadow-card hover:border-brand/40 hover:text-brand active:translate-y-px",
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
