# Antopier Insights — Product & Delivery Workspace

**Parent company:** Antopier Technologies  
**Product:** Antopier Insights  
**Status:** Discovery and planning; implementation not yet authorised  
**CEO:** Human founder  
**AI Technical Co-founder & CTO persona:** Elias Voss (Claude-powered; not a legal or equity co-founder)

## Start here
1. PRODUCT_STRATEGY.md — positioning, target market hypotheses and validation.
2. PRD.md — MVP scope, journeys and requirements.
3. ARCHITECTURE.md — proposed technical architecture.
4. SECURITY.md — tenant isolation, threat model and recovery.
5. ROADMAP.md — phases, deliverables and approval gates.
6. DAILY_PLAN.md — 90 days, one task per calendar day and named lead agent.
7. AGENTS.md — agent roles, delegation and quality gates.
8. DECISIONS.md — decisions and open questions.
9. OPERATING_MODEL.md — daily briefing and scheduling instructions.

## Important separation
Root docs/PRD.md, docs/ARCHITECTURE.md and docs/design-brief.md describe the existing Antopier Technologies marketing website. Preserve them. Do not overwrite them with Antopier Insights requirements.

## Current decisions
- Supabase + PostgreSQL selected as the proposed backend foundation.
- Existing marketing website is already built and should be preserved.
- Customer discovery must precede substantial product development.
- Use synthetic data for demos until a compliant customer-data workflow is approved.
- No paid infrastructure, real customer data or implementation is authorised by these documents alone.

The orchestrator reads the current daily task, checks dependencies and approvals, prepares specialist prompts, delegates and reports to the CEO. A single daily Claude Code scheduled routine may be configured after the CEO confirms its time and timezone; it must not silently implement tasks.
