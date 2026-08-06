import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Wasatch Industrial Hygiene & Safety | CIH CSP Consulting",
  description:
    "Wasatch Industrial Hygiene & Safety provides industrial hygiene, OSHA compliance, safety consulting, training, and occupational health support throughout the western United States.",
  keywords: [
    "industrial hygiene consultant",
    "Certified Industrial Hygienist",
    "CSP safety consultant",
    "OSHA compliance",
    "workplace exposure assessment",
    "occupational health"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
