# Proposed edits to existing files (exact old → new)

Nothing here is applied. Full replacement files for DAILY_PLAN.md, OPERATING_MODEL.md, DECISIONS.md and `.claude/skills/antopier-command/SKILL.md` are in this staging folder at the same relative paths. New files: PLAN_LEDGER.md, PLAN_CHANGES.md, PROGRESS.md, RISK_REGISTER.md.

Consistency rule: the authoritative philosophy text is the eight principles in ROADMAP.md. DAILY_PLAN.md repeats them verbatim. OPERATING_MODEL.md, the skill and CLAUDE.md carry the operational summary with a pointer. Verification includes a grep that all five files state "verified completion, not calendar" and "CEO approval" for changes.

## 1. docs/insights/ROADMAP.md

**Line 3**
- Old: `**Planning window:** 90 days, 12 November 2026 – 9 February 2027  `
- New: `**Planning framework:** 90 planned tasks. The original window (12 November 2026 – 9 February 2027) is a reference, not a deadline. Progress is measured by verified completion.  `

**Insert after the "North star" section (before "Phase 0")**
```
## Execution philosophy
The 90 days are a planning framework, not a rigid deadline. We work according to actual progress, not the calendar.

1. We complete every required task and satisfy its acceptance criteria. Tasks are never skipped silently.
2. A task completed and verified earlier than planned lets us proceed to the next task immediately.
3. A task that takes longer than expected continues until it meets its acceptance criteria.
4. Several tasks may be completed in one day when dependencies and quality allow.
5. Related tasks may be combined where appropriate, preserving every required deliverable and acceptance criterion.
6. Any removal, deferral or material change to a task requires CEO approval.
7. Progress records show completed, pending, blocked and carried-forward work accurately.
8. Quality, security, learning and proper verification are never sacrificed to meet the original schedule.

The roadmap defines what we must accomplish, not how quickly. Progress is determined by verified completion, not calendar dates. Antopier may finish before 90 days or take longer. Task detail, dependencies and acceptance criteria are in DAILY_PLAN.md.
```

**Phase headings** (the task grouping is unchanged; only the label changes)
- `## Phase 0 — Baseline and business clarity (Days 1–7)` → `## Phase 0 — Baseline and business clarity (T-01 to T-07; original Days 1–7)`
- `## Phase 1 — Agency offer and customer discovery (Days 8–21)` → `... (T-08 to T-21; original Days 8–21)`
- `## Phase 2 — Service delivery system (Days 22–35)` → `... (T-22 to T-35; original Days 22–35)`
- `## Phase 3 — First paid work and learning (Days 36–49)` → `... (T-36 to T-49; original Days 36–49)`
- `## Phase 4 — Standardise repeatable services (Days 50–63)` → `... (T-50 to T-63; original Days 50–63)`
- `## Phase 5 — Antopier Insights product discovery (Days 64–76)` → `... (T-64 to T-76; original Days 64–76)`
- `## Phase 6 — Technical design and implementation decision (Days 77–84)` → `... (T-77 to T-84; original Days 77–84)`
- `## Phase 7 — Review and next-quarter strategy (Days 85–90)` → `... (T-85 to T-90; original Days 85–90)`

The roadmap's phase ranges and the plan's task placement differ in Phases 5 to 7 (for example T-70 and T-78 are gates inside ranges the roadmap assigns elsewhere). This is raised as CR-07 and left unchanged.

**Append to "Stop/go rules"**
- New: `- Gates open on verified evidence and CEO decisions, not on dates.`

## 2. CLAUDE.md

**Under "Agent coordination", replace the third bullet**
- Old: `- The orchestrator reads the daily plan, prepares detailed prompts, assigns a lead specialist and reviewers, checks dependencies, reconciles findings and reports progress. The CEO should not have to prompt specialists.`
- New: `- The orchestrator reads PROGRESS.md and the task plan (DAILY_PLAN.md), chooses the next ready task by dependency, prepares detailed prompts, assigns a lead specialist and reviewers, reconciles findings, records progress and reports. The CEO should not have to prompt specialists.`

**Insert a new section before "Agent coordination"**
```
## Execution philosophy
Progress is verified completion, not calendar time. The 90-day plan is a framework, not a deadline (authoritative text: docs/insights/ROADMAP.md "Execution philosophy").
- Complete every required task to its acceptance criteria; never skip silently.
- Proceed immediately after a verified task; continue a long task until its criteria are met; take several tasks in a session when dependencies and quality allow.
- Combining, removing, deferring, re-ordering or materially changing a task needs CEO approval through a change request in docs/insights/PLAN_CHANGES.md.
- Never trade quality, security, learning or verification for speed.
- Keep accurate records: PROGRESS.md, session records in docs/insights/progress/, and RISK_REGISTER.md.
```

**Replace "Definition of done" and "Daily report"**
- Old (done): `Each task requires acceptance criteria, test/verification evidence, security impact assessment where relevant, documentation updates, reviewer findings addressed and CEO acceptance where gated.`
- New (done): `A task is Done-verified only when every acceptance criterion is met with recorded evidence, security impact is assessed where relevant, documentation is updated, reviewer findings are addressed and CEO acceptance is recorded where gated.`
- Old heading: `## Daily report`
- New heading: `## Session report`
- Old: `Report today's task, assigned agents, work completed, evidence/tests, files changed, decisions needed, risks/blockers and next task. The source of truth is docs/insights/.`
- New: `Report the tasks worked and their status (not started, in progress, blocked, done-verified, carried-forward), assigned agents, skills selected and used, work completed, evidence/tests, acceptance criteria met, files changed, decisions needed, risks/blockers, carry-forward and the next ready task. The source of truth is docs/insights/.`

## 3. docs/insights/AGENTS.md
- Old: `| delivery-orchestrator | Reads daily plan, creates specialist prompts, routes tasks, checks approvals/dependencies, reconciles reviews and reports to CEO. |`
- New: `| delivery-orchestrator | Reads the progress record and task plan, picks the next ready task by dependency, creates specialist prompts, routes tasks, checks approvals/dependencies, reconciles reviews, records progress and reports to CEO. |`

## 4. docs/insights/README.md
- Old line 11: `2. ROADMAP.md — 90-day agency-first phases and decision gates.`
- New: `2. ROADMAP.md — agency-first phases, decision gates and the execution philosophy (progress by verified completion, not calendar).`
- Old line 12: `3. DAILY_PLAN.md — one assigned task for every day, with a lead agent.`
- New: `3. DAILY_PLAN.md — the 90-task plan (T-01 to T-90) with lead agent, dependencies, deliverable, acceptance criteria and status.`
- Old line 14: `5. OPERATING_MODEL.md — daily orchestration and scheduling.`
- New: `5. OPERATING_MODEL.md — session start/end procedure, progress records and optional scheduling.`
- Insert after item 8 (new items 9–12):
  - `9. PROGRESS.md — current position, blockers, carry-forward and session records (docs/insights/progress/).`
  - `10. PLAN_LEDGER.md — immutable record mapping the original 90 tasks to task IDs.`
  - `11. PLAN_CHANGES.md — change requests awaiting or recording CEO approval.`
  - `12. RISK_REGISTER.md — living risk register.`

## 5. .claude/agents/delivery-orchestrator.md (frontmatter description only)
- Old: `description: Coordinates the daily plan, prepares prompts for specialists, checks dependencies and CEO approval, reconciles reviews, updates progress and briefs the CEO. Never authorises implementation.`
- New: `description: Coordinates the task plan and progress record, picks the next ready task by dependency, prepares prompts for specialists, checks dependencies and CEO approval, reconciles reviews, updates progress and briefs the CEO. Never authorises implementation.`

## 6. docs/insights/SKILLS_INVENTORY.md
- Old: `the daily orchestration workflow. It selects the agents and skills for each task.`
- New: `the task-driven orchestration workflow (next ready task by dependency, with session records). It selects the agents and skills for each task.`

## 7. Files not changed
Application code, root docs (docs/PRD.md, docs/ARCHITECTURE.md, docs/design-brief.md), the other 13 agent files, PRODUCT_STRATEGY.md, PRD.md, ARCHITECTURE.md and SECURITY.md in docs/insights. docs/PRD.md mentions a "90-day review" for website metrics; that is unrelated to this plan and is left alone.

## 8. Reference impact of renaming DAILY_PLAN.md

References found (read-only grep; no code or config references):
- docs/insights/OPERATING_MODEL.md (3 lines), docs/insights/README.md (1), .claude/skills/antopier-command/SKILL.md (2), plus wording "daily plan" in AGENTS.md, CLAUDE.md and the delivery-orchestrator agent. No `.ts`, `.tsx`, `.json`, `.yml` or memory-file references.

Options:
- **A (proposed): keep the filename DAILY_PLAN.md** and change its content and title. Zero broken links. History and traceability stay intact. The name is slightly misleading, noted in its header.
- **B: rename to TASK_PLAN.md.** Needs the same edits plus `git mv`, updates in the 3 files with explicit links, and the wording changes. Git preserves history, but old links, notes and future session memory of "DAILY_PLAN.md" break.

The staged content assumes Option A. This is open decision OD-15.
