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
  Sparkles,
  Building,
  Check,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function SplitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-vibrus-navy-deep via-vibrus-navy to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Radial Glow & Grid Mesh */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-md backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Warren Headquarters • Tri-County Dispatch Core</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-300 hidden sm:inline">24/7 Human Dispatch</span>
        </div>

        {/* 2-Column Layered Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Editorial & Dual Action Gateways */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black tracking-tight text-white leading-[1.08]">
                Single Source. <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  Specialized Workforce Solutions.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Powering Michigan healthcare facilities, logistics warehouses, and corporate enterprises with <strong>600+ credentialed professionals</strong>, reliable 24/7 live human dispatch, and dedicated local coordination from Warren, MI.
              </p>
            </div>

            {/* Dual Pathways: Facility vs Professional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Pathway 1: Facilities & Employers */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/40 shadow-soft-xl hover:border-blue-400 transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                      Facilities & Employers
                    </span>
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      30-Min Callback
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                    Request Staff On-Demand
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Immediate clinical, industrial, or corporate shift coverage across Southeast Michigan.
                  </p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <Link
                    href="/employers"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl shadow-md transition-all text-xs"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    <span>Submit Staff Request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="text-[11px] text-slate-400 text-center">
                    Dispatch hotline: <a href={`tel:${siteConfig.phoneRaw}`} className="text-amber-400 font-bold hover:underline">{siteConfig.phone}</a>
                  </div>
                </div>
              </div>

              {/* Pathway 2: Candidates & Professionals */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-soft-xl hover:border-cyan-400 transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Candidates & Clinicians
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Fast Intake
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    60-Second Express Apply
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Immediate per-diem and contract placements with dependable weekly direct deposit.
                  </p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <Link
                    href="/apply"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-md transition-all text-xs"
                  >
                    <Users2 className="w-4 h-4" />
                    <span>Join Our Talent Network</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="text-[11px] text-slate-400 text-center">
                    RNs • LPNs • CNAs • Logistics • Office
                  </div>
                </div>
              </div>

            </div>

            {/* Verified Trust Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>600+ Credentialed Clinicians & Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Executive Leadership: Paddy & Achla</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Macomb • Oakland • Wayne Counties</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Layered Photographic Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Framed Photograph */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src="/images/hero-staffing-coordination.jpg"
                alt="Vibrus Group 24/7 staffing dispatch and regional workforce coordination center in Warren, Michigan"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-slate-950/90 backdrop-blur-md rounded-full border border-white/15 text-xs font-semibold text-emerald-300 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 Live Operational Dispatch</span>
              </div>
            </div>

            {/* Overlapping Floating Metric Card */}
            <div className="mt-4 sm:-mt-10 sm:ml-6 relative z-20 p-4 sm:p-5 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-panel max-w-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-400/30 text-cyan-300 shrink-0">
                  <Building className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Michigan Headquarters
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Warren Operational Center
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Serving hospitals, skilled nursing, and industrial hubs statewide.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lower Transition Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-slate-950/80 pointer-events-none" />
    </section>
  );
}
