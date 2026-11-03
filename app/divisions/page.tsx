import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  Truck,
  Building2,
  Briefcase,
  Cpu,
  Utensils,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  FileCheck2
} from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Specialized Staffing Divisions — Vibrus Group LLC",
  description:
    "Explore Vibrus Group's specialized staffing divisions: Healthcare Solutions, Industrial & Logistics, Office Support, Professional Search, IT & Engineering, and Hospitality.",
};

export default function DivisionsPage() {
  const iconMap: Record<string, React.ReactNode> = {
    healthcare: <Stethoscope className="w-8 h-8 text-blue-600" />,
    industrial: <Truck className="w-8 h-8 text-amber-600" />,
    office: <Building2 className="w-8 h-8 text-slate-700" />,
    professional: <Briefcase className="w-8 h-8 text-indigo-600" />,
    "info-tech": <Cpu className="w-8 h-8 text-cyan-600" />,
    hospitality: <Utensils className="w-8 h-8 text-rose-600" />,
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Section with Authentic Photographic Asset */}
      <section className="bg-gradient-to-br from-slate-900 via-vibrus-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 text-cyan-300 border border-blue-500/30 rounded-full text-xs font-bold backdrop-blur-md shadow-xs">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Single Source — Specialized Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Specialized Staffing Divisions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Vibrus Group understands that no two facilities or operational environments are alike. We provide targeted recruitment, thorough credentialing, and fast dispatch across six specialized practice groups.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Request Staff Across Any Division</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
              <Image
                src="/images/divisions-multi-industry.jpg"
                alt="Vibrus Group multi-industry workforce specialists across healthcare, logistics, and technical fields"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 text-white text-xs">
                <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Six Dedicated Practice Groups</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Healthcare • Industrial • Office • Professional • IT • Hospitality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Showcase */}
      <div className="space-y-12">
        {divisionsData.map((division, idx) => {
          const totalRoles = division.jobClassifications.reduce(
            (acc, cat) => acc + cat.roles.length,
            0
          );

          return (
            <div
              key={division.id}
              id={division.slug}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-card hover:border-slate-300 transition-all space-y-6"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    {iconMap[division.id]}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {division.heroBadge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {division.title}
                    </h2>
                    <p className="text-sm font-semibold text-slate-500">
                      {division.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/divisions/${division.slug}`}
                    className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>View Full Division</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/employers?division=${division.id}`}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
                  >
                    Request Staff
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {division.description}
                  </p>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      Service Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {division.serviceOverview.slice(0, 4).map((srv, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Sample Job Classifications ({totalRoles} Total)
                    </span>
                    <Link
                      href={`/divisions/${division.slug}#job-classifications`}
                      className="text-xs text-blue-700 font-semibold hover:underline"
                    >
                      See all roles →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {division.jobClassifications
                      .flatMap((cat) => cat.roles)
                      .slice(0, 10)
                      .map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 rounded-lg text-xs font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    {totalRoles > 10 && (
                      <span className="px-2.5 py-1 text-xs font-semibold text-blue-700">
                        +{totalRoles - 10} more titles
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
