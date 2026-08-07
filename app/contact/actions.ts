"use server";

import { createHash } from "node:crypto";
import ContactConfirmationEmail from "../../emails/contact-confirmation";
import ContactNotificationEmail, { type ContactEmailData } from "../../emails/contact-notification";
import { getResendClient } from "../../lib/resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const services = new Set(["Industrial hygiene / exposure monitoring", "Safety / OSHA compliance", "Medical surveillance support", "Training", "Not sure yet"]);
const timelines = new Set(["As soon as possible", "Within 30 days", "Within 1–3 months", "Planning / budgeting"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function value(formData: FormData, name: string, maxLength: number) {
  return String(formData.get(name) ?? "").trim().slice(0, maxLength);
}

export async function submitConsultation(_previousState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const honeypot = value(formData, "website", 200);
  if (honeypot) return { status: "success", message: "Thank you. Your request has been received." };

  const startedAt = Number(value(formData, "startedAt", 30));
  if (!startedAt || Date.now() - startedAt < 1800) {
    return { status: "error", message: "Please review the form and try again." };
  }

  const data: ContactEmailData = {
    name: value(formData, "name", 80),
    company: value(formData, "company", 120),
    role: value(formData, "role", 100),
    email: value(formData, "email", 160).toLowerCase(),
    phone: value(formData, "phone", 40),
    location: value(formData, "location", 120),
    service: value(formData, "service", 100),
    timeline: value(formData, "timeline", 80),
    workforce: value(formData, "workforce", 80),
    details: value(formData, "details", 4000),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (data.company.length < 2) errors.company = "Please enter your organization.";
  if (!emailPattern.test(data.email)) errors.email = "Enter a valid business email.";
  if (data.location.length < 2) errors.location = "Please enter the project location.";
  if (!services.has(data.service)) errors.service = "Select the service that best fits.";
  if (!timelines.has(data.timeline)) errors.timeline = "Select your desired timing.";
  if (data.details.length < 30) errors.details = "Please provide at least a few sentences about the operation or concern.";
  if (value(formData, "consent", 10) !== "yes") errors.consent = "Please confirm that we may contact you about this request.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please complete the highlighted fields.", fieldErrors: errors };
  }

  const resend = getResendClient();
  if (!resend) {
    return { status: "error", message: "Online submission is temporarily unavailable. Please call (435) 830-4444 or email wasatch.ihandsafety@gmail.com." };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "wasatch.ihandsafety@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Wasatch Industrial Hygiene & Safety <onboarding@resend.dev>";
  const fingerprint = createHash("sha256").update(`${data.email}|${data.company}|${data.details}`).digest("hex").slice(0, 24);

  try {
    const notification = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Consultation request: ${data.company} — ${data.service}`,
      react: ContactNotificationEmail({ data }),
    }, { headers: { "Idempotency-Key": `contact-lead-${fingerprint}` } });

    if (notification.error) throw new Error(notification.error.message);

    const confirmation = await resend.emails.send({
      from,
      to: data.email,
      replyTo: to,
      subject: "We received your Wasatch consultation request",
      react: ContactConfirmationEmail({ name: data.name, service: data.service }),
    }, { headers: { "Idempotency-Key": `contact-confirmation-${fingerprint}` } });

    if (confirmation.error) console.error("Consultation confirmation email failed", confirmation.error.name);
  } catch (error) {
    console.error("Consultation form delivery failed", error instanceof Error ? error.message : "Unknown error");
    return { status: "error", message: "We couldn’t send your request right now. Please call (435) 830-4444 or email wasatch.ihandsafety@gmail.com." };
  }

  return { status: "success", message: "Your consultation request has been received." };
}
