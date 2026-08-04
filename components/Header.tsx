export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <a href="/" className="flex flex-col">
          <span className="font-bold">Wasatch Industrial Hygiene & Safety</span>
          <span className="text-sm text-gray-600">CIH & CSP Consulting Services</span>
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

        <a
          href="/contact"
          className="rounded-md border px-4 py-2 text-sm md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
