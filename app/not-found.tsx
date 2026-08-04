export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4 max-w-xl text-gray-600">
        The page you are looking for does not exist. Return to Wasatch Industrial
        Hygiene & Safety to learn about our consulting services.
      </p>
      <a
        href="/"
        className="mt-6 rounded-md bg-black px-6 py-3 text-white"
      >
        Return Home
      </a>
    </main>
  );
}
