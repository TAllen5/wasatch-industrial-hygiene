import Link from "next/link";

const services = [
  ["Industrial Hygiene", "Exposure assessments, air monitoring, noise surveys, chemical evaluations, ventilation reviews, and clear recommendations."],
  ["Safety & OSHA Compliance", "Program development, gap assessments, audits, JSAs, incident investigations, and practical corrective actions."],
  ["Medical Surveillance", "RN-led support from Bailey Allen, including biological monitoring, surveillance coordination, and occupational-health follow-through."],
  ["Training", "Facility-specific instruction for supervisors and employees, built around your hazards, processes, and compliance obligations."],
];

const triggers = [
  ["An employee raises an exposure concern", "Get an independent assessment before uncertainty becomes disruption."],
  ["A new chemical or process is coming online", "Define the monitoring, controls, PPE, and medical-surveillance needs early."],
  ["Sampling results are difficult to interpret", "Turn numbers into clear decisions, employee communication, and corrective actions."],
  ["A customer or regulator asks for proof", "Build a defensible record of evaluation, controls, training, and follow-through."],
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

    <section className="section shell"><div className="section-heading"><div><p className="eyebrow dark">When to call Wasatch</p><h2>Bring us in before the problem gets expensive.</h2></div></div><div className="trigger-grid">{triggers.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="section shell trust-grid"><div className="mountain-panel"><p className="eyebrow">Why Wasatch</p><h2>Built for the field.</h2></div><div className="trust-copy"><p className="eyebrow dark">Two disciplines. One coordinated answer.</p><h3>Industrial hygiene, safety, and occupational health expertise</h3><p><strong>Thomas J. Allen, CIH, CSP</strong> leads exposure assessment, safety, compliance, and control strategy. <strong>Bailey Allen, RN</strong> leads medical-surveillance and biological-monitoring support, connecting workplace exposure information with occupational-health follow-through.</p><ul><li>Independent, defensible evaluations</li><li>Clear reports and prioritized actions</li><li>Coordinated IH and medical surveillance</li><li>Responsive Western U.S. support</li></ul><Link className="text-link" href="/about">Meet the team →</Link></div></section>

    <section className="section section-tint"><div className="shell"><div className="section-intro"><p className="eyebrow dark">A straightforward engagement</p><h2>From first call to usable action.</h2></div><div className="steps-grid"><article><span>01</span><h3>Define the decision</h3><p>We clarify the concern, process, timeline, and information you need.</p></article><article><span>02</span><h3>Evaluate the work</h3><p>We review records, observe tasks, collect data, and speak with the right people.</p></article><article><span>03</span><h3>Prioritize action</h3><p>You receive clear findings, practical controls, and the next steps that matter most.</p></article></div></div></section>

    <section className="cta"><div className="shell cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>Have a workplace health or safety concern?</h2><p>Tell us what you are facing. We will help define the right next step.</p></div><div className="cta-actions"><a href="tel:+14358304444" className="button button-light">Call (435) 830-4444</a><Link href="/contact" className="button button-ghost">Request a Consultation</Link></div></div></section>
  </main>;
}
