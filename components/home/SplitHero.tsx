import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileCheck2,
  Users2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Phone,
  Sparkles,
  Building,
  Check,
  MapPin
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function SplitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-vibrus-navy to-vibrus-navy-deep text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Radial Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Pill & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Michigan Workforce Solutions • Warren HQ</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">24/7 Operational Dispatch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Single Source. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Specialized Workforce Solutions.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Powering Michigan healthcare facilities, logistics centers, and corporate operations with <strong>600+ credentialed professionals</strong>, 24/7 live dispatch, and dedicated local coordination.
          </p>
        </div>

        {/* Dual-Funnel Cards Grid with 3D Depth & Visual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: FOR FACILITIES & EMPLOYERS */}
          <div className="group relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-blue-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.25)] hover:-translate-y-2">
            
            {/* Visual Header Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-800">
              <Image
                src="/images/employer-consultation.jpg"
                alt="Healthcare director and staffing coordinator discussing workforce solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Floating Status Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-600/90 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-blue-400/30">
                  For Facilities & Employers
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 text-amber-300 rounded-full text-xs font-semibold backdrop-blur-md border border-slate-700/60 shadow-md">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>24/7 Live Dispatch</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  Need Reliable Staff Coverage Now?
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Overcome census surges, shift shortages, and specialized skill gaps. Submit an urgent requisition for <strong>any clinical, industrial, or corporate role</strong>.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>24/7/365 live human dispatch coordinator</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Fully credentialed, background-screened & oriented</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Serving Macomb, Oakland, Wayne & statewide Michigan</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 space-y-3">
                <Link
                  href="/employers"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg transition-all text-sm group-hover:shadow-blue-500/25 active:scale-98"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Request Staff On-Demand</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <span>Or speak directly to dispatch:</span>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: FOR CANDIDATES & PROFESSIONALS */}
          <div className="group relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-cyan-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_25px_50px_-12px_rgba(6,182,212,0.25)] hover:-translate-y-2">
            
            {/* Visual Header Image */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-800">
              <Image
                src="/images/candidate-healthcare-professional.jpg"
                alt="Confident, compassionate registered nurse in a Michigan hospital setting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Floating Status Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-cyan-600/90 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md border border-cyan-400/30">
                  For Candidates & Job Seekers
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 text-emerald-300 rounded-full text-xs font-semibold backdrop-blur-md border border-slate-700/60 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Rewarding Roles</span>
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  Ready for a Rewarding Career?
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Explore flexible clinical, industrial, and specialized opportunities. Join a credentialed team with dedicated placement coordination across Michigan.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Reliable direct deposit payroll processing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Per-diem, contract, temp-to-hire & permanent roles</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated placement coordinator advocating for you</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 space-y-3">
                <Link
                  href="/apply"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all text-sm group-hover:shadow-cyan-500/25 active:scale-98"
                >
                  <Users2 className="w-4 h-4" />
                  <span>60-Second Express Apply</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center justify-center gap-3 text-xs text-slate-400">
                  <a href={siteConfig.externalLinks.jobsoid} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 underline">
                    Jobsoid Listings
                  </a>
                  <span>•</span>
                  <a href={siteConfig.externalLinks.indeed} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 underline">
                    Indeed Profile
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
