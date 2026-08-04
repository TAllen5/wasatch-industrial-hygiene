export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Wasatch Industrial Hygiene & Safety" className="h-10 w-10" />
          <div>
            <div className="font-bold">Wasatch Industrial Hygiene & Safety</div>
            <div className="text-sm text-gray-600">CIH & CSP Consulting Services</div>
          </div>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/industries">Industries</a>
          <a href="/experience">Experience</a>
          <a href="/capability">Capability</a>
          <a href="/faq">FAQ</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
