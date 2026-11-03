import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Truck, CheckCircle2, ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import { generatePageMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = generatePageMetadata({
  title: "Industrial & Commercial Roles",
  description:
    "Explore forklift operator, warehousing, assembly, and skilled trade placements across Macomb, Oakland, and Wayne counties with dependable payroll.",
  path: "/careers/general",
  image: "/images/industrial-logistics-workplace.jpg",
  imageAlt: "Industrial warehouse logistics specialist scanning inventory in modern distribution facility",
});

export default function GeneralCareersPage() {
  const highlights = [
    "Certified Forklift Operators (Sit-Down & Stand-Up)",
    "Warehouse Leads, Pick & Pack and Sorters",
    "General Machine Operators & Automotive Assembly",
    "Certified Welders & Metal Fabrication Specialists",
    "Executive Assistants & Data Entry Specialists",
    "Customer Service Reps & Call Center Specialists",
    "Software Developers, DBAs & IT Helpdesk",
    "Banquet Servers, Line Cooks & Dietary Aides"
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <Breadcrumbs
        items={[
          { label: "Careers", href: "/careers" },
          { label: "Industrial & Commercial" },
        ]}
      />
      
      {/* Bright Editorial Hero */}
      <section className="bg-gradient-to-br from-amber-50/80 via-white to-slate-50 text-slate-950 rounded-3xl p-8 sm:p-12 lg:p-14 border border-amber-200/80 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-amber-700" />
              <span>Industrial, Logistics & Technical Careers</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              General & Industrial Careers
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Vibrus Group connects dependable talent with top manufacturing facilities, logistics hubs, automotive assembly lines, and commercial offices across Michigan with transparent payroll and safe work environments.
            </p>
            <div className="pt-2">
              <Link
                href="/apply?role=Certified%20Forklift%20Operator"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 active:scale-95"
              >
                <span>60-Second Express Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group aspect-[4/3] bg-white">
              <Image
                src="/images/industrial-logistics-workplace.jpg"
                alt="Logistics fulfillment and industrial workforce specialists on facility floor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md text-slate-900 text-xs">
                <div className="font-bold flex items-center gap-1.5 text-amber-700">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Skilled Industrial Workforce</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Automotive, warehouse & skilled trades placements across Michigan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Immediate Industrial & Commercial Openings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3 text-xs text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
