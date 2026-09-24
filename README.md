# Antopier Technologies website

Marketing site and consultation API for Antopier Technologies, a software consultancy in Nairobi, Kenya.

## Layout

```
.
├── frontend/   React Router 8 (static prerender) + Tailwind v4. The website.
├── backend/    Hono API. Validates and emails consultation requests.
├── shared/     Code both sides use: the consultation form schema (zod).
└── docs/       Design brief, PRD, architecture, contrast record.
```

The three packages form one npm workspace. Install once at the root.

## Requirements

- Node 22 or newer
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev          # frontend on http://localhost:5173, backend on http://localhost:8787
```

The frontend dev server proxies `/api/*` to the backend, so the consultation form works locally without extra configuration. Copy `backend/.env.example` to `backend/.env` and fill in Resend keys to send real email.

Run one side on its own:

```bash
npm run dev:frontend
npm run dev:backend
```

## Scripts (run from the root)

| Script              | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Both servers with live reload                                       |
| `npm run build`     | Production build of the site into `frontend/build/client`           |
| `npm run typecheck` | TypeScript across all three packages                                |
| `npm run lint`      | ESLint across the repository                                        |
| `npm test`          | Frontend content-honesty tests and backend API tests                |
| `npm run format`    | Prettier                                                            |

The frontend build runs the content-honesty test first and fails if any placeholder content would reach production.

## Environment variables

- `frontend/.env.example` lists the public `VITE_*` variables (site URL, booking links, Turnstile site key, API origin).
- `backend/.env.example` lists the server secrets (Resend, Turnstile secret, allowed origins).

Only `VITE_`-prefixed variables ever reach the browser.

## Deployment

Two Vercel projects from this one repository:

| Project  | Root directory | Notes                                                                        |
| -------- | -------------- | ---------------------------------------------------------------------------- |
| Website  | `frontend`     | React Router is auto-detected. Output is static.                             |
| API      | `backend`      | Hono is auto-detected (default export from `src/index.ts`).                  |

Set `VITE_API_URL` on the website project to the API project's URL, and `ALLOWED_ORIGIN` on the API project to the website's URL. Alternatively serve both from one domain with a rewrite from `/api/*` to the API project.

## Editing content

All copy lives in `frontend/src/content/`. Components hold no copy. See `docs/ARCHITECTURE.md` §4 for the content model and the placeholder rules.
