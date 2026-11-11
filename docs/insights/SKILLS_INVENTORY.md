# Skills Inventory

Single source of truth for which Claude Code skills Antopier uses, and which agents use them. The policy itself lives in CLAUDE.md ("Skills Utilisation Policy"). Re-verify this file against the installed plugins whenever plugins change (see "Verification").

**Inventory date:** 2026-11-11. Read from the plugin caches in `~/.claude/plugins/cache/` and the session skill list.

## How to read this

- **Invocation:** `M` = the model can invoke it with the Skill tool. `U` = user-only (`disable-model-invocation: true`): the CEO types the command, and agents recommend it instead of running it.
- **Command:** plugin skills are `/<plugin>:<skill>`, for example `/mattpocock-skills:tdd`. Built-in and project skills have no prefix.
- **Agent codes:** DO delivery-orchestrator, PS product-strategist, CD customer-discovery, SA solution-architect, BE backend-engineer, FE frontend-engineer, DB supabase-database-engineer, SEC security-reviewer, DA data-analytics-engineer, AI ai-engineer, QA qa-test-engineer, CR code-reviewer, OPS devops-reliability, TW technical-writer.
- **Approval:** a skill is an instruction set. Where a skill's own steps commit, push, publish, file issues, deploy or implement, the CEO approval gates in CLAUDE.md still apply first.

## Installed collections

| Collection | Version on disk | Skills | Source |
|---|---|---|---|
| superpowers | 7.0.0 | 15 | `superpowers@claude-plugins-official` |
| mattpocock-skills | 1.3.1 | 27 registered (38 on disk) | `mattpocock-skills@mattpocock` and `@claude-plugins-official` |
| fluent-ai-skills | 0.6.0 | 5 | `fluent-ai-skills@fluent` (`fluent-ke/fluent-plugins`) |
| frontend-design | 1.1.1 | 1 | `frontend-design@claude-plugins-official` |
| antopier-command | project | 1 | `.claude/skills/antopier-command/` |

## Superpowers (process and workflow), all `M`

Command prefix: `/superpowers:`.

| Skill | What it does | Use when | Agents | Combine with |
|---|---|---|---|---|
| using-superpowers | Meta rule: check for skills before acting | Start of every session | all | all |
| brainstorming | Turns an idea into a design before any build | New feature, component or behaviour change | DO, PS, SA | writing-plans, mattpocock `grilling` |
| writing-plans | Writes a step-by-step implementation plan | Approved spec, multi-step work | DO, SA | executing-plans, subagent-driven-development |
| executing-plans | Runs a plan inline with checkpoints | Approved plan, no subagents | BE, FE, DB | test-driven-development, verification-before-completion |
| subagent-driven-development | Runs plan tasks through subagents with review | Plan with independent tasks | DO | dispatching-parallel-agents, requesting-code-review |
| dispatching-parallel-agents | Fans out independent work | Two or more independent tasks | DO | subagent-driven-development |
| test-driven-development | Test first, then code | Any feature or bugfix, before implementation | BE, FE, DB, DA, QA | mattpocock `tdd` |
| systematic-debugging | Root cause before fix | Any bug, failing test, unexpected behaviour | BE, FE, DB, QA, SEC, OPS | mattpocock `diagnosing-bugs` |
| verification-before-completion | Evidence before success claims | Before saying done, committing, or opening a PR | all implementers | requesting-code-review |
| requesting-code-review | Prepares work for review | Task or feature complete | BE, FE, DB, CR | mattpocock `code-review` |
| receiving-code-review | Handles review feedback with rigour | Reviewer findings arrive | BE, FE, DB, TW | requesting-code-review |
| using-git-worktrees | Isolated workspace for feature work | Approved implementation starting | BE, FE, DB | executing-plans |
| finishing-a-development-branch | Decides merge, PR or cleanup | Implementation complete and verified | DO | verification-before-completion |
| writing-skills | Creates and tests skills | Authoring or editing a skill | TW | mattpocock `writing-for-agents` |
| diagnosing-superpowers | Diagnoses a session that went wrong | Repeated work, ignored plans, a skill that did not fire | DO | none |

## Matt Pocock 1.3.1 (engineering and productivity)

Command prefix: `/mattpocock-skills:`. Not TypeScript-specific: the collection covers specs, tickets, test-first work, debugging, review, domain modelling and agent-facing writing.

### Engineering, model-invocable (`M`)

| Skill | What it does | Use when | Agents | Combine with |
|---|---|---|---|---|
| tdd | Red-green-refactor and integration-first testing | Building features or fixing bugs test-first | BE, FE, DB, QA | superpowers test-driven-development |
| diagnosing-bugs | Diagnosis loop for hard bugs and regressions | Something is broken, throwing, failing or slow | BE, FE, QA, DA | superpowers systematic-debugging |
| code-review | Reviews changes on Standards and Spec axes with parallel subagents | Reviewing a branch, PR or working changes | CR, SEC, QA | superpowers requesting-code-review |
| codebase-design | Deep-module vocabulary, seams, testability | Designing or improving module interfaces | SA, BE, FE | domain-modeling |
| domain-modeling | Glossary and ADR discipline | Naming concepts, recording decisions, schema vocabulary | SA, PS, DB, DA, TW | `docs/insights/DECISIONS.md` |
| prototype | Throwaway prototype to answer a design question | Checking a state model or exploring a UI | FE, SA, PS | frontend-design |
| research | Primary-source investigation written to a Markdown file | Docs, API facts or topic legwork | SA, PS, CD, AI, OPS | grilling |
| pr | Pull request body | Writing a PR description | TW, BE, FE | finishing-a-development-branch |
| wizard | Interactive bash walkthrough for human-only steps | Provisioning, credentials, dashboards, one-off cutovers | OPS, DB | none |

### Engineering, user-only (`U`): recommend to the CEO

| Skill | What it does | Recommend when | Agents who may recommend |
|---|---|---|---|
| ask-matt | Router: which skill fits | Unsure which flow suits a situation | DO |
| grill-with-docs | Interview that also writes ADRs and glossary | Sharpening a plan with durable docs | PS, SA |
| to-spec | Conversation into a spec on the tracker | A discussed plan needs a spec (publishes to a tracker: needs CEO approval) | PS, DO |
| to-tickets | Spec into tracer-bullet tickets | Spec approved, tickets needed (publishes to a tracker: needs CEO approval) | DO |
| implement | Implement from spec or tickets | CEO approves implementation of a task | BE, FE |
| implement-spec | Implement `/to-spec` and `/to-tickets` output | As above | BE, FE |
| improve-codebase-architecture | Deepening report, then grilling | Architecture review of the existing repo | SA |
| triage | Issue and PR state machine | Backlog or inbound issues | DO |
| wayfinder | Maps work too large for one session | Multi-week initiatives | DO, SA |
| retro | Session retrospective | End of a significant session | DO |
| setup-matt-pocock-skills | One-off repo setup for engineering skills (tracker, labels, docs) | Before first use of to-spec, to-tickets, triage | DO |

### Productivity

| Skill | Invocation | What it does | Use when | Agents |
|---|---|---|---|---|
| grilling | M | Relentless stress-test of a plan | Decisions, offers, designs | PS, CD, DO, SA |
| writing-for-agents | M | Writing for agent consumption | Editing CLAUDE.md, AGENTS.md, skills, agent files | TW, DO |
| grill-me | U | Interview to sharpen a plan | CEO wants to be questioned | PS, DO |
| handoff | U | Compacts a conversation for another agent | Pausing or switching sessions | DO |
| teach | U | Teaches a concept in this workspace | CEO wants to learn something | TW |
| to-questionnaire | U | Questionnaire for someone else to answer | A decision depends on a third party | CD, PS |
| wait-what | U | Re-pitches an unclear message | CEO did not follow the last message | any |

### On disk but not registered in the plugin

Not offered in the session, so not available. Do not recommend them by name unless a later plugin version registers them.

- `in-progress/`: chief-of-staff, claude-handoff, loop-me, setup-ts-deep-modules, writing-beats, writing-fragments, writing-shape.
- `misc/`: git-guardrails-claude-code, migrate-to-shoehorn, scaffold-exercises, setup-pre-commit. The two TypeScript-specific skills are `setup-ts-deep-modules` and `migrate-to-shoehorn`, both unregistered.

## Fluent AI Skills 0.6.0 (all `M`)

Command prefix: `/fluent-ai-skills:`.

| Skill | What it does | Use when | Agents | Combine with |
|---|---|---|---|---|
| building-your-own-agent | Turns a repeated job into an agent (folder or Claude Project) from a real specimen | Packaging a repeatable job, writing agent instructions | AI, DO, TW | mattpocock `writing-for-agents` |
| doing-big-tasks | Structure for large multi-step work and honest completion | Builds, migrations, launches, multi-day work | DO, SA | superpowers writing-plans |
| designing-visual-assets | Design and critique of posters, social, slides, banners | Any visual asset, or a design that reads flat or generic | FE, PS | frontend-design |
| reviewing-ai-writing | Removes AI tells from text people read | Proposals, site copy, docs, client emails, Kira prompts | TW, PS, CD, AI | none |
| about-fluent | Feedback to Fluent, about Fluent | The CEO asks | none | none |

## Design

| Skill | Command | Invocation | What it does | Use when | Agents | Combine with |
|---|---|---|---|---|---|---|
| frontend-design | `/frontend-design:frontend-design` | M | Distinctive visual direction for new or reshaped UI | New UI, or an approved redesign | FE | designing-visual-assets, prototype |
| dataviz | `/dataviz` | M | Chart and dashboard design system | Any chart, dashboard or KPI tile | DA, FE | frontend-design |

The existing website's brand and structure are protected: design skills inform approved work and are not permission to restyle it.

## Claude Code built-ins used by Antopier

Listed without a plugin prefix in the session. Verify they still exist before relying on them.

| Skill | Use when | Agents | Notes |
|---|---|---|---|
| code-review | Correctness review of a diff, PR or branch | CR | Read-only use: do not pass `--fix` or `--comment` without CEO approval |
| security-review | Security review of pending changes | SEC | Complements mattpocock `code-review` |
| simplify | Reuse and efficiency cleanup, applies fixes | BE, FE | Edits code, so approved implementation only |
| run | Launch the app and confirm a change works | QA, FE, BE | Needs a task that approves running the app |
| claude-api | Claude API and SDK reference | AI, BE | Before any Claude or Anthropic API code |
| loop | Recurring checks | OPS, DO | Scheduling needs CEO approval |
| init, update-config, fewer-permission-prompts, keybindings-help, plugin-authoring, workflow-authoring | Harness configuration and authoring | DO, TW | Changes settings, so CEO approval first |

## Project skill and agents

- **`/antopier-command`** (`.claude/skills/antopier-command/`): the daily orchestration workflow. It selects the agents and skills for each task.
- **14 specialist agents** in `.claude/agents/`: each lists its skills in a "Skills" section.

## Installed but not used by default

- **Clerk (8 skills):** clerk-backend-api, clerk-cli, clerk-custom-ui, clerk-nextjs-patterns, clerk-orgs, clerk-setup, clerk-testing, clerk-webhooks. Antopier's planned auth is Supabase Auth. Consider them only if a client project uses Clerk.
- **fnsoko-money-coach:** personal-finance planner, unrelated to Antopier delivery.

## Agent quick reference

| Agent | Core skills |
|---|---|
| delivery-orchestrator | brainstorming, writing-plans, dispatching-parallel-agents, subagent-driven-development, verification-before-completion, doing-big-tasks, grilling |
| product-strategist | brainstorming, grilling, research, domain-modeling, reviewing-ai-writing |
| customer-discovery | grilling, research, reviewing-ai-writing |
| solution-architect | brainstorming, codebase-design, domain-modeling, research, writing-plans |
| backend-engineer | test-driven-development, tdd, systematic-debugging, diagnosing-bugs, executing-plans, using-git-worktrees, verification-before-completion, receiving-code-review |
| frontend-engineer | frontend-design, designing-visual-assets, prototype, test-driven-development, systematic-debugging, verification-before-completion |
| supabase-database-engineer | test-driven-development, tdd, systematic-debugging, domain-modeling, verification-before-completion, wizard |
| security-reviewer | security-review, code-review, systematic-debugging |
| data-analytics-engineer | dataviz, test-driven-development, domain-modeling, diagnosing-bugs |
| ai-engineer | building-your-own-agent, claude-api, writing-for-agents, reviewing-ai-writing, tdd, research |
| qa-test-engineer | test-driven-development, tdd, verification-before-completion, diagnosing-bugs, run |
| code-reviewer | code-review (Matt Pocock and built-in), requesting-code-review |
| devops-reliability | wizard, research, systematic-debugging, verification-before-completion |
| technical-writer | writing-for-agents, reviewing-ai-writing, domain-modeling, pr, writing-skills |

## Known issues (not changed by this document)

- `mattpocock-skills` is installed from two marketplaces (`claude-plugins-official` and `mattpocock`) and has a stale 1.2.3 cache.
- Stale caches remain for superpowers 6.4.1 and fluent-ai-skills 0.3.0.
- `frontend-design` has two install records at the same version.
- Removing duplicates or caches needs CEO approval.

## Verification

1. Run `/skills` and compare with this file. User-only skills appear only when typed.
2. For plugin contents, list `~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/skills/**/SKILL.md` and read each `description`.
3. Update the inventory date and the tables when a plugin version changes.
4. Skills not in this file but present in the session list are candidates to add, after reading their description.
