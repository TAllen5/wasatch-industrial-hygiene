import Link from "next/link";

export const metadata = { title: "Medical Surveillance", description: "RN-led medical-surveillance and biological-monitoring support coordinated with industrial hygiene exposure assessment." };

const programs = [
  ["Program design & coordination", "Connect applicable exposure standards, employee groups, testing needs, timing, documentation, and provider responsibilities."],
  ["Biological monitoring", "Organize exposure history, work activities, laboratory results, airborne-exposure data, follow-up, and trend monitoring."],
  ["Employee follow-through", "Support clear notification, required next steps, recordkeeping, and coordination with the employer’s occupational-health provider."],
  ["IH + health integration", "Interpret medical-surveillance needs alongside process knowledge, exposure assessment, respiratory protection, and engineering controls."],
];

export default function MedicalSurveillancePage(){return <main><section className="page-hero medical-hero"><div className="shell"><p className="eyebrow">Medical Surveillance</p><h1>Exposure data is only half the picture.</h1><p>RN-led medical-surveillance and biological-monitoring support coordinated with industrial hygiene expertise.</p></div></section><section className="section shell medical-intro"><div><p className="eyebrow dark">Coordinated support</p><h2>Connect exposure information with occupational-health follow-through.</h2></div><p className="lead">We help define covered employees, organize exposure information, coordinate follow-up, and align surveillance with workplace controls.</p></section><section className="section section-tint"><div className="shell detail-grid">{programs.map(([title,copy])=><article className="detail-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section><section className="cta"><div className="shell cta-inner"><div><p className="eyebrow">Build a defensible program</p><h2>Need help connecting exposure results and medical surveillance?</h2></div><Link className="button button-light" href="/contact">Discuss Your Program</Link></div></section></main>}
