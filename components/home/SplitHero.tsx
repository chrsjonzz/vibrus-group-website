"use client";

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
  Building,
  CheckCircle2,
  MapPin,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function SplitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-[#FFFFFF] text-slate-900 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle Luminous Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Operational Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-xs backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Warren Headquarters • Tri-County Dispatch Core</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-600 hidden sm:inline">24/7 Human Dispatch</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/80 text-xs font-semibold text-amber-900 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Facility Callback Commitment: 30 Minutes</span>
          </div>
        </div>

        {/* 2-Column Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Typography & Editorial Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200/80 inline-block shadow-2xs">
                Single Source — Specialized Solutions
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tight text-slate-950 leading-[1.08]">
                Specialized Workforce Staffing Across{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Healthcare & Industry.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Connecting Michigan hospitals, skilled nursing centers, automotive manufacturing plants, and logistics distribution hubs with <strong>600+ credentialed professionals</strong>, reliable 24/7 human dispatch, and dedicated local coordination from Warren, MI.
              </p>
            </div>

            {/* Quick Proof Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>30-Minute Callback</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>600+ Credentialed Roster</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Macomb, Oakland & Wayne</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Photographic Composition (Soft Wash & Clean Borders) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: 24/7 Coordination Hub */}
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-soft-xl border border-slate-200/80 bg-white group">
                <Image
                  src="/images/hero-staffing-coordination.jpg"
                  alt="Vibrus Group 24/7 staffing dispatch and workforce coordination team in Warren, Michigan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Clean Floating Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 text-slate-900 text-xs shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-blue-700" />
                      <span>Warren, MI Headquarters</span>
                    </span>
                    <span className="text-[11px] font-mono text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 font-semibold">
                      24/7/365 Live
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Serving hospitals, nursing centers, and industrial facilities statewide
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Photo: Confident Healthcare Professional */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white z-20">
                <Image
                  src="/images/candidate-healthcare-professional.jpg"
                  alt="Credentialed nurse and clinician ready for rapid assignment"
                  fill
                  sizes="192px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white text-center bg-slate-900/85 backdrop-blur-xs py-1 px-1.5 rounded-lg border border-white/20">
                  600+ Credentialed Roster
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Foreground Dual-Journey Action Console (Bright, Spacious, High-Contrast) */}
        <div className="pt-2">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft-xl grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* JOURNEY 1: Facilities & Employers */}
            <div className="space-y-4 lg:pr-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                      For Facilities & Employers
                    </span>
                    <h3 className="text-xl font-bold text-slate-950">
                      Request Staff On-Demand
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  30-Min Callback
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fulfill clinical nursing, therapy, industrial, logistics, and specialized workforce requisitions. Available 24 hours a day with verified credentials and rapid operational dispatch.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/employers"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Request Staff On-Demand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-4 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* JOURNEY 2: Candidates & Job Seekers */}
            <div className="space-y-4 pt-6 lg:pt-0 lg:pl-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      For Candidates & Clinicians
                    </span>
                    <h3 className="text-xl font-bold text-slate-950">
                      60-Second Express Apply
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Fast Intake
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our Warren recruiting team for per-diem PRN shifts, local contract assignments, and direct placements across Michigan with competitive compensation.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/apply"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <Users2 className="w-4 h-4" />
                  <span>60-Second Express Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={siteConfig.externalLinks.jobsoid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Jobsoid Openings</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
