import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wasatchsafetyih.com"),
  title: { default: "Wasatch Industrial Hygiene & Safety | CIH & CSP Consulting", template: "%s | Wasatch Industrial Hygiene & Safety" },
  description: "CIH- and CSP-led industrial hygiene, safety consulting, OSHA compliance, and occupational health support across the Western United States.",
  keywords: ["industrial hygiene consultant Utah", "Certified Industrial Hygienist", "safety consultant", "OSHA compliance", "exposure monitoring", "medical surveillance"],
  openGraph: { title: "Wasatch Industrial Hygiene & Safety", description: "Practical expertise for healthier, safer workplaces.", type: "website", url: "/" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071927" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={manrope.variable}><body><Header />{children}<Footer /></body></html>;
}
