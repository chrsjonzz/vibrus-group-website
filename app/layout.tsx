import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Vibrus Group LLC — Healthcare, Industrial & Specialized Staffing Solutions",
    template: "%s | Vibrus Group LLC",
  },
  description:
    "Vibrus Group LLC is a Women-Owned Minority Small Business Enterprise (WMBE) in Warren, Michigan, delivering 24/7 healthcare clinical staffing, industrial & warehouse personnel, and specialized workforce solutions across Oakland, Wayne, Macomb counties and statewide.",
  keywords: [
    "Vibrus Group",
    "healthcare staffing Michigan",
    "nurse staffing Warren MI",
    "industrial staffing Oakland County",
    "warehouse staffing Detroit Wayne County",
    "Macomb County healthcare staffing",
    "RN LPN CNA staffing",
    "WMBE staffing agency Michigan",
    "24/7 medical staffing",
    "per diem nursing Michigan"
  ],
  authors: [{ name: "Vibrus Group LLC" }],
  creator: "Vibrus Group LLC",
  publisher: "Vibrus Group LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://vibrusgroup.com"),
  openGraph: {
    title: "Vibrus Group LLC — Single Source, Specialized Solutions",
    description: "24/7 Clinical Healthcare & Industrial Workforce Staffing in Warren, MI. 30-minute callback commitment with 600+ credentialed professionals.",
    url: "https://vibrusgroup.com",
    siteName: "Vibrus Group LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
