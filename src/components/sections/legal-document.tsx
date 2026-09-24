import type { LegalDocument } from "@/content/types";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function LegalDocumentView({ doc }: { doc: LegalDocument }) {
  return (
    <main id="main" className="pt-header">
      <header className="border-b border-border bg-surface-muted">
        <div className="container-page py-14 sm:py-20">
          <p className="eyebrow text-brand">Legal</p>
          <h1 className="mt-4 text-h1 font-semibold">{doc.title}</h1>
          <p className="mt-4 text-small text-ink-muted">Last updated: {doc.lastUpdated}</p>
        </div>
      </header>
      <div className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-ink-subtle">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-border text-small">
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a
                    href={`#${slug(s.heading)}`}
                    className="-ml-px block border-l border-transparent pl-4 text-ink-muted transition-colors hover:border-brand hover:text-brand"
                  >
                    {s.heading.replace(/^\d+\.\s*/, "")}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <article className="max-w-prose lg:col-span-8 lg:col-start-5">
          {doc.intro?.map((p) => (
            <p key={p} className="mb-5 text-lead text-ink-muted">
              {p}
            </p>
          ))}
          {doc.sections.map((s) => (
            <section
              key={s.heading}
              aria-labelledby={slug(s.heading)}
              className="mt-12 first:mt-10"
            >
              <h2 id={slug(s.heading)} className="text-h3 font-semibold">
                {s.heading}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-ink-muted">
                  {p}
                </p>
              ))}
              {s.list ? (
                <ul className="mt-4 space-y-2 text-ink-muted">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.after?.map((p) => (
                <p key={p} className="mt-4 text-ink-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
