"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { submitConsultation, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <span id={id} className="text-xs font-semibold text-red-700">{message}</span> : null;
}

export default function ConsultationForm() {
  const [state, formAction, isPending] = useActionState(submitConsultation, initialState);
  const [startedAt] = useState(() => Date.now().toString());

  if (state.status === "success") {
    return (
      <div className="card flex min-h-[620px] flex-col justify-center p-8 md:p-12" role="status" aria-live="polite">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl font-black text-emerald-800">✓</div>
        <p className="eyebrow mt-8 text-emerald-700">Request received</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">Thank you for reaching out.</h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">We’ve received your consultation request and sent a confirmation to the email address you provided. Our team will review the details and contact you directly.</p>
        <div className="mt-8 rounded-xl bg-slate-50 p-5 text-sm leading-6 text-slate-600"><strong className="text-slate-900">Time-sensitive concern?</strong> Call <a className="font-extrabold text-sky-900" href="tel:+14358304444">(435) 830-4444</a>.</div>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/services" className="button button-primary">Review Our Services</Link><Link href="/" className="button border border-slate-300 text-slate-800">Return Home</Link></div>
      </div>
    );
  }

  return (
    <form action={formAction} className="card grid gap-6 p-7 md:p-10" noValidate>
      <div>
        <p className="eyebrow text-sky-800">Project intake</p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Request a consultation</h2>
        <p className="mt-3 leading-7 text-slate-600">A little context helps us give you a more useful first response. Required fields are marked with an asterisk.</p>
      </div>

      {state.status === "error" ? <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800" role="alert">{state.message}</div> : null}

      <input type="hidden" name="startedAt" value={startedAt} />
      <label className="contact-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>Full name *<input name="name" autoComplete="name" required aria-invalid={Boolean(state.fieldErrors?.name)} aria-describedby="name-error" /><FieldError id="name-error" message={state.fieldErrors?.name} /></label>
        <label>Organization *<input name="company" autoComplete="organization" required aria-invalid={Boolean(state.fieldErrors?.company)} aria-describedby="company-error" /><FieldError id="company-error" message={state.fieldErrors?.company} /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>Title or role<input name="role" autoComplete="organization-title" placeholder="EHS Manager, Operations Director…" /></label>
        <label>Project location *<input name="location" autoComplete="address-level2" placeholder="City, State" required aria-invalid={Boolean(state.fieldErrors?.location)} aria-describedby="location-error" /><FieldError id="location-error" message={state.fieldErrors?.location} /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>Business email *<input type="email" name="email" autoComplete="email" required aria-invalid={Boolean(state.fieldErrors?.email)} aria-describedby="email-error" /><FieldError id="email-error" message={state.fieldErrors?.email} /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>Primary need *<select name="service" defaultValue="" required aria-invalid={Boolean(state.fieldErrors?.service)} aria-describedby="service-error"><option value="" disabled>Select a service</option><option>Industrial hygiene / exposure monitoring</option><option>Safety / OSHA compliance</option><option>Medical surveillance support</option><option>Training</option><option>Not sure yet</option></select><FieldError id="service-error" message={state.fieldErrors?.service} /></label>
        <label>Desired timing *<select name="timeline" defaultValue="" required aria-invalid={Boolean(state.fieldErrors?.timeline)} aria-describedby="timeline-error"><option value="" disabled>Select a timeframe</option><option>As soon as possible</option><option>Within 30 days</option><option>Within 1–3 months</option><option>Planning / budgeting</option></select><FieldError id="timeline-error" message={state.fieldErrors?.timeline} /></label>
      </div>

      <label>Workforce or project size<input name="workforce" placeholder="Approximate employees, locations, or project scope" /></label>
      <label>Tell us about the operation or concern *<textarea name="details" rows={7} placeholder="Describe the process, hazard, employee concern, regulatory question, prior sampling, or decision you need the work to support." required aria-invalid={Boolean(state.fieldErrors?.details)} aria-describedby="details-error" /><FieldError id="details-error" message={state.fieldErrors?.details} /></label>

      <label className="grid cursor-pointer grid-cols-[auto_1fr] items-start gap-3 text-sm font-medium leading-6 text-slate-600"><input className="mt-1" type="checkbox" name="consent" value="yes" required aria-invalid={Boolean(state.fieldErrors?.consent)} aria-describedby="consent-error" /><span>You may contact me about this consultation request. I understand the information submitted will be used to evaluate and respond to my inquiry. <Link href="/privacy" className="font-bold text-sky-900 underline">Privacy notice</Link>.</span><FieldError id="consent-error" message={state.fieldErrors?.consent} /></label>

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={isPending} className="button button-primary min-w-52 disabled:cursor-not-allowed disabled:opacity-60">{isPending ? "Sending securely…" : "Submit Consultation Request"}</button>
        <p className="text-xs leading-5 text-slate-500">Secure server-side delivery. No mailing lists or unsolicited marketing.</p>
      </div>
    </form>
  );
}
