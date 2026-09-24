import { pages } from "@/content/pages";
import { primaryEmail } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.projectTerms);

export default function ProjectTerms() {
  return (
    <main id="main" className="pt-header">
      <header className="border-b border-border bg-surface-muted">
        <div className="container-page py-14 sm:py-20">
          <p className="eyebrow text-brand">Legal</p>
          <h1 className="mt-4 text-h1 font-semibold">Project Terms</h1>
        </div>
      </header>
      <div className="container-page max-w-prose py-14 lg:py-20">
        <p className="text-lead text-ink-muted">
          The terms for each engagement are set out in the project proposal and client agreement,
          which are shared with you and signed before work begins.
        </p>
        <p className="mt-5 text-ink-muted">
          To request a copy of our standard project terms, email{" "}
          <a
            href={primaryEmail.href}
            className="font-medium text-brand underline underline-offset-2"
          >
            {primaryEmail.value}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
