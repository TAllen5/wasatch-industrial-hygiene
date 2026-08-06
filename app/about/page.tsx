import Link from "next/link";

export default function AboutPage() {
  return <main>
    <section className="page-hero"><div className="shell"><p className="eyebrow">About Wasatch</p><h1>Expert guidance. Practical judgment.</h1><p>Independent industrial hygiene and safety consulting for organizations across the Western United States.</p></div></section>
    <section className="section shell about-grid">
      <div className="principal-card"><img src="/wasatch-logo.png" alt="Wasatch Industrial Hygiene and Safety, LLC" /><p className="eyebrow dark">Founder & Principal Consultant</p><h2>Thomas J. Allen, CIH, CSP</h2><p>Certified Industrial Hygienist<br />Certified Safety Professional</p></div>
      <div className="about-copy"><p className="lead">Thomas J. Allen founded Wasatch Industrial Hygiene and Safety, LLC to give employers direct access to experienced, credentialed support without the layers of a large consulting firm.</p><p>His approach combines industrial hygiene science, occupational safety expertise, OSHA compliance knowledge, and real-world operational experience. The goal is straightforward: identify what matters, explain it clearly, and help clients implement solutions that protect employees while supporting the work.</p><p>Wasatch also provides occupational-health and medical-surveillance support backed by RN experience, giving clients a coordinated approach to exposure assessment, compliance, and employee health.</p><Link className="button" href="/contact">Work with Thomas</Link></div>
    </section>
  </main>;
}
