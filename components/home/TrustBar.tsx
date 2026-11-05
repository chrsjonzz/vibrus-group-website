import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, Users, Building, MapPin, Sparkles } from "lucide-react";

export function TrustBar() {
  const trustMetrics = [
    {
      icon: Users,
      value: "600+",
      label: "Credentialed Staff",
      sublabel: "Clinical, Industrial & Specialized",
      color: "text-blue-600 bg-blue-50/80 border-blue-200"
    },
    {
      icon: Clock,
      value: "24/7/365",
      label: "Live Dispatch Operations",
      sublabel: "Continuous Shift Coordination",
      color: "text-emerald-600 bg-emerald-50/80 border-emerald-200"
    },
    {
      icon: Building,
      value: "All Michigan",
      label: "Statewide Reach",
      sublabel: "Warren HQ • Local Coordination",
      color: "text-indigo-600 bg-indigo-50/80 border-indigo-200"
    },
    {
      icon: MapPin,
      value: "Michiganwide",
      label: "Workforce Coverage",
      sublabel: "Warren HQ • Statewide Reach",
      color: "text-cyan-600 bg-cyan-50/80 border-cyan-200"
    },
    {
      icon: Sparkles,
      value: "Single Source",
      label: "Specialized Solutions",
      sublabel: "Customized Facility Programs",
      color: "text-amber-600 bg-amber-50/80 border-amber-200"
    }
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 px-4 py-10 sm:px-6 lg:px-8">
      <Image
        src="/images/vibrus-trust-bar-lakeshore-v1.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-sky-100/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white/90 p-5 sm:p-6 rounded-2xl border border-white/80 shadow-[0_12px_28px_-10px_rgba(15,23,42,0.18)] backdrop-blur-md flex flex-col items-center text-center space-y-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/95 hover:shadow-[0_18px_34px_-8px_rgba(15,23,42,0.22)] hover:border-white"
              >
                <div className={`p-3 rounded-xl border ${item.color} shadow-xs transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
