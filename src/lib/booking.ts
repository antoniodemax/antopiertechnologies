import type { Cta } from "@/content/types";

const discoveryUrl = import.meta.env.VITE_BOOKING_DISCOVERY_URL as string | undefined;
const consultationUrl = import.meta.env.VITE_BOOKING_CONSULTATION_URL as string | undefined;

/** The scheduler link offered after a consultation request, when one is configured. */
export const schedulerUrl = consultationUrl || discoveryUrl || null;

export function resolveCta(cta: Cta): { href: string; external: boolean } {
  if (cta.target.kind === "route") return { href: cta.target.path, external: false };
  if (cta.target.flow === "discovery" && discoveryUrl)
    return { href: discoveryUrl, external: true };
  return { href: "/contact#consultation", external: false };
}
