import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Industries Served", description: "Industrial hygiene and safety consulting for aerospace, manufacturing, construction, energy, laboratories, healthcare, and government." };
const industries=[
  ["Aerospace & Defense","Process chemicals, coatings, welding, composites, noise, respiratory protection, and complex compliance environments."],
  ["Advanced Manufacturing","Metals, ceramics, machining, lead, ventilation, ergonomics, confined spaces, and production-focused control strategies."],
  ["Construction","Silica, lead, noise, respiratory protection, site assessments, contractor controls, and project-specific planning."],
  ["Energy & Utilities","Field exposure assessments, electrical safety interfaces, heat stress, noise, confined spaces, and remote operations."],
  ["Laboratories","Chemical risk assessments, ventilation performance, respiratory hazards, training, and program development."],
  ["Healthcare","Exposure control, respiratory protection, hazardous drugs and chemicals, noise, and occupational health coordination."],
  ["Government","Defensible assessments, written programs, workforce training, and support for regulated or mission-critical work."],
  ["General Industry","Flexible support for unique processes, emerging hazards, compliance questions, and multi-site programs."],
];
export default function IndustriesPage(){return <main><section className="bg-slate-950 py-24 text-white"><div className="shell"><p className="eyebrow text-sky-300">Industries</p><h1 className="page-title mt-5 max-w-4xl">Experience shaped by high-consequence work.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Support calibrated to your processes, workforce, regulatory environment, and operational priorities.</p></div></section><section className="shell py-24"><div className="grid gap-5 md:grid-cols-2">{industries.map(([title,copy])=><article key={title} className="card p-8"><h2 className="text-2xl font-extrabold text-slate-950">{title}</h2><p className="mt-4 leading-7 text-slate-600">{copy}</p></article>)}</div><div className="mt-14 rounded-2xl bg-sky-950 p-9 text-white md:flex md:items-center md:justify-between"><div><p className="eyebrow text-sky-300">A different operation?</p><h2 className="mt-3 text-3xl font-extrabold">Tell us what your team does.</h2></div><Link href="/contact" className="button button-light mt-6 md:mt-0">Start a Conversation</Link></div></section></main>}
