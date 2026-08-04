export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="font-bold">Wasatch Industrial Hygiene & Safety</div>
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
