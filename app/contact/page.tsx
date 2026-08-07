import type { Metadata } from "next";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = { title: "Request a Consultation", description: "Request a professional consultation for exposure monitoring, safety support, OSHA compliance, training, or medical surveillance services." };

const expectations = [
  ["Direct professional review", "Your request is reviewed by the consulting team—not routed through a generic call center."],
  ["A focused first conversation", "We’ll clarify the operation, risk, desired outcome, and timing before recommending scope."],
  ["Practical next steps", "You’ll leave the initial discussion with a clearer path, even when the right answer is a focused assessment."],
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-950 py-24 text-white">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><p className="eyebrow text-sky-300">Request a consultation</p><h1 className="page-title mt-5 max-w-4xl">Bring us the concern. We’ll help define the right next step.</h1></div>
          <p className="text-lg leading-8 text-slate-300">Whether you’re responding to an exposure question, preparing for a project, or strengthening a program, start with the facts you have. We’ll help organize what comes next.</p>
        </div>
      </section>

      <section className="shell grid gap-12 py-24 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <aside className="lg:sticky lg:top-36">
          <p className="eyebrow text-orange-700">What to expect</p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950">A useful conversation from the start.</h2>
          <div className="mt-8 grid gap-7">{expectations.map(([title, copy]) => <div key={title} className="border-l-2 border-orange-500 pl-5"><h3 className="font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></div>)}</div>
          <div className="mt-10 rounded-2xl bg-sky-950 p-6 text-white"><p className="eyebrow text-sky-300">Prefer to talk?</p><a className="mt-3 block text-2xl font-extrabold" href="tel:+14358304444">(435) 830-4444</a><a className="mt-3 block break-all text-sm text-slate-300" href="mailto:wasatch.ihandsafety@gmail.com">wasatch.ihandsafety@gmail.com</a><p className="mt-5 border-t border-white/15 pt-5 text-xs leading-5 text-slate-400">Utah-based support for organizations throughout the Western United States.</p></div>
        </aside>
        <ConsultationForm />
      </section>

      <section className="bg-slate-100 py-16"><div className="shell grid gap-8 md:grid-cols-3"><div><p className="eyebrow text-sky-800">Technical credibility</p><p className="mt-3 font-extrabold text-slate-950">CIH- and CSP-led consulting</p></div><div><p className="eyebrow text-sky-800">Operational focus</p><p className="mt-3 font-extrabold text-slate-950">Recommendations built for real work</p></div><div><p className="eyebrow text-sky-800">Regional reach</p><p className="mt-3 font-extrabold text-slate-950">Western U.S. project support</p></div></div></section>
    </main>
  );
}
