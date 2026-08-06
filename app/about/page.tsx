import Link from "next/link";

export default function AboutPage() {
  return <main>
    <section className="page-hero"><div className="shell"><p className="eyebrow">About Wasatch</p><h1>Expert guidance. Practical judgment.</h1><p>Independent industrial hygiene and safety consulting for organizations across the Western United States.</p></div></section>
    <section className="section shell about-grid">
      <div className="principal-card"><img src="/wasatch-logo.png" alt="Wasatch Industrial Hygiene and Safety, LLC" /><p className="eyebrow dark">Professional Credentials</p><h2>CIH • CSP</h2><p>Certified Industrial Hygienist<br />Certified Safety Professional</p></div>
      <div className="about-copy"><p className="lead">Wasatch Industrial Hygiene and Safety, LLC gives employers direct access to experienced, credentialed support without the layers of a large consulting firm.</p><p>Certified Industrial Hygienist and Certified Safety Professional expertise brings both exposure-science and occupational-safety perspectives to the same problem. The work is grounded in manufacturing and operational environments where recommendations must be technically sound, understandable to employees, and practical to implement.</p><p>Wasatch helps clients evaluate chemical, particulate, noise, ventilation, respiratory, and high-hazard work concerns; develop sustainable programs; and communicate findings clearly to leadership and employees.</p><p>Occupational-health and medical-surveillance support is strengthened by RN experience, providing a coordinated approach to exposure assessment, regulatory triggers, employee follow-up, and workforce health.</p><div className="values-row"><span>Independent judgment</span><span>Clear communication</span><span>Practical control</span></div><Link className="button" href="/contact">Work with Wasatch</Link></div>
    </section>
  </main>;
}
