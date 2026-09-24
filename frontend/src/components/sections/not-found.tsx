import { Link } from "react-router";
import { ctas, nav } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";

export function NotFoundContent() {
  return (
    <main id="main" className="relative overflow-hidden pt-header">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent_75%)]"
      />
      <div className="relative container-page py-24 text-center sm:py-32">
        <p className="eyebrow text-brand">Error 404</p>
        <h1 className="mt-4 text-h1 font-semibold">This page could not be found</h1>
        <p className="mx-auto mt-5 max-w-xl text-lead text-ink-muted">
          The link may be out of date, or the page may have moved. These pages are a good place to
          continue.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {nav.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="inline-flex rounded-full border border-border px-4 py-2 text-small font-medium text-ink-muted transition-colors hover:border-brand/40 hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaLink cta={ctas.consultation} size="lg" arrow />
        </div>
      </div>
    </main>
  );
}
