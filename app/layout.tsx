import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wasatchsafetyih.com"),
  title: { default: "Wasatch Industrial Hygiene & Safety | CIH CSP Consulting", template: "%s | Wasatch Industrial Hygiene & Safety" },
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
  manifest: "/site.webmanifest",
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "Wasatch Industrial Hygiene & Safety", title: "Wasatch Industrial Hygiene & Safety", description: "CIH and CSP-led workplace health, safety, and compliance consulting throughout the Western United States." },
  twitter: { card: "summary_large_image", title: "Wasatch Industrial Hygiene & Safety", description: "CIH and CSP-led workplace health, safety, and compliance consulting." },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b2432" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main-content">Skip to main content</a><Header /><div id="main-content">{children}</div><Footer /></body>
    </html>
  );
}
