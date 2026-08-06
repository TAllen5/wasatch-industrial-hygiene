import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Wasatch Industrial Hygiene and Safety home"><Image src="/wasatch-logo.png" alt="Wasatch Industrial Hygiene and Safety, LLC" width={800} height={384} priority /></Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/experience">Experience</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link>
        </nav>
        <details className="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation"><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/experience">Experience</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link></nav></details>
        <Link href="/contact" className="button button-small">Request a Consultation</Link>
      </div>
    </header>
  );
}
