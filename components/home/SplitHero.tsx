"use client";

import React from "react";
import Image from "next/image";
import {
  Building,
  CheckCircle2,
} from "lucide-react";

export function SplitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-[#FFFFFF] text-slate-900 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Wide Michigan-inspired hero atmosphere behind the editorial layout */}
      <Image
        src="/images/vibrus-hero-background-lakeshore-v1.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none object-cover object-center opacity-35"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/68 to-white/35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/45 via-transparent to-white/70 pointer-events-none" />
      {/* Subtle Luminous Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Operational Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-xs backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Warren Headquarters • Michiganwide Workforce Coverage</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-600 hidden sm:inline">24/7 Human Dispatch</span>
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
                Connecting Michigan hospitals, skilled nursing centers, industrial teams, and logistics operations with <strong>600+ credentialed professionals</strong>, reliable 24/7 human dispatch, and dedicated workforce coordination statewide from our Warren headquarters.
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
                <span>Michiganwide Workforce Coverage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Photographic Composition (Responsive & Collision-Free) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: 24/7 Coordination Hub */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-soft-xl border border-slate-200/80 bg-white group">
                <Image
                  src="/images/vibrus-home-hero-wide-v3.png"
                  alt="Vibrus Group staffing operations hub coordinating Michiganwide workforce deployments"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                
                {/* Desktop/Tablet Inset Overlay Card (Deliberately positioned at bottom-right, zero collision) */}
                <div className="hidden sm:block absolute bottom-3 right-3 w-[min(300px,calc(100%-1.5rem))] p-3.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 text-slate-900 shadow-elevated z-10">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                      <Building className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="min-w-0 text-[11px] font-extrabold uppercase tracking-[0.08em] leading-4 text-blue-800">
                          Michiganwide coverage
                        </span>
                        <span className="shrink-0 rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-emerald-800">
                          Live
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] leading-4 text-slate-600">
                        Warren headquarters · serving facilities across Michigan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary editorial image layer: a compact people-first mobile moment */}
              <div className="hidden sm:block absolute -bottom-5 left-4 z-20 w-36 md:w-40 rounded-2xl border-4 border-white bg-white shadow-[0_18px_40px_-12px_rgba(15,23,42,0.35)] rotate-[-3deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/vibrus-candidate-mobile-v2.png"
                    alt="Vibrus candidate reviewing a mobile work schedule"
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-2 bottom-2 rounded-lg bg-slate-950/75 px-2.5 py-2 text-[10px] font-bold leading-tight text-white backdrop-blur-sm">
                    People-first coordination
                  </div>
                </div>
              </div>

              {/* Mobile Dedicated Card: Positioned below the image on mobile to eliminate clipping and facial overlap */}
              <div className="sm:hidden mt-3 p-3.5 bg-white rounded-2xl border border-slate-200 text-slate-900 shadow-soft-md">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                    <Building className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="min-w-0 text-[11px] font-extrabold uppercase tracking-[0.08em] leading-4 text-blue-800">
                        Michiganwide coverage
                      </span>
                      <span className="shrink-0 rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-emerald-800">
                        Live
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-4 text-slate-600">
                      Warren headquarters · serving facilities across Michigan
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Accent Badge: 600+ Credentialed Roster (Anchored safely at top-right on tablet/desktop) */}
              <div className="hidden md:flex items-center gap-2 absolute -top-3.5 -right-3.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-white/20 shadow-md text-xs font-semibold z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>600+ Credentialed Roster</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
