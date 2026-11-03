import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, CheckCircle2, ArrowRight, FileCheck2, Users2 } from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";
import { generatePageMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = generatePageMetadata({
  title: "Professional & Executive Search",
  description:
    "Targeted recruitment and interim executive placement for finance, clinical nursing directorships, human resources, and operations leadership across Michigan.",
  path: "/divisions/professional",
  image: "/images/professional-executive-consulting.jpg",
  imageAlt: "Executive search consultants reviewing corporate placement portfolios in executive office",
});

export default function ProfessionalDivisionPage() {
  const prof = divisionsData.find((d) => d.id === "professional")!;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <Breadcrumbs
        items={[
          { label: "Divisions", href: "/divisions" },
          { label: "Professional & Executive" },
        ]}
      />
      
      {/* Bright Editorial Hero */}
      <section className="bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 text-slate-950 rounded-3xl p-8 sm:p-12 lg:p-14 border border-indigo-200/80 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-100 text-indigo-900 border border-indigo-200 rounded-full text-xs font-bold shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-indigo-700" />
              <span>Executive Search & Interim Leadership</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Professional & Executive Search
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Targeted executive recruitment and professional placements in finance, human resources, clinical leadership (Directors of Nursing), supply chain management, and corporate operations across Michigan.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers?division=professional"
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Initiate Executive Search</span>
              </Link>
              <Link
                href="/apply?role=Executive%20Management"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4 text-slate-500" />
                <span>Submit Confidential CV</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group aspect-[4/3] bg-white">
              <Image
                src="/images/professional-executive-consulting.jpg"
                alt="Executive search and business leaders reviewing professional placement portfolios"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md text-slate-900 text-xs">
                <div className="font-bold flex items-center gap-1.5 text-indigo-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Confidential Executive Placement</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  High-level leadership vetted with precision across Michigan
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Classifications Grid */}
      <section id="job-classifications" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Professional Classifications & Disciplines
          </h2>
          <p className="text-xs text-slate-500">
            Precision vetting and executive alignment for direct hire and contract leadership across Michigan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {prof.jobClassifications[0].roles.map((role, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5 text-xs text-slate-800 font-medium">
              <span className="w-2 h-2 bg-indigo-600 rounded-full shrink-0" />
              <span>{role}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
