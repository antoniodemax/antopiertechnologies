# Antopier Insights — Proposed System Architecture

**Status:** Proposal; not approved for implementation  
**Principle:** PostgreSQL-first, secure multi-tenant SaaS, portable and cost-conscious.

## 1. Existing repository context
The repository currently contains a company marketing website and consultation API: React Router 8 + TypeScript + Tailwind frontend, Hono backend and shared Zod schemas. Preserve this application. Do not migrate it to Next.js or combine product concerns into it without a separate approved decision.

The solution architect must compare a separate repository, a separate app/workspace in this monorepo, and selective reuse of existing Hono patterns. Consider deployment isolation, CI, secrets and operational overhead before recommending one.

## 2. Proposed product stack
| Layer | Proposed choice | Notes |
|---|---|---|
| Frontend | TypeScript React application | Framework decision requires review |
| UI | Existing Tailwind conventions/accessibility patterns | No marketing-site redesign implied |
| Backend | Server-side TypeScript API | Evaluate existing Hono patterns |
| Database | Supabase PostgreSQL | Standard relational schema and SQL |
| Authentication | Supabase Auth initially | Avoid adding Clerk without a concrete need |
| Authorisation | PostgreSQL RLS + server role checks | Database is final tenant boundary |
| File storage | Supabase Storage private buckets | Authorised access and policy tests |
| Data processing | SQL/TypeScript first; Python/Pandas when justified | Deterministic calculations |
| Charts | Recharts or compatible library | Evaluate accessibility and bundle size |
| AI | Model API behind server-side provider abstraction | Add after metrics/privacy gates |
| Hosting | Vercel or approved alternative | Cost and workload review |
| Version control | GitHub | Protected branches and CI |

## 3. Supabase data model candidates
profiles, organisations, organisation_members, invitations, datasets, uploads, dataset_mappings, processing_jobs, metric_definitions, metric_results, dashboards, reports, audit_events and later subscription_records.

Every tenant-owned row has an organisation identifier and defined access policy. Global reference data must be explicitly distinguished from tenant data.

## 4. Multi-tenancy
Initial candidate: shared PostgreSQL database with shared tables and organisation_id protected by RLS. Evaluate dedicated schemas/databases only when customer requirements, threat model or measured scale justify them.

- Membership table maps authenticated user IDs to organisations and roles.
- RLS policies verify organisation membership for SELECT/INSERT/UPDATE/DELETE.
- INSERT/UPDATE policies validate organisation ownership and role.
- Never trust organisation_id from the browser without server/database validation.
- Frontend filtering is not a security control.
- Supabase service-role access bypasses RLS; keep it server-only and narrowly scoped.
- Test with multiple independent test organisations/users.
- Review views, RPCs, SECURITY DEFINER functions, triggers and background jobs for bypasses.

## 5. Data ingestion flow
1. Authenticated user requests upload.
2. Server checks membership, role, quota and file constraints.
3. File is stored in private bucket under organisation-scoped path.
4. Server records metadata/checksum.
5. Background job validates file signature, parses defensively and applies limits.
6. User reviews mapping and quality warnings.
7. User confirms processing.
8. Deterministic transformation computes metrics with provenance.
9. Dashboard reads authorised derived data.
10. AI, if enabled, receives only approved derived metrics and constrained context.

Avoid unbounded synchronous parsing in request handlers.

## 6. Analytics
Use SQL for relational aggregation and reproducible calculations. Introduce Python/Pandas when data-cleaning complexity, parsing or workload justifies it. Avoid a separate analytics service before a measured need.

Metric results should retain organisation/dataset IDs, period/timezone, currency/unit, metric definition/version, calculation timestamp, processing version, lineage and quality warnings. Add materialised views, pre-aggregation or caching only after query patterns are measured.

## 7. AI design
Server-side provider calls; minimum data; prefer derived metrics over raw rows; provider abstraction; structured output validation; deterministic numerical checks; evaluation for hallucination, unsupported causality, prompt injection, leakage and fallback behaviour. Review provider retention, training, subprocessors, region, contracts and privacy terms before real data is sent. AI output is labelled and reviewable.

## 8. Scalability and portability
Use standard PostgreSQL types, SQL and migrations. Keep core business rules out of proprietary database functions. Abstract file storage and AI providers. Add pooling, indexes, query budgets, background jobs and caching based on measurement. Load-test representative tenants, file sizes and concurrent report generation.

Future AWS option: RDS/Aurora PostgreSQL, S3, compute/containers or Lambda, IAM/KMS, CloudWatch and appropriate networking. Migration requires auth, storage, functions, secrets, monitoring and backup planning too. Do not adopt multi-region, sharding or dedicated tenants without evidence and costed design.

## 9. Environments
Local development with synthetic data; shared development Supabase project; staging with test tenants; production with separate credentials, backups, monitoring and restricted access. Never copy production customer data into development. Production deployments require explicit CEO approval.

## 10. Open architecture decisions
Monorepo versus separate product repo; frontend framework; API/background-job hosting; Supabase region/plan/backups; upload limits; retention/deletion; AI provider; monitoring; cost controls.

The solution architect must present alternatives, trade-offs, costs, security implications and migration implications. CEO approval is required before implementation or provisioning.
