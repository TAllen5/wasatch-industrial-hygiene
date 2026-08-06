import Link from "next/link";

const services = [
  ["Industrial Hygiene", "Exposure assessments, air monitoring, noise surveys, chemical evaluations, ventilation reviews, and clear recommendations."],
  ["Safety & OSHA Compliance", "Program development, gap assessments, audits, JSAs, incident investigations, and practical corrective actions."],
  ["Medical Surveillance", "Occupational-health support led by an experienced RN, including surveillance coordination and program alignment."],
  ["Training", "Facility-specific instruction for supervisors and employees, built around your hazards, processes, and compliance obligations."],
];

export default function Home() {
  return <main>
    <section className="hero"><div className="hero-overlay"><div className="shell hero-content">
      <p className="eyebrow">CIH • CSP • Occupational Health</p>
      <h1>Workplace risk, made clear.</h1>
      <p className="hero-copy">Industrial hygiene, safety, OSHA compliance, and medical surveillance support grounded in field experience—not boilerplate.</p>
      <div className="actions"><Link href="/contact" className="button">Request a Consultation</Link><Link href="/services" className="button button-ghost">Explore Services</Link></div>
      <div className="credential-strip"><span>Certified expertise</span><span>Practical solutions</span><span>Western U.S. coverage</span></div>
    </div></div></section>

    <section className="section shell intro-grid"><div><p className="eyebrow dark">A partner for complex workplaces</p><h2>Protect people. Strengthen operations.</h2></div><p className="lead">We help organizations understand exposures, prioritize risk, and implement solutions that work in the real world. Every engagement is shaped around your people, processes, and operational needs.</p></section>

    <section className="section section-tint"><div className="shell"><div className="section-heading"><div><p className="eyebrow dark">Core services</p><h2>Technical depth. Useful answers.</h2></div><Link href="/services" className="text-link">View all services →</Link></div><div className="card-grid">{services.map(([title,copy],i)=><article className="service-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section shell trust-grid"><div className="mountain-panel"><p className="eyebrow">Why Wasatch</p><h2>Built for the field.</h2></div><div className="trust-copy"><p className="eyebrow dark">Principal Consultant</p><h3>Thomas J. Allen, CIH, CSP</h3><p>Thomas leads Wasatch with Certified Industrial Hygienist and Certified Safety Professional expertise, bringing scientific rigor, compliance knowledge, and hands-on operational perspective to every engagement.</p><ul><li>Independent, defensible evaluations</li><li>Clear reports and prioritized actions</li><li>Responsive regional support</li><li>Solutions sized to your organization</li></ul></div></section>

    <section className="cta"><div className="shell cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>Have a workplace health or safety concern?</h2><p>Tell us what you are facing. We will help define the right next step.</p></div><Link href="/contact" className="button button-light">Talk with a CIH / CSP</Link></div></section>
  </main>;
}
