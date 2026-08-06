import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><div className="footer-logo-wrap"><Image className="footer-logo" src="/wasatch-logo.png" alt="Wasatch Industrial Hygiene and Safety, LLC" width={800} height={384} /></div><p>Practical, credentialed workplace health and safety solutions throughout the Western United States.</p></div>
        <div><h3>Contact</h3><a href="tel:+14358304444">(435) 830-4444</a><a href="mailto:wasatch.ihandsafety@gmail.com">wasatch.ihandsafety@gmail.com</a><a href="/contact">Request a Consultation</a><a href="/capability">Capability Statement</a></div>
        <div><h3>Professional Expertise</h3><p><strong>CIH • CSP • RN</strong><br />Industrial Hygiene, Safety & Medical Surveillance</p><a href="/medical-surveillance">Medical Surveillance Services</a></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Wasatch Industrial Hygiene and Safety, LLC</p>
    </footer>
  );
}
