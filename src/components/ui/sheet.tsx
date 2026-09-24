import { Dialog } from "radix-ui";
import { X } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  title,
  description,
  ...props
}: ComponentProps<typeof Dialog.Content> & {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-[2px] data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_250ms_ease-out] motion-reduce:animate-none" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(24rem,100%)] flex-col bg-surface shadow-[0_0_60px_rgb(12_26_43/0.2)] outline-none data-[state=closed]:animate-[sheet-out_220ms_ease-in] data-[state=open]:animate-[sheet-in_320ms_var(--ease-out-soft)] motion-reduce:animate-none",
          className,
        )}
        {...props}
      >
        <Dialog.Title className="sr-only">{title}</Dialog.Title>
        {description ? (
          <Dialog.Description className="sr-only">{description}</Dialog.Description>
        ) : (
          <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
        )}
        {children}
        <Dialog.Close className="absolute top-4 right-4 grid size-11 place-items-center rounded-full text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink">
          <X className="size-5" aria-hidden />
          <span className="sr-only">Close menu</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
