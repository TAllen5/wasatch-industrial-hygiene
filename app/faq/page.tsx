export default function FAQPage() {
  const faqs = [
    {
      q: "When should a company contact an industrial hygienist?",
      a: "Organizations often engage industrial hygiene support when evaluating workplace exposures, introducing new processes, responding to concerns, or strengthening compliance programs."
    },
    {
      q: "What industries does Wasatch support?",
      a: "Wasatch supports a wide range of industries including manufacturing, construction, healthcare, laboratories, government, defense, energy, and general industry."
    },
    {
      q: "Can Wasatch help with OSHA compliance?",
      a: "Yes. Wasatch provides practical compliance support including hazard evaluations, program reviews, exposure assessments, and safety improvement recommendations."
    },
    {
      q: "Does Wasatch support medical surveillance programs?",
      a: "Yes. Wasatch supports occupational health programs through industrial hygiene expertise and coordination of medical surveillance needs."
    }
  ];

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      <p className="mt-4">Common questions about industrial hygiene and safety consulting services.</p>
      <div className="mt-8 space-y-6">
        {faqs.map((item) => (
          <section key={item.q}>
            <h2 className="text-xl font-semibold">{item.q}</h2>
            <p className="mt-2">{item.a}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
