import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow dark">404</p><h1>Page not found.</h1>
      <p className="lead">
        The page you are looking for does not exist. Return to Wasatch Industrial
        Hygiene & Safety to learn about our consulting services.
      </p>
      <Link href="/" className="button">Return Home</Link>
    </main>
  );
}
