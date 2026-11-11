# Antopier Insights — Security, Privacy & Trust Requirements

**Status:** Mandatory design baseline; requires specialist and CEO review.

## 1. Objective
A customer must never access another organisation's data, files, reports, AI outputs or metadata without explicit authorisation. Security is enforced at database, storage and server boundaries, not only in the interface.

## 2. Threats to assess
Cross-tenant access; missing/misconfigured RLS; privileged key leakage; public/guessable file URLs; unsafe signed URL lifetimes; malicious or oversized spreadsheets; CSV formula injection; prompt injection in uploads; AI provider data leakage; account takeover; insider access without audit; dependency/CI compromise; backup exposure; incomplete deletion; denial of service through costly uploads/queries/model calls.

## 3. Identity and access
Use Supabase Auth initially. Model organisation membership and role explicitly. Default deny. Validate membership and role on every server operation. Protect privileged actions with MFA/re-authentication where appropriate. Audit membership changes, invitations, exports, deletion, support access and privileged operations.

## 4. PostgreSQL and RLS
- Enable RLS on every table exposed through the Supabase API.
- Write explicit SELECT, INSERT, UPDATE and DELETE policies as applicable.
- Base tenant access on authenticated user membership.
- Validate organisation ownership on writes.
- Test owner, admin, analyst, viewer, removed member, unauthenticated and cross-tenant cases.
- Review views, functions, RPCs, triggers and jobs for RLS bypass.
- Restrict SECURITY DEFINER functions, use safe search_path and review grants.
- Never expose service_role or other privileged secrets in client code.
- Version and review migrations before applying.

## 5. Storage and uploads
Private buckets for customer files. Storage policies enforce organisation membership and object ownership. Signed URLs are short-lived and not the only access control. Validate file signatures, size, row count and decompression limits. Consider quarantine and malware scanning. Never execute macros or embedded content. Neutralise formula injection in exports. Define retention and deletion before real uploads.

## 6. Application and secrets
Server-side validation; rate limits; request size limits; safe errors; appropriate CSRF/cookie protections; security headers and CSP; separate secrets per environment; dependency review; secret rotation after exposure; no secrets in source control or browser bundles.

## 7. AI-specific controls
Do not send raw uploads or personal data to AI by default. Minimise/redact/aggregate before model calls. Review provider retention, training, subprocessors, region, contracts and security posture. Treat cell contents, filenames and documents as untrusted data, never instructions. Prevent model output from triggering privileged actions. Validate structured output and numerical statements against deterministic metrics. Test prompt injection and cross-tenant leakage.

## 8. Privacy readiness
Before real customer data is processed, obtain qualified advice on applicable Kenyan and international data protection requirements, controller/processor roles, lawful basis, notices, contracts, cross-border transfers, retention, data subject requests and registration/assessment obligations. Technical controls alone do not prove legal compliance.

## 9. Audit and incident response
Log security events and data-changing operations without logging passwords, tokens, secrets or unnecessary personal data. Restrict log access and define retention. Document incident severity, escalation, containment, evidence preservation and customer communication.

## 10. Backup and recovery
Define recovery point objective (RPO) and recovery time objective (RTO) with the CEO. Test restores, not just backup creation. Document database, storage, auth and configuration recovery dependencies. Production launch is blocked until recovery is demonstrated.

## 11. Required test matrix
| Test | Expected result |
|---|---|
| Tenant A requests Tenant B dataset/report | Denied; no metadata leak |
| Tenant A guesses Tenant B storage path | Denied |
| Removed member reuses session | Access revoked according to tested policy |
| Viewer attempts upload/delete/member admin | Denied |
| Unauthenticated request reads tenant data | Denied |
| Client submits arbitrary organisation_id | Rejected/constrained by database |
| Browser bundle secret scan | No privileged secret |
| Malicious/oversized spreadsheet | Rejected or safely quarantined |
| Prompt injection in cell content | Treated as untrusted data |
| Formula-like export value | Escaped/neutralised |
| Backup restore drill | Meets approved recovery objectives |

## 12. Release blockers
No real customer onboarding until RLS and negative tests pass; storage isolation passes; privileged endpoints/secrets reviewed; data handling/provider terms approved; privacy/legal review complete where required; backup restore demonstrated; incident and support procedures documented; CEO approves the pilot.
