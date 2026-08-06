export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><div className="footer-logo-wrap"><img className="footer-logo" src="/wasatch-logo.png" alt="Wasatch Industrial Hygiene and Safety, LLC" /></div><p>Practical, credentialed workplace health and safety solutions throughout the Western United States.</p></div>
        <div><h3>Explore</h3><a href="/services">Services</a><a href="/industries">Industries</a><a href="/contact">Request a Consultation</a><a href="/capability">Capability Statement</a></div>
        <div><h3>Professional Credentials</h3><p><strong>CIH • CSP</strong><br />Certified Industrial Hygienist<br />Certified Safety Professional</p></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Wasatch Industrial Hygiene and Safety, LLC</p>
    </footer>
  );
}
