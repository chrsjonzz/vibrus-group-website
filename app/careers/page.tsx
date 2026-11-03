import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Users2,
  DollarSign,
  Calendar,
  Gift,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Careers with Vibrus Group LLC — Workforce Opportunities & Placement Support",
  description:
    "Connect with Vibrus Group's network of 600+ credentialed professionals across Michigan healthcare, industrial, and specialized placements.",
};

export default function CareersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation Structures",
      description: "Transparent wage tiers aligned with facility requirements and professional credentials. [Specific compensation schedules subject to client contract and management approval]"
    },
    {
      icon: Calendar,
      title: "Reliable Payroll Processing",
      description: "Regular electronic direct deposit and transparent pay statement access."
    },
    {
      icon: Gift,
      title: "Performance & Referral Incentives",
      description: "Employee referral and completion incentive programs as authorized for qualifying assignments. [Subject to management program terms]"
    },
    {
      icon: ShieldCheck,
      title: "Professional Insurance Options",
      description: "Medical, dental, liability, and related coverage options available for eligible qualifying assignments."
    },
    {
      icon: Headphones,
      title: "24/7 Operational Support",
      description: "Vibrus coordinators and managers are accessible 24 hours a day, 7 days a week to support active placements."
    },
    {
      icon: Users2,
      title: "Dedicated Staffing Coordinator",
      description: "Direct communication with our Warren headquarters team to match assignments to your qualifications."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Visual Header Banner with 3D Depth */}
      <section className="bg-gradient-to-br from-slate-950 via-vibrus-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3.5 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Professional Staffing Opportunities</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Careers at Vibrus Group
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Join Vibrus Group&apos;s network of over 600+ credentialed professionals. We coordinate per-diem PRN shifts, local contracts, and direct placement opportunities across Michigan.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/apply"
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4" />
                <span>60-Second Express Apply</span>
              </Link>
              <a
                href={siteConfig.externalLinks.jobsoid}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-95"
              >
                <span>Browse External Jobsoid Board</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative h-64 sm:h-76 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/hero-staffing-coordination.jpg"
                alt="Vibrus Group staffing operations center coordinating placements"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg">
                <span className="font-bold text-white text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Warren Staffing Operations Center</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            The Compensation & Support You Deserve
          </h2>
          <p className="text-xs text-slate-500">
            We value your expertise. That means respect, timely pay, and zero recruiter runarounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pathways Selection */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-4 flex flex-col justify-between shadow-card">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Clinical Opportunities
            </span>
            <h3 className="text-2xl font-bold">Healthcare Careers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Explore per-diem floor nursing, ICU contracts, therapy assignments, and allied diagnostic roles across top Michigan healthcare facilities.
            </p>
          </div>
          <Link
            href="/careers/healthcare"
            className="w-fit inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors"
          >
            <span>Healthcare Careers Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-gradient-to-br from-amber-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-4 flex flex-col justify-between shadow-card">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Commercial & Industrial Roles
            </span>
            <h3 className="text-2xl font-bold">General & Industrial Careers</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-demand warehousing, forklift operating, machine trades, assembly, administrative, and corporate placements throughout Southeast Michigan.
            </p>
          </div>
          <Link
            href="/careers/general"
            className="w-fit inline-flex items-center gap-1.5 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
          >
            <span>General Careers Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
