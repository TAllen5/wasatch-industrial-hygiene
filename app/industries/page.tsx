const industries=[
  ["Manufacturing","Machining, welding, coating, chemical use, ceramics, assembly, maintenance and material handling."],
  ["Aerospace & Defense","Complex production environments, specialized materials, energetic or high-hazard processes, and stringent customer requirements."],
  ["Construction","Silica, noise, lead, respiratory protection, fall hazards, confined spaces and multi-employer worksite coordination."],
  ["Energy & Utilities","Field operations, electrical safety, maintenance outages, contractor oversight and exposure assessment."],
  ["Laboratories & R&D","Chemical handling, fume hoods, nanomaterials, compressed gases, pilot processes and changing research hazards."],
  ["Healthcare","Occupational exposure, respiratory protection, hazardous drugs, bloodborne pathogens and employee health programs."],
  ["Government","Independent technical support, program evaluation, employee concerns and compliance readiness."],
  ["General Industry","Warehousing, fabrication, service operations, facilities maintenance and growing safety programs."],
];
export default function IndustriesPage(){return <main><section className="page-hero factory-hero"><div className="shell"><p className="eyebrow">Industries</p><h1>Experience that translates across operations.</h1><p>Wasatch supports organizations with complex processes, changing hazards, and a need for practical, defensible guidance.</p></div></section><section className="section shell"><div className="industry-grid">{industries.map(([title,copy])=><article key={title}><h2>{title}</h2><p>{copy}</p></article>)}</div><div className="process-banner"><div><p className="eyebrow">Regional coverage</p><h2>Serving the Western United States</h2></div><p>Utah-based and available for project work throughout the region, including on-site assessments, sampling campaigns, audits, training, and program development.</p></div></section></main>}
