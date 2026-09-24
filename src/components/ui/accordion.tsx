import { Accordion as A } from "radix-ui";
import { Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export const Accordion = A.Root;

export function AccordionItem({ className, ...props }: ComponentProps<typeof A.Item>) {
  return <A.Item className={cn("border-b border-border", className)} {...props} />;
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof A.Trigger>) {
  return (
    <A.Header asChild>
      <h3>
        <A.Trigger
          className={cn(
            "group flex w-full items-start justify-between gap-6 py-6 text-left text-[1.0625rem] font-medium text-ink transition-colors hover:text-brand focus-visible:outline-offset-4",
            className,
          )}
          {...props}
        >
          {children}
          <span
            aria-hidden
            className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-border text-ink-muted transition-[transform,background-color,color,border-color] duration-300 group-hover:border-brand/40 group-hover:text-brand group-data-[state=open]:rotate-45 group-data-[state=open]:border-brand group-data-[state=open]:bg-brand group-data-[state=open]:text-white"
          >
            <Plus className="size-4" />
          </span>
        </A.Trigger>
      </h3>
    </A.Header>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof A.Content>) {
  return (
    <A.Content forceMount className="overflow-hidden data-[state=closed]:hidden" {...props}>
      <div className={cn("max-w-prose pr-12 pb-6 text-ink-muted", className)}>{children}</div>
    </A.Content>
  );
}
