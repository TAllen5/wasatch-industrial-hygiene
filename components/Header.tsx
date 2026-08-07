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
    <header className="sticky top-0 z-50 border-b border-sky-800/60 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white shadow-[0_10px_30px_rgba(2,12,27,.18)]">
      <div className="shell flex min-h-24 items-center justify-between gap-4 py-3 sm:min-h-28 sm:gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Wasatch Industrial Hygiene and Safety home">
          <Image src="/logo.svg" alt="Wasatch Industrial Hygiene and Safety" width={330} height={81} priority className="h-12 w-auto sm:h-20" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-slate-200 transition hover:text-white">{label}</Link>
          ))}
          <a href="tel:+14358304444" className="text-sm font-semibold text-slate-200 transition hover:text-white">(435) 830-4444</a>
          <Link href="/contact" className="button bg-orange-600 text-white shadow-lg shadow-orange-950/20 hover:bg-orange-500">Request a Consultation</Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/30 px-4 py-2 text-sm font-bold text-white hover:bg-white/10">Menu</summary>
          <nav className="absolute right-0 mt-3 grid w-64 gap-1 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 shadow-xl" aria-label="Mobile navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} className="rounded-lg px-4 py-3 font-semibold hover:bg-slate-100">{label}</Link>)}
            <Link href="/contact" className="button button-primary mt-2 text-center">Request a Consultation</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
