import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Staffing Operations Desk",
  description:
    "Connect with Vibrus Group operations headquarters in Warren, Michigan. Reach our 24/7 staffing dispatch line or submit shift staffing requests online.",
  path: "/contact",
  image: "/images/hero-staffing-coordination.jpg",
  imageAlt: "Vibrus Group Warren Michigan office operations and staffing dispatch desk",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
