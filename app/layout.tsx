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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Wasatch Industrial Hygiene and Safety, LLC",
  url: "https://wasatchsafetyih.com",
  logo: "https://wasatchsafetyih.com/wasatch-logo.png",
  telephone: "+1-435-830-4444",
  email: "wasatch.ihandsafety@gmail.com",
  areaServed: ["Utah", "Idaho", "Nevada", "Arizona", "Colorado", "Wyoming", "Montana", "California"],
  employee: [
    { "@type": "Person", name: "Thomas J. Allen", honorificSuffix: "CIH, CSP", jobTitle: "Founder and Principal Consultant" },
    { "@type": "Person", name: "Bailey Allen", honorificSuffix: "RN", jobTitle: "Medical Surveillance and Occupational Health" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><a className="skip-link" href="#main-content">Skip to main content</a><Header /><div id="main-content">{children}</div><Footer /></body>
    </html>
  );
}
