import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  ShieldCheck,
  Users2,
  TrendingDown,
  Award,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Building,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function WhyVibrusSection() {
  const differentiators = [
    {
      icon: Clock,
      title: "24/7 Live Human Operational Dispatch",
      description:
        "Our staffing coordinators operate around the clock in Warren, MI to support urgent shift vacancies with immediate phone access and rapid local coordination.",
      badge: "24/7 Human Dispatch"
    },
    {
      icon: Users2,
      title: "Continuity of Care Program",
      description:
        "We strive to assign familiar, recurring clinicians who understand your facility's protocols, helping reduce onboarding friction and maintain consistent clinical quality.",
      badge: "Clinical Model"
    },
    {
      icon: ShieldCheck,
      title: "Comprehensive Credentialing Standards",
      description:
        "Our comprehensive pre-placement verification includes primary source license checks, toxicology screening, background checks, and orientation verification.",
      badge: "Quality Assurance"
    },
    {
      icon: Sparkles,
      title: "Single Source — Specialized Solutions",
      description:
        "We become a seamless, natural extension of your operational team, consolidating recruitment, scheduling, and payroll administration under one accountable Michigan partner.",
      badge: "Core Philosophy"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-xs">
            The Vibrus Operational Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Michigan Facilities Rely On Our Team
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            With over 30 years of combined workforce leadership under Paddy and Achla, Vibrus Group delivers personal, accountable staffing solutions designed to protect patient care and operational output.
          </p>
        </div>

        {/* Layered Overlapping Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Photographic Visual Frame with Overlapping Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-800 aspect-[4/5] group">
              <Image
                src="/images/about-culture-team.jpg"
                alt="Vibrus Group workforce coordinators and leadership reviewing facility staffing schedules"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/15 text-white shadow-panel">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>30+ Years Leadership</span>
                </div>
                <div className="text-base font-bold text-white mt-1">
                  Executive Direction: Paddy & Achla
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Dedicated local dispatch and high-touch account management across Michigan.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Differentiator Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-400/80 transition-all duration-300 shadow-soft-xl flex flex-col justify-between space-y-4 group hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-blue-600/20 text-cyan-300 rounded-xl border border-blue-500/30">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                        {diff.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                      {diff.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
