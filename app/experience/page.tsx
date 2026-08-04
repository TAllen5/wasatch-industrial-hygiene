export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Representative Experience</h1>
      <p className="mt-4 text-lg">Wasatch Industrial Hygiene and Safety provides practical industrial hygiene and safety solutions based on real-world manufacturing and operational experience.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <section><h2 className="text-xl font-semibold">Exposure Assessments</h2><p>Air monitoring, chemical exposure evaluations, noise assessments, and hazard characterization.</p></section>
        <section><h2 className="text-xl font-semibold">Safety Improvements</h2><p>Program development, hazard reviews, and practical risk reduction solutions.</p></section>
        <section><h2 className="text-xl font-semibold">Compliance Support</h2><p>OSHA-focused consulting to help organizations improve workplace safety.</p></section>
      </div>
    </main>
  );
}