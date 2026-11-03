import React from "react";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  Users2,
  TrendingDown,
  Award,
  PhoneCall,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function WhyVibrusSection() {
  const differentiators = [
    {
      icon: Clock,
      title: "24/7 Live Operational Dispatch",
      description:
        "Our staffing coordinators operate around the clock to support healthcare and industrial shift demands, providing immediate phone access and rapid local response.",
      badge: "24/7 Operations"
    },
    {
      icon: Users2,
      title: "Continuity of Care Program",
      description:
        "We strive to assign familiar, recurring professionals who understand your facility's protocols, helping reduce onboarding friction and maintain consistent clinical quality.",
      badge: "Clinical Model"
    },
    {
      icon: TrendingDown,
      title: "Workforce Planning & MSP Integration",
      description:
        "We assist healthcare systems and industrial facilities in streamlining multiple staffing resources, improving scheduling transparency, and managing overtime labor costs.",
      badge: "Workforce Management"
    },
    {
      icon: ShieldCheck,
      title: "Pre-Placement Quality Protocols",
      description:
        "Our onboarding procedure includes professional license verification, drug screening, background checks, and skills evaluations tailored to facility requirements.",
      badge: "Credentialing Quality"
    },
    {
      icon: Sparkles,
      title: "Single-Source Efficiency",
      description:
        "Comprehensive workforce solutions that consolidate recruitment, credentialing, shift management, and payroll administration under one accountable Michigan team.",
      badge: "Operational Advantage"
    },
    {
      icon: PhoneCall,
      title: "Dedicated Account Coordination",
      description:
        "Clients work directly with dedicated staffing coordinators who manage daily requisitions, shift adjustments, and roster confirmations.",
      badge: "Personal Touch"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-xs">
            The Vibrus Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Michigan Facilities Partner with Vibrus Group
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            With over 30 years of combined staffing and healthcare expertise among our principals and staff, we deliver dependable staffing solutions backed by responsive personal coordination.
          </p>
        </div>

        {/* Differentiators Grid with 3D Depth Card Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="group bg-white p-7 rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_20px_35px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {diff.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] font-semibold text-blue-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Approved Service Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Standing Slogan Callout */}
        <div className="bg-gradient-to-r from-vibrus-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Company Service Principle
            </span>
            <blockquote className="text-xl sm:text-2xl font-semibold italic text-slate-100">
              &ldquo;We deliver what we say, 24 hours a day, 7 days a week!&rdquo;
            </blockquote>
            <div className="pt-2 text-xs text-slate-400">
              Headquartered at 31201 Chicago Road S, Suite B202, Warren, MI 48093 • (248) 443-5100
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
