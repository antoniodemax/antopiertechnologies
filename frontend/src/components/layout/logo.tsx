import { Link } from "react-router";
import { cn } from "@/lib/cn";

/** The supplied logo lockup, cropped from the official file. Never redrawn. */
export function Logo({
  className,
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  const src = withTagline ? "/brand/antopier-logo" : "/brand/antopier-lockup";
  const [w, h] = withTagline ? [611, 240] : [455, 160];
  return (
    <Link to="/" className={cn("inline-flex shrink-0 items-center rounded-md", className)}>
      <picture className="block h-full">
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.png`}
          width={w}
          height={h}
          alt="Antopier Technologies home"
          className="h-full w-auto"
          decoding="async"
        />
      </picture>
    </Link>
  );
}
