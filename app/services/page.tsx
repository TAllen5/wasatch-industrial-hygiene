export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Industrial Hygiene & Safety Services</h1>
      <p className="mt-6 text-lg">Wasatch Industrial Hygiene and Safety provides practical occupational health and safety solutions for organizations across the western United States.</p>
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div><h2 className="text-2xl font-semibold">Industrial Hygiene</h2><p>Exposure assessments, air monitoring, noise evaluations, chemical hazard reviews, and workplace evaluations.</p></div>
        <div><h2 className="text-2xl font-semibold">Safety Consulting</h2><p>OSHA compliance support, safety program development, hazard assessments, and employee training.</p></div>
        <div><h2 className="text-2xl font-semibold">Medical Surveillance</h2><p>Coordination of occupational health programs supported by industrial hygiene expertise.</p></div>
        <div><h2 className="text-2xl font-semibold">Compliance Support</h2><p>Practical solutions designed around your operations, employees, and regulatory requirements.</p></div>
      </section>
    </main>
  );
}
