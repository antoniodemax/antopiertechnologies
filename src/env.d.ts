/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_ENV?: "development" | "preview" | "production";
  readonly VITE_SITE_URL?: string;
  readonly VITE_BOOKING_CONSULTATION_URL?: string;
  readonly VITE_BOOKING_DISCOVERY_URL?: string;
  readonly VITE_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
