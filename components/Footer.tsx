import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="eyebrow text-sky-300">CIH & CSP-led consulting</p>
          <h2 className="mt-3 max-w-md text-2xl font-bold text-white">Practical expertise for healthier, safer workplaces.</h2>
          <p className="mt-4 max-w-lg text-sm leading-6">Utah-based industrial hygiene, occupational safety, and medical surveillance support for organizations across the Western United States.</p>
        </div>
        <div>
          <p className="font-bold text-white">Explore</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Start a conversation</p>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="tel:+14358304444">(435) 830-4444</a>
            <a href="mailto:wasatch.ihandsafety@gmail.com">wasatch.ihandsafety@gmail.com</a>
            <Link href="/contact" className="mt-2 font-bold text-sky-300">Request a consultation →</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800"><div className="shell flex flex-col gap-2 py-5 text-xs sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Wasatch Industrial Hygiene and Safety, LLC.</p><p>Serving the Western United States</p></div></div>
    </footer>
  );
}
