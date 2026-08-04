const industries = ["Manufacturing", "Construction", "Healthcare", "Laboratories", "Government", "Aerospace and Defense", "Energy", "General Industry"];

export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Industries We Serve</h1>
      <p className="mt-6 text-lg">Wasatch provides industrial hygiene and safety consulting across a wide range of workplaces.</p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {industries.map((industry) => <li key={industry} className="rounded-lg border p-5">{industry}</li>)}
      </ul>
    </main>
  );
}
