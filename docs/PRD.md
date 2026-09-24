# Antopier Technologies Website: Product Requirements

Status: **Draft for approval** (2026-09-24)
Owner: Antony Peter
Companion documents: [`design-brief.md`](./design-brief.md) (the source of truth for brand and content intent), [`ARCHITECTURE.md`](./ARCHITECTURE.md) (how it gets built)

Section references like "brief §14" point to the design brief.

---

## 1. Overview

### Purpose

The site is Antopier Technologies' main sales tool. It has to show that Antopier is a software consultancy that solves organisations' business problems with software, AI and secure infrastructure, and that it can take on work for startups through to government (brief §2). The site's job ends when a qualified visitor asks for a conversation.

### Audiences

| Audience | What they need from the site | Where it answers them |
|---|---|---|
| Startups | Someone who can take a product from idea to launch and stay on afterwards | Services, Process, FAQ ("Do you work with startups?") |
| SMEs | Software that fixes an operational pain (stock, billing, bookings) without enterprise cost | Solutions by industry, FAQ (pricing) |
| Corporations | Confidence in architecture, security and long-term support | Why Antopier, Security & Cloud service, Process |
| NGOs | Data and service platforms. Often donor-funded, with reporting needs | Solutions: Government & NGOs |
| Government | Public-service platforms, security, accessibility, procurement-friendly clarity | Solutions: Government & NGOs, Security, Process |

Every visitor, whatever the audience, is checking the same five things the brief lists in §35: what Antopier does, who it is for, what problems it solves, why to trust it, and how to start a conversation.

### Conversion goals

- **Primary:** Book a Consultation.
- **Secondary:** Schedule a Discovery Call.
- **Supporting:** a visitor moves from Home to Services or Solutions (engagement before the ask).

How each is implemented depends on the booking decision in ARCHITECTURE §8.

---

## 2. Goals and success metrics

No business results are forecast here. Antopier has no traffic baseline yet, so conversion targets are set after 90 days of real data.

### Launch quality goals (measured before launch, pass/fail)

The numeric performance targets below are proposed. They are confirmed or adjusted with you at the end of Phase 5, when real pages exist to measure. From then on they are pass/fail gates in CI. They are targets for the build, and the site never presents them to visitors as guarantees (brief §26).

| Goal | Metric | Target | How measured |
|---|---|---|---|
| Fast on mobile | Lighthouse Performance, mobile preset | ≥ 90 on every route | Lighthouse CI on the production build |
| Accessible | Lighthouse Accessibility; axe-core | 100; 0 violations on every route | Lighthouse CI; Playwright + axe |
| Accessible beyond automation | Keyboard-only and screen-reader walkthrough | Every page completable, every control operable | Manual pass, recorded in the Phase 9 notes |
| Search-ready | Lighthouse SEO; unique meta per page | 100; 0 duplicate titles or descriptions | Lighthouse CI; unit test over `content/pages.ts` |
| Shareable | Link previews show the right title and image per page | 8 of 8 pages correct | LinkedIn Post Inspector and a WhatsApp test message |
| Honest | Placeholder content in production HTML | 0 items | Build check (ARCHITECTURE §4.1) and a scan of the deployed pages |
| Understood quickly | 5-second test: shown the Home page for 5 seconds, can the person say what Antopier does? | At least 4 of 5 people from the target audiences | Informal test you run with contacts before launch |

### Post-launch metrics (tracked, no targets yet)

| Metric | Why it matters | Source |
|---|---|---|
| Consultation form submissions per month | The primary conversion | Form endpoint count, or your inbox |
| Discovery calls booked per month | The secondary conversion | Cal.com (or chosen tool) dashboard |
| Submission → call held rate | Lead quality, which matters more than volume | Tracked by you manually |
| Visitor → submission rate | Whether the page journey works | Analytics, if you approve analytics (open question Q9) |
| Core Web Vitals from real visitors (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1) | Real-world speed, especially on mobile networks | Vercel Speed Insights, if enabled |

Targets are set at the 90-day review.

---

## 3. Sitemap and page requirements

```
/                  Home
/services          Services
/solutions         Solutions
/about             About
/contact           Contact
/privacy           Privacy Policy
/terms             Terms of Use
/project-terms     Project Terms
(404)              Not found
```

The main navigation is Home, Services, Solutions, About and Contact (brief §7). Legal pages are linked from the footer and the consent line on the form.

Home carries a short version of almost every section, and the inner pages carry the full versions. Both read from the same content files, so they cannot drift apart.

### 3.1 Home

Section order follows the brief (§8–§19) and its journey (§32: Understand → Trust → Explore → Evaluate → Act).

| # | Section | Purpose | Leads to |
|---|---|---|---|
| 1 | Hero | Say what Antopier does in one headline, and show real software rather than abstract art | Book a Consultation (primary), Explore Our Solutions (secondary, to `/solutions`) |
| 2 | Company introduction | Who Antopier is, and why an organisation can trust it with an important problem. Introduces the company. The founder appears later (row 9). | Services section |
| 3 | Services (six cards) | What Antopier can do, stated as business value | `/services`, and each card to its entry on that page |
| 4 | Solutions by industry (summary) | Show capability applied to real problems: Problem → Solution → Value | `/solutions#<area>` |
| 5 | Why Antopier (pillars) | Reasons to trust, stated as how Antopier works | Process section |
| 6 | Development process (7 steps) | Remove uncertainty about what working together looks like | Featured Solutions, or Industries (row 8) while Featured Solutions is hidden |
| 7 | Featured Solutions | Real evidence. **Hidden in production until real projects exist.** | `/solutions` |
| 8 | Industries we serve | Breadth of intended audience, introduced as the sectors Antopier builds for (brief §15) | `/solutions` |
| 9 | Founder (short) | A real person behind the company | `/about` |
| 10 | Testimonials | Third-party trust. **Hidden in production until real, permitted testimonials exist.** | n/a |
| 11 | FAQ (subset) | Answer the objections that stop someone from getting in touch | Final CTA |
| 12 | Final CTA | End the journey with a clear next step | Book a Consultation, Schedule a Discovery Call |

At launch the Home page will show 10 of these 12 sections.

### 3.2 Services

| Section | Purpose | Leads to |
|---|---|---|
| Page hero | State the service offer in one line | Service list |
| Six services in detail | Each service: the business problem it addresses, what the client gets, and related solution areas | Related `/solutions#<area>` links, Book a Consultation |
| Process | How every engagement runs | FAQ |
| FAQ (timeline, pricing, maintenance, AI) | Commercial objections | Final CTA |
| Final CTA | Next step | Contact / Discovery Call |

The six services are Web Design & Development, Custom Web Applications, E-commerce Solutions, AI Consulting, AI Integration, and Security & Cloud Solutions (brief §10).

### 3.3 Solutions

| Section | Purpose | Leads to |
|---|---|---|
| Page hero | Frame the page around the problems Antopier solves | Areas |
| Six solution areas | Education, Healthcare, Retail, Hospitality, Business Operations, Government & NGOs. Each: problems → solution types → value, with a small contextual mockup | Book a Consultation, with the area pre-filled in the form's "Sector" field (§4.2) |
| Industries we serve | Full list, grouped (see flag F3) | Contact |
| Featured Solutions | Hidden until real | n/a |
| Final CTA | Next step | Contact / Discovery Call |

Each area has an anchor (`/solutions#healthcare`) so Home and Services can link straight to it.

### 3.4 About

Company first, founder second (brief §9, §16, principle 13).

| Section | Purpose | Leads to |
|---|---|---|
| Page hero | Who Antopier is, in a sentence | Company section |
| Company: positioning and approach | "Business problems first. Technology second." What that means in practice | Why Antopier |
| Why Antopier | Pillars, in more depth than on Home | Process |
| How we work | Process, and the engagement principles (long-term partnership, maintenance where agreed) | Founder |
| Founder | Antony Peter: role, background and focus areas. Factual and checkable claims only | Founder's verified LinkedIn/GitHub (if supplied), Final CTA |
| Final CTA | Next step | Contact |

### 3.5 Contact

| Section | Purpose | Leads to |
|---|---|---|
| Page hero | Set expectations: what a consultation is and who it is for | Form |
| Consultation form | The primary conversion (§4.2) | Success state → optional scheduler link |
| What happens next | Numbered steps after submitting, including a reply time **you commit to** (open question Q6) | n/a |
| Discovery call alternative | For visitors who want a call rather than a form | Scheduler |
| Contact details | Email, phone, location (Nairobi, Kenya), social links. **Only verified details render in production.** | mailto/tel links |
| FAQ (subset) | Last objections | n/a |

No Final CTA on this page. The form is the CTA.

### 3.6 Legal pages

Privacy Policy, Terms of Use and Project Terms. Each shows a title, last-updated date, table of contents and the supplied text. **The build session will not write the legal text.** It must come from you, reviewed by a lawyer (brief §34, flag F9).

### 3.7 404

A plain message, links to the five main pages, and the primary CTA. Returns HTTP 404.

---

## 4. Functional requirements

### 4.1 Navigation

- **Sticky header** on every page.
  - At the top of the Home page, the header may be transparent over the hero. Once the page scrolls past 8px, it becomes solid white with a subtle border or shadow (brief §7).
  - On inner pages the header is solid from the start. See flag F1 for why.
  - Contents: logo (links to `/`), five nav links, **Book a Consultation** button.
  - The active page is marked with `aria-current="page"` and a visual cue that does not rely on colour alone, such as an underline.
  - Header height is fixed, so the page does not shift when its state changes.
- **Desktop (≥1024px):** inline links and the primary CTA. **Schedule a Discovery Call** is not in the desktop bar (flag F13).
- **Mobile (<1024px):** a menu button with an accessible name ("Open menu") opens a side sheet. The sheet contains:
  - Nav links at least 48px tall.
  - Both CTAs at the bottom.
  - Close by the close button, Esc, tapping the overlay, or choosing a link.
  - Focus moves into the sheet on open, is trapped while open, and returns to the menu button on close. Background scrolling is locked.
- **Skip link** ("Skip to main content") is the first focusable element on every page.
- The sticky header must never cover a heading or a focused element. Anchored sections get `scroll-margin-top`, so headings stay visible after an anchor jump. The page gets `scroll-padding-top`, both equal to the header height, so keyboard focus never lands underneath the header (WCAG 2.2 SC 2.4.11).
- With reduced motion requested, the header changes state instantly instead of animating.

### 4.2 Consultation form

The brief puts low friction first among the booking criteria (§33). Only four fields are required: name, email, the project message and consent. Everything else is optional and helps Antopier prepare for the call. Whether to ask the optional questions at all is decision F15.

| Field | Type | Required | Validation | Notes |
|---|---|---|---|---|
| Full name | text | Yes | Trimmed, 2–100 characters | `autocomplete="name"` |
| Email | email | Yes | Valid email format, ≤254 characters | `autocomplete="email"`. Labelled "Email", because founders and NGO staff often use personal addresses. |
| Tell us about the project | textarea | Yes | Trimmed, 10–2,000 characters, with a live character count | Prompt: the problem, who it affects, any deadline |
| Phone | tel | No | If filled: `+`, digits, spaces and hyphens only, 7–20 characters | Hint text: "Include your country code". No example number. |
| Organisation | text | No | ≤120 characters | Early-stage founders may not have one |
| Organisation type | select | No | One of: Startup, SME, Corporation, NGO, Government, Other | Helps prepare for the call |
| What do you need help with? | checkboxes | No | Values from `content/services.ts`, plus "Not sure yet" | Pre-ticked when arriving from a service link |
| Sector | select | No | The six solution areas, plus Other | Pre-selected when arriving from a solution area link |
| Timeline | select | No | One of: As soon as possible, 1–3 months, 3–6 months, 6+ months, Not sure | |
| Budget range | select | No | Ranges and currency **to be supplied by you** (Q7), plus "Prefer not to say" | Left out entirely if you prefer not to ask |
| Consent | checkbox | Yes | Must be ticked | Wording and link to the Privacy Policy need legal review (Q10) |
| Honeypot | hidden text | n/a | Must be empty | Hidden from people and assistive technology |
| Turnstile | widget | Yes | Token verified on the server | Loaded on `/contact` only |

Behaviour:
- Fields validate when they lose focus, and again as the visitor types once an error is showing.
- On submit with errors: an error summary appears above the form and receives focus. Each item in it links to its field. Each field shows its own error text, linked with `aria-describedby`. Errors are never shown by colour alone.
- The submit button is never disabled for validation. It shows a pending state ("Sending…") announced through an `aria-live` region, and it ignores repeat clicks while pending.
- **Success:** the form is replaced by a confirmation whose heading receives focus. It restates what happens next and the reply time, and offers the scheduler link (booking option D) with name and email pre-filled if the tool supports it.
- **Failure:** the visitor's input is kept. The message says what went wrong and offers the email address as a fallback, once a real one is supplied.
- The server repeats every validation rule. Client-side validation is a convenience only.
- A confirmation email goes to the visitor, and a notification email goes to Antopier.

### 4.3 Booking flow

Depends on decision D2 (ARCHITECTURE §8). Whatever option is chosen:
- Every "Book a Consultation" and "Schedule a Discovery Call" button reads its destination from one config entry, so the tool can change without editing components.
- A third-party scheduler is never loaded on page load. It loads when the visitor asks for it, or opens as an external page.
- If a scheduler link is not configured, the CTA falls back to `/contact` instead of rendering a broken link.

### 4.4 FAQ accordion

- Built on the shadcn/ui Accordion (Radix). Each question is a button inside a heading element, with `aria-expanded` and `aria-controls`.
- Several items can be open at once. Visitors often compare answers.
- Enter and Space toggle an item. Tab moves between questions.
- All answers are present in the HTML at build time, so search engines and no-JS visitors can read them.
- Content comes from `content/faqs.ts`, and each question lists which pages show it.

### 4.5 Responsive behaviour

- Designed and tested at 320, 375, 768, 1024, 1280 and 1920px wide.
- No horizontal scrolling at any width from 320px (WCAG 1.4.10 Reflow).
- Content width is capped on large screens. Hero and section layouts do not stretch across 1920px.
- Mobile layouts are designed separately for small screens (brief §24). Specifically:
  - Hero: text first, CTAs visible without scrolling on a 375×667 screen, and a simplified single-screen mockup below them.
  - Card grids go from 3 columns to 2 to 1.
  - The process timeline switches from horizontal to a vertical list.
  - Form fields are full width.
- Touch targets are at least 44×44px. WCAG 2.2's minimum is 24×24px, and the brief asks for large targets.
- Text zooms to 200% without loss of content or function.

---

## 5. Non-functional requirements

### 5.1 Accessibility

Target: **WCAG 2.2 Level AA** on every page.

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `<h1>` per page, and no skipped heading levels.
- Every interactive element is reachable and operable by keyboard, with a visible focus indicator. The indicator must reach 3:1 contrast against its surroundings.
- Contrast: 4.5:1 for body text, 3:1 for large text and UI components. The logo blue is tested before it is used on text or controls (ARCHITECTURE §5.1). If it fails, its **usage** changes and the colour does not (brief §25).
- Links say where they go. No bare "Learn more": use visually hidden text to complete the link name where the design needs short labels.
- Meaningful images have alt text. Decorative images and mockups are hidden from assistive technology, and each mockup has a short text alternative beside it.
- Forms: visible labels (never placeholder-only), linked hints and errors, and an error summary on submit (§4.2).
- `prefers-reduced-motion: reduce` removes all transform, parallax and reveal animations. Content appears immediately.
- Language set to `en` on `<html>`.
- Checked by axe on every route in CI, plus a manual keyboard and screen-reader pass (NVDA or VoiceOver) before launch.

### 5.2 Performance budget

Measured on the production build with Lighthouse's mobile preset. These budgets are proposed. They are confirmed or adjusted with you at the end of Phase 5 (see §2), and the site never presents them to visitors as guarantees (brief §26).

| Budget | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 per route |
| Largest Contentful Paint (lab, mobile) | ≤ 2.5s. The LCP element should be the hero headline. |
| Cumulative Layout Shift | ≤ 0.1 |
| Total Blocking Time (lab) | ≤ 200ms |
| JavaScript on first load, per route | ≤ 150 KB gzipped. React and React Router set most of this. |
| CSS | ≤ 30 KB gzipped |
| Web fonts | At most 2 files, ≤ 100 KB total, Latin subset, self-hosted |
| Images | AVIF with WebP fallback, explicit width and height, lazy-loaded below the fold |
| Third-party scripts on page load | None on pages other than `/contact`. Turnstile only there. |

### 5.3 SEO

Full plan in ARCHITECTURE §7. In short:
- Static HTML per page (if option B is approved).
- A unique title and description per page.
- Canonical URLs, Open Graph and X card tags, and a 1200×630 OG image per page.
- `sitemap.xml`, and a `robots.txt` that blocks nothing in production. Preview URLs are never indexed.
- `Organization` and `ProfessionalService` structured data.

### 5.4 Security

- No secrets in client code. Only `VITE_`-prefixed variables reach the browser, and a check enforces this.
- Form input validated on the server with the same schema as the client.
- Spam defences: Turnstile, a honeypot field, and rate limiting on the form endpoint.
- Security headers and a Content Security Policy listing each third party by name (ARCHITECTURE §9).
- `npm audit` reports no high or critical issues at launch. Dependency update PRs are reviewed monthly.
- The site never claims absolute security (brief §28).
- Personal data from the form is sent by email only, with no database. What is collected and why is stated in the Privacy Policy.

### 5.5 Browser support

- Latest two versions of Chrome, Edge, Firefox and Safari, plus Safari on iOS and Chrome on Android.
- Tailwind CSS v4 relies on modern CSS. Its documented floor is Safari 16.4, Chrome 111 and Firefox 128 (**unverified**, from my knowledge of the v4 release; confirm on the Tailwind docs in Phase 0). Older browsers are not supported for layout. Prerendered HTML still gives them readable text.
- Tested on at least one mid-range Android phone on a throttled connection. I am assuming many visitors will browse this way. Check the assumption against analytics after launch, if analytics is approved.

---

## 6. Content requirements and honesty rules

### 6.1 Where content lives

All copy and repeatable content lives in typed files under `src/content/` (ARCHITECTURE §4). Components hold no copy.

### 6.2 Honesty rules

Antopier is a new company. The brief's §30 list is binding. The site must not invent clients, testimonials, awards, statistics, revenue, performance results, business impact, partnerships, certifications, case studies or enterprise deployments.

In practice that means:

1. **No proof devices without proof.** No "trusted by" logo strip, no counters ("50+ projects"), no star ratings, and no badges or certifications Antopier does not hold.
2. **Testimonials** are hidden in production until a real one exists, with written permission to publish the person's name, role and organisation. In development and preview builds the section shows a visible `TODO: real testimonials` label.
3. **Featured Solutions** are hidden in production until a real project exists. When one exists, the client is named only with permission. Otherwise it is described neutrally ("a private school in Nairobi"). The business-impact line stays empty until you supply a verified figure and its source. It is never estimated.
4. **Contact details and social links** render in production only when you have supplied them. Until then they appear as outlined placeholders in development and preview.
5. **Industries we serve** is introduced as the sectors Antopier builds for, not the sectors it has clients in (brief §15).
6. **Founder claims** are limited to facts you supply. Each claim in `founder.ts` carries a note of its source.
7. **Mockup data** is sample data inside a depicted product (for example, a fictional school's attendance chart). It is never labelled or placed so that it reads as Antopier's own results. No real organisation's name appears in a mockup.
8. **No superlatives Antopier cannot prove:** "leading", "best", "award-winning", "world-class", "#1", "100% secure", "guaranteed".
9. **AI claims are specific.** Say what the AI does in a named workflow, never "AI-powered" on its own.
10. **Response-time promises** ("we reply within one business day") appear only once you commit to them.

### 6.3 Enforcement

The placeholder guard and build check are specified in ARCHITECTURE §4.1. The production build fails if a placeholder would render. After deployment, a scan of the live HTML for `TODO` is part of the Phase 10 acceptance criteria.

---

## 7. Flags: where the brief conflicts with accessibility, performance or honesty

The working rules say to raise these rather than resolve them silently. Each has a recommendation. Items marked **decision** need your answer. The rest proceed as recommended unless you object.

| # | Brief says | Conflict | Recommendation |
|---|---|---|---|
| F1 | Nav "may appear transparent" over the hero (§7) | Transparent nav text over a varied background can fail contrast, and the state change adds complexity on every page | Solid on every inner page. On Home, transparent only if the chosen hero variation (Phase 4) keeps a plain ground behind the nav. If the hero visual runs under the nav (variation V1 may), the nav is solid on Home too. Settled when you pick the hero. |
| F2 | Hero visual with "meaningful data visualization" (§8) and "no fabricated business metrics" (§8, §30) | Realistic dashboards contain numbers, and numbers near a company's name read as that company's results | Numbers belong to the depicted product (a fictional clinic's appointment counts), never to Antopier. No percentages framed as improvements. **Decision:** whether to add a small "Illustrative interface" caption. I recommend it. |
| F3 | Industries list (§15) mixes sectors (Education, Retail…) with organisation types (Startups, SMEs, Corporations), and Government and NGOs appear as both | One grid of 13 mixed items reads as padding, and it overlaps with the Solutions areas | Two short groups, each item listed once: "Sectors" (Education, Healthcare, Finance, Retail, Hospitality, Real Estate, Logistics, Professional Services) and "Organisations we work with" (Startups, SMEs, Corporations, NGOs, Government). The content model supports either layout. **Decision.** |
| F4 | "Enterprise-grade", "Enterprise Architecture", "enterprise capability" (§1, §12) | Accurate as capability. It becomes a claim if phrased as track record | Copy describes how Antopier builds ("designed for audit, access control and growth") and never implies past enterprise deployments. |
| F5 | Founder title "Senior Full-Stack Software Engineer" (§16) | Must be "factual and supportable" (§16) | **Decision:** confirm the title, and supply the facts for the bio. |
| F6 | Blue used for primary CTAs with white text (§4) | Many mid blues fall between 3:1 and 4.5:1 against white, which fails for button text | Test when the logo arrives. If it fails, use a darker shade for button fills only, which is a new colour (ARCHITECTURE §5.1). **Decision**, taken in Phase 2 with the measured ratios in front of you. |
| F7 | "Page transitions where appropriate" (§23) | Route transitions add JavaScript and can delay content. Little benefit on a prerendered site | No page transitions at launch. Revisit with the browser's View Transitions API later if wanted. **Decision**, because this drops something the brief asks for. |
| F8 | Hero, tagline and final CTA copy (§2, §8, §19) | Reads as generic agency copy, which works against the brief's own positioning (§1, principle 12) | See §8 below. **Decision:** keep verbatim or approve rewrites. |
| F9 | Legal pages "should contain accurate legal/business information" (§34) | The build session cannot produce accurate legal text. Kenya's Data Protection Act, 2019 likely applies to the consultation form | You supply lawyer-reviewed text. Phase 8 is blocked until then. **Decision.** |
| F10 | FAQ: "Do you provide maintenance?" (§18) | Needs a real service model | **Decision:** describe your maintenance offer, or drop the question at launch. |
| F11 | Contact page "clearly explain what happens after submission" (§20) | Requires a reply-time commitment | **Decision:** what reply time will you commit to? |
| F12 | Two CTAs: Book a Consultation, Schedule a Discovery Call (§7, §33) | The brief does not say how they differ. Two CTAs with no visible difference split attention | **Decision:** confirm the difference (ARCHITECTURE §8 assumes consultation = project conversation, discovery call = short intro). |
| F13 | Nav lists a primary and a secondary CTA (§7) | Two buttons plus five links and a logo crowd the bar at 1024px | Primary CTA only in the desktop bar. Both in the mobile menu, Final CTA and Contact page. **Decision**, because this moves something the brief places in the nav. |
| F14 | Featured Solutions: "Use high-quality product mockups instead of basic screenshots" (§14) | A mockup redrawn for a "Featured Solution" could show screens that were never delivered, which conflicts with §30 | Build the mockups from the real project's screens: real screenshots, cleaned of client data, placed in the same polished device frames as the rest of the site. This keeps the brief's quality bar and the evidence stays real. **Decision.** |
| F15 | Consultation form (§20, §33) | The brief wants low friction, and also enough context to prepare for a call. Each extra field costs submissions | Four required fields, the rest optional (§4.2). The shorter alternative drops the optional fields and asks for them on the call. **Decision:** keep the optional fields, or drop them. |

---

## 8. Copy review of the brief's messaging

Reviewed with the reviewing-ai-writing skill in **review mode**: each problem is named, the line quoted and a fix direction given. Nothing is rewritten here, because the words are yours. Rewrites come in Phase 1 as a before/after list for your approval, marked `DRAFTED — NOT APPROVED` until you sign them off.

**The swap test:** if you swap Antopier's name for another agency's and a sentence still works, it says nothing about Antopier.

| Line (brief) | Problem | Fix direction |
|---|---|---|
| "Building the Future, One Solution at a Time." (§2, tagline) | Fails the swap test. "Building the Future" is puffery, and it repeats the hero headline's opening word | Say what Antopier builds or for whom. Or keep the tagline for the footer and leave it off the hero. |
| "Building Intelligent Software for Modern Organizations" (§8, headline) | Fails the swap test. "Intelligent" and "modern" carry no information | Name the kind of software or the outcome, so the headline could only belong to Antopier. |
| "…enterprise software, AI-powered applications, secure web platforms, and digital solutions…" (§8) | A four-item list where the last item ("digital solutions") covers the other three | Cut to the items a visitor would search for. |
| "…operate smarter, grow faster, and innovate with confidence." (§8) | Three-beat cadence. Each beat fails the swap test | One concrete outcome, said once. |
| "Let's Build Something Exceptional Together" (§19) | Puffery ("exceptional"), and a stock agency closing line | Say what happens next: what a consultation is and what the visitor leaves with. |
| "Whether you're launching a startup, modernizing enterprise software, or exploring AI-powered solutions…" (§19) | Three-beat cadence | Name the audience once, or drop the list. |
| "…ready to help transform your vision into scalable digital products." (§19) | Fails the swap test. "Transform your vision" is a stock phrase | State the concrete first step. |
| Pillars "AI-Powered Innovation", "Scalable Solutions" (§12) | "Innovation" and "Solutions" are kill-words. "Scalable Solutions" overlaps with "Enterprise Architecture" | Merge the two overlapping pillars, and name each pillar by what the client gets. |

**Keep as written:** "Business problems first. Technology second." It states the whole positioning in six words and sounds like a person wrote it. The Problem → Solution → Value structure for solution cards and the seven process step names are also clear as written.

---

## 9. Visual asset direction

Written with the designing-visual-assets skill. This is **written guidance only**: no visuals are produced until the logo arrives and the copy is approved. Each asset has a decision block, the step the skill requires before any composition.

### 9.1 Rules for every asset

- **No stock photography and no generated photographs of people.** The only photograph of a person on the site is a real photo of the founder.
- **Mockups are HTML/SVG components** (ARCHITECTURE §6.4), not screenshots or generated images. They are drawn at interface fidelity: real layout hierarchy, plausible labels, sample data belonging to a fictional product (flag F2).
- **No legible real names** in mockups: no clients, no real people, no real organisations. Person names in mockup tables use initials or neutral role labels ("Front desk", "Class 7B").
- **"AI" is shown as a step in a workflow**, such as a suggested reply awaiting a human's approval, or a summary generated from a document. No glowing brains, sparkles or robot imagery (brief §3, §31).
- **Blue budget.** Blue covers about 15% of the page (brief §4). Inside a mockup, blue is spent on one chart series, the active navigation item and one primary button. Everything else is neutral, so the page's real CTAs stay the most prominent blue on screen.
- **One mockup style for the whole site:** the same frame, radius, type and chart style, so six solution mockups read as one product family.
- **Icons** (lucide) appear only where they help scanning: service cards, industry grid, contact details. Never as decoration beside a paragraph.

### 9.2 Hero visual

```
MESSAGE   Antopier builds the working software an organisation runs on,
          such as dashboards, apps and approval workflows.

RANKING   1 Headline (what Antopier does)
          2 Book a Consultation
          3 Supporting line
          4 Product composition (evidence of real software)
          5 Explore Our Solutions
  Overflow: positioning and trust go to the Company introduction directly
            below. Where the tagline sits depends on Q11. If it appears in
            the hero, it becomes an eyebrow above the headline.

SEGMENTS  S1 Message   ranks 1, 3   headline, supporting line
          S2 Actions   ranks 2, 5   primary + secondary buttons
          S3 Product   rank 4       desktop operations dashboard, one mobile
                                    screen, one workflow panel with an AI step
          Ranks 2 and 5 merge into one segment: two buttons side by side
          read as one choice.

LEADS     The headline. The brief's success test (§35) is understanding what
          Antopier does within seconds, so the words lead and the visual
          supports them. The visual must not out-weigh the headline.

IMAGE     Communicates "real, operational software". Composition:
          - Desktop: an operations overview for a fictional organisation, with
            a sidebar, one line chart with labelled axes, a status table and
            a short approvals list.
          - Mobile: the same product's approval screen.
          - Workflow panel: "Summary drafted → Awaiting review → Approved",
            with a person approving.
          Sample data only. No results framed as outcomes.
          Mobile hero: the mobile screen alone, below the CTAs.

BLOCKERS  Logo and blue (Q1). Approved headline and supporting copy (Q11).
          Typeface (Q8).
```

**Variations to produce in Phase 4** (three, each differing on two structural axes, as the skill requires):

| Variation | Composition | Second axis |
|---|---|---|
| V1 Split | Text left (≈5/12), product right (≈7/12) bleeding off the right edge | Reading axis: left-aligned column. The product is cropped by the canvas. |
| V2 Stacked | Text centred above, wide product composition below, cropped at the fold | Reading axis: centred. The headline leads at a larger size, and the product is a wide band. |
| V3 Framed | Text left-aligned above, a single framed desktop window below at full container width, with the mobile screen overlapping its lower-left corner | Segment position: the product becomes a contained object rather than a bleed. The workflow panel is dropped, so the composition has two devices instead of three. |

Selection criteria: headline legible at 20% scale, CTAs visible without scrolling on a 375×667 screen, headline is the LCP element, blue budget respected.

### 9.3 Solution area cards (Solutions page and Home summary)

```
MESSAGE   For this sector, this is the problem Antopier solves and the kind
          of system that solves it.

RANKING   1 Area name   2 Problems   3 Solution types   4 Value
          5 Contextual mockup   6 Link to consult
  Overflow: detail beyond two problems and three solution types goes to the
            Solutions page. Home shows ranks 1, 2 and 6 only.

SEGMENTS  S1 Header     rank 1        icon + area name
          S2 Problem    rank 2        two or three problem statements
          S3 Answer     ranks 3, 4    solution types, then one value line
          S4 Mockup     rank 5        small interface fragment
          Rank 6 merges into S3 as a text link, because a separate button
          row would compete with the page's real CTAs.

LEADS     Area name, because visitors scan the grid for their sector. Inside
          the card, the problem comes before the solution (brief §11), and
          it has the heavier visual weight of the two.

IMAGE     A small fragment of the kind of system named. Examples:
          - Education: fee balances table
          - Healthcare: appointment day view
          - Retail: stock list with a low-stock flag
          - Hospitality: room availability grid
          - Business Operations: pipeline board
          - Government & NGOs: application status tracker
          Rendered small. Labels may be legible. Numbers are sample data.

BLOCKERS  Logo and blue. Approved problem and value copy per area.
```

### 9.4 Featured Solutions visuals

```
MESSAGE   A real project: the challenge, what was delivered, and the result.
RANKING   1 Industry + challenge   2 Solution delivered   3 Product visual
          4 Impact (only if verified)   5 Technologies
BLOCKERS  A real project, the client's permission, and real screens with
          sensitive data removed. Nothing is designed until these exist.
```

This section is hidden at launch. When a real project exists, its visuals are product mockups built from that project's real screens, with client data removed, and placed in the same device frames as the rest of the site. This follows brief §14's call for mockups over basic screenshots, while every screen shown is one that was actually delivered (flag F14).

### 9.5 Other visuals

- **Process timeline:** numbered steps joined by a line. No illustrations. On mobile the line runs vertically.
- **Industries grid:** icon and name only.
- **Founder photo:** a real photograph, head and shoulders, plain light background, facing into the page towards the text. Needed from you (Q4).
- **Open Graph images:** one template of logo and page title on white with one blue element, 1200×630. The title must be legible at 20% scale, because link previews are often shown at thumbnail size.
- **Favicon and app icons:** derived from the supplied logo mark, never redrawn.

### 9.6 Verification

Phase 4 runs both passes from the skill:
- **Pass 1 (computed):** spacing matches tokens, alignment anchored, contrast of every text/ground pair, legibility at 20% scale.
- **Pass 2 (looked at):** on exported screenshots at full resolution, 320–1920px.

Any check that could not run is reported as not run, never as passed.

---

## 10. Phased build plan

### Why this order differs from the one suggested

1. **Copy moved from late (a "copy pass") to Phase 1.** Design needs approved copy first. Headline length decides the hero layout, and the problem statements decide card height. Copy also does not depend on the logo, so it can start now.
2. **Visual assets are their own phase (4),** between the design system and the pages, because the hero composition determines the Home page layout.
3. **The Vercel project is connected in Phase 0,** not at the end, so every phase is reviewed on a real preview URL. Phase 10 handles the production domain only.
4. **Legal pages are their own phase (8).** What blocks them is lawyer-reviewed text from you, and the engineering work is small.

### What can happen before the logo arrives

| Can proceed now | Partly blocked | Blocked until the logo arrives |
|---|---|---|
| 0 Foundations, 1 Content & copy, 7 Conversion (form and API work), 8 Legal (once text arrives) | 3 Layout shell (structure and behaviour now, with a marked text placeholder in place of the logo; styling after Phase 2) | 2 Design system, 4 Visual assets, 5 Home, 6 Inner pages (visual finish), 9 Audit, 10 Production, 11 Handoff |

Dependency chains:
- Before the logo: `0 → 1`, `0 → 3 (structure)`, `0 → 7 (logic)`, `0 → 8 (when text arrives)`.
- After the logo: `2 → 3 (styling) → 4 → 5 → 6 → 9 → 10 → 11`.
- Phase 4 also needs approved copy from Phase 1.

### Working rules for every phase

- Before starting: restate the phase's acceptance criteria.
- One commit per logical change.
- After finishing: summarise what was done, show how each criterion was checked (command output, screenshot or test name), list anything unfinished, then **stop and wait for your go-ahead**.
- A fresh reviewer (a sub-agent with no conversation history, given this PRD as the spec) checks the phase against its criteria before it is reported done. The builder does not verify their own work.

---

#### Phase 0: Foundations

- **Goal:** a project skeleton with strict types, linting and tests, deployed to a preview URL.
- **Depends on:** decision D1 (rendering approach). Logo not needed.
- **Deliverables:**
  - A 30-minute spike proving the chosen stack works together: React Router 8 framework mode with prerender, shadcn/ui init, Tailwind v4, and a Vercel `/api` function on a preview deploy.
  - Vite starter files removed (full list in ARCHITECTURE §0).
  - Tailwind v4 installed. `strict: true`. `@/` path alias. ESLint with jsx-a11y. Prettier with the Tailwind plugin.
  - Vitest and Playwright configured. Folder structure from ARCHITECTURE §2.
  - All routes stubbed with unique titles.
  - GitHub Actions running lint, typecheck, test and build.
  - Vercel project connected, with preview deploys and preview `noindex`.
- **Acceptance criteria:**
  - [ ] `npm run lint`, `npm run typecheck`, `npm test` and `npm run build` all exit 0 with no warnings.
  - [ ] The build output contains one HTML file per route, each with its own `<title>`.
  - [ ] The preview URL serves every route, and a request to an unknown path returns HTTP 404.
  - [ ] `/api/health` on the preview returns 200.
  - [ ] Preview responses carry `X-Robots-Tag: noindex`.
  - [ ] `tsconfig` has `strict: true`, and an `@/` import resolves in app code and tests.
  - [ ] First-load JavaScript of an empty route is measured and recorded. This is the framework's fixed cost against the §5.2 JavaScript budget. The full budget is calibrated in Phase 5, once real pages exist.
  - [ ] The honesty build check (ARCHITECTURE §4.1) is wired into `npm run build`, and it fails when a placeholder fixture is set to render.
- **Skill:** doing-big-tasks.

#### Phase 1: Content model and copy

- **Goal:** every word on the site exists in typed content files, reviewed, with placeholders marked.
- **Depends on:** Phase 0. Your answers to Q4, Q5, Q6, Q7 and Q11 for final (not draft) status. Logo not needed.
- **Deliverables:**
  - `src/content/*` per ARCHITECTURE §4.
  - Page meta (titles and descriptions).
  - FAQ answers.
  - Founder bio from facts you supply.
  - The honesty build check.
  - A before/after copy list for your approval, including the §8 items.
- **Acceptance criteria:**
  - [ ] All content files type-check. Every page's content comes from `src/content/`.
  - [ ] The before/after list covers every user-facing string in `src/content/`. A script counts the strings, and the count must match the number of rows in the list. Each row is marked approved, changed or rejected by you.
  - [ ] Every item in `founder.ts` and every contact or social entry in `site.ts` has a non-empty `source` (unit test). Each source is either a brief section or a dated message from you.
  - [ ] The honesty check passes in production mode with the real content.
  - [ ] Titles are ≤60 characters and descriptions 120–160 characters, unique per page (unit test).
- **Skill:** reviewing-ai-writing (edit mode for drafting, review mode for the list), doing-big-tasks.

#### Phase 2: Design system (blocked until the logo arrives)

- **Goal:** tokens with real values, contrast-verified, and base components in every state.
- **Depends on:** logo and exact blue (Q1), typeface (Q8), Phase 0.
- **Deliverables:**
  - `@theme` tokens (ARCHITECTURE §5) with no `TBD` left.
  - shadcn variables mapped to the tokens.
  - `docs/contrast.md`.
  - Font loading.
  - Button, Card, Badge, Input, Textarea, Select, Checkbox, Accordion, Sheet, Container, Section, SectionHeader, Icon, Placeholder, SkipLink.
  - A `/styleguide` route.
- **Acceptance criteria:**
  - [ ] No `TBD` values remain in the tokens. The brand blue matches the logo file exactly.
  - [ ] `docs/contrast.md` lists every text/ground and UI/ground pair in use, each with a measured ratio that meets §5.1. Any failure has a usage change or a signed-off exception.
  - [ ] `/styleguide` shows every component in default, hover, focus-visible, active, disabled and error states.
  - [ ] axe reports 0 violations on `/styleguide`. Every interactive component shows a visible focus ring when reached by keyboard.
  - [ ] No raw hex values or arbitrary spacing values outside `app.css` (lint rule or grep in CI).
  - [ ] You have reviewed and approved `/styleguide` on the preview URL.
- **Skill:** designing-visual-assets (verification pass 1: contrast, tokens), doing-big-tasks.

#### Phase 3: Layout shell (partly blocked by the logo)

- **Goal:** header, mobile menu, footer and page frame working on every route.
- **Depends on:** Phase 2 for final styling. Structure and behaviour can be built before it, with a marked logo placeholder.
- **Deliverables:** SiteHeader (sticky, transparent to solid on Home only), MobileNav, SiteFooter, SkipLink wiring, PageShell, 404 page.
- **Acceptance criteria:**
  - [ ] Header turns solid after 8px of scroll on Home, and is solid from the start on other pages. With reduced motion requested, the change is instant.
  - [ ] Playwright tests the mobile menu:
    - opens by button, and closes by the close button, Esc, overlay tap and link choice;
    - focus is trapped while open and returns to the trigger on close;
    - background does not scroll.
  - [ ] `aria-current="page"` is on the active link, with a non-colour cue.
  - [ ] Skip link is the first tab stop and moves focus to `<main>`.
  - [ ] No horizontal scroll at 320, 375, 768, 1024, 1280 or 1920px (Playwright check of `scrollWidth`).
  - [ ] The footer renders only verified contact and social links in a production build.
  - [ ] Focused elements are never hidden under the sticky header (SC 2.4.11). A Playwright test tabs through every focusable element on Home and Services, and asserts that each one's top edge sits below the header's bottom edge.
- **Skill:** doing-big-tasks.

#### Phase 4: Visual assets (blocked until the logo arrives)

- **Goal:** hero composition chosen, solution mockups and OG images built.
- **Depends on:** Phase 2, and approved hero and solution copy from Phase 1.
- **Deliverables:**
  - Decision blocks (§9) updated with final copy.
  - Three hero variations on the preview URL.
  - Six solution mockup components.
  - OG image template and eight OG images.
  - Favicon and app icons from the logo.
- **Acceptance criteria:**
  - [ ] Three hero variations delivered, each stating which two structural axes changed. You have chosen one.
  - [ ] The chosen hero passes the §9.2 selection criteria. The LCP element is the headline, confirmed in a Lighthouse trace.
  - [ ] Every mockup is `aria-hidden` with a text alternative, contains no real names, and frames no numbers as results.
  - [ ] Mockups render without overflow or clipping at all six test widths.
  - [ ] Every pass 1 check (spacing, anchoring, contrast, 20% scale) passes, or has an exception you signed off. Every pass 2 check passes on exported screenshots. Any check that could not run is named, and blocks completion until you accept it.
  - [ ] OG titles are legible at 20% scale.
- **Skill:** designing-visual-assets.

#### Phase 5: Home page (blocked until the logo arrives)

- **Goal:** the full Home journey from §3.1.
- **Depends on:** Phases 1–4.
- **Deliverables:** all 12 sections built from content. Featured Solutions and Testimonials hidden in production and outlined in preview.
- **Acceptance criteria:**
  - [ ] Every section reads its copy from `src/content/`. An ESLint rule (`react/jsx-no-literals`, or an equivalent that works with ESLint 10 flat config; confirm in Phase 0) fails on text literals in `components/sections/`.
  - [ ] One `<h1>`, and no skipped heading levels (automated check).
  - [ ] The production build HTML contains neither the Featured Solutions nor the Testimonials section (test).
  - [ ] Every "leads to" link in §3.1 goes where the table says (Playwright).
  - [ ] Screenshots at all six widths are reviewed by you on the preview.
  - [ ] axe reports 0 violations. Lighthouse mobile meets the §5.2 budget.
  - [ ] You have confirmed or adjusted the §2 and §5.2 performance targets against these measurements. From here they are CI gates.
- **Skill:** doing-big-tasks. designing-visual-assets for the pass 2 look-over.

#### Phase 6: Inner pages (visual finish blocked until the logo arrives)

- **Goal:** Services, Solutions, About and Contact as specified in §3.2–§3.5.
- **Depends on:** Phase 5 components. The Contact form UI can be built here and wired in Phase 7.
- **Deliverables:** four pages, with anchors for each service and solution area, and cross-links between them.
- **Acceptance criteria:**
  - [ ] Each page contains the sections in its §3 table, in order.
  - [ ] `/solutions#<area>` and `/services#<service>` anchors land with the heading visible below the sticky header.
  - [ ] "Book a Consultation" from a service pre-ticks that service in the form. From a solution area, it pre-selects that area in the Sector field (Playwright).
  - [ ] Unique title, description, canonical and OG image per page (unit test plus a view of the built HTML).
  - [ ] axe reports 0 violations and Lighthouse meets budget on each page.
- **Skill:** doing-big-tasks.

#### Phase 7: Conversion (form and booking)

- **Goal:** a visitor can request a consultation and book a call, reliably and accessibly.
- **Depends on:** Phase 0.
  - Decision D2 (booking option and tool).
  - Resend account, and the domain (Q3) with DNS access. The sending domain is verified in this phase.
  - Turnstile keys.
  - Your reply-time commitment (Q6).
  - The form UI from Phase 6, for final styling only. The logic can be built earlier.
- **Deliverables:**
  - Sending domain verified in Resend (SPF and DKIM records added).
  - Shared zod schema.
  - `/api/consultation`, with Turnstile verification, honeypot and rate limiting.
  - Notification and confirmation emails.
  - Success and failure states.
  - Scheduler links wired through config.
  - Analytics events, if Q9 is yes.
- **Acceptance criteria:**
  - [ ] Unit tests cover the schema: one valid case, and one failing case per rule.
  - [ ] Playwright covers empty submit:
    - the error summary receives focus;
    - each summary link moves focus to its field;
    - each invalid field has `aria-invalid="true"` and an `aria-describedby` pointing at its visible error text.
    - Whether errors are actually announced is confirmed in the manual screen-reader check below, because Playwright cannot hear a screen reader.
  - [ ] A valid submission on the preview delivers both emails. You confirm receipt.
  - [ ] Posting invalid data straight to the endpoint (bypassing the form) returns 400 with field errors. A missing or invalid Turnstile token returns 400. Rapid repeat posts return 429.
  - [ ] The built client bundle contains no server secret names or values (grep of the build output).
  - [ ] Form completed by keyboard only, and with a screen reader, at 320px and at desktop width.
  - [ ] With the scheduler URL unset, booking CTAs fall back to `/contact`.
- **Skill:** doing-big-tasks. reviewing-ai-writing for error, success and email copy.

#### Phase 8: Legal pages (blocked on reviewed legal text from you)

- **Goal:** Privacy Policy, Terms of Use and Project Terms published exactly as supplied.
- **Depends on:** lawyer-reviewed text (Q10).
- **Deliverables:** three pages with a table of contents and last-updated date, and links from the footer and the form consent line.
- **Acceptance criteria:**
  - [ ] Rendered text matches the supplied source (diff shows no changes other than formatting).
  - [ ] No placeholder text in production.
  - [ ] The Privacy Policy describes what the consultation form actually collects and where it goes (Resend, Turnstile, the scheduler). You confirm this matches the built form.
- **Skill:** none. The text is not ours to edit.

#### Phase 9: SEO, performance, accessibility and security audit (blocked until pages exist)

- **Goal:** prove the non-functional requirements in §5 on the complete site.
- **Depends on:** Phases 5–8.
- **Deliverables:**
  - Sitemap, robots, structured data and OG tags verified.
  - Lighthouse CI budgets enforced in CI.
  - axe on every route.
  - Manual keyboard and screen-reader pass.
  - Security headers and CSP, `npm audit`, and a findings list with fixes.
- **Acceptance criteria:**
  - [ ] Lighthouse CI passes the §5.2 budgets on every route (mobile), and fails CI if a later change breaks them.
  - [ ] axe reports 0 violations on every route.
  - [ ] Manual keyboard and screen-reader pass (NVDA or VoiceOver) on every page. Each page passes when:
    - every control can be reached and operated;
    - there is no keyboard trap;
    - focus is never lost after an action;
    - every control and image is announced with a meaningful name.
    Any failure is fixed, or signed off by you with a reason.
  - [ ] Google's Rich Results Test validates the structured data.
  - [ ] Link previews show the correct title and image for all eight pages (LinkedIn Post Inspector, plus a WhatsApp test).
  - [ ] Security headers are present on every response. The CSP choice (hashes or `unsafe-inline`) is recorded with the reason.
  - [ ] `npm audit` reports no high or critical issues.
  - [ ] Reduced-motion check: Playwright emulates `reducedMotion: 'reduce'`, scrolls each page to the bottom, and asserts that `document.getAnimations()` returns no running animation that changes `transform`.
- **Skill:** doing-big-tasks (the verifier must be a fresh reviewer).

#### Phase 10: Production deployment (blocked on domain and all prior phases)

- **Goal:** the site live on its domain.
- **Depends on:** Phase 9, domain and DNS (Q3), production environment variables.
- **Deliverables:** domain attached, HTTPS, production variables set, production smoke test.
- **Acceptance criteria:**
  - [ ] Every route returns 200 on the production domain, with a canonical URL pointing at that domain.
  - [ ] Production is indexable. Preview deployments still send `noindex`.
  - [ ] A real submission on production delivers both emails.
  - [ ] An automated scan of the deployed HTML finds no `TODO`, `placeholder` or `example.com`.
  - [ ] `sitemap.xml` is submitted in Google Search Console (by you, or with your access).
- **Skill:** doing-big-tasks.

#### Phase 11: Handoff

- **Goal:** anyone, including a future Claude session, can maintain the site without re-explanation.
- **Depends on:** Phase 10.
- **Deliverables:**
  - A repo `CLAUDE.md`, written with the building-your-own-agent skill.
  - `README.md` (setup, scripts, environments).
  - `docs/content-editing.md` (how to change copy, add an FAQ, add a service, publish a testimonial).
  - A completion record appended to this PRD.
- **Acceptance criteria:**
  - [ ] A fresh agent, given only the repo, adds a new FAQ and a new service by following the guide, and the build passes.
  - [ ] README setup steps run clean on a fresh clone.
  - [ ] The completion record lists what changed from this plan and why.
- **Skill:** building-your-own-agent, doing-big-tasks.

---

## 11. Open questions

### Blocking: needed before the related phase can start

| # | Question | Blocks |
|---|---|---|
| **D1** | Rendering approach: React Router 8 static prerender (recommended), plain SPA, Astro, or Next.js? See ARCHITECTURE §7. | Phase 0 |
| **D2** | Booking: form then scheduler (recommended), embedded scheduler, external link only, or form + email only? Which tool? See ARCHITECTURE §8. | Phase 7 |
| **Q1** | Logo files (SVG preferred) and the exact brand blue. Does the logo use more than one blue, or a separate wordmark colour? | Phases 2, 4, 5, 6 |
| **Q2** | How does a consultation differ from a discovery call (length, cost, who it is for)? (F12) | Phases 1, 7 |
| **Q3** | Domain name, and who controls its DNS? | Phases 7 (email sending), 10 |
| **Q10** | Who will write and review the three legal pages, and when? | Phase 8 |

### Needed for final content (Phase 1)

| # | Question |
|---|---|
| Q4 | Founder facts: confirmed title (F5), background, and focus areas you are comfortable publishing. A photo. Verified LinkedIn, GitHub and X URLs. |
| Q5 | Contact details to publish: email, phone, and whether a street address may be shown or only "Nairobi, Kenya". |
| Q6 | The reply time you will commit to after a form submission (F11). |
| Q7 | Should the form ask for a budget? If yes, which currency (KES, USD, both) and which ranges? |
| Q11 | Keep the brief's hero, tagline and final CTA copy verbatim, or approve rewrites in Phase 1? (F8) |
| Q12 | Your maintenance and support offer, for the FAQ (F10). Or drop that question at launch. |
| Q13 | Industries grid: split into "Sectors" and "Organisations we work with"? (F3) |
| Q14 | Add an "Illustrative interface" caption to mockups? (F2) |
| Q18 | Approve or reject four recommendations that change the brief:<br>- no page transitions at launch (F7);<br>- primary CTA only in the desktop nav (F13);<br>- Featured Solutions mockups built from real screens (F14);<br>- a four-required-field form with optional extras (F15). |

### Needed before design (Phase 2)

| # | Question |
|---|---|
| Q8 | Typeface, from the brief's four: Inter, Geist, IBM Plex Sans or SF Pro Display. The first three are free to self-host. SF Pro's licence, as I understand it, does not allow website embedding (check Apple's terms if you want it). I'd shortlist two after seeing the logo's letterforms, and show both in the styleguide. |

### Needed before launch

| # | Question |
|---|---|
| Q9 | Analytics: do you want visitor analytics? Vercel Web Analytics is the simplest option. Check its cookie behaviour against your Privacy Policy, and whether custom conversion events need a paid Vercel plan (**unverified**). |
| Q15 | Is there a launch date, and does it change phase priorities? |
| Q16 | English only at launch? (Assumption A1) |
| Q17 | Any real project, even a small or internal one, that could become the first Featured Solution? |

---

## 12. Completion record

To be filled in at Phase 11: what was built, how it was verified, and what changed from this plan along the way.
