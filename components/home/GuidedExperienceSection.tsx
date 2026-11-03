"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  Users2,
  Search,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Clock,
  ArrowRight,
  Building2,
  Stethoscope,
  Briefcase
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function GuidedExperienceSection() {
  const [activeTab, setActiveTab] = useState<"employers" | "candidates">("employers");

  const employerSteps = [
    {
      step: "01",
      title: "Tell Us What Support You Need",
      description:
        "Submit your open shift, crisis coverage, or long-term staffing requisition online or call our 24/7 Warren dispatch desk. Specify the clinical or industrial qualifications, unit, and schedule requirements.",
      icon: FileCheck2,
      badge: "Any Position Fulfilled",
    },
    {
      step: "02",
      title: "We Match Pre-Screened Professionals",
      description:
        "Our team selects qualified personnel from our roster of 600+ credentialed professionals. Every candidate arrives with verified licenses, 10-panel drug screens, and comprehensive background clearances.",
      icon: ShieldCheck,
      badge: "Primary Source Verified",
    },
    {
      step: "03",
      title: "We Stay Connected Through The Process",
      description:
        "From shift arrival confirmation to ongoing scheduling management, our Warren dispatch coordinators remain reachable 24/7/365 to handle real-time shift modifications and facility support.",
      icon: Headphones,
      badge: "24/7 Live Coordination",
    },
  ];

  const candidateSteps = [
    {
      step: "01",
      title: "Start Your 60-Second Express Application",
      description:
        "Complete our simple express application with your primary specialty, contact information, and resume. No long logins or tedious paperwork required to start the conversation.",
      icon: Users2,
      badge: "Rapid 60-Sec Intake",
    },
    {
      step: "02",
      title: "Share Your Experience & Preferred Schedule",
      description:
        "Tell us where and when you want to work. Whether you prefer per-diem PRN flexibility, local contract assignments, or direct placement across Michigan, we tailor opportunities to your availability.",
      icon: Clock,
      badge: "Flexible Placements",
    },
    {
      step: "03",
      title: "Connect With The Vibrus Team & Begin Work",
      description:
        "Your dedicated staffing coordinator guides you through swift credentialing verification, orientation, and assignment onboarding with competitive wages and reliable electronic payroll processing.",
      icon: CheckCircle2,
      badge: "Dedicated Coordinator",
    },
  ];

  const currentSteps = activeTab === "employers" ? employerSteps : candidateSteps;

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 tracking-wide">
              <span>Predictable & Transparent Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              How Vibrus Works For You
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Whether you are an administrator facing urgent shift vacancies or a clinician looking for your next rewarding assignment, we make workforce coordination straightforward, human, and dependable.
            </p>
          </div>

          {/* Interactive Audience Tab Switcher */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 self-start md:self-auto shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("employers")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "employers"
                  ? "bg-white text-blue-900 shadow-md ring-1 ring-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>For Facilities & Employers</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("candidates")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "candidates"
                  ? "bg-white text-emerald-900 shadow-md ring-1 ring-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Users2 className="w-4 h-4 text-emerald-600" />
              <span>For Candidates & Clinicians</span>
            </button>
          </div>
        </div>

        {/* 3-Step Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting guideline on desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-emerald-200 -z-0" />

          {currentSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 hover:bg-white border border-slate-200 rounded-3xl p-8 shadow-xs hover:shadow-card transition-all duration-300 relative z-10 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black tracking-tight text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-700 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {activeTab === "employers" ? "Clear Facility Safeguard" : "Candidate-First Support"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guided Conversion Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-vibrus-navy to-slate-950 text-white border border-slate-800 shadow-elevated flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {activeTab === "employers" ? "Ready To Request Staff?" : "Ready To Explore Open Positions?"}
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              {activeTab === "employers"
                ? "Experience the Vibrus 30-Minute Callback Commitment."
                : "Join over 600+ credentialed professionals across Michigan."}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              {activeTab === "employers"
                ? "Submit your custom staffing requisition or call our Warren dispatch desk directly."
                : "Submit your express application in 60 seconds or browse openings on Jobsoid & Indeed."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {activeTab === "employers" ? (
              <>
                <Link
                  href="/employers"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Request Staff On-Demand</span>
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-all border border-slate-700 active:scale-95"
                >
                  Call Dispatch: {siteConfig.phone}
                </a>
              </>
            ) : (
              <>
                <Link
                  href="/apply"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <Users2 className="w-4 h-4" />
                  <span>60-Second Express Apply</span>
                </Link>
                <a
                  href={siteConfig.externalLinks.jobsoid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-all border border-slate-700 active:scale-95"
                >
                  Browse Jobsoid Openings →
                </a>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
