export type SiteEnv = "development" | "preview" | "production";

function resolveEnv(): SiteEnv {
  if (import.meta.env.DEV) return "development";
  const value = import.meta.env.VITE_SITE_ENV;
  return value === "preview" || value === "development" ? value : "production";
}

export const siteEnv = resolveEnv();

/** Placeholders render only outside production, so stand-in content can never ship. */
export const showPlaceholders = siteEnv !== "production";

/** Absolute origin for canonical and Open Graph URLs. Empty until the domain is set. */
export const siteUrl = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");
