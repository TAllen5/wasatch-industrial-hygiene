export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><h2>Wasatch Industrial Hygiene & Safety</h2><p>Practical, credentialed workplace health and safety solutions throughout the Western United States.</p></div>
        <div><h3>Contact</h3><a href="tel:+14358304444">(435) 830-4444</a><a href="mailto:wasatch.ihandsafety@gmail.com">wasatch.ihandsafety@gmail.com</a></div>
        <div><h3>Credentials</h3><p>Certified Industrial Hygienist (CIH)<br />Certified Safety Professional (CSP)</p></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Wasatch Industrial Hygiene and Safety, LLC</p>
    </footer>
  );
}
