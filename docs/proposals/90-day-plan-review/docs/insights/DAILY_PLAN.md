# Antopier Technologies — Task Plan

**Framework:** 90 planned tasks. The original planning window (2026-11-12 to 2027-02-09) is a reference only, kept in PLAN_LEDGER.md. The filename DAILY_PLAN.md is kept for traceability.
**Important:** This is a task plan, not permission to implement, spend, contact clients or deploy. Every CEO approval gate stays in force.

## Execution philosophy (CEO clarification)
The 90 days are a planning framework, not a rigid deadline. We work according to actual progress, not the calendar.

1. We complete every required task and satisfy its acceptance criteria. Tasks are never skipped silently.
2. A task completed and verified earlier than planned lets us proceed to the next task immediately.
3. A task that takes longer than expected continues until it meets its acceptance criteria.
4. Several tasks may be completed in one day when dependencies and quality allow.
5. Related tasks may be combined where appropriate, preserving every required deliverable and acceptance criterion.
6. Any removal, deferral or material change to a task requires CEO approval.
7. Progress records show completed, pending, blocked and carried-forward work accurately.
8. Quality, security, learning and proper verification are never sacrificed to meet the original schedule.

The roadmap defines what we must accomplish, not how quickly. Progress is determined by verified completion, not calendar dates. Antopier may finish before 90 days or take longer.

## How the next task is chosen
1. The next task is the lowest task ID that is not Done-verified, is not Blocked, has every dependency Done-verified, and has the CEO approval it needs.
2. Elias may complete several tasks in one session. Each keeps its own acceptance check and evidence.
3. Taking a later task ahead of an earlier ready task needs CEO approval.
4. A task that waits on an external event (a real prospect, a signed agreement, a CEO decision) is Blocked with the unblock condition stated. It is not skipped.
5. Removal, deferral, merging, re-ordering or any material change goes into PLAN_CHANGES.md as a change request and waits for CEO approval.

## Statuses
- **Not started**
- **In progress**
- **Blocked:** reason and unblock condition recorded.
- **Done-verified:** acceptance criteria met, evidence recorded, and independent review done where AGENTS.md requires it.
- **Carried-forward:** started but criteria not met; remaining work stated.

"Done" without verification is not a status. Current state is kept in PROGRESS.md; this table shows the status at the last plan revision.

## Task IDs
T-01 to T-90 are permanent and map to legacy Day 1–90 in PLAN_LEDGER.md. IDs are never renumbered or reused. New tasks take T-91 onward.

## CEO decision gates
T-07, T-21, T-30, T-38, T-47, T-49, T-57, T-70, T-78, T-86 and T-90 need an explicit recorded CEO decision. T-45 to T-49 also need a real opportunity or written client agreement as listed.

## Tasks
Deliverable text is verbatim from the original plan. Dependencies and acceptance criteria were added for CEO review and may be amended by the CEO.

### Phase 0 — Baseline and business clarity (original grouping: legacy Days 1–7)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-01 | Repository and Git baseline audit | solution-architect | none | Read-only inventory; identify current branch, status, scripts and docs. | Report lists current branch, clean/dirty status, scripts, workspaces and docs; each item cites a command output or path; `git status` identical before and after. | Not started |
| T-02 | Website and deployment audit | solution-architect | T-01 | Map current website, API, hosting and forms; no edits. | Written map of site pages, API endpoints, forms and hosting; each item verified against code or the live site; unknowns listed; no edits. | Not started |
| T-03 | Current positioning review | product-strategist | T-02 | Compare existing copy with agency-first direction; identify gaps, no copy changes. | Gap list comparing each existing copy block with the agency-first direction; each gap cites its page and section; no copy changed. | Not started |
| T-04 | Founder capability and capacity inventory | product-strategist | CEO input | Document verified skills, portfolio evidence, constraints and gaps. | Capability and capacity record covering skills, portfolio evidence, constraints and weekly hours; each entry labelled verified or CEO-stated; gaps listed; CEO confirms accuracy. | Not started |
| T-05 | Service catalogue draft | product-strategist | T-03, T-04 | Define services, client outcomes, deliverables and exclusions. | Draft catalogue where each service has outcome, deliverables, exclusions and prerequisites; every service labelled hypothesis; no unverifiable claims. | Not started |
| T-06 | Service catalogue challenge | code-reviewer | T-05 | Read-only challenge on feasibility, credibility and overclaims. | Written challenge on feasibility, credibility and overclaims for every service; each objection answered or logged open; reviewer independent of the author. | Not started |
| T-07 | CEO business direction review | delivery-orchestrator | T-01 to T-06 | Present baseline and decisions; wait for CEO. | Briefing presented with baseline, evidence and decisions needed; CEO decisions recorded in DECISIONS.md; nothing changed before the CEO responds. | Not started |

### Phase 1 — Agency offer and customer discovery (original grouping: legacy Days 8–21)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-08 | Service-line opportunity comparison | product-strategist | T-07 | Compare web, software, BI, AI integration and consulting. | Comparison of web, software, BI, AI integration and consulting scored on access, ability to deliver, urgency and economics; criteria and inputs stated; recommendation given. | Not started |
| T-09 | Target-customer hypotheses | customer-discovery | T-07 | Define candidate buyer groups and access assumptions. | Candidate buyer groups each with who, pain, access route and assumptions; assumptions marked untested. | Not started |
| T-10 | Customer interview guide | customer-discovery | T-09 | Draft neutral discovery questions; no outreach. | Interview guide with neutral, non-leading questions, checked against a leading-question test; no outreach made. | Not started |
| T-11 | Prospect qualification criteria | customer-discovery | T-09 | Define lead fit, urgency, budget signals and disqualifiers. | Criteria covering fit, urgency, budget signals and disqualifiers, each with a pass/fail test. | Not started |
| T-12 | Agency positioning and messaging draft | technical-writer | T-08, T-09 | Draft concise positioning options for CEO review. | At least two truthful positioning options checked against the evidence base and reviewed with reviewing-ai-writing; CEO shortlist recorded. | Not started |
| T-13 | Offer 1 definition | product-strategist | T-08 | Define one service package, outcomes, boundaries and acceptance. | Package definition with outcomes, deliverables, boundaries, exclusions, timeline assumptions and acceptance criteria; every deliverable testable. | Not started |
| T-14 | Offer 2 definition | product-strategist | T-08, T-13 | Define a second candidate package for comparison. | Second package in the T-13 format, with a comparison against T-13. | Not started |
| T-15 | Pricing and estimation framework | product-strategist | T-04, T-13, T-14 | Create effort/risk/cost-based pricing worksheet; no unsupported market claims. | Worksheet computing price from effort, risk and cost; one worked example reproducible by hand; assumptions listed; no unsourced market claims. | Not started |
| T-16 | Discovery call workflow | customer-discovery | T-10 | Create call notes and follow-up template. | Call-notes template and follow-up template; used once on a mock call with no missing fields. | Not started |
| T-17 | Proposal and scope template | technical-writer | T-13, T-14 | Draft proposal/SOW outline for legal review. | Proposal/SOW outline with scope, assumptions, exclusions, acceptance, payment and change sections; marked draft for legal review. | Not started |
| T-18 | Delivery process map | solution-architect | T-13, T-14 | Map discovery-to-handover workflow. | Map from discovery to handover with owner, input and output per stage; every stage points to a template or checklist. | Not started |
| T-19 | QA and handover checklist | qa-test-engineer | T-18 | Define testing, acceptance, handover and support checklist. | Checklist covering testing, acceptance, handover and support; every item answerable yes or no. | Not started |
| T-20 | Client data handling baseline | security-reviewer | T-07 | Define safe intake, access, retention and confidentiality principles. | Written principles for intake, access, retention and confidentiality, reviewed by security-reviewer; items needing legal verification listed; no real client data used. | Not started |
| T-21 | CEO initial offer selection gate | delivery-orchestrator | T-13 to T-20 | Present options and wait for CEO approval. | Options presented with evidence; CEO selection recorded in DECISIONS.md; no outreach. | Not started |

### Phase 2 — Service delivery system (original grouping: legacy Days 22–35)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-22 | Lead pipeline design | product-strategist | T-11, T-21 | Design simple lead stages and tracking fields. | Pipeline stages and tracking fields defined; one dummy lead walked through every stage. | Not started |
| T-23 | Outreach message drafts | technical-writer | T-12, T-21 | Prepare personalised, truthful templates; do not send. | Templates drafted and truthful against the evidence base; none sent; CEO reviewed. | Not started |
| T-24 | Portfolio evidence audit | technical-writer | T-04 | List verifiable projects and permission requirements. | List of verifiable projects each with evidence and permission status; unverified items excluded. | Not started |
| T-25 | Website copy gap review | product-strategist | T-03, T-21 | Identify optional updates to reflect approved services; no edits. | List of optional copy updates tied to approved services; no website file changed. | Not started |
| T-26 | Website technical quality review | qa-test-engineer | T-02 | Review build/test/lint status and accessibility approach. | Report of build, test and lint status and accessibility approach with command outputs; no source changed. | Not started |
| T-27 | Service demo requirements | product-strategist | T-21 | Define a demo that supports the chosen offer. | Demo requirements tied to the chosen offer: audience, scenario, data needs and success measure. | Not started |
| T-28 | BI service discovery (if selected) | data-analytics-engineer | T-21 (if BI selected) | Map customer data needs and possible dashboard outputs. | If BI is selected: data needs and possible dashboard outputs mapped with sources. If not selected: CEO records 'not selected' (CEO approval). | Not started |
| T-29 | AI integration service safety review | ai-engineer | T-21 (if AI integration selected) | Define suitable/unsuitable use cases and human oversight. | If AI integration is selected: suitable and unsuitable use cases and human-oversight rules, reviewed by security-reviewer. If not selected: CEO records 'not selected'. | Not started |
| T-30 | CEO offer and positioning approval | delivery-orchestrator | T-21, T-27 to T-29 as applicable | Present service offer, target segment, messaging and risks. | Brief with service offer, target segment, messaging and risks; CEO decision recorded. | Not started |
| T-31 | Discovery and requirements template | product-strategist | T-16 | Create reusable client discovery template. | Reusable client discovery template used once on a dummy client with no gaps. | Not started |
| T-32 | Scope/change-control template | technical-writer | T-17 | Define assumptions, exclusions, acceptance and change requests. | Template defining assumptions, exclusions, acceptance and change requests; consistent with T-17. | Not started |
| T-33 | Technical delivery checklist | solution-architect | T-18, T-19 | Define repo, environments, code review and deployment gates. | Checklist for repo, environments, code review and deployment gates; each gate names its approver. | Not started |
| T-34 | Client communication cadence | technical-writer | T-18 | Draft kickoff, weekly update, demo and handover messages. | Kickoff, weekly update, demo and handover message templates; no commitments beyond scope. | Not started |
| T-35 | Service delivery economics model | product-strategist | T-15 | Create a simple way to track hours, costs, margin and support. | Model tracking hours, costs, margin and support; one worked example reconciles. | Not started |

### Phase 3 — First paid work and learning (original grouping: legacy Days 36–49)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-36 | Synthetic portfolio demo plan | data-analytics-engineer | T-27 (if BI selected) | If BI selected, define synthetic demo data; otherwise use selected service. | If BI is selected: synthetic data plan with fields and volumes and no real data; otherwise the selected service's equivalent. | Not started |
| T-37 | Demo QA criteria | qa-test-engineer | T-27, T-36 as applicable | Define demo acceptance and truthful presentation rules. | Demo acceptance criteria and truthful-presentation rules; each criterion checkable. | Not started |
| T-38 | CEO delivery-system approval | delivery-orchestrator | T-17 to T-19, T-31 to T-35 | Present reusable delivery process; wait. | Reusable delivery process presented; CEO decision recorded. | Not started |
| T-39 | Prospect shortlist criteria | customer-discovery | T-11, T-30 | Define how CEO identifies real prospects; no scraping/contact. | Documented method for the CEO to identify real prospects; no scraping or contact. | Not started |
| T-40 | Discovery conversation preparation | customer-discovery | T-10, T-39 | Prepare questions for actual prospect conversations. | Question set tailored to the first real prospects; neutral; CEO reviewed. | Not started |
| T-41 | CEO-led discovery session 1 | customer-discovery | T-40; CEO schedules the session | Summarise only notes provided by CEO. | Summary built only from CEO-provided notes; facts separated from interpretation; open questions listed. | Not started |
| T-42 | CEO-led discovery session 2 | customer-discovery | T-41 | Summarise pain, current workaround, urgency and buyer. | Summary of pain, current workaround, urgency and buyer, from CEO notes only. | Not started |
| T-43 | CEO-led discovery session 3 | customer-discovery | T-42 | Capture objections, budget signals and disconfirming evidence. | Summary of objections, budget signals and disconfirming evidence, from CEO notes only. | Not started |
| T-44 | Opportunity qualification review | product-strategist | T-41 to T-43 | Assess actual conversations against chosen offer. | Assessment of each real conversation against the chosen offer with a fit rating and evidence. | Not started |
| T-45 | Proposal draft for qualified lead | technical-writer | T-44; CEO supplies a real opportunity and requests a proposal | Only if CEO supplies a real opportunity and asks for a proposal. | Only when the CEO supplies a real opportunity and asks: proposal draft per the T-17 template, assumptions flagged, not sent. | Not started |
| T-46 | Proposal risk and scope review | solution-architect | T-45 | Review assumptions, feasibility, timeline and exclusions. | Written review of assumptions, feasibility, timeline and exclusions; open risks listed. | Not started |
| T-47 | CEO proposal approval | delivery-orchestrator | T-46 | Present proposal for approval; do not send. | Proposal presented with risks and cost; CEO decision recorded; not sent by an agent. | Not started |
| T-48 | Client delivery plan (if won) | solution-architect | T-47; written client agreement | Create project plan only after written client agreement. | Only after a written client agreement: project plan with milestones, owners and risks. | Not started |
| T-49 | Implementation task proposal (if won) | delivery-orchestrator | T-48 | Present exact task, tests, costs and rollback; wait for approval. | Task proposal with objective, tests, costs and rollback; CEO decision recorded before any work. | Not started |

### Phase 4 — Standardise repeatable services (original grouping: legacy Days 50–63)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-50 | Client project QA review | qa-test-engineer | T-49; delivered work exists | Review approved work against acceptance criteria. | Only for delivered work: review against the agreed acceptance criteria with evidence for each; failures listed. | Not started |
| T-51 | Delivery retrospective | product-strategist | T-50 or another completed engagement | Capture actual effort, scope changes, customer feedback and margin. | Retrospective with actual effort, scope changes, feedback and margin drawn from real records. | Not started |
| T-52 | Reusable service template review | technical-writer | T-51 | Improve templates from evidence, not assumptions. | Each template improvement linked to evidence from actual use. | Not started |
| T-53 | Retainer/reporting opportunity review | product-strategist | T-51 | Assess recurring customer value; no forced subscription. | Assessment of recurring value per customer from real evidence; no subscription proposed without evidence. | Not started |
| T-54 | Repeated customer problem analysis | customer-discovery | T-41 to T-44 (and T-51 if available) | Compare only real customer evidence across conversations/projects. | Analysis comparing only real customer evidence across conversations or projects; sample size stated. | Not started |
| T-55 | BI workflow repetition check | data-analytics-engineer | T-54 (if BI) | Identify common input formats, metrics and recurring manual work. | If BI: common input formats, metrics and manual work documented with sources. | Not started |
| T-56 | Productisation options comparison | solution-architect | T-54, T-55 | Compare service, reusable templates and SaaS. | Comparison of service, reusable templates and SaaS using T-54 and T-55 evidence; recommendation with stated confidence. | Not started |
| T-57 | CEO product-discovery gate | delivery-orchestrator | T-56 | Decide whether Antopier Insights discovery is justified. | Decision brief with evidence against the CEO-set thresholds; CEO decision recorded. | Not started |
| T-58 | Antopier Insights discovery brief | product-strategist | T-57 (CEO approves discovery) | Define problem, segment and outcome from evidence. | After CEO approval at T-57: brief defining problem, segment and outcome, each citing evidence. | Not started |
| T-59 | Insights user interviews | customer-discovery | T-58; CEO-led approved access | Prepare/run only with CEO-led approved access; synthesise supplied notes. | CEO-led, approved access only: interview preparation plus synthesis of supplied notes. | Not started |
| T-60 | Insights metric dictionary | data-analytics-engineer | T-58 | Define metrics, formulas, fields and edge cases. | Dictionary with each metric's formula, fields, edge cases and an example. | Not started |
| T-61 | Synthetic dataset specification | data-analytics-engineer | T-60 | Specify fictional dataset for one validated use case. | Specification of a fictional dataset for one validated use case; no real data. | Not started |
| T-62 | Insights service prototype plan | frontend-engineer | T-58, T-59 | Wireframe/manual prototype only; no production code. | Wireframe or manual prototype plan; no production code. | Not started |
| T-63 | Prototype usability review | qa-test-engineer | T-62 | Define usability questions and success evidence. | Usability questions and success evidence defined before any testing. | Not started |

### Phase 5 — Antopier Insights product discovery (original grouping: legacy Days 64–76)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-64 | Insights PRD review | product-strategist | T-58 to T-63 | Draft/revise PRD based on evidence. | PRD draft or revision where each requirement traces to evidence. | Not started |
| T-65 | Architecture boundary options | solution-architect | T-64 | Compare separate repo, separate workspace and isolated app. | Comparison of separate repo, separate workspace and isolated app on maintainability, portability and cost. | Not started |
| T-66 | Supabase/Postgres data design | supabase-database-engineer | T-65 | Draft schema and tenant model; no migrations. | Schema and tenant model drafted; no migrations run. | Not started |
| T-67 | Security threat model | security-reviewer | T-66 | Review RLS, storage, upload and AI risks. | Threat model covering RLS, storage, upload and AI risks with severity and mitigation. | Not started |
| T-68 | AI feasibility and privacy review | ai-engineer | T-64 | Assess if AI is necessary; no API spend or real data. | Assessment of whether AI is necessary; no API spend and no real data. | Not started |
| T-69 | Cost and hosting estimate | devops-reliability | T-65 | Estimate local/dev/staging/pilot costs. | Cost estimates for local, dev, staging and pilot with assumptions. | Not started |
| T-70 | CEO product definition gate | delivery-orchestrator | T-64 to T-69 | Approve, defer or reject product build. | Decision brief; CEO decision (approve, defer or reject) recorded. | Not started |
| T-71 | Architecture decision record | solution-architect | T-70 (CEO approves the build) | Document chosen option and trade-offs if approved. | If approved: ADR recorded in DECISIONS.md with chosen option and trade-offs. | Not started |
| T-72 | RLS and storage policy plan | supabase-database-engineer | T-66, T-71 | Prepare explicit allow/deny tests. | Allow/deny test list for RLS and storage policies; each case has an expected result. | Not started |
| T-73 | Upload and parsing security plan | security-reviewer | T-67, T-71 | Define file validation, size limits and safe processing. | Plan covering file validation, size limits and safe processing. | Not started |
| T-74 | Testing and observability plan | qa-test-engineer | T-71 | Define test pyramid, monitoring and alerts. | Test pyramid, monitoring and alerts plan with owners. | Not started |
| T-75 | Backup and recovery plan | devops-reliability | T-71 | Define recovery objectives and restore evidence required. | Recovery objectives and the required restore evidence defined. | Not started |
| T-76 | Implementation task breakdown | delivery-orchestrator | T-72 to T-75 | Create small tasks with dependencies and acceptance criteria. | Small implementation tasks each with dependencies and acceptance criteria. | Not started |

### Phase 6 — Technical design and implementation decision (original grouping: legacy Days 77–84)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-77 | Independent architecture review | code-reviewer | T-71 to T-76 | Challenge maintainability, portability and complexity. | Independent review report on maintainability, portability and complexity with findings. | Not started |
| T-78 | CEO technical approval gate | delivery-orchestrator | T-76, T-77 | Wait for exact implementation and budget approval. | Decision brief with exact task and budget; explicit CEO approval recorded. | Not started |
| T-79 | 90-day business metrics review | product-strategist | T-44, T-51 (verified results available) | Review verified pipeline, revenue, delivery and learning. | Verified pipeline, revenue, delivery and learning figures from real records; unverified items excluded. | Not started |
| T-80 | Customer feedback synthesis | customer-discovery | T-44 | Summarise real feedback and unresolved problems. | Synthesis of real feedback and unresolved problems with sources. | Not started |
| T-81 | Service catalogue revision proposal | product-strategist | T-79, T-80 | Recommend evidence-led offer changes. | Evidence-led recommendations for offer changes; each cites evidence. | Not started |
| T-82 | Website content change proposal | technical-writer | T-81; CEO approves website change scope | Propose precise copy changes only if CEO approved. | Only if CEO approved: precise copy changes proposed; nothing edited. | Not started |
| T-83 | Security and privacy gap review | security-reviewer | T-67, T-73 if a product pilot is proposed; otherwise T-20 | List blockers before real customer data/product pilot. | List of blockers before any real customer data or product pilot; each severity-rated. | Not started |
| T-84 | Financial and capacity review | product-strategist | T-35, T-79 | Review available budget, time and delivery capacity. | Budget, time and capacity reviewed from actual records. | Not started |

### Phase 7 — Review and next-quarter strategy (original grouping: legacy Days 85–90)

| ID | Task | Lead | Depends on | Deliverable / boundary (original) | Acceptance criteria (proposed) | Status |
|---|---|---|---|---|---|---|
| T-85 | Next-quarter priorities | delivery-orchestrator | T-79 to T-84 | Draft next-quarter plan with dependencies. | Next-quarter plan with priorities, dependencies and owners. | Not started |
| T-86 | CEO roadmap review | delivery-orchestrator | T-85 | Present continue/pivot/pause/invest choices. | Options (continue, pivot, pause, invest) presented with evidence; CEO decision recorded. | Not started |
| T-87 | Next-quarter daily plan draft | technical-writer | T-86 | Draft next 90 days after CEO decision. | Draft of the next plan, written after the CEO decision at T-86. | Not started |
| T-88 | Final 90-day retrospective | technical-writer | T-86 | Record outcomes, evidence, lessons and unresolved risks. | Retrospective with outcomes, evidence, lessons and unresolved risks. | Not started |
| T-89 | CEO decision log and risk register update | delivery-orchestrator | T-86 | Consolidate approved decisions, open risks, deferred work and required approvals. | Consolidated decisions, open risks, deferred work and required approvals, matching DECISIONS.md and RISK_REGISTER.md. | Not started |
| T-90 | 90-day closeout and next-quarter approval | product-strategist | T-87 to T-89 | Present evidence-based agency and product priorities; wait for CEO approval. | Evidence-based priorities presented; CEO approval of the next quarter recorded. | Not started |

## Evidence and records
Completion evidence, files changed, tests and decisions are recorded per session as described in OPERATING_MODEL.md and indexed in PROGRESS.md. Risks live in RISK_REGISTER.md. Proposed changes to this plan live in PLAN_CHANGES.md.

## Scheduling rule
An optional recurring Claude Code routine, if the CEO enables one, reads PROGRESS.md and this plan and prepares the briefing for the next ready task. It never uses the calendar date to choose a task, and it must not perform unapproved implementation, spend money, contact prospects, handle real customer data, merge or deploy. The time and timezone are an open CEO decision (OD-07).
