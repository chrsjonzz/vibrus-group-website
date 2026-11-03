import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Stethoscope, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Careers (RN, LPN, CNA & Allied) — Vibrus Group LLC",
  description:
    "Per-diem and contract opportunities for Registered Nurses, LPNs, CNAs, Physical Therapists, and Allied Health across Michigan.",
};

export default function HealthcareCareersPage() {
  const highlights = [
    "Registered Nurses (ER, OR, ICU, CCU, Med/Surg, L&D, Pediatrics)",
    "Licensed Practical Nurses (LPN) & Certified Nursing Assistants (CNA)",
    "Physical Therapists (PT), Occupational Therapists (OT), SLP & RT",
    "Allied Health: Phlebotomists, Radiologic Techs, Med Techs & Pharmacists",
    "Private Duty 1-on-1 In-Home Skilled Nursing Placements",
    "Dependable electronic direct deposit payroll options"
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-900/40 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 text-cyan-300 border border-blue-500/30 rounded-full text-xs font-bold backdrop-blur-md shadow-xs">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
              <span>Clinical Healthcare Careers • 600+ Clinicians</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Your Clinical Passion. Your Terms.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We know your work is more than just a job; it is a conscious choice to enhance the lives of others. Vibrus Group provides the professional respect, dependable payroll, and flexible shift schedules you deserve.
            </p>
            <div className="pt-2">
              <Link
                href="/apply?role=Registered%20Nurse%20(RN)"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors inline-flex items-center gap-2 active:scale-95"
              >
                <span>60-Second Express Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
              <Image
                src="/images/careers-healthcare-nursing.jpg"
                alt="Two dedicated clinical healthcare nurses with digital tablet at hospital nurse station"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 text-white text-xs">
                <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Caring Clinical Culture</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Top tier hospital and long-term care placements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Immediate Healthcare Openings Across Southeast Michigan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3 text-xs text-slate-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
