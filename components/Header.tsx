import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand"><img src="/wasatch-logo.png" alt="Wasatch Industrial Hygiene and Safety, LLC" /></Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link>
        </nav>
        <Link href="/contact" className="button button-small">Request a Consultation</Link>
      </div>
    </header>
  );
}
