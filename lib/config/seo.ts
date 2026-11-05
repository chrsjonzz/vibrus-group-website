import type { Metadata } from "next";

export const isProduction =
  process.env.ENABLE_PRODUCTION_INDEXING === "true" &&
  (process.env.VERCEL_ENV === "production" ||
   process.env.NEXT_PUBLIC_APP_ENV === "production");

export const siteUrl = "https://vibrusgroup.com";

export interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/**
 * Generates unified, strictly validated Next.js Metadata for any page.
 * Format: "%s | Vibrus Group"
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image = "/images/hero-staffing-coordination.jpg",
  imageAlt = "Vibrus Group workforce solutions and staffing coordination in Warren, Michigan",
  type = "website",
  noIndex = false,
}: PageSeoProps): Metadata {
  const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  // Staging/preview environments are always noindex
  const shouldIndex = isProduction && !noIndex;

  return {
    title: path === "/" ? `${title} | Vibrus Group` : title,
    description,
    alternates: isProduction
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    robots: shouldIndex
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
      title: `${title} | Vibrus Group`,
      description,
      url: canonicalUrl,
      siteName: "Vibrus Group",
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Vibrus Group`,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Schema.org JSON-LD definitions
 */
export const schemaOrgData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": `${siteUrl}/#organization`,
    name: "Vibrus Group LLC",
    legalName: "Vibrus Group LLC",
    url: siteUrl,
    logo: `${siteUrl}/images/vibrus-logo.jpg`,
    description:
      "Women-Owned Minority Small Business Enterprise (WMBE) headquartered in Warren, MI, providing clinical healthcare, industrial, and specialized workforce staffing across Michigan.",
    telephone: "+1-248-443-5100",
    faxNumber: "+1-248-443-5115",
    address: {
      "@type": "PostalAddress",
      streetAddress: "31201 Chicago Road South, Suite B202",
      addressLocality: "Warren",
      addressRegion: "MI",
      postalCode: "48093",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Michigan" },
      { "@type": "AdministrativeArea", name: "Macomb County, MI" },
      { "@type": "AdministrativeArea", name: "Oakland County, MI" },
      { "@type": "AdministrativeArea", name: "Wayne County, MI" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-248-443-5100",
        contactType: "24/7 Staffing Dispatch & Customer Service",
        availableLanguage: ["English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Vibrus Group",
    description:
      "24/7 Healthcare Clinical & Industrial Workforce Staffing in Warren, Michigan.",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  },
};

export function generateBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
