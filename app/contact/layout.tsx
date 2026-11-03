import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Our Warren, MI Headquarters",
  description:
    "Reach Vibrus Group in Warren, MI. Call (248) 443-5100 for 24/7 staffing dispatch, employee support, or local workforce consultations across Southeast Michigan.",
  path: "/contact",
  image: "/images/hero-staffing-coordination.jpg",
  imageAlt:
    "Vibrus Group headquarters office and staffing dispatch desk in Warren, Michigan",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
