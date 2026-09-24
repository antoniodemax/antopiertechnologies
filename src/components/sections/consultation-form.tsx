import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useForm, useWatch, type FieldErrors } from "react-hook-form";
import { Link, useSearchParams } from "react-router";
import { organisationTypes } from "@/content/industries";
import { services } from "@/content/services";
import { primaryEmail } from "@/content/site";
import { solutionAreas } from "@/content/solutions";
import { Button } from "@/components/ui/button";
import { schedulerUrl } from "@/lib/booking";
import { cn } from "@/lib/cn";
import {
  consultationSchema,
  timelineOptions,
  type ConsultationData,
  type ConsultationInput,
} from "@/lib/consultation-schema";

type Status = { kind: "idle" } | { kind: "success" } | { kind: "error"; message: string };

const fieldLabels: Record<string, string> = {
  name: "Full name",
  email: "Email",
  message: "Tell us about the project",
  phone: "Phone",
  organisation: "Organization",
  consent: "Consent",
};

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

export function ConsultationForm() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [summaryErrors, setSummaryErrors] = useState<[string, string][]>([]);
  const [invalidAttempts, setInvalidAttempts] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const turnstileToken = useTurnstile(turnstileSiteKey);

  const presetService = services.find((s) => s.slug === params.get("service"))?.slug;
  const presetSector = solutionAreas.find((a) => a.slug === params.get("sector"))?.slug;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationInput, unknown, ConsultationData>({
    resolver: zodResolver(consultationSchema),
    mode: "onTouched",
    shouldFocusError: false,
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      organisation: "",
      organisationType: "",
      services: presetService ? [presetService] : [],
      sector: presetSector ?? "",
      timeline: "",
      website: "",
    },
  });

  const messageLength = (useWatch({ control, name: "message" }) ?? "").length;

  useEffect(() => {
    if (status.kind === "success") successRef.current?.focus();
  }, [status]);

  useEffect(() => {
    if (invalidAttempts > 0) summaryRef.current?.focus();
  }, [invalidAttempts]);

  const onInvalid = (errs: FieldErrors<ConsultationInput>) => {
    const list = Object.entries(errs).map(
      ([key, value]) => [key, String(value?.message ?? "Check this field.")] as [string, string],
    );
    setSummaryErrors(list);
    setInvalidAttempts((n) => n + 1);
  };

  const onValid = async (data: ConsultationData) => {
    setSummaryErrors([]);
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (res.ok) {
        setStatus({ kind: "success" });
        return;
      }
      const message =
        res.status === 429
          ? "We received several requests from your connection in a short time. Please wait a minute and try again."
          : res.status === 400
            ? "Some details could not be accepted. Please check the form and try again."
            : "Your request could not be sent right now.";
      setStatus({ kind: "error", message });
    } catch {
      setStatus({
        kind: "error",
        message: "Your request could not be sent. Check your connection and try again.",
      });
    }
  };

  if (status.kind === "success") {
    return (
      <div
        className="rounded-media border border-border bg-surface p-8 shadow-raise sm:p-10"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-[#e7f4ee] text-success">
          <CircleCheck aria-hidden className="size-6" />
        </span>
        <h2 ref={successRef} tabIndex={-1} className="mt-6 text-h3 font-semibold outline-none">
          Thank you. We have your request.
        </h2>
        <p className="mt-3 text-ink-muted">
          We will read your details and reply by email with next steps. A copy of your request has
          been sent to the address you gave us.
        </p>
        {schedulerUrl ? (
          <a
            href={schedulerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 font-medium text-brand hover:underline"
          >
            Pick a time for a call now
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="rounded-media border border-border bg-surface p-6 shadow-raise sm:p-10"
      aria-describedby="form-intro"
    >
      <h2 className="text-h3 font-semibold">Request a consultation</h2>
      <p id="form-intro" className="mt-2 text-small text-ink-muted">
        Fields marked{" "}
        <span aria-hidden className="text-danger">
          *
        </span>
        <span className="sr-only">with an asterisk</span> are required. Everything else is optional
        and helps us prepare.
      </p>

      {summaryErrors.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="mt-6 rounded-control border border-danger/40 bg-[#fef3f2] p-5 outline-none focus-visible:outline-2 focus-visible:outline-danger"
        >
          <p id="error-summary-title" className="flex items-center gap-2 font-semibold text-danger">
            <CircleAlert aria-hidden className="size-5" />
            There{" "}
            {summaryErrors.length === 1
              ? "is 1 problem"
              : `are ${summaryErrors.length} problems`}{" "}
            with the form
          </p>
          <ul className="mt-3 space-y-1.5 text-small">
            {summaryErrors.map(([key, message]) => (
              <li key={key}>
                <a
                  href={`#field-${key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`field-${key}`)?.focus();
                  }}
                  className="text-danger underline underline-offset-2"
                >
                  {fieldLabels[key] ?? key}: {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {status.kind === "error" ? (
        <div
          role="alert"
          className="mt-6 rounded-control border border-danger/40 bg-[#fef3f2] p-5 text-small text-danger"
        >
          <p className="font-semibold">{status.message}</p>
          <p className="mt-1">
            Your details are still in the form. You can also email us at{" "}
            <a href={primaryEmail.href} className="font-medium underline">
              {primaryEmail.value}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name?.message}>
          {(a) => (
            <input
              {...a}
              {...register("name")}
              type="text"
              autoComplete="name"
              className={inputClass(!!errors.name)}
            />
          )}
        </Field>
        <Field id="email" label="Email" required error={errors.email?.message}>
          {(a) => (
            <input
              {...a}
              {...register("email")}
              type="email"
              autoComplete="email"
              inputMode="email"
              className={inputClass(!!errors.email)}
            />
          )}
        </Field>
        <Field
          id="phone"
          label="Phone"
          hint="Include your country code"
          error={errors.phone?.message}
        >
          {(a) => (
            <input
              {...a}
              {...register("phone")}
              type="tel"
              autoComplete="tel"
              className={inputClass(!!errors.phone)}
            />
          )}
        </Field>
        <Field id="organisation" label="Organization" error={errors.organisation?.message}>
          {(a) => (
            <input
              {...a}
              {...register("organisation")}
              type="text"
              autoComplete="organization"
              className={inputClass(!!errors.organisation)}
            />
          )}
        </Field>
        <Field id="organisationType" label="Type of organization">
          {(a) => (
            <select {...a} {...register("organisationType")} className={inputClass(false)}>
              <option value="">Select one</option>
              {organisationTypes.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="sector" label="Sector">
          {(a) => (
            <select {...a} {...register("sector")} className={inputClass(false)}>
              <option value="">Select one</option>
              {solutionAreas.map((area) => (
                <option key={area.slug} value={area.slug}>
                  {area.title}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
          )}
        </Field>
      </div>

      <fieldset className="mt-8">
        <legend className="text-small font-medium text-ink">What do you need help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            ...services.map((s) => ({ value: s.slug, label: s.title })),
            { value: "not-sure", label: "Not sure yet" },
          ].map((option) => (
            <label
              key={option.value}
              className="relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-small font-medium text-ink-muted transition-colors select-none hover:border-brand/40 has-checked:border-brand has-checked:bg-brand-subtle has-checked:text-brand-deep has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand"
            >
              <input
                type="checkbox"
                value={option.value}
                {...register("services")}
                className="peer sr-only"
              />
              <span
                aria-hidden
                className="grid size-4 place-items-center rounded-[4px] border border-border-strong bg-surface peer-checked:border-brand peer-checked:bg-brand"
              >
                <svg
                  viewBox="0 0 12 12"
                  className="size-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2.5 6.2l2.2 2.2 4.8-4.9" />
                </svg>
              </span>
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <Field
          id="message"
          label="Tell us about the project"
          required
          hint="The problem you want to solve, who it affects, and any deadline."
          error={errors.message?.message}
          aside={
            <span
              className={cn(
                "tabular-nums",
                messageLength > 2000 ? "text-danger" : "text-ink-subtle",
              )}
              aria-live="polite"
            >
              {messageLength} / 2,000
            </span>
          }
        >
          {(a) => (
            <textarea
              {...a}
              {...register("message")}
              rows={6}
              className={cn(inputClass(!!errors.message), "h-auto min-h-36 py-3")}
            />
          )}
        </Field>
      </div>

      <div className="mt-6 sm:max-w-xs">
        <Field id="timeline" label="When would you like to start?">
          {(a) => (
            <select {...a} {...register("timeline")} className={inputClass(false)}>
              <option value="">Select one</option>
              {timelineOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="field-website">Leave this field empty</label>
        <input
          id="field-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="mt-8">
        <div className="flex gap-3">
          <input
            id="field-consent"
            type="checkbox"
            {...register("consent")}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "field-consent-error" : undefined}
            className="mt-1 size-5 shrink-0 cursor-pointer accent-brand"
          />
          <label htmlFor="field-consent" className="text-small text-ink-muted">
            I agree that Antopier Technologies may use these details to respond to my request, as
            described in the{" "}
            <Link to="/privacy" className="font-medium text-brand underline underline-offset-2">
              Privacy Policy
            </Link>
            .{" "}
            <span aria-hidden className="text-danger">
              *
            </span>
          </label>
        </div>
        {errors.consent ? (
          <ErrorText id="field-consent-error">{errors.consent.message}</ErrorText>
        ) : null}
      </div>

      {turnstileSiteKey ? <div id="turnstile-widget" className="mt-6" /> : null}

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-ink-subtle">
          We reply by email. We will never sell or rent your personal information.
        </p>
        <Button
          type="submit"
          size="lg"
          aria-disabled={isSubmitting}
          onClick={(e) => isSubmitting && e.preventDefault()}
        >
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden className="animate-spin" />
              Sending…
            </>
          ) : (
            "Send request"
          )}
        </Button>
      </div>
      <p className="sr-only" aria-live="polite">
        {isSubmitting ? "Sending your request" : ""}
      </p>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "block h-12 w-full rounded-control border bg-surface px-3.5 text-body text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-ink-subtle",
    "focus-visible:border-brand focus-visible:shadow-[0_0_0_3px_rgb(30_98_163/0.18)] focus-visible:outline-none",
    invalid ? "border-danger" : "border-border-strong/70 hover:border-border-strong",
  );
}

type FieldA11y = {
  id: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  "aria-required"?: boolean;
};

function Field({
  id,
  label,
  hint,
  error,
  required,
  aside,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  aside?: ReactNode;
  children: (a: FieldA11y) => ReactNode;
}) {
  const uid = useId();
  const fieldId = `field-${id}`;
  const hintId = hint ? `${uid}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={fieldId} className="text-small font-medium text-ink">
          {label}
          {required ? (
            <span aria-hidden className="ml-0.5 text-danger">
              *
            </span>
          ) : null}
        </label>
        {aside ? <span className="text-[0.75rem]">{aside}</span> : null}
      </div>
      {hint ? (
        <p id={hintId} className="mt-1 text-[0.8125rem] text-ink-subtle">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">
        {children({
          id: fieldId,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": describedBy,
          "aria-required": required || undefined,
        })}
      </div>
      {error ? <ErrorText id={errorId!}>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-small text-danger">
      <CircleAlert aria-hidden className="mt-0.5 size-4 shrink-0" />
      {children}
    </p>
  );
}

type TurnstileApi = { render: (el: string | HTMLElement, opts: Record<string, unknown>) => string };

/** Loads Cloudflare Turnstile only when a site key is configured. */
function useTurnstile(siteKey: string | undefined) {
  const [token, setToken] = useState<string>();
  useEffect(() => {
    if (!siteKey) return;
    const w = window as unknown as { turnstile?: TurnstileApi; onTurnstileLoad?: () => void };
    w.onTurnstileLoad = () => {
      w.turnstile?.render("#turnstile-widget", {
        sitekey: siteKey,
        callback: (t: string) => setToken(t),
      });
    };
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [siteKey]);
  return token;
}
