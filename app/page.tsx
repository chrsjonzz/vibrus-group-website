import React from "react";
import type { Metadata } from "next";
import { SplitHero } from "@/components/home/SplitHero";
import { TrustBar } from "@/components/home/TrustBar";
import { GuidedExperienceSection } from "@/components/home/GuidedExperienceSection";
import { DivisionsGrid } from "@/components/home/DivisionsGrid";
import { MichiganMap } from "@/components/coverage/MichiganMap";
import { SearchableFacilityDirectory } from "@/components/coverage/SearchableFacilityDirectory";
import { WhyVibrusSection } from "@/components/home/WhyVibrusSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { MapPin, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Healthcare & Industrial Staffing",
  description:
    "Warren, Michigan staffing agency providing 24/7 credentialed healthcare personnel, industrial workforce, and specialized staffing across Southeast Michigan.",
  path: "/",
  image: "/images/hero-staffing-coordination.jpg",
  imageAlt: "Vibrus Group workforce solutions and staffing coordination in Warren, Michigan",
});

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. 5-Layer Dual-Funnel Editorial Hero */}
      <SplitHero />

      {/* 2. Key Verified Trust Anchors */}
      <TrustBar />

      {/* 3. Guided Journey: How It Works for Facilities & Candidates */}
      <GuidedExperienceSection />

      {/* 4. Specialized Industry Divisions */}
      <DivisionsGrid />

      {/* 5. Interactive Michigan Coverage & Facility Locator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">
              Interactive Regional Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Michigan Regional Coverage & Facility Directory
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our active footprint across Macomb, Oakland, and Wayne counties. Search facilities currently supported by Vibrus Group staffing dispatch.
            </p>
          </div>

          {/* Interactive Map Component */}
          <MichiganMap />

          {/* Searchable Facility Directory Component */}
          <div className="pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Searchable Facility Directory & Regional Hubs
                </h3>
                <p className="text-xs text-slate-500">
                  Real-time lookup across healthcare facilities, hospitals, and industrial centers.
                </p>
              </div>
              <Link
                href="/coverage"
                className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
              >
                <span>View Full Coverage Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <SearchableFacilityDirectory />
          </div>
        </div>
      </section>

      {/* 5. The Vibrus Difference */}
      <WhyVibrusSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Dual CTA Banner */}
      <CtaBanner />
    </div>
  );
}
