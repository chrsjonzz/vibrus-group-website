import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Truck, ShieldCheck, Clock, CheckCircle2, FileCheck2, Users2, ArrowRight } from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";
import { siteConfig } from "@/lib/config/site";
import { generatePageMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = generatePageMetadata({
  title: "Industrial & Logistics Staffing",
  description:
    "Safety-screened forklift operators, warehouse teams, and assembly talent deployed swiftly across Macomb, Wayne, and Oakland manufacturing centers.",
  path: "/divisions/industrial",
  image: "/images/vibrus-industrial-team-v2.png",
  imageAlt: "Industrial logistics and warehouse specialists collaborating on Michigan facility floor",
});

export default function IndustrialDivisionPage() {
  const industrial = divisionsData.find((d) => d.id === "industrial")!;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <Breadcrumbs
        items={[
          { label: "Divisions", href: "/divisions" },
          { label: "Industrial & Logistics" },
        ]}
      />
      
      {/* Hero with Bright Editorial Design */}
      <section className="bg-gradient-to-br from-amber-50/70 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-amber-200/80 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-amber-700" />
              <span>Industrial & Logistics Core • Metro Detroit Focus</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Industrial, Warehouse & Logistics Staffing
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From certified forklift drivers and high-output assembly crews to machine trades and warehouse leads, Vibrus Group keeps Michigan manufacturing lines and logistics supply chains moving at peak safety and efficiency.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers?division=industrial"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Request Industrial Crew (24/7)</span>
              </Link>
              <Link
                href="/apply?role=Certified%20Forklift%20Operator"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4" />
                <span>Apply for Industrial Roles</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group-hover:scale-[1.02] transition-transform duration-500 bg-white">
              <Image
                src="/images/vibrus-industrial-team-v2.png"
                alt="Professional logistics warehouse crew performing safe pallet scanning in modern Michigan distribution center"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Safety-Screened Personnel</span>
                  </span>
                  <span className="text-amber-800 font-semibold text-[11px]">
                    Warren • Detroit • Troy
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industrial.serviceOverview.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Core Capability</span>
            </div>
            <p className="text-sm font-semibold text-slate-800">{item}</p>
          </div>
        ))}
      </section>

      {/* Job Classifications Grid */}
      <section id="job-classifications" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Certified Positions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Industrial & Logistics Classifications
          </h2>
          <p className="text-xs text-slate-500">
            Safety-vetted, drug-screened, and background-checked for immediate deployment across Macomb, Oakland, and Wayne manufacturing centers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {industrial.jobClassifications[0].roles.map((role, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-800 font-medium hover:border-amber-400 transition-colors">
              <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0" />
              <span>{role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold">Have peak seasonal volume or shift shortages?</h3>
          <p className="text-xs text-slate-400 mt-1">Our dispatch team responds promptly with qualified machine and warehouse crews.</p>
        </div>
        <Link
          href="/employers?division=industrial"
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
        >
          Request Industrial Staffing
        </Link>
      </section>

    </div>
  );
}
