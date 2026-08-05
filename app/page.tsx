import Link from "next/link";

const services = [
  "Industrial hygiene exposure assessments",
  "OSHA compliance support",
  "Safety programs and audits",
  "Noise and hearing conservation",
  "Chemical exposure evaluations",
  "Occupational health support",
];

const industries = [
  "Aerospace & Defense",
  "Manufacturing",
  "Construction",
  "Energy",
  "Healthcare",
  "Laboratories",
  "Government",
  "General Industry",
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">
            Wasatch Industrial Hygiene & Safety
          </p>
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Protecting People. Reducing Risk. Improving Workplace Compliance.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            CIH and CSP-led industrial hygiene, safety consulting, OSHA compliance,
            and occupational health solutions for organizations throughout the
            Western United States.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="rounded bg-white px-6 py-3 font-semibold text-slate-900" href="/contact">
              Request a Consultation
            </Link>
            <Link className="rounded border border-white px-6 py-3 font-semibold" href="/services">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-bold">Certified Expertise</h2>
          <p className="mt-3">CIH and CSP professional consulting built on practical field experience.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-bold">Occupational Health Support</h2>
          <p className="mt-3">RN, BSN occupational health experience supporting medical surveillance programs.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-bold">Practical Solutions</h2>
          <p className="mt-3">Solutions designed for real workplaces, not just written programs.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-lg bg-slate-100 p-5">{service}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Industries Served</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border px-4 py-2">{industry}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
