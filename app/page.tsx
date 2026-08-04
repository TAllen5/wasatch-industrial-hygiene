import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold md:text-6xl">
          Practical Industrial Hygiene and Safety Solutions
        </h1>
        <p className="mt-6 max-w-3xl text-lg">
          Wasatch Industrial Hygiene and Safety provides CIH and CSP-led
          consulting services that help organizations identify hazards, improve
          compliance, and protect their workforce.
        </p>
        <p className="mt-4 max-w-3xl text-lg">
          Serving manufacturing, construction, healthcare, government,
          aerospace, energy, and general industry clients throughout the
          western United States.
        </p>
        <div className="mt-8">
          <Link className="rounded bg-black px-6 py-3 text-white" href="/contact">
            Request an Assessment
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Why Wasatch</h2>
        <p className="mt-4">
          We combine field experience, industrial hygiene expertise, and
          occupational health support to provide practical solutions that work
          in real workplaces.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Core Services</h2>
        <ul className="mt-4 list-disc pl-6">
          <li>Industrial hygiene exposure assessments</li>
          <li>OSHA compliance support</li>
          <li>Safety program development and training</li>
          <li>Medical surveillance coordination</li>
        </ul>
      </section>
    </main>
  );
}
