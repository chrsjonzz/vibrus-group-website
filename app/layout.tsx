import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config/site";
import { siteUrl, isProduction, schemaOrgData } from "@/lib/config/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const previewHost = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : isProduction
  ? siteUrl
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Healthcare & Industrial Staffing | Vibrus Group",
    template: "%s | Vibrus Group",
  },
  description:
    "Warren, Michigan staffing agency providing 24/7 credentialed healthcare personnel, industrial workforce, and specialized staffing across Southeast Michigan.",
  metadataBase: new URL(previewHost),
  alternates: isProduction
    ? {
        canonical: siteUrl,
      }
    : undefined,
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
      },
  openGraph: {
    title: "Healthcare & Industrial Staffing | Vibrus Group",
    description:
      "Warren, Michigan staffing agency providing 24/7 credentialed healthcare personnel, industrial workforce, and specialized staffing across Southeast Michigan.",
    url: siteUrl,
    siteName: "Vibrus Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/vibrus-home-hero-wide-v3.png`,
        width: 1200,
        height: 630,
        alt: "Vibrus Group workforce solutions and staffing coordination in Warren, Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare & Industrial Staffing | Vibrus Group",
    description:
      "Warren, Michigan staffing agency providing 24/7 credentialed healthcare personnel, industrial workforce, and specialized staffing across Southeast Michigan.",
    images: [`${siteUrl}/images/vibrus-home-hero-wide-v3.png`],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Schema.org Organization & WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData.website),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
