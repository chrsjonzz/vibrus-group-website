"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck2,
  Users2,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Clock,
  ArrowRight,
  Building2,
  PhoneCall,
  Sparkles,
  ChevronRight,
  BadgeCheck,
  Briefcase
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

interface JourneyStep {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  icon: React.ElementType;
}

export function GuidedExperienceSection() {
  const [activeAudience, setActiveAudience] = useState<"facilities" | "candidates">("facilities");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const facilitySteps: JourneyStep[] = [
    {
      step: "01",
      badge: "Step 01 • Intake & Needs",
      title: "Tell Us What Support You Need",
      subtitle: "24/7 Warren Dispatch or Online Requisition",
      description:
        "Submit your open shift, crisis coverage, or long-term staffing requisition online or call our 24/7 Warren dispatch desk. Specify your clinical specialty or industrial shift criteria, unit nuances, and required start times.",
      highlights: [
        "24/7 Warren dispatch desk intake",
        "Clinical healthcare & industrial staffing coverage",
        "Direct phone intake or online requisition form"
      ],
      image: "/images/how_it_works_facility_1_intake.jpg",
      imageAlt: "Healthcare facility coordinator discussing staffing requirements with Vibrus specialist",
      imageCaption: "Consultative workforce intake with our Warren staffing specialists.",
      icon: FileCheck2,
    },
    {
      step: "02",
      badge: "Step 02 • Verification & Matching",
      title: "We Match Pre-Screened Professionals",
      subtitle: "Primary-Source Verified 600+ Roster",
      description:
        "Our team selects qualified personnel from our roster of 600+ credentialed Michigan professionals. Every candidate is primary-source verified with active state licenses, 10-panel drug screens, and comprehensive background clearances.",
      highlights: [
        "Primary-source credential & license verification",
        "10-panel drug screen & OIG/background clearances",
        "600+ vetted professionals across Michigan"
      ],
      image: "/images/how_it_works_facility_2_matching.jpg",
      imageAlt: "Staffing coordinators reviewing credentialed healthcare candidate profiles",
      imageCaption: "Thorough credential matching and compliance review.",
      icon: ShieldCheck,
    },
    {
      step: "03",
      badge: "Step 03 • Active Support",
      title: "We Stay Connected Through The Process",
      subtitle: "Shift Confirmation & 24/7 Support",
      description:
        "From shift arrival confirmation to ongoing scheduling management, our Warren dispatch coordinators remain reachable 24/7/365 to handle real-time shift modifications, check-ins, and facility feedback.",
      highlights: [
        "Active arrival check-in protocol",
        "24/7/365 live coordinator dispatch access",
        "Continuous feedback and shift extension support"
      ],
      image: "/images/how_it_works_facility_3_connected.jpg",
      imageAlt: "Vibrus staffing operations coordinator speaking with facility administrator",
      imageCaption: "Round-the-clock live dispatch and operational support.",
      icon: Headphones,
    },
  ];

  const candidateSteps: JourneyStep[] = [
    {
      step: "01",
      badge: "Step 01 • Rapid Intake",
      title: "Start Your 60-Second Application",
      subtitle: "Frictionless Express Process",
      description:
        "Complete our simple 60-second express application with your specialty, contact details, and resume. No cumbersome logins, forgotten passwords, or tedious multi-page barriers required to connect with a recruiter.",
      highlights: [
        "Under 60 seconds from phone, tablet, or desktop",
        "Instant resume upload option (demo safe storage)",
        "Direct routing to a dedicated talent coordinator"
      ],
      image: "/images/how_it_works_candidate_1_apply.jpg",
      imageAlt: "Healthcare candidate submitting express application on laptop",
      imageCaption: "Quick, frictionless express application from phone or desktop.",
      icon: Users2,
    },
    {
      step: "02",
      badge: "Step 02 • Availability & Goals",
      title: "Share Your Experience & Preferred Schedule",
      subtitle: "Tailored Shifts Matching Your Life",
      description:
        "Tell us where and when you prefer to work across Wayne, Oakland, Macomb, or broader Michigan. Whether you seek flexible PRN shifts, local contract assignments, or direct placement, we tailor matches to your availability.",
      highlights: [
        "Flexible PRN, contract, or direct hire opportunities",
        "Oakland, Wayne, Macomb & expanding Michigan coverage",
        "Competitive hourly compensation and shift flexibility"
      ],
      image: "/images/how_it_works_candidate_2_schedule.jpg",
      imageAlt: "Clinician in navy scrubs checking digital schedule on tablet",
      imageCaption: "Customized shift availability and placement preferences.",
      icon: Clock,
    },
    {
      step: "03",
      badge: "Step 03 • Placement & Care",
      title: "Connect With The Vibrus Team & Begin",
      subtitle: "Dedicated Recruiter & Continuous Support",
      description:
        "Your dedicated staffing coordinator assists with swift credential verification, facility orientation, and immediate shift placement, backed by prompt electronic payroll and 24/7 coordinator assistance.",
      highlights: [
        "Personal recruiter dedicated to your placement",
        "Streamlined onboarding & credentialing verification",
        "Reliable electronic payroll & 24/7 team support"
      ],
      image: "/images/how_it_works_candidate_3_connect.jpg",
      imageAlt: "Recruiter and job candidate meeting warmly in bright modern office",
      imageCaption: "Personalized onboarding and continuous recruiter backing.",
      icon: CheckCircle2,
    },
  ];

  const currentSteps = activeAudience === "facilities" ? facilitySteps : candidateSteps;
  const currentActiveStep = currentSteps[activeStepIndex] || currentSteps[0];

  const handleAudienceChange = (audience: "facilities" | "candidates") => {
    setActiveAudience(audience);
    setActiveStepIndex(0);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Subtle Light Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header & Interactive Audience Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-bold text-blue-900 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>Transparent 3-Step Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              How Vibrus Works For You
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear, human-centered workforce coordination. Choose your path below to see exactly how our 24/7 Warren team delivers dependable support from intake to assignment.
            </p>
          </div>

          {/* Audience Switcher Toggle */}
          <div className="inline-flex p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300/80 self-start md:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => handleAudienceChange("facilities")}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeAudience === "facilities"
                  ? "bg-white text-blue-950 shadow-md ring-1 ring-slate-300"
                  : "text-slate-600 hover:text-slate-950 hover:bg-white/40"
              }`}
            >
              <Building2 className={`w-4 h-4 ${activeAudience === "facilities" ? "text-blue-700" : "text-slate-500"}`} />
              <span>For Facilities & Employers</span>
            </button>
            <button
              type="button"
              onClick={() => handleAudienceChange("candidates")}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeAudience === "candidates"
                  ? "bg-white text-emerald-950 shadow-md ring-1 ring-slate-300"
                  : "text-slate-600 hover:text-slate-950 hover:bg-white/40"
              }`}
            >
              <Users2 className={`w-4 h-4 ${activeAudience === "candidates" ? "text-emerald-700" : "text-slate-500"}`} />
              <span>For Candidates & Clinicians</span>
            </button>
          </div>
        </div>

        {/* Interactive Dual-Panel Experience: Milestone Selector (Left) & Active Visual Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Milestone Cards (7 Cols on LG) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {currentSteps.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 text-left relative overflow-hidden group ${
                    isSelected
                      ? activeAudience === "facilities"
                        ? "bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-soft-xl"
                        : "bg-white border-emerald-500 ring-2 ring-emerald-500/20 shadow-soft-xl"
                      : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div
                      className={`absolute top-0 left-0 bottom-0 w-2 ${
                        activeAudience === "facilities" ? "bg-blue-600" : "bg-emerald-600"
                      }`}
                    />
                  )}

                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Step Number Circle */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shrink-0 transition-colors ${
                        isSelected
                          ? activeAudience === "facilities"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-emerald-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900"
                      }`}
                    >
                      {stepItem.step}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-bold tracking-wide uppercase ${
                            isSelected
                              ? activeAudience === "facilities"
                                ? "text-blue-700"
                                : "text-emerald-700"
                              : "text-slate-500"
                          }`}
                        >
                          {stepItem.badge}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isSelected
                              ? activeAudience === "facilities"
                                ? "text-blue-600 translate-x-1"
                                : "text-emerald-600 translate-x-1"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        />
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-blue-950 transition-colors">
                        {stepItem.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {stepItem.description}
                      </p>

                      {/* Expandable Highlight Chips on Selection */}
                      {isSelected && (
                        <div className="pt-3 mt-3 border-t border-slate-100 flex flex-wrap gap-2">
                          {stepItem.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700"
                            >
                              <BadgeCheck className="w-3.5 h-3.5 text-blue-600" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Card with High-Res Image (5 Cols on LG) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-soft-xl flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                <Image
                  src={currentActiveStep.image}
                  alt={currentActiveStep.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{currentActiveStep.badge}</span>
                </div>

                {/* Bottom Overlay Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-medium text-slate-200 drop-shadow-sm">
                    {currentActiveStep.imageCaption}
                  </p>
                </div>
              </div>

              {/* Showcase Detail Box */}
              <div className="mt-5 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
                    {currentActiveStep.subtitle}
                  </div>
                  <h4 className="text-lg font-black text-slate-950">
                    {currentActiveStep.title}
                  </h4>
                </div>

                {/* Key Pillars */}
                <ul className="space-y-2 border-t border-slate-100 pt-3">
                  {currentActiveStep.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Step Switcher Navigation Dots */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  <span>Milestone {activeStepIndex + 1} of 3</span>
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setActiveStepIndex(dotIdx)}
                        aria-label={`Go to step ${dotIdx + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          activeStepIndex === dotIdx
                            ? "w-6 bg-blue-600"
                            : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Guided Conversion Banner (Brightened High-Contrast Design) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-vibrus-navy to-slate-900 text-white border border-blue-950/40 shadow-elevated flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {activeAudience === "facilities"
                  ? "Guaranteed 30-Minute Callback Commitment"
                  : "Rapid Placement Across Michigan"}
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {activeAudience === "facilities"
                ? "Facing Immediate Shift Openings or Project Deadlines?"
                : "Looking for Flexible PRN or Contract Work in Michigan?"}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeAudience === "facilities"
                ? "Submit your custom staffing requisition online or connect immediately with our Warren operations desk. We respond within 30 minutes during business operations."
                : "Submit your express application in 60 seconds or browse active hospital, nursing, and industrial openings on Jobsoid."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {activeAudience === "facilities" ? (
              <>
                <Link
                  href="/employers"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Request Staff Consultation</span>
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-all border border-white/20 active:scale-95 flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Dispatch: {siteConfig.phone}</span>
                </a>
              </>
            ) : (
              <>
                <Link
                  href="/apply"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <Users2 className="w-4 h-4" />
                  <span>Start 60-Second Application</span>
                </Link>
                <a
                  href={siteConfig.externalLinks.jobsoid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-all border border-white/20 active:scale-95 flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-blue-300" />
                  <span>Browse Jobsoid Openings →</span>
                </a>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
