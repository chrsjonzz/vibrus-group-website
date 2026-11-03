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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#0A1224] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* LAYER 1: Controlled Background Texture & Atmospheric Glow */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Operational Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-md backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Warren Headquarters • Tri-County Dispatch Core</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline">24/7 Human Dispatch</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Facility Callback: 30 Minutes</span>
          </div>
        </div>

        {/* LAYER 2 & LAYER 3: Asymmetric Editorial Typography & Layered Photographic Montage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LAYER 3: Foreground Editorial Content Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 inline-block">
                Single Source — Specialized Solutions
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black tracking-tight text-white leading-[1.06]">
                Specialized Workforce Staffing Across{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  Healthcare & Industry.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Connecting Michigan hospitals, skilled nursing centers, automotive manufacturing plants, and distribution hubs with <strong>600+ credentialed professionals</strong>, reliable 24/7 human dispatch, and dedicated local coordination from Warren, MI.
              </p>
            </div>

            {/* Quick Proof Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-Minute Callback</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>600+ Credentialed Roster</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Macomb, Oakland & Wayne</span>
              </div>
            </div>
          </div>

          {/* LAYER 2: Layered Photographic Composition with Restrained Perspective */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: 24/7 Coordination Center */}
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900">
                <Image
                  src="/images/hero-staffing-coordination.jpg"
                  alt="Vibrus Group 24/7 staffing dispatch and workforce coordination team in Warren, Michigan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 text-white text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>Warren, MI Headquarters</span>
                    </span>
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                      24/7/365 Active
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Serving hospitals, nursing centers, and industrial facilities
                  </p>
                </div>
              </div>

              {/* Offset Overlapping Secondary Photo: Confident Healthcare Professional */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 z-20">
                <Image
                  src="/images/candidate-healthcare-professional.jpg"
                  alt="Credentialed nurse and clinician ready for rapid assignment"
                  fill
                  sizes="192px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-emerald-300 text-center bg-slate-950/80 py-1 px-1.5 rounded-lg border border-white/10">
                  600+ Credentialed Roster
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* LAYER 4: Anchored Dual-Journey Action Console (Facilities vs Candidates) */}
        <div className="pt-6">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-elevated grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* JOURNEY 1: Facilities & Employers */}
            <div className="space-y-5 lg:pr-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                      For Facilities & Employers
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Request Staff On-Demand
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  30-Min Callback
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fulfill clinical nursing, therapy, industrial, logistics, and specialized workforce requisitions. Available 24 hours a day with verified credentials and rapid operational dispatch.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/employers"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 active:scale-95"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Request Staff On-Demand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-4 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* JOURNEY 2: Candidates & Job Seekers */}
            <div className="space-y-5 pt-8 lg:pt-0 lg:pl-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                      For Candidates & Clinicians
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      60-Second Express Apply
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Fast Intake
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our Warren recruiting team for per-diem PRN shifts, local contract assignments, and direct placements across Michigan with competitive compensation.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/apply"
                  className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2 active:scale-95"
                >
                  <Users2 className="w-4 h-4" />
                  <span>60-Second Express Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={siteConfig.externalLinks.jobsoid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 active:scale-95"
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
