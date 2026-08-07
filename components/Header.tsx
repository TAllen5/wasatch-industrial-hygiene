import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["About", "/about"],
  ["FAQ", "/faq"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Wasatch Industrial Hygiene and Safety home">
          <Image src="/logo.svg" alt="Wasatch Industrial Hygiene and Safety" width={220} height={66} priority className="h-14 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-sky-800">{label}</Link>
          ))}
          <a href="tel:+14358304444" className="text-sm font-semibold text-slate-700 transition hover:text-sky-800">(435) 830-4444</a>
          <Link href="/contact" className="button button-primary">Request a Consultation</Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800">Menu</summary>
          <nav className="absolute right-0 mt-3 grid w-64 gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl" aria-label="Mobile navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-4 py-3 font-semibold hover:bg-slate-100">{label}</Link>)}
            <Link href="/contact" className="button button-primary mt-2 text-center">Request a Consultation</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
