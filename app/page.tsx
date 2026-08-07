import Image from "next/image";
import Link from "next/link";

const services = [
  { n: "01", title: "Industrial Hygiene", copy: "Exposure assessments, air monitoring, noise surveys, chemical evaluations, ventilation reviews, and defensible reports led by a Certified Industrial Hygienist." },
  { n: "02", title: "Safety & OSHA Compliance", copy: "Practical audits, written programs, hazard assessments, incident support, and implementation assistance that fit real operations." },
  { n: "03", title: "Medical Surveillance", copy: "RN-supported coordination for exposure-based medical surveillance, respirator clearance, hearing conservation, and occupational health programs." },
];

const industries = ["Aerospace & Defense", "Advanced Manufacturing", "Construction", "Energy & Utilities", "Laboratories", "Healthcare", "Government", "General Industry"];

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-slate-950 text-white">
        <Image src="/industrial-hygiene-hero.webp" alt="Industrial hygiene professionals conducting exposure monitoring in a manufacturing facility" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061723] via-[#061723]/90 to-[#061723]/10" />
        <div className="shell relative flex min-h-[720px] items-center py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-sky-300">Industrial Hygiene • Safety • Occupational Health</p>
            <h1 className="display mt-6">Expert guidance for complex workplace risks.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">CIH- and CSP-led consulting that helps Western organizations understand exposures, strengthen compliance, and protect the people behind their operations.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="button button-light">Request a Consultation</Link><Link href="/services" className="button button-outline">Explore Services</Link></div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-7 text-sm font-bold text-slate-200"><span>Certified Industrial Hygienist</span><span>Certified Safety Professional</span><span>Western U.S. Coverage</span></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="eyebrow text-orange-700">Field-tested expertise</p><h2 className="section-title mt-4 text-slate-950">Clear answers. Practical controls. Work that holds up.</h2></div>
          <p className="lead">Your consultant should understand both the regulation and the production floor. Wasatch translates complex exposure and safety requirements into focused actions your team can actually sustain.</p>
        </div>
      </section>

      <section className="shell py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-sky-800">Core services</p><h2 className="section-title mt-3 text-slate-950">One partner across the risk lifecycle.</h2></div><Link href="/services" className="font-extrabold text-sky-800">View all capabilities →</Link></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => <article key={service.title} className="card p-8"><p className="text-sm font-extrabold text-orange-700">{service.n}</p><h3 className="mt-8 text-2xl font-extrabold text-slate-950">{service.title}</h3><p className="mt-4 leading-7 text-slate-600">{service.copy}</p><Link href="/services" className="mt-8 inline-block text-sm font-extrabold text-sky-800">Learn more →</Link></article>)}
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[470px] overflow-hidden rounded-2xl"><Image src="/lake-powell-western-service.webp" alt="Lake Powell and sandstone canyons representing Wasatch's western service region" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div>
          <div><p className="eyebrow text-sky-300">Built in the West</p><h2 className="section-title mt-4">Responsive support across the Western United States.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Based in Utah and prepared to travel, Wasatch supports single-facility needs and multi-site programs with the same responsive, hands-on approach.</p><div className="mt-9 grid grid-cols-2 gap-4">{["On-site assessments", "Multi-site support", "Project-based consulting", "Ongoing program guidance"].map(x=><div key={x} className="border-l-2 border-orange-500 pl-4 font-bold">{x}</div>)}</div></div>
        </div>
      </section>

      <section className="shell py-24"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-sky-800">Industries served</p><h2 className="section-title mt-4 text-slate-950">Experience where the work is demanding.</h2></div><div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 sm:grid-cols-2">{industries.map(x=><div key={x} className="bg-white p-6 text-lg font-extrabold text-slate-800">{x}</div>)}</div></div></section>

      <section className="bg-[#c96d36] py-20 text-white"><div className="shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="eyebrow text-orange-100">Ready when you are</p><h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Let’s define the risk—and the next step.</h2></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="button button-light">Request a Consultation</Link><a href="tel:+14358304444" className="button button-outline">Call (435) 830-4444</a></div></div></section>
    </main>
  );
}
