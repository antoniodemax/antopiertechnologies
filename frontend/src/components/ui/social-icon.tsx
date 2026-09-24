import type { SocialLink } from "@/content/types";

export function SocialIcon({
  network,
  className,
}: {
  network: SocialLink["network"];
  className?: string;
}) {
  if (network === "github") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    );
  }
  if (network === "linkedin") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
        <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="none" stroke="currentColor" />
        <circle cx="4.6" cy="4.6" r="1.1" />
        <rect x="3.6" y="6.5" width="2" height="5.8" rx="0.4" />
        <path d="M7.4 6.5h1.9v.9c.4-.6 1.1-1.1 2.1-1.1 1.6 0 2.3 1 2.3 2.7v3.3h-2V9.3c0-.8-.3-1.3-1-1.3s-1.2.5-1.2 1.3v3H7.4z" />
      </svg>
    );
  }
  if (network === "instagram") {
    return (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden
        className={className}
      >
        <rect x="1.5" y="1.5" width="13" height="13" rx="3.6" />
        <circle cx="8" cy="8" r="3" />
        <circle cx="11.9" cy="4.1" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return null;
}
