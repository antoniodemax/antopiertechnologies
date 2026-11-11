# Antopier Insights — Product Requirements Document

**Version:** 0.2  
**Status:** Discovery proposal; not approved for implementation  
**Company:** Antopier Technologies (technology consultancy / digital solutions agency)  
**Product owner:** CEO, Antopier Technologies  
**Technical coordination:** Elias Voss (AI Technical Co-founder & CTO persona)

## 1. Purpose and relationship to the agency
Antopier Technologies currently operates as a technology consultancy/agency. Its service work may include BI dashboards, data cleaning and reporting. Antopier Insights is a possible productisation of repeated customer needs discovered through that work.

This PRD covers only the future Antopier Insights product. It does not redefine the company, replace the service catalogue, or authorise changing the existing marketing website. The agency may deliver dashboards and reporting services before a SaaS product exists.

## 2. Problem hypothesis
Some SMEs may hold sales, expense and operational information in Excel/CSV files but struggle to consolidate records, produce reliable reports, identify changes and understand what the numbers mean. This must be validated through discovery and paid service engagements.

## 3. Intended users
Initial segment is undecided. Candidate segments include SMEs, retailers/distributors and other organisations with recurring spreadsheet reporting needs. The CEO selects a first segment based on evidence and access to decision-makers.

Potential product roles, only if multi-user SaaS is justified:
- Organisation owner.
- Organisation admin/analyst.
- Viewer.
- Restricted platform support operator.

## 4. Product hypothesis and workflow
A user uploads an approved CSV/XLSX dataset to a secure workspace. The system validates the file, previews data, supports column mapping, identifies quality issues, computes documented metrics and presents a dashboard/report. Optional AI commentary explains supplied metrics without inventing calculations or causes.

Before building this workflow, Antopier should test the outcome manually as a scoped BI service using synthetic or appropriately authorised data.

## 5. Candidate capabilities
- Secure organisation workspaces and membership.
- Authentication and organisation-scoped authorisation.
- Private uploads with validation and limits.
- Data preview, mapping and data quality feedback.
- Deterministic, documented metrics.
- Dashboard and export.
- AI-assisted explanations grounded in computed metrics, only after evaluation and privacy review.
- Audit, backup, restore and monitoring capabilities.

Candidate metrics depend on source data quality: revenue/sales trends, expenses by category, gross profit/margin where cost data is reliable, product/category performance and period comparisons.

## 6. Out of scope for the first product
Full accounting/ERP; bank integrations; tax filing; automated financial decisions; autonomous transactions; forecasting represented as certainty; unrestricted natural-language SQL; multiple industry-specific products at launch; native mobile apps; enterprise SSO/dedicated infrastructure before demand; use of identifiable personal data unless necessary and approved.

## 7. Trust, privacy and security requirements
No real customer data in development or public demos. Before real data is processed, define lawful purpose, customer permissions, data-processing terms, retention/deletion, access control and provider data flows. Tenant isolation must be enforced at the database boundary, not only the frontend. RLS and storage policies require independent negative tests. Privileged keys stay server-side. AI receives minimum necessary derived data only after provider/privacy review.

## 8. Metric integrity
Every metric needs a definition, formula, unit, required columns, date/currency rules, treatment of refunds/tax/discounts/duplicates/missing values and limitations. Calculations are deterministic and traceable. AI may explain the results but may not replace calculation logic or assert unsupported causality.

## 9. AI commentary — later gated capability
AI is not required to validate the initial BI service. If added, use structured outputs, numerical verification, prompt-injection controls, evaluation fixtures, safe fallback and human review. No model API spend or customer-data transmission without CEO approval.

## 10. Success measures
For the agency service: time to prepare a report, data quality, customer usefulness, repeat usage, delivery effort, customer willingness to pay and support burden.

For a future product: activation, successful processing, metric reconciliation, repeat usage, retention, conversion to paid use, cost-to-serve and security test results. Set numerical thresholds only after baseline evidence.

## 11. Open CEO decisions
1. Which agency service should be prioritised for initial sales?
2. Which customer segment is easiest to reach and serve credibly?
3. Should the first BI offer be a one-off dashboard, recurring reporting service or both?
4. Which dataset and metrics should the initial demonstration support?
5. What data categories must be excluded from the first pilot?
6. What budget can be allocated after customer validation?
7. Which repeated workflow, if any, merits a product?
8. What retention, support and privacy commitments can the company responsibly make?

No feature in this document is authorised for implementation until the CEO approves the relevant task.
