# Antopier Technologies Website: Architecture

Status: **Draft for approval** (2026-09-24)
Companion documents: [`PRD.md`](./PRD.md), [`design-brief.md`](./design-brief.md)

This document describes how the site will be built. It contains no code that exists in `src/` yet. TypeScript and CSS snippets show intended shapes, and the build session will write the real files.

Decisions marked **DECISION NEEDED** are yours to make. They are collected at the end of the PRD under Open Questions.

---

## 0. Where the repository stands today

Checked on 2026-09-24 by reading the files in the repo:

| Item | Current state | Consequence |
|---|---|---|
| Vite | 8.3.x, `@vitejs/plugin-react` 6.1 | Current. Keep. |
| React | 19.2.x (19.3.0 is latest) | Current. Minor bump in Phase 0. |
| TypeScript | pinned `~6.0.2` | Keep on 6.0. See §1 for why not 7. |
| `strict` in `tsconfig.app.json` | **not set** | Phase 0 sets `"strict": true` explicitly. |
| Tailwind CSS | **not installed** | The earlier task description said Tailwind v4 was set up. It is not in `package.json`, `vite.config.ts` or the CSS. Phase 0 installs it. |
| Router | none | Depends on the SEO decision in §7. |
| Prettier, tests | none | Phase 0. |
| `src/` | Vite starter: `main.tsx`, `App.tsx`, `App.css`, `index.css`, `assets/hero.png`, `assets/react.svg`, `assets/vite.svg` | Deleted in Phase 0. None of it is reused. |
| `index.html` | Starter HTML shell, title `antopiertechnologies` | Deleted under option B (§7): `src/root.tsx` renders the HTML shell. Kept and edited under option A. |
| `public/` | `favicon.svg` (Vite logo), `icons.svg` | Deleted in Phase 0. The favicon is rebuilt from the Antopier logo in Phase 4. |
| Git | one commit, all project files untracked | Phase 0's first commit adds the scaffold as it is, so later diffs are readable. |

---

## 1. Tech stack

Versions were read from the npm registry on 2026-09-24. Setup methods were checked against each project's official docs on the same day. Anything I could not confirm is marked **unverified**, with the check the build session must do.

| Layer | Choice | Version (latest) | Why |
|---|---|---|---|
| Language | TypeScript, `strict: true` | 6.0.x (keep existing pin) | Types on the content model catch missing or misspelled content fields at build time. |
| UI library | React | 19.3.0 | Already in place. React 19 renders `<title>` and `<meta>` from any component, which removes the need for a head-management library. |
| Build tool | Vite | 8.3.1 | Already in place. Fast dev server, and every option in §7 builds on it. |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` | 4.3.3 | Tokens are defined once in CSS with `@theme`, and there is no JS config file to keep in sync. |
| Accessible primitives | shadcn/ui (CLI `shadcn`) | 4.21.0 | Copies Radix-based accordion, dialog and navigation components into the repo, so we own the code and can restyle it to the brand. |
| Icons | lucide-react | 1.48.0 | One consistent stroke-icon set, tree-shaken per icon. shadcn/ui uses it by default. |
| Routing | React Router, framework mode (if §7 option B is approved) | 8.4.0 | The only React Router mode that prerenders static HTML per route and handles meta tags. |
| Forms | react-hook-form + zod + `@hookform/resolvers` | 7.88.0 / 4.6.5 / 5.9.1 | One zod schema validates the form in the browser and again in the server function. |
| Motion | CSS transitions first; `motion` (formerly Framer Motion) only if a specific interaction needs it | 13.4.3 | See the note below the table. |
| Email delivery | Resend (if booking option C or D is chosen) | n/a | Free tier: 3,000 emails/month, 100/day (Resend pricing page, read 2026-09-24). Far above what a consultation form should need. Alternatives in §8. |
| Spam protection | Cloudflare Turnstile | n/a | Cloudflare's docs say it works without routing the site through Cloudflare. It avoids image puzzles, which are an accessibility barrier. Alternatives in §8. |
| Hosting | Vercel | n/a | Deploys React Router's static output with no extra configuration, and creates a preview URL for every branch. |
| Lint | ESLint 10 + typescript-eslint 8 + react-hooks + `eslint-plugin-jsx-a11y` | 10.10 / 8.69 | Already partly configured. The jsx-a11y plugin catches missing labels and alt text before they reach review. |
| Format | Prettier + `prettier-plugin-tailwindcss` | 3.9.9 / 0.8.1 | Consistent formatting and a fixed class order make diffs readable. |
| Unit tests | Vitest | 5.0.1 | Same config as Vite. Covers content-honesty checks and the form schema. |
| End-to-end and accessibility tests | Playwright + `@axe-core/playwright` | 1.63.0 / 4.13.0 | Runs against the built site in real browsers. axe finds contrast and ARIA errors on every page. |
| Performance checks | Lighthouse CI (`@lhci/cli`) | 0.15.1 | Fails CI when a page breaks the performance budget in the PRD. |

**Why TypeScript stays on 6.0.** TypeScript 7.0 (the Go rewrite, released July 2026) is the latest version. typescript-eslint currently supports `>=4.8.4 <6.1.0`, so moving to 7 would break type-aware linting. Upgrade when typescript-eslint adds support.

**Why Motion is optional.** The brief asks for a nav state change, subtle section reveals and hover states. CSS transitions plus an `IntersectionObserver` hook cover all three and add no JavaScript. `motion` is worth its weight only for layout animations or coordinated sequences, and the brief does not ask for either. The recommendation is to start without it and add it when a specific interaction needs it, noting in the commit why CSS was not enough. If added: Motion's docs describe `<MotionConfig reducedMotion="user">`, which disables transform and layout animations for users who request reduced motion. **Unverified:** the docs page I read still imports from `framer-motion`. Both packages publish 13.4.3. Confirm the `motion/react` import path at install.

**Unverified setup details the build session must check:**
- TypeScript 6 may deprecate `baseUrl`. shadcn/ui's Vite guide still adds it. Use `paths` without `baseUrl` (supported since TS 4.1), and add `baseUrl` only if the shadcn CLI refuses to run without it.
- shadcn/ui's docs list install guides for Vite, Next.js and Laravel. I found no React Router framework-mode guide. The CLI needs a `components.json`, a CSS entry and a path alias, and all three exist in a React Router project. A 30-minute spike in Phase 0 confirms it.
- Vitest 5 compatibility with Vite 8: confirm at install.

---

## 2. Folder structure

Shown for the recommended setup (§7, option B). React Router's framework mode expects route files in an `app/` folder by default. Its `appDirectory` setting points it at `src/` instead, which keeps the conventional layout. **Unverified:** confirm `appDirectory` still exists in v8 during Phase 0.

```
.
├── api/
│   └── consultation.ts        # Vercel Function: validates and emails form submissions. The only server code.
├── docs/                      # PRD, architecture, design brief, content-editing guide.
├── public/
│   ├── brand/                 # Logo files as supplied (SVG first). Never redrawn.
│   ├── og/                    # Open Graph images, one per page, 1200×630.
│   ├── robots.txt
│   └── favicon.svg            # Made from the logo once it arrives.
├── scripts/
│   └── generate-sitemap.ts    # Builds sitemap.xml from the route list at build time.
├── src/
│   ├── root.tsx               # HTML shell, <head>, global layout, error boundary.
│   ├── routes.ts              # The route table. One line per page.
│   ├── routes/                # One file per page (the brief's "pages"). Each composes sections and sets its meta.
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitives and our own base parts (Button, Card, Badge, Input). No business copy.
│   │   ├── layout/            # SiteHeader, MobileNav, SiteFooter, Container, Section.
│   │   ├── sections/          # Page sections (Hero, ServicesGrid, ProcessTimeline, FinalCta). Each takes content as props.
│   │   └── mockups/           # Hero and solution-card interface mockups, built in HTML/SVG.
│   ├── content/               # All copy and repeatable content as typed data. See §4.
│   ├── lib/                   # cn(), seo helpers, the placeholder guard, analytics wrapper, form schema.
│   ├── hooks/                 # useScrolled, useInView, useReducedMotion.
│   └── styles/
│       └── app.css            # Tailwind import, @theme tokens, base layer.
├── tests/
│   ├── unit/                  # Vitest: content honesty, schema, helpers.
│   └── e2e/                   # Playwright: navigation, form, accordion, axe on every route.
├── components.json            # shadcn/ui config.
├── react-router.config.ts     # ssr: false, prerender list, appDirectory: "src".
└── vercel.json                # Security headers and redirects.
```

Rules:
- A file in `components/` never contains copy a non-developer would want to edit. Copy lives in `content/`.
- A section component takes its content through props. It does not import from `content/` directly. The route file does the wiring, which keeps sections reusable between Home and inner pages.
- `components/ui/` files generated by shadcn/ui are edited freely, because we own them after generation.

---

## 3. Routing and page structure

| Path | Route file | Purpose |
|---|---|---|
| `/` | `routes/home.tsx` | Full visitor journey, summarised. |
| `/services` | `routes/services.tsx` | The six services in detail. |
| `/solutions` | `routes/solutions.tsx` | Solutions by industry, problem first. |
| `/about` | `routes/about.tsx` | Company first, founder second. |
| `/contact` | `routes/contact.tsx` | Consultation form and contact details. |
| `/privacy` | `routes/legal.privacy.tsx` | Privacy Policy. |
| `/terms` | `routes/legal.terms.tsx` | Terms of Use. |
| `/project-terms` | `routes/legal.project-terms.tsx` | Project Terms. |
| `/styleguide` | `routes/styleguide.tsx` | Component review page. Development and preview builds only, and `noindex`. |
| `*` | `routes/not-found.tsx` | 404 with links back to the main pages. |

Notes:
- Service and solution detail pages (`/services/ai-integration`) are **not** in scope for launch. The content model gives every item a `slug`, so adding them later means adding one dynamic route and listing its paths in the prerender config.
- `/solutions#education` style anchors let the Home page link to an industry. Two CSS rules keep content clear of the sticky header. `scroll-margin-top` on anchored sections keeps the heading visible after an anchor jump. `scroll-padding-top` on `html`, set to the header height, keeps keyboard-focused elements from scrolling underneath it, which WCAG 2.2 SC 2.4.11 (Focus Not Obscured) requires. The Phase 3 test in the PRD checks the second rule.
- Every route file sets `<title>`, description, canonical URL and Open Graph tags through one helper (`lib/seo.ts`), so no page can ship without them.
- `/styleguide` is excluded from the prerender list and sitemap in production.

---

## 4. Content model

All content lives in `src/content/` as typed TypeScript objects. TypeScript rather than JSON or Markdown because the types check every field at build time and the files need no parser.

### 4.1 The honesty flag

Every content item that could be mistaken for a claim carries a `status`. This is the mechanism behind the brief's rule that placeholder content "must not accidentally appear as real production content".

```ts
// src/content/types.ts (intended shape)

/** final: approved for production. draft: real but unapproved copy. placeholder: stand-in, never shipped. */
export type ContentStatus = 'final' | 'draft' | 'placeholder';

export interface Tracked {
  status: ContentStatus;
  /** Required when status is 'placeholder'. States what real content is needed. Rendered in dev/preview only. */
  todo?: string;
}
```

Three enforcement points:
1. **Render guard.** A `<Placeholder>` wrapper renders placeholder items with a visible dashed outline and a `TODO: real content` label in development and preview builds. In production builds the item is not rendered at all.
2. **Section guard.** A section whose items are all placeholders (Testimonials today, Featured Solutions today) is not rendered in production. The page layout is written to work with or without it.
3. **Build check.** A Vitest suite (`tests/unit/content-honesty.test.ts`) fails if any item that would render in production has `status: 'placeholder'`, or if any string in production content contains `TODO`, `lorem`, `[`, or an `example.com` address. The `build` script runs this suite before the site build (`vitest run tests/unit/content-honesty.test.ts && react-router build`), so a failure stops Vercel deployments as well as CI.

### 4.2 Types

```ts
// src/content/types.ts (continued)
import type { LucideIcon } from 'lucide-react';

/** The brief's 13 "Industries we serve" entries (§15), each listed once. */
export type IndustrySlug =
  | 'education' | 'healthcare' | 'finance' | 'retail' | 'hospitality'
  | 'real-estate' | 'logistics' | 'professional-services'
  | 'government' | 'ngos' | 'startups' | 'smes' | 'corporations';

/** Organisation type asked on the consultation form. Separate from the grid. */
export type OrganisationType = 'startup' | 'sme' | 'corporation' | 'ngo' | 'government' | 'other';

export interface Cta {
  label: string;
  /** Internal path, or a key resolved to the booking URL at runtime. */
  target: { kind: 'route'; path: string } | { kind: 'booking'; flow: 'consultation' | 'discovery' };
}

export interface Service extends Tracked {
  slug: string;
  title: string;
  /** One sentence, shown on cards. States the business outcome, not the technology. */
  summary: string;
  /** Two to three sentences for the Services page. */
  description: string;
  /** What the client gets. Short phrases. */
  deliverables: string[];
  icon: LucideIcon;
  /** Related solution areas, for cross-links. */
  relatedSolutionAreas?: SolutionAreaSlug[];
}

export interface Industry extends Tracked {
  slug: IndustrySlug;
  name: string;
  icon: LucideIcon;
  /** Only used if you approve splitting the grid into two groups (PRD F3 / Q13). Otherwise one flat grid. */
  group?: 'sector' | 'organisation';
}

/** The brief's six solution areas. Not the same list as industries: two areas span several. */
export type SolutionAreaSlug =
  | 'education' | 'healthcare' | 'retail' | 'hospitality'
  | 'business-operations' | 'government-ngos';

export interface SolutionArea extends Tracked {
  slug: SolutionAreaSlug;
  /** Industries this area links to in the Industries grid. */
  industries: IndustrySlug[];
  /** Heading on the Solutions page, e.g. "Education". */
  title: string;
  /** Problem → Solution → Value, as the brief requires. */
  problems: string[];
  solutions: { name: string; summary: string }[];
  value: string;
  mockup?: MockupRef;
}

export interface FeaturedSolution extends Tracked {
  industry: IndustrySlug;
  /** Client name only with written permission. Otherwise a neutral description ("A private school in Nairobi"). */
  clientLabel: string;
  clientNamePermission: boolean;
  challenge: string;
  solutionDelivered: string;
  technologies: string[];
  /** null until a verified figure or statement exists. Never estimated. */
  impact: { statement: string; source: string } | null;
  mockup: MockupRef;
}

export interface Testimonial extends Tracked {
  quote: string;
  personName: string;
  role: string;
  organisation: string;
  /** Written permission to publish name, role and organisation. The build check requires true for 'final'. */
  permissionConfirmed: boolean;
  photo?: ImageRef;
}

export interface ProcessStep {
  order: number;
  title: string;
  description: string;
}

export interface Faq extends Tracked {
  id: string;
  question: string;
  answer: string;
  /** Which pages show this question. */
  showOn: ('home' | 'services' | 'contact')[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** A checkable statement and where it came from ("design brief §16", "Antony, message of 2026-10-02"). */
export interface SourcedText {
  text: string;
  source: string;
}

export interface Founder extends Tracked {
  name: string;
  title: SourcedText;
  /** Every sentence must be factual and checkable. A unit test fails on an empty source. */
  bio: SourcedText[];
  photo?: ImageRef;
  links: SocialLink[];
}

export interface SocialLink extends Tracked {
  network: 'linkedin' | 'github' | 'x';
  url: string;
}

export interface SiteConfig {
  name: 'Antopier Technologies';
  tagline: string;
  siteUrl: string;
  location: 'Nairobi, Kenya';
  contact: {
    email: (Tracked & { value: string }) | null;
    phone: (Tracked & { value: string }) | null;
  };
  social: SocialLink[];
}

export interface PageMeta {
  path: string;
  title: string;          // ≤ 60 characters
  description: string;    // 120–160 characters
  ogImage: string;
  noindex?: boolean;
  /** Visible page hero for inner pages. Home's hero lives in home.ts. */
  hero?: { eyebrow?: string; heading: string; intro: string };
}

export interface ImageRef { src: string; alt: string; width: number; height: number }
export type MockupRef = { component: 'school-admin' | 'clinic-schedule' | 'retail-stock' | 'hotel-bookings' | 'ops-dashboard' | 'service-portal' };
```

### 4.3 Files

```
src/content/
├── types.ts
├── site.ts          # SiteConfig, nav items, footer groups, CTAs
├── pages.ts         # PageMeta for every route
├── home.ts          # Hero, company intro and final CTA copy
├── services.ts      # Service[]
├── solutions.ts     # SolutionArea[]
├── industries.ts    # Industry[] for the grid, and form labels for OrganisationType
├── pillars.ts       # "Why Antopier" Pillar[]
├── process.ts       # ProcessStep[]
├── featured.ts      # FeaturedSolution[] (placeholders today)
├── testimonials.ts  # Testimonial[] (empty today)
├── faqs.ts          # Faq[]
├── founder.ts       # Founder
└── legal/           # Privacy, Terms and Project Terms as structured sections
```

Each file exports a typed constant, e.g. `export const services = [...] as const satisfies readonly Service[]`. `satisfies` keeps literal types for slugs while still checking every field.

---

## 5. Design token plan

Tokens are defined once in `src/styles/app.css` with Tailwind v4's `@theme`. Components use token-backed utilities (`bg-brand`, `text-ink-muted`, `rounded-card`), never raw hex values or arbitrary values like `p-[13px]`.

**Colour values are not set in this document.** Every brand colour is `TBD — from logo`. The brief ties the blue and the white to the logo (§4). It does not tie the light neutral to the logo. That is a design choice, made in Phase 2 once the blue is known, so the grey can be tuned slightly towards the blue's hue or kept pure. It is left open here for that reason.

### 5.1 Colour

Semantic names, so a component says what the colour is for and the value can change in one place.

```css
@theme {
  /* Brand: from the official logo only */
  --color-brand:            TBD — from logo;   /* the logo blue, exactly */
  --color-brand-hover:      TBD — derived after contrast testing;
  --color-brand-subtle:     TBD — a tint for selected states and icon backgrounds;
  --color-brand-foreground: TBD — white from logo; text on brand fills;

  /* Surfaces */
  --color-surface:          TBD — white from logo; /* 85% of the page */
  --color-surface-muted:    TBD — near-white for alternating sections;
  --color-border:           TBD — light neutral;
  --color-border-strong:    TBD — for form controls (must reach 3:1, WCAG 1.4.11);

  /* Text */
  --color-ink:              TBD — primary text;
  --color-ink-muted:        TBD — secondary text (must reach 4.5:1 on surface and surface-muted);

  /* States */
  --color-focus:            TBD — focus ring (must reach 3:1 against adjacent colours);
  --color-danger:           TBD — form errors only;
  --color-success:          TBD — form success only;
}
```

shadcn/ui components read their own variables (`--background`, `--foreground`, `--primary`, `--border`, `--ring`, and others). These will be mapped to the tokens above in the same file, so shadcn components follow the brand without per-component overrides.

**The contrast procedure once the blue arrives** (the brief says adjust usage, not the colour):

| Use of the blue | Required ratio | If the logo blue fails |
|---|---|---|
| Body-size text or links on white | 4.5:1 | Use `--color-ink` for text and the blue for underlines, icons and fills only. |
| Large text (≥24px, or ≥18.66px bold) | 3:1 | As above if it fails. |
| White text on a blue button | 4.5:1 | Use a darker `--color-brand-hover` shade as the button fill. **This adds a colour beside the logo blue.** It needs your sign-off, because the brief forbids new colours without a design reason. |
| Icons, borders, focus rings | 3:1 | Thicken the element or pair it with a neutral outline. |

Results are recorded in `docs/contrast.md` during the design-system phase.

### 5.2 Spacing (8-point system)

Tailwind v4 generates spacing from one variable, `--spacing`, which defaults to `0.25rem` (4px). Setting it to 8px would double the padding and gaps in every shadcn/ui component, because their classes assume the 4px step. The plan keeps 4px and uses a convention instead:

- Layout spacing (padding, gaps, margins between blocks) uses even steps only: `2, 4, 6, 8, 10, 12, 16, 20, 24, 32` (8px to 128px).
- Odd steps (`1`, `3`) are allowed only inside a component for optical alignment, such as an icon beside text.
- Section rhythm gets named tokens so every page uses the same vertical spacing:

```css
@theme {
  --spacing-section-sm: TBD;   /* e.g. 64px mobile */
  --spacing-section:    TBD;   /* e.g. 96px */
  --spacing-section-lg: TBD;   /* e.g. 128px desktop hero and final CTA */
  --container-content:  TBD;   /* main content max width, e.g. 72rem */
  --container-prose:    65ch;  /* reading width for body copy */
}
```

The `e.g.` values are starting points for the design phase. They are not final.

### 5.3 Radius, shadow, border

```css
@theme {
  --radius-control: TBD;  /* buttons, inputs */
  --radius-card:    TBD;  /* cards, panels */
  --radius-media:   TBD;  /* mockup frames */

  --shadow-card:  TBD;  /* the brief: "extremely subtle" */
  --shadow-raise: TBD;  /* card hover */
  --shadow-nav:   TBD;  /* scrolled header */
}
```

Radius and shadow depend on the logo's shape language (sharp or rounded letterforms), so they are also set in the design-system phase.

### 5.4 Type scale

```css
@theme {
  --font-sans: TBD — one of the brief's four options (PRD Q8), system-ui fallback;
  --font-mono: TBD — only if code snippets appear;

  --text-display: TBD;  --text-display--line-height: TBD;  /* hero headline, fluid via clamp() */
  --text-h1:      TBD;  --text-h1--line-height:      TBD;
  --text-h2:      TBD;  --text-h2--line-height:      TBD;
  --text-h3:      TBD;  --text-h3--line-height:      TBD;
  --text-lead:    TBD;  --text-lead--line-height:    TBD;  /* intro paragraphs */
  --text-body:    TBD;  --text-body--line-height:    TBD;  /* minimum 16px */
  --text-small:   TBD;  --text-small--line-height:   TBD;
  --text-eyebrow: TBD;  /* section labels, uppercase, tracked */
}
```

Rules: a fixed set of sizes, no one-off sizes. Items of equal importance get equal sizes. Body text is at least 16px, with line length capped at `--container-prose`.

**Font loading:** self-host a variable woff2 file (`@fontsource-variable` packages exist for Inter and Geist; IBM Plex Sans is also open-licensed), limited to the Latin subset. SF Pro Display is, to my understanding, licensed for Apple-platform use and not for embedding on a website. Check Apple's licence before choosing it. Preload the one file used above the fold and set `font-display: swap`. Use a metric-matched fallback to limit layout shift when the font swaps in. No Google Fonts request, which saves a DNS lookup and a third-party connection.

---

## 6. Component inventory

### 6.1 UI primitives (`components/ui/`)

| Component | Source | Notes |
|---|---|---|
| Button | shadcn/ui | Variants: `primary` (brand fill), `secondary` (outline), `ghost` (nav), `link`. Sizes set so touch targets are at least 44×44px. |
| Accordion | shadcn/ui (Radix) | FAQ. Keyboard support and ARIA come from Radix. |
| Sheet (dialog) | shadcn/ui (Radix) | Mobile navigation. Focus trap, Esc to close, returns focus to the trigger. |
| Navigation Menu | shadcn/ui (Radix) | Desktop nav. Only needed if Services or Solutions get dropdowns. Plain links are enough for five items, so it is **optional**. |
| Input, Textarea, Label, Select, Checkbox | shadcn/ui | Form controls. |
| Form | shadcn/ui wrapper over react-hook-form | Links labels, descriptions and errors with ARIA attributes. |
| Badge | shadcn/ui | Industry and technology tags. |
| Card | shadcn/ui, restyled | Base for service, solution and industry cards. |
| Separator | shadcn/ui | Used only where spacing alone leaves the grouping unclear. |
| Container, Section, SectionHeader | ours | Enforce container width, section spacing and heading levels. |
| Icon | ours, wraps lucide | Fixed sizes and stroke width. Decorative by default (`aria-hidden`). |
| Placeholder | ours | The honesty guard from §4.1. |
| VisuallyHidden, SkipLink | ours | Skip-to-content link as the first focusable element. |

### 6.2 Layout (`components/layout/`)

`SiteHeader` (sticky, transparent at the top and solid after scrolling), `MobileNav`, `SiteFooter`, `PageShell`.

### 6.3 Sections (`components/sections/`)

| Section | Used on | Content source |
|---|---|---|
| Hero | Home | `home.ts` |
| PageHero (smaller) | Services, Solutions, About, Contact | `pages.ts` |
| CompanyIntro | Home, About | `home.ts` |
| ServicesGrid / ServiceDetailList | Home / Services | `services.ts` |
| SolutionsByIndustry | Home (summary), Solutions (full) | `solutions.ts` |
| WhyAntopier | Home, About | `pillars.ts` |
| ProcessTimeline | Home, Services, About | `process.ts` |
| FeaturedSolutions | Home, Solutions (hidden until real) | `featured.ts` |
| IndustriesGrid | Home, Solutions | `industries.ts` |
| FounderIntro | Home (short), About (full) | `founder.ts` |
| Testimonials | Home (hidden until real) | `testimonials.ts` |
| FaqAccordion | Home, Services, Contact | `faqs.ts` |
| FinalCta | Every page except Contact and legal | `home.ts` |
| ConsultationForm | Contact | `lib/consultation-schema.ts` |
| ContactDetails | Contact | `site.ts` |
| LegalDocument | Legal pages | `content/legal/` |

### 6.4 Mockups (`components/mockups/`)

Interface mockups are built as HTML and SVG components rather than raster images:
- They stay sharp at every size and weigh a few kilobytes.
- They pick up the brand tokens automatically when the blue is set.
- Their layout can change per breakpoint, where a screenshot would only scale down.

Each mockup is `aria-hidden="true"` with a one-sentence text alternative next to it for screen readers. The visual direction is in PRD §9.

---

## 7. SEO strategy

### The problem

A plain Vite SPA serves the same empty `<div id="root">` for every URL. Google renders JavaScript, usually with a delay. Link-preview crawlers (LinkedIn, WhatsApp, X, Slack) generally do not run JavaScript, so every shared page would show the same title and image. That matters whenever someone forwards a page, for example a founder sending the Solutions page to a colleague on WhatsApp. Visitors on slow connections or data-saver browsers also see a blank page until the JavaScript loads.

### Options compared

| | A. Vite SPA + client meta | **B. React Router 8 framework mode, static prerender** | C. Astro | D. Next.js |
|---|---|---|---|---|
| HTML per page at build time | No | **Yes** | Yes | Yes |
| Correct link previews | No | **Yes** | Yes | Yes |
| Content visible before JS loads | No | **Yes** | Yes | Yes |
| JavaScript sent | Whole app | Whole app, code-split per route, hydrated | Near zero. Only interactive "islands" | Framework runtime + app |
| Change from planned stack | None | New router config and `src/routes/` layout. Still Vite + React. | New framework. React only inside islands. | New framework and bundler. Leaves Vite. |
| shadcn/ui | Yes | Yes (setup unverified, see §1) | Yes, inside React islands | Yes (first-class) |
| Server needed | No | No (`ssr: false`) | No | No (static export) or yes |
| Vercel | Zero config | Zero config (per Vercel docs) | Zero config | Native |
| Form endpoint | Separate Vercel Function | Separate Vercel Function | Built-in endpoints or a Function | Built-in route handlers |
| Main risk | Weak previews and SEO | `appDirectory` and shadcn setup need a Phase 0 spike | A new framework to learn, with two component models (`.astro` and React). | Heaviest runtime for a static marketing site |

Option A with a prerender plugin (for example `vite-react-ssg`, 0.9.x) is a middle path. It is pre-1.0, has a much smaller user base, and gives less than B for similar effort, so it is not recommended.

### Recommendation: B, React Router 8 framework mode with `ssr: false` and `prerender: true`

- Keeps the planned stack: Vite, React, TypeScript, Tailwind and shadcn/ui.
- Every route is written to its own HTML file at build time with its own title, description, canonical URL and Open Graph tags. React Router's docs confirm this mode needs no server.
- Pages stay interactive after hydration: mobile nav, accordion and form.
- If a server is ever needed (a blog from a CMS, say), setting `ssr: true` turns it on without a rewrite.

**The case for Astro (C):** this is a content site with five interactive widgets. Astro would send less JavaScript and would probably score a few points higher on mobile performance. The cost is a second framework to learn, with page templates written in `.astro` files and React used only for the interactive parts. If long-term performance scores matter more to you than staying in plain React, C is the better fit. **DECISION NEEDED.** I will not switch without your approval.

### What gets built regardless of option

- Per-page `<title>` (≤60 chars), meta description (120–160 chars), canonical URL, `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `twitter:card=summary_large_image`. React 19's native `<title>`/`<meta>` elements are used. React Router's docs now recommend them over the older `meta` export. Canonical goes through the `links` export.
- `sitemap.xml` generated at build time from `content/pages.ts`, excluding `noindex` routes.
- `robots.txt`: allow all in production. Preview deployments send `X-Robots-Tag: noindex` so preview URLs are never indexed.
- Structured data (JSON-LD) in the root: `Organization` (name, URL, logo, `sameAs` social links once verified) and `ProfessionalService` with `areaServed` and a Nairobi address, if you confirm a physical address may be published. `FAQPage` markup is optional. Google has limited FAQ rich results to a small set of authoritative sites, so it is unlikely to show here.
- One `<h1>` per page, and no skipped heading levels.
- Descriptive, lowercase URLs, no trailing slashes, with redirects configured in `vercel.json`.

---

## 8. Booking and forms

The brief names two CTAs: **Book a Consultation** (primary) and **Schedule a Discovery Call** (secondary). The brief does not say how they differ. The options below assume a consultation is a scoped conversation about a specific project, and a discovery call is a shorter introductory call. **DECISION NEEDED:** confirm or correct this.

### Options

| | A. Embedded scheduler only | B. External scheduler link | C. Form + email | **D. Form first, then scheduler** |
|---|---|---|---|---|
| How it works | Cal.com or Calendly calendar embedded on `/contact` | CTA opens a Cal.com/Calendly page | Visitor submits a form; you reply by email to arrange a time | Form qualifies the lead; the success screen offers a scheduler link with name and email pre-filled |
| Visitor effort | Low | Low | Low to submit, then a wait | Medium |
| Lead context before the call | Only what the scheduler's questions collect | Same | Full | Full |
| Books unqualified calls | Yes | Yes | No | Less likely |
| Page weight | Heavy third-party iframe/script on `/contact` | None on our site | Light | Light. Scheduler loads only after submit |
| Privacy | Data goes to the scheduler | Same | Data goes to our function and Resend | Both |
| Cost | Cal.com free plan includes embeds and webhooks. Calendly's free plan is more limited (webhooks need a paid plan). | Same | Resend free tier (3,000/month) | Both free tiers |
| Maintenance | Low | Lowest | Low: one function | Low to medium |
| Reliability | Depends on the scheduler's uptime and its script loading | Same, but a failure is on their page, not ours | Depends on our function and Resend. Fallback: show the email address. | Form works if the scheduler is down, and the reverse |
| Mobile usability | Embedded calendars are cramped on small screens | Scheduler's own mobile page, usually good | Our form, built for 320px | Our form, then the scheduler's mobile page |

### Recommendation: a combination, one option per CTA

The two CTAs do different jobs, so the recommendation uses a different option for each:

- **Book a Consultation → option D.** Goes to `/contact`. The visitor fills in the consultation form. The success screen says what happens next and offers "pick a time now" through a scheduler link.
- **Schedule a Discovery Call → option B.** Opens the scheduler's own page for a short intro call. It is a plain link, so it adds no weight to our pages.

**Scheduler: Cal.com, with the pricing still to be re-checked.** Sources read on 2026-09-24 say Cal.com's free plan includes embeds, webhooks and unlimited event types, and that Calendly's free plan puts webhooks behind a paid tier. Two of those sources are Cal.com's own blog ([cal.com/blog/is-calendly-free](https://cal.com/blog/is-calendly-free), [cal.com/blog/cal-com-vs-calendly-the-ultimate-guide](https://cal.com/blog/cal-com-vs-calendly-the-ultimate-guide)). The others are a competitor's comparison ([koalendar.com/blog/calcom-vs-calendly](https://koalendar.com/blog/calcom-vs-calendly)) and a package guide ([pkgpulse.com](https://www.pkgpulse.com/guides/cal-com-vs-calendly-vs-nylas-scheduling-calendar-apis-2026)). None of them is neutral, so **check both vendors' pricing pages before signing up**.

The final choice is yours. **DECISION NEEDED.**

### Alternatives to the recommended services

| Need | Recommended | Alternatives | Why the recommendation |
|---|---|---|---|
| Sending email | Resend | Postmark, Amazon SES, a form service such as Formspree (removes the need for our own function) | Simple API and a free tier that covers this volume. A form service is worth considering if you would rather not own the function, but it sends visitor data to another third party. |
| Spam protection | Cloudflare Turnstile | hCaptcha, Google reCAPTCHA, honeypot and rate limit only | Usually needs no puzzle. reCAPTCHA sends visitor data to Google, which the Privacy Policy would have to disclose. Honeypot alone is weaker against targeted spam. |

### Consultation form endpoint (options C and D)

```
Browser ──(zod validation)──▶ POST /api/consultation (Vercel Function)
                                ├─ zod validation again (never trust the client)
                                ├─ Turnstile token verified with Cloudflare
                                ├─ honeypot field must be empty
                                ├─ rate limit per IP (method chosen in Phase 7)
                                └─ Resend: notification to Antopier + confirmation to the visitor
```

- One zod schema in `src/lib/consultation-schema.ts`, imported by both the form and the function.
- Field-level rules are in the PRD (§4.2).
- The function returns plain status codes (`200`, `400` with field errors, `429`, `500`). The form shows a specific message for each.
- No database at launch. Submissions exist only as emails. If you want a record, a later phase can add a store.
- **Unverified:** whether Vercel's `/api` folder functions work alongside the React Router preset. Phase 0 checks this with a hello-world function before the form is built on it.

---

## 9. Deployment

### Vercel project

- Connect the GitHub repository to a Vercel project in Phase 0, so every later phase has a preview URL for review.
- Framework preset: React Router (Vercel auto-detects it). Build command `npm run build`. Output is React Router's `build/client`.
- Node version pinned in `package.json` `engines` to the version Vercel lists as current in Phase 0.

### Environments

| Environment | Trigger | URL | Placeholders visible | Indexed |
|---|---|---|---|---|
| Development | `npm run dev` | localhost | Yes, outlined | n/a |
| Preview | Any branch or PR push | `*.vercel.app` | Yes, outlined | No (`noindex` header) |
| Production | Merge to `main` | Custom domain (TBD) | **Never** rendered | Yes |

### Environment variables

| Name | Scope | Exposed to browser | Purpose |
|---|---|---|---|
| `VITE_SITE_URL` | all | yes | Canonical URLs, sitemap, OG URLs |
| `VITE_SITE_ENV` | all | yes | `development` / `preview` / `production`. Drives the placeholder guard. |
| `VITE_BOOKING_CONSULTATION_URL` | all | yes | Cal.com consultation event link |
| `VITE_BOOKING_DISCOVERY_URL` | all | yes | Cal.com discovery-call link |
| `VITE_TURNSTILE_SITE_KEY` | all | yes | Turnstile widget (public by design) |
| `TURNSTILE_SECRET_KEY` | server | **no** | Token verification in the function |
| `RESEND_API_KEY` | server | **no** | Sending email |
| `CONSULTATION_TO_EMAIL` | server | **no** | Where submissions go |
| `CONSULTATION_FROM_EMAIL` | server | **no** | Sender on a verified domain |

Only `VITE_`-prefixed variables reach the browser. A lint rule or unit test fails if a non-`VITE_` variable is referenced from `src/`.

### Security headers (`vercel.json`)

Headers: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera, microphone and geolocation off), `X-Frame-Options: DENY` for older browsers, and `Content-Security-Policy`. The CSP allows only our origin plus Turnstile, the scheduler and Vercel Analytics if used, and includes the `frame-ancestors 'none'` directive to block framing.

**CSP caveat:** React Router's prerendered HTML includes inline scripts for hydration. A strict CSP needs hashes of those scripts or `'unsafe-inline'` for `script-src`. Phase 9 measures which inline scripts are emitted, picks the strictest policy that works, and records the choice and the reason in `docs/`.

### Domain

Domain name not yet known. **DECISION NEEDED.** DNS access is also needed to verify the sending domain in Resend (SPF/DKIM records).

---

## 10. Risks and assumptions

### Assumptions (untested until you confirm)

| # | Assumption | If wrong |
|---|---|---|
| A1 | English only at launch | Content model gains a locale layer. Easier before launch than after. |
| A2 | No blog or CMS at launch | Content stays in TypeScript files. A CMS would change §4. |
| A3 | Consultation differs from discovery call as described in §8 | CTA wiring changes. Small. |
| A4 | Contact form submissions may be emailed to one inbox, with no database | Add storage and a retention policy, which also changes the Privacy Policy. |
| A5 | The logo arrives as SVG with a defined blue | If it arrives as a raster or with several blues, add a step to extract and agree the exact values. |
| A6 | A Nairobi business address may be published | If not, structured data uses `areaServed` only. |

### Risks

| Risk | Likelihood | Effect | Mitigation |
|---|---|---|---|
| Logo blue fails contrast for text or white-on-blue buttons | Medium (many mid blues sit between 3:1 and 4.5:1 on white) | A darker shade is needed, which the brief treats as a new colour | Procedure in §5.1. Decision goes to you with measured ratios. |
| Placeholder content ships to production | Medium without a guard | The live site shows credibility that looks fabricated, which breaks the brief's strictest rule (§30) | Three-layer guard in §4.1, including a failing build check. |
| React Router 8 + shadcn/ui + Vercel `/api` combination has an undocumented snag | Low to medium | Phase 0 overruns | 30-minute spike at the start of Phase 0 before anything is built on it. Fallback is option A plus a prerender plugin. |
| Hero mockup becomes the LCP element and slows first paint | Medium | Performance score drops | Mockup is HTML/SVG, not a large image. Headline text should be the LCP element. Budget enforced by Lighthouse CI. |
| Third-party scripts (scheduler, Turnstile, analytics) erode performance and CSP | Medium | Slower pages, looser CSP | Scheduler is linked, not embedded. Turnstile loads only on `/contact`. Each third party is listed in the CSP by name. |
| Legal pages published without review | Medium | Legal exposure. Kenya's Data Protection Act, 2019 likely applies to the personal data the form collects. A lawyer should confirm. | Legal pages are blocked on reviewed text from you (PRD Phase 8). They are never written by the build session as final. |
| Dependencies move (TypeScript 7, React Router minors) | High over the site's lifetime | Upgrade work | Pin minors, and review Dependabot or Renovate PRs monthly. |
| Brief's example copy is used verbatim and reads as generic | Medium | Weakens the "not a generic agency" positioning | Copy phase in the PRD reviews it and proposes alternatives for your approval. |
