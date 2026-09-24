import type { ReactNode } from "react";
import { showPlaceholders } from "@/lib/env";

/**
 * Renders stand-in content only in development and preview builds, outlined and labelled so it
 * can never be mistaken for real content. Production builds render nothing.
 */
export function Placeholder({ todo, children }: { todo: string; children?: ReactNode }) {
  if (!showPlaceholders) return null;
  return (
    <div className="rounded-card border-2 border-dashed border-[#dc6803] bg-[#fffaf5] p-6">
      <p className="font-mono text-small font-semibold text-[#93370d]">TODO: real content</p>
      <p className="mt-1 text-small text-[#93370d]">{todo}</p>
      <p className="mt-1 text-[0.75rem] text-[#93370d]">Hidden in production builds.</p>
      {children ? <div className="mt-4 opacity-70">{children}</div> : null}
    </div>
  );
}
