import {
  Check,
  CircleCheck,
  FileText,
  Inbox,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Illustrative product composition for the hero. All data is sample data belonging to a
 * fictional product, never Antopier results. Hidden from assistive technology; the
 * parent provides a text alternative.
 */
export function HeroComposition({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative select-none", className)}>
      <DesktopWindow className="hidden md:block" />
      <PhoneScreen className="mx-auto w-[min(17rem,80%)] md:absolute md:-bottom-12 md:-left-8 md:mx-0 md:w-[38%] lg:-left-12" />
      <WorkflowCard className="absolute -top-16 -right-3 hidden w-[46%] md:block lg:-right-8" />
    </div>
  );
}

const bars = [38, 46, 42, 55, 61, 58, 70, 76, 74, 86];

function DesktopWindow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-media border border-border bg-surface shadow-media",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-muted/70 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 h-5 flex-1 rounded-md border border-border bg-surface" />
      </div>
      <div className="grid grid-cols-[9.5rem_1fr] text-[11px] leading-tight">
        <aside className="border-r border-border bg-surface-muted/40 p-3">
          <div className="mb-4 flex items-center gap-2 px-1.5">
            <span className="grid size-5 place-items-center rounded bg-brand-deep text-[9px] font-semibold text-white">
              OP
            </span>
            <span className="font-semibold text-ink">Operations</span>
          </div>
          {[
            [LayoutDashboard, "Overview", true],
            [Inbox, "Requests", false],
            [CircleCheck, "Approvals", false],
            [FileText, "Reports", false],
            [Users, "Teams", false],
            [Settings, "Settings", false],
          ].map(([Icon, label, active]) => {
            const I = Icon as typeof Inbox;
            return (
              <div
                key={label as string}
                className={cn(
                  "mb-0.5 flex items-center gap-2 rounded-md px-1.5 py-1.5",
                  active ? "bg-brand-subtle font-medium text-brand-deep" : "text-ink-subtle",
                )}
              >
                <I className="size-3.5" />
                {label as string}
              </div>
            );
          })}
        </aside>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold text-ink">Operations overview</p>
              <p className="text-ink-subtle">Sample organization · This month</p>
            </div>
            <span className="rounded-md border border-border px-2 py-1 text-ink-muted">Export</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["Open requests", "128", "across 6 teams"],
              ["Avg. resolution", "2.4 d", "last 30 days"],
              ["Awaiting approval", "9", "3 due today"],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-lg border border-border p-2.5">
                <p className="text-ink-subtle">{label}</p>
                <p className="mt-1 text-[17px] font-semibold tracking-tight text-ink">{value}</p>
                <p className="mt-0.5 text-[10px] text-ink-subtle">{note}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-medium text-ink">Requests resolved per week</p>
              <div className="flex items-center gap-3 text-[10px] text-ink-subtle">
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-sm bg-brand" />
                  Resolved
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2 rounded-sm bg-brand-deep" />
                  This week
                </span>
              </div>
            </div>
            <div className="flex h-24 items-end gap-1.5 border-b border-border">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "hero-bar flex-1 rounded-t-[3px]",
                    i === bars.length - 1 ? "bg-brand-deep" : "bg-brand/80",
                  )}
                  style={{ height: `${h}%`, animationDelay: `${300 + i * 45}ms` }}
                />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[9px] text-ink-subtle">
              <span>Wk 1</span>
              <span>Wk 5</span>
              <span>Wk 10</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            {[
              ["Supplier onboarding", "Procurement", "In review", "review"],
              ["Fee statement request", "Finance", "Resolved", "done"],
              ["Leave request", "HR", "Pending", "pending"],
            ].map(([title, team, status, kind]) => (
              <div
                key={title}
                className="flex items-center justify-between border-b border-border px-3 py-2 last:border-b-0"
              >
                <span className="font-medium text-ink">{title}</span>
                <span className="flex items-center gap-3">
                  <span className="text-ink-subtle">{team}</span>
                  <StatusChip kind={kind as ChipKind}>{status}</StatusChip>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type ChipKind = "done" | "review" | "pending";

function StatusChip({ kind, children }: { kind: ChipKind; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "rounded-full px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap",
        kind === "done" && "bg-[#e7f4ee] text-success",
        kind === "review" && "bg-brand-subtle text-brand-deep",
        kind === "pending" && "bg-surface-muted text-ink-muted",
      )}
    >
      {children}
    </span>
  );
}

function PhoneScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-[2rem] border border-border bg-surface p-2 shadow-media", className)}
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface-muted text-[11px] leading-tight">
        <div className="flex justify-center py-2">
          <span className="h-1.5 w-12 rounded-full bg-border" />
        </div>
        <div className="px-3.5 pb-4">
          <p className="text-[14px] font-semibold text-ink">Approvals</p>
          <p className="text-ink-subtle">3 waiting for you</p>
          <div className="mt-3 rounded-xl border border-border bg-surface p-3">
            <div className="flex items-center justify-between">
              <p className="font-medium text-ink">Leave request</p>
              <StatusChip kind="pending">Pending</StatusChip>
            </div>
            <p className="mt-1 text-ink-subtle">3 days · Front desk team</p>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <span className="rounded-lg border border-border py-1.5 text-center font-medium text-ink-muted">
                Decline
              </span>
              <span className="rounded-lg bg-brand py-1.5 text-center font-medium text-white">
                Approve
              </span>
            </div>
          </div>
          <div className="mt-2 rounded-xl border border-border bg-surface p-3">
            <div className="flex items-center justify-between">
              <p className="font-medium text-ink">Purchase order</p>
              <StatusChip kind="review">In review</StatusChip>
            </div>
            <p className="mt-1 text-ink-subtle">Office supplies · Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowCard({ className }: { className?: string }) {
  const steps = [
    { label: "Summary drafted", note: "From 14 attached documents", state: "done" },
    { label: "Awaiting review", note: "Assigned to operations lead", state: "active" },
    { label: "Approved and filed", note: "", state: "todo" },
  ] as const;
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface/95 p-3.5 text-[11px] leading-tight shadow-media backdrop-blur",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold text-ink">Monthly report workflow</p>
        <span className="rounded-full bg-brand-subtle px-2 py-0.5 text-[10px] font-medium text-brand-deep">
          Human review
        </span>
      </div>
      <ol className="space-y-2.5">
        {steps.map((step) => (
          <li key={step.label} className="flex gap-2.5">
            <span
              className={cn(
                "mt-px grid size-4 shrink-0 place-items-center rounded-full border",
                step.state === "done" && "border-brand bg-brand text-white",
                step.state === "active" && "border-brand bg-surface",
                step.state === "todo" && "border-border bg-surface",
              )}
            >
              {step.state === "done" ? <Check className="size-2.5" strokeWidth={3} /> : null}
              {step.state === "active" ? <span className="size-1.5 rounded-full bg-brand" /> : null}
            </span>
            <span>
              <span
                className={cn(
                  "block font-medium",
                  step.state === "todo" ? "text-ink-subtle" : "text-ink",
                )}
              >
                {step.label}
              </span>
              {step.note ? <span className="text-ink-subtle">{step.note}</span> : null}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
