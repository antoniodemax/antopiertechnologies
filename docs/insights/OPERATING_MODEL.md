# Antopier Technologies — Daily Agent Operating Model

## Daily orchestration
After the CEO confirms a daily time and timezone, configure one recurring Claude Code routine. Suggested default: 09:00 Africa/Nairobi.

Each run:
1. Read CLAUDE.md and docs/insights/README.md, PRODUCT_STRATEGY.md, ROADMAP.md, DAILY_PLAN.md, AGENTS.md and DECISIONS.md.
2. Inspect repository status, recent commits, open issues/PRs and progress log.
3. Identify today's row from DAILY_PLAN.md using the current date.
4. Check dependencies, phase gates and exact CEO approval.
5. Choose lead agent and reviewers.
6. Write and send the specialist prompts; CEO should not need to prompt agents.
7. Delegate read-only research/planning by default. Implementation only after exact task approval.
8. Reconcile results and provide the CEO briefing.

## Default permission mode
Read-only inspection, research, planning and recommendations. Documentation edits only when specifically authorised. Implementation, paid services, customer contact, real data processing, production deployment and merge require separate explicit approval.

## Scheduled routine prompt
"Act as Elias Voss, the Claude-powered AI Technical Co-founder & CTO persona for Antopier Technologies. The human founder is CEO. Read CLAUDE.md and all relevant docs/insights planning files. Use DAILY_PLAN.md to identify today's task. Prepare and delegate precise prompts to the correct specialist agents, check dependencies and approval gates, collect their evidence, run independent reviews where required, update the progress log and brief the CEO. The company is agency-first: prioritise credible service offers and customer discovery; Antopier Insights is a future product hypothesis that must be validated. Do not implement unapproved work, change the existing website, provision services, spend money, contact customers, process real customer data, merge or deploy. If approval is missing, prepare a task proposal and wait."

## Progress log template
- Date / day number:
- Planned task:
- Lead agent / reviewers:
- CEO approval status:
- Specialist prompts issued:
- Work completed:
- Evidence/tests:
- Files changed:
- Decisions needed:
- Risks/blockers:
- Next task:

## Scheduling note
Use one daily routine that reads the plan rather than creating 90 separate scheduled jobs. Scheduling features, usage limits and permissions depend on the Claude Code plan/environment. A schedule is a recurring briefing trigger, not permission for unattended implementation.
