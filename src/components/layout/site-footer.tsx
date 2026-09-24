import { Link } from "react-router";
import { contactDetails, legalNav, nav, site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo withTagline className="h-20 sm:h-24" />
          <p className="mt-6 max-w-sm text-small text-ink-muted">{site.description}</p>
        </div>

        <FooterColumn title="Company" className="lg:col-span-2">
          {nav.map((item) => (
            <li key={item.path}>
              <FooterLink to={item.path}>{item.label}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Services" className="lg:col-span-3">
          {services.map((service) => (
            <li key={service.slug}>
              <FooterLink to={`/services#${service.slug}`}>{service.title}</FooterLink>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact" className="lg:col-span-3">
          {contactDetails
            .filter((detail) => detail.status === "final")
            .map((detail) => (
              <li key={detail.kind} className="text-small">
                <span className="block text-ink-subtle">{detail.label}</span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="font-medium break-words text-ink transition-colors hover:text-brand"
                    {...(detail.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{detail.value}</span>
                )}
              </li>
            ))}
        </FooterColumn>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-4 py-6 text-small text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.location}.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="transition-colors hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="mb-5 eyebrow text-ink">{title}</h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-small text-ink-muted transition-colors hover:text-brand">
      {children}
    </Link>
  );
}
