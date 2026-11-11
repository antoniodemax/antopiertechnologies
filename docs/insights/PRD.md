# Antopier Insights — Product Requirements Document

**Version:** 0.1  
**Status:** Draft for CEO consultation and approval  
**Product owner:** CEO, Antopier Technologies  
**Technical coordination:** Elias Voss (AI Technical Co-founder & CTO persona)  
**Implementation:** Not authorised

## 1. Summary
Antopier Insights is a proposed multi-tenant business intelligence product that turns spreadsheet-based operational and financial records into understandable, traceable performance reporting. It is not a full ERP, accounting package or professional financial adviser.

## 2. Users and roles
- Organisation owner: manages organisation, members, datasets and reports.
- Organisation admin/analyst: manages approved datasets and reporting.
- Viewer: views permitted dashboards/reports.
- Platform operator: tightly controlled and audited support role.
- Future external accountant/adviser: only after validated need.

Permissions must be enforced server-side and in database policies, not merely hidden in the UI.

## 3. Core user journey
1. User registers or accepts an organisation invitation.
2. User creates or joins an organisation.
3. User sees supported formats and data-handling guidance.
4. User uploads a permitted CSV/XLSX file to private storage.
5. System validates type, size, structure and row limits.
6. User previews data and maps columns to supported business fields.
7. System shows missing values, duplicates, invalid rows and assumptions.
8. User confirms mapping.
9. Deterministic processing creates metric results and a dashboard.
10. AI commentary may explain computed metrics, cite the metrics used and state uncertainty.
11. User reviews and exports a report.
12. Organisation owner manages membership and data export/deletion requests under approved policy.

## 4. Candidate MVP requirements
- Organisation and membership model.
- Authentication and account recovery.
- Organisation-scoped authorisation and RLS.
- Private file storage and authorised file access.
- Upload validation and safe processing boundaries.
- Data preview, mapping and quality feedback.
- Deterministic metric calculations with documented definitions.
- Basic dashboard for one validated customer segment.
- Audit trail for security-sensitive/data-changing actions.
- Monitoring, backup and restore plan.
- Privacy notice and customer/data-processing terms reviewed professionally where required.
- Cross-tenant security tests.

Candidate metrics, only when source data supports them: revenue/sales totals and trends, expenses by category and period, gross profit/margin when cost definitions exist, average order value when order IDs are reliable, product/category performance, period comparisons and data quality indicators.

## 5. AI commentary — gated
AI receives only minimum necessary derived metrics and approved context. It does not calculate authoritative totals, modify source data or invent causes. Every numerical statement must match a supplied metric. Users can inspect the metric and date range. Include structured output validation, evaluation, safe fallback and human review. No high-impact automated decisioning in MVP.

## 6. Explicitly out of scope
Bank/accounting/ERP integrations; automated bookkeeping/tax filing; certainty claims about forecasts; autonomous transactions/actions; public dashboards by default; native mobile apps; enterprise SSO or dedicated tenants before demand; unrestricted natural-language SQL; shared model training on customer data; identifiable customer/employee data unless necessary, lawful and explicitly approved.

## 7. Upload and data requirements
Accept documented file types only; enforce size, row and processing limits. Validate file signatures, not extensions alone. Parse defensively. Store originals only when retention is justified. Use synthetic data for development. Preserve source provenance, uploader, timestamp, checksum, mapping and processing version. Never silently discard rows. Define currency, timezone, date format, decimal separator, duplicates and missing-value handling. Do not infer missing values without confirmation.

## 8. Functional acceptance criteria
| ID | Requirement | Acceptance evidence |
|---|---|---|
| FR-01 | Register, sign in and recover account | Auth tests and walkthrough |
| FR-02 | Create/join organisation | Membership/invitation tests |
| FR-03 | Tenant records isolated | RLS review and cross-tenant negative tests |
| FR-04 | Upload supported files privately | Storage policy and upload tests |
| FR-05 | Preview/map columns | UI tests with valid/invalid fixtures |
| FR-06 | Processing is repeatable and traceable | Deterministic fixtures and provenance |
| FR-07 | Metrics show definition and period | Formula tests and reconciliation |
| FR-08 | AI commentary grounded in metrics | Evaluation and factuality checks |
| FR-09 | Secure report export | Authorisation and export tests |
| FR-10 | Security actions auditable | Audit event tests |
| FR-11 | Owner manages members | Permission matrix tests |
| FR-12 | Data export/deletion follows policy | Workflow and audit evidence |

## 9. Non-functional requirements
Security/privacy by design; strong tenant isolation; encryption in transit/at rest via managed services; tested backup/restore; safe errors; accessibility target WCAG 2.2 AA; responsive browser UX; observability for errors, latency, jobs and costs; versioned migrations; performance targets measured against representative load before being promised.

## 10. Metric dictionary
Before dashboard implementation, every metric must define business meaning, formula, unit, required columns, inclusion/exclusion rules, date/currency handling, treatment of refunds/tax/discounts/missing values/duplicates, and limitations. Calculations are deterministic and testable. AI explains metrics but does not replace calculation logic.

## 11. Success measures
Qualified discovery conversations; frequency/severity of reporting pain; report preparation time before/after; user understanding and decision usefulness; paid pilot conversion and delivery margin; data quality/error rate; cross-tenant test results; repeat usage and renewal intent. Set numerical targets only after baseline evidence.

## 12. Open CEO decisions
1. First customer segment and geography.
2. First dataset template and supported metrics.
3. First paid offer: service, subscription or service-assisted SaaS.
4. Retention period for uploads and derived reports.
5. Excluded data categories for pilot.
6. Support and incident-response commitment.
7. Budget after the initial KSh 10,000 constraint.
8. AI provider and permitted data flow.
9. Customer onboarding and deletion process.

This PRD is a proposal. No feature is authorised until the CEO approves the relevant phase and exact task.
