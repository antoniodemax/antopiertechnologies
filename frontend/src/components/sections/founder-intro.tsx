import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { sectionCopy } from "@/content/home";
import { founder } from "@/content/founder";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { SocialIcon } from "@/components/ui/social-icon";

function Portrait() {
  const { photo } = founder;
  return (
    <div className="relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-media shadow-media bg-deep">
      <div aria-hidden className="absolute inset-0 bg-grid-deep" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-3/4 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgb(30_98_163/0.6),transparent_70%)]"
      />
      <picture>
        <source srcSet={photo.webp} type="image/webp" />
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto object-contain object-bottom drop-shadow-[0_20px_30px_rgb(0_0_0/0.35)]"
        />
      </picture>
    </div>
  );
}

export function FounderIntro({ variant = "short" }: { variant?: "short" | "full" }) {
  const full = variant === "full";
  return (
    <Section tone={full ? "muted" : "default"} aria-labelledby="founder-heading">
      <SectionHeader id="founder-heading" {...sectionCopy.founder} />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <Portrait />
          <p className="mt-6 text-h3 font-semibold">{founder.name}</p>
          <p className="mt-1 text-small text-ink-muted">{founder.role.text}</p>
          <ul className="mt-5 flex gap-2">
            {founder.links.map((link) => (
              <li key={link.network}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-control border border-border text-ink-muted transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <SocialIcon network={link.network} className="size-4" />
                  <span className="sr-only">
                    {founder.name} on {link.label} (opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-8">
          <div className="space-y-5 text-lead text-ink-muted">
            {(full ? founder.bio : founder.bio.slice(0, 1)).map((p) => (
              <p key={p.text}>{p.text}</p>
            ))}
          </div>

          <h3 className="mt-10 flex items-center gap-2 eyebrow text-ink-subtle">
            <Award aria-hidden className="size-4 text-brand" />
            Build record
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {founder.buildRecord.map((item) => (
              <li key={item.project} className="surface-card rounded-card p-5">
                <p className="text-small font-semibold text-brand-deep">{item.result}</p>
                <p className="mt-2 font-semibold text-ink">{item.project}</p>
                {full ? <p className="mt-2 text-small text-ink-muted">{item.text}</p> : null}
              </li>
            ))}
          </ul>

          {full ? (
            <>
              <h3 className="mt-10 flex items-center gap-2 eyebrow text-ink-subtle">
                <GraduationCap aria-hidden className="size-4 text-brand" />
                Education and training
              </h3>
              <ul className="surface-card mt-4 divide-y divide-border rounded-card">
                {founder.education.map((e) => (
                  <li
                    key={e.text}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-ink">{e.text}</span>
                    <span className="text-small text-ink-muted">{e.institution}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-1.5 text-small font-medium text-brand"
            >
              More about Antopier and its founder
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
