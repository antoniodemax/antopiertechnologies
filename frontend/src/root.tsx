import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { NotFoundContent } from "@/components/sections/not-found";
import { contactDetails, site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import "@/styles/app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
  { rel: "icon", href: "/favicon.png", type: "image/png" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

// Adds the `js` class before first paint so reveal animations never flash content.
// If the app fails to hydrate, the class is removed so content stays visible.
const bootScript = `document.documentElement.classList.add('js');setTimeout(function(){if(!window.__antopierHydrated)document.documentElement.classList.remove('js')},4000);`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  areaServed: "KE",
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  email: contactDetails.find((d) => d.kind === "email")?.value,
  ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/icon-512.png` } : {}),
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    (window as unknown as { __antopierHydrated: boolean }).__antopierHydrated = true;
  }, []);
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundContent />;
  }
  return (
    <main id="main" className="container-page pt-40 pb-24">
      <h1 className="text-h1 font-semibold">Something went wrong</h1>
      <p className="mt-4 text-lead text-ink-muted">
        Please refresh the page. If the problem continues, email us at{" "}
        <a className="text-brand underline" href="mailto:antonypeter.dev@gmail.com">
          antonypeter.dev@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
