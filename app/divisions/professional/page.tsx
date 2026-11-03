import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, CheckCircle2, ArrowRight, FileCheck2, Users2 } from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";

export const metadata: Metadata = {
  title: "Professional & Executive Search — Vibrus Group LLC",
  description:
    "Direct hire, interim leadership, and corporate search in accounting, human resources, supply chain, and executive management.",
};

export default function ProfessionalDivisionPage() {
  const prof = divisionsData.find((d) => d.id === "professional")!;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Division Hero with Authentic Visual Storytelling & 3D Depth */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-indigo-900/40 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-bold backdrop-blur-md shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Executive Search & Interim Leadership</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Professional & Executive Search
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Targeted executive recruitment and professional placements in finance, human resources, clinical leadership (Directors of Nursing), supply chain management, and corporate operations across Michigan.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers?division=professional"
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Initiate Executive Search</span>
              </Link>
              <Link
                href="/apply?role=Executive%20Management"
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4 text-slate-300" />
                <span>Submit Confidential CV</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
              <Image
                src="/images/professional-executive-consulting.jpg"
                alt="Executive search and business leaders reviewing professional placement portfolios"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 text-white text-xs">
                <div className="font-bold flex items-center gap-1.5 text-indigo-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Confidential Executive Placement</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  High-level leadership vetted with precision
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
