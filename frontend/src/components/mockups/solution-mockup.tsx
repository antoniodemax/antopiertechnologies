import type { MockupKind } from "@/content/types";
import { cn } from "@/lib/cn";

/** Small interface fragments for each solution area. Sample data only, hidden from assistive technology. */
export function SolutionMockup({ kind, className }: { kind: MockupKind; className?: string }) {
  const { title, body } = mockups[kind];
  return (
    <div
      aria-hidden
      className={cn(
        "overflow-hidden rounded-card border border-border bg-surface text-[11px] leading-tight shadow-raise select-none",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-surface-muted/70 px-3.5 py-2.5">
        <span className="font-semibold text-ink">{title}</span>
        <span className="flex gap-1">
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
        </span>
      </div>
      <div className="p-3.5">{body}</div>
    </div>
  );
}

function Chip({
  tone,
  children,
}: {
  tone: "ok" | "info" | "warn" | "muted";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "rounded-full px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap",
        tone === "ok" && "bg-[#e7f4ee] text-success",
        tone === "info" && "bg-brand-subtle text-brand-deep",
        tone === "warn" && "bg-[#fdf0e6] text-[#93370d]",
        tone === "muted" && "bg-surface-muted text-ink-muted",
      )}
    >
      {children}
    </span>
  );
}

function Row({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 border-b border-border py-2 last:border-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

const mockups: Record<MockupKind, { title: string; body: React.ReactNode }> = {
  "school-fees": {
    title: "Fee balances · Term 2",
    body: (
      <div>
        <div className="mb-2 grid grid-cols-3 gap-2">
          {[
            ["Collected", "68%"],
            ["Outstanding", "112"],
            ["Reminders sent", "40"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-surface-muted p-2">
              <p className="text-ink-subtle">{l}</p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">{v}</p>
            </div>
          ))}
        </div>
        {[
          ["Grade 7 · J.K.", "Paid", "ok"],
          ["Grade 5 · M.W.", "Partial", "info"],
          ["Grade 8 · A.O.", "Overdue", "warn"],
        ].map(([n, s, t]) => (
          <Row key={n}>
            <span className="font-medium text-ink">{n}</span>
            <Chip tone={t as "ok"}>{s}</Chip>
          </Row>
        ))}
      </div>
    ),
  },
  "clinic-schedule": {
    title: "Appointments · Today",
    body: (
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-2">
        {[
          ["08:00", "General consultation", "Room 1", "info"],
          ["09:30", "Follow-up visit", "Room 2", "muted"],
          ["10:15", "Lab results review", "Room 1", "info"],
          ["11:00", "Open slot", "", "empty"],
        ].map(([t, what, room, kind]) => (
          <div key={t} className="contents">
            <span className="pt-2 text-ink-subtle">{t}</span>
            <div
              className={cn(
                "mb-1.5 rounded-lg border-l-2 px-2.5 py-2",
                kind === "info" && "border-brand bg-brand-subtle",
                kind === "muted" && "border-border-strong bg-surface-muted",
                kind === "empty" && "border-dashed border-border bg-surface text-ink-subtle",
              )}
            >
              <p className={cn("font-medium", kind === "empty" ? "text-ink-subtle" : "text-ink")}>
                {what}
              </p>
              {room ? <p className="text-ink-subtle">{room}</p> : null}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  "retail-stock": {
    title: "Stock levels · Main branch",
    body: (
      <div>
        {[
          ["Maize flour 2kg", 82, "ok"],
          ["Cooking oil 1L", 46, "ok"],
          ["Sugar 1kg", 14, "warn"],
          ["Rice 5kg", 63, "ok"],
        ].map(([item, level, tone]) => (
          <Row key={item as string}>
            <span className="w-28 shrink-0 font-medium text-ink">{item}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <span
                className={cn(
                  "block h-full rounded-full",
                  tone === "warn" ? "bg-[#dc6803]" : "bg-brand",
                )}
                style={{ width: `${level}%` }}
              />
            </span>
            {tone === "warn" ? (
              <Chip tone="warn">Reorder</Chip>
            ) : (
              <span className="w-12 text-right text-ink-subtle">{level}%</span>
            )}
          </Row>
        ))}
      </div>
    ),
  },
  "hotel-rooms": {
    title: "Room availability · This week",
    body: (
      <div>
        <div className="mb-1.5 grid grid-cols-[3rem_repeat(7,1fr)] gap-1 text-center text-[10px] text-ink-subtle">
          <span />
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        {[
          ["101", [1, 1, 0, 0, 1, 1, 1]],
          ["102", [0, 1, 1, 1, 0, 0, 1]],
          ["201", [1, 0, 0, 1, 1, 1, 0]],
          ["202", [0, 0, 1, 1, 1, 1, 1]],
        ].map(([room, days]) => (
          <div
            key={room as string}
            className="mb-1 grid grid-cols-[3rem_repeat(7,1fr)] items-center gap-1"
          >
            <span className="font-medium text-ink">Rm {room as string}</span>
            {(days as number[]).map((b, i) => (
              <span
                key={i}
                className={cn("h-4 rounded", b ? "bg-brand/85" : "border border-border bg-surface")}
              />
            ))}
          </div>
        ))}
        <div className="mt-2 flex gap-3 text-[10px] text-ink-subtle">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-brand/85" />
            Booked
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm border border-border" />
            Available
          </span>
        </div>
      </div>
    ),
  },
  "ops-pipeline": {
    title: "Sales pipeline",
    body: (
      <div className="grid grid-cols-3 gap-2">
        {[
          ["New", ["Website inquiry", "Referral"]],
          ["Proposal", ["Annual contract", "Pilot scope"]],
          ["Won", ["Renewal"]],
        ].map(([col, cards]) => (
          <div key={col as string} className="rounded-lg bg-surface-muted p-1.5">
            <p className="mb-1.5 px-1 font-medium text-ink-muted">{col as string}</p>
            {(cards as string[]).map((c) => (
              <div
                key={c}
                className="mb-1 rounded-md border border-border bg-surface px-2 py-1.5 font-medium text-ink shadow-card"
              >
                {c}
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  "service-tracker": {
    title: "Application status",
    body: (
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-medium text-ink">Business permit renewal</span>
          <Chip tone="info">In progress</Chip>
        </div>
        <ol className="space-y-2">
          {[
            ["Submitted online", "done"],
            ["Documents verified", "done"],
            ["Payment confirmed", "active"],
            ["Permit issued", "todo"],
          ].map(([s, state]) => (
            <li key={s} className="flex items-center gap-2">
              <span
                className={cn(
                  "size-3 shrink-0 rounded-full border-2",
                  state === "done" && "border-brand bg-brand",
                  state === "active" && "border-brand bg-surface",
                  state === "todo" && "border-border bg-surface",
                )}
              />
              <span className={state === "todo" ? "text-ink-subtle" : "font-medium text-ink"}>
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
};
