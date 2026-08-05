export default function ServicesPage() {
  const services = [
    {
      title: "Industrial Hygiene Consulting",
      items: ["Exposure assessments", "Air monitoring", "Chemical hazard evaluations", "Noise surveys", "Workplace hazard evaluations"],
    },
    {
      title: "Safety Consulting",
      items: ["OSHA compliance support", "Written safety programs", "Job hazard analyses", "Incident investigations", "Safety audits"],
    },
    {
      title: "Occupational Health Support",
      items: ["Medical surveillance coordination", "Respiratory protection support", "Hearing conservation", "Employee health programs"],
    },
    {
      title: "Training Services",
      items: ["OSHA awareness training", "Supervisor training", "Hazard-specific training", "Custom facility training"],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-bold">Industrial Hygiene & Safety Services</h1>
      <p className="mt-6 max-w-3xl text-lg">Wasatch Industrial Hygiene & Safety provides practical consulting solutions that help organizations identify hazards, improve compliance, and protect their workforce.</p>
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border p-6">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <ul className="mt-4 list-disc pl-6">
              {service.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
