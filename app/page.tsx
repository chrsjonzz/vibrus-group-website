import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SplitHero } from "@/components/home/SplitHero";
import { TrustBar } from "@/components/home/TrustBar";
import { GuidedExperienceSection } from "@/components/home/GuidedExperienceSection";
import { DivisionsGrid } from "@/components/home/DivisionsGrid";
import { MichiganMap } from "@/components/coverage/MichiganMap";
import { SearchableFacilityDirectory } from "@/components/coverage/SearchableFacilityDirectory";
import { WhyVibrusSection } from "@/components/home/WhyVibrusSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { AgendrixExperienceSection } from "@/components/careers/AgendrixExperienceSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Building, ExternalLink, FileCheck2, Phone, Users2 } from "lucide-react";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/config/seo";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Healthcare & Industrial Staffing",
  description:
    "Warren, Michigan staffing agency providing 24/7 credentialed healthcare personnel, industrial workforce, and specialized staffing across Southeast Michigan.",
  path: "/",
    image: "/images/vibrus-home-hero-wide-v3.png",
  imageAlt: "Vibrus Group workforce solutions and staffing coordination in Warren, Michigan",
});

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. 5-Layer Dual-Funnel Editorial Hero */}
      <ScrollReveal>
        <SplitHero />
      </ScrollReveal>

      {/* 1b. Michigan nature visual between the action console and trust anchors */}
      <ScrollReveal>
      <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-100 py-10 sm:py-14 lg:py-16" aria-label="Michigan shoreline landscape with staffing actions">
        <Image
          src="/images/vibrus-michigan-nature-closing-v1.png"
          alt="Peaceful Michigan shoreline, native grasses, and a tree-lined walking path"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-transparent to-slate-950/10" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/35 bg-gradient-to-br from-slate-950/[0.62] via-slate-900/[0.38] to-blue-950/[0.22] p-6 shadow-[0_24px_70px_-28px_rgba(15,23,42,0.7)] ring-1 ring-white/15 backdrop-blur-2xl backdrop-saturate-150 sm:p-8">
            <div className="flex min-h-[4.5rem] items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <div>
                  <span className="inline-flex rounded-full border border-blue-200/80 bg-white/75 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-blue-950 shadow-sm">
                    For Facilities & Employers
                  </span>
                  <h2 className="mt-1 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    Request Staff On-Demand
                  </h2>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-bold text-amber-900">
                30-Min Callback
              </span>
            </div>
            <p className="mt-5 min-h-[4.5rem] text-sm font-medium leading-6 text-white/90 sm:text-base">
              Fulfill clinical nursing, therapy, industrial, logistics, and specialized workforce requisitions with verified credentials and rapid operational dispatch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/employers" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700">
                <FileCheck2 className="h-4 w-4" />
                Request Staff On-Demand
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-white">
                <Phone className="h-4 w-4 text-blue-600" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/35 bg-gradient-to-br from-slate-950/[0.62] via-slate-900/[0.38] to-emerald-950/[0.22] p-6 shadow-[0_24px_70px_-28px_rgba(15,23,42,0.7)] ring-1 ring-white/15 backdrop-blur-2xl backdrop-saturate-150 sm:p-8">
            <div className="flex min-h-[4.5rem] items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <Users2 className="h-6 w-6" />
                </div>
                <div>
                  <span className="inline-flex rounded-full border border-emerald-200/80 bg-white/75 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-emerald-950 shadow-sm">
                    For Candidates & Clinicians
                  </span>
                  <h2 className="mt-1 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    60-Second Express Apply
                  </h2>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-900">
                Fast Intake
              </span>
            </div>
            <p className="mt-5 min-h-[4.5rem] text-sm font-medium leading-6 text-white/90 sm:text-base">
              Connect with our Warren recruiting team for per-diem PRN shifts, local contract assignments, and direct placements across Michigan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/apply" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700">
                <Users2 className="h-4 w-4" />
                60-Second Express Apply
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={siteConfig.externalLinks.jobsoid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-white">
                Jobsoid Openings
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* 2. Key Verified Trust Anchors */}
      <ScrollReveal delay={0.04}>
        <TrustBar />
      </ScrollReveal>

      {/* 3. Guided Journey: How It Works for Facilities & Candidates */}
      <ScrollReveal>
        <GuidedExperienceSection />
      </ScrollReveal>

      {/* 3b. Agendrix Candidate Mobile Scheduling Experience Teaser */}
      <ScrollReveal delay={0.04}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <AgendrixExperienceSection variant="compact" />
        </div>
      </ScrollReveal>

      {/* 4. Specialized Industry Divisions */}
      <ScrollReveal>
        <DivisionsGrid />
      </ScrollReveal>

      {/* 5. Interactive Michigan Coverage & Facility Locator */}
      <ScrollReveal>
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
      </ScrollReveal>

      {/* 5. The Vibrus Difference */}
      <ScrollReveal>
        <WhyVibrusSection />
      </ScrollReveal>

      {/* 6. Testimonials */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* 7. Dual CTA Banner */}
      <ScrollReveal>
        <CtaBanner />
      </ScrollReveal>

      {/* 8. Teamwork closing visual */}
      <ScrollReveal>
      <section className="relative isolate overflow-hidden border-t border-slate-200 bg-slate-900 py-24 sm:py-32">
        <Image
          src="/images/vibrus-teamwork-nature-closing-v2.png"
          alt="Healthcare and industrial professionals walking together beside a Michigan shoreline"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/70 via-slate-950/25 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg rounded-[2rem] border border-white/35 bg-white/92 p-7 shadow-2xl backdrop-blur-md sm:p-9">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-800">
              Built around teamwork
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              The right people make the work stronger.
            </h2>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-800 sm:text-base">
              Vibrus Group brings facilities, professionals, and responsive coordination together so teams can keep moving with confidence across Michigan.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Connect with Vibrus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
