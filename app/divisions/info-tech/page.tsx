import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Cpu, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";

export const metadata: Metadata = {
  title: "Information Technology & Engineering Staffing — Vibrus Group LLC",
  description:
    "Sourcing software engineers, cloud architects, DBAs, QA engineers, and cybersecurity professionals across Michigan.",
};

export default function InfoTechDivisionPage() {
  const it = divisionsData.find((d) => d.id === "info-tech")!;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-cyan-900/40 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold border border-cyan-500/30 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Digital Infrastructure & Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              IT & Engineering Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Delivering specialized technical talent across Healthcare IT, Automotive systems, Cloud Engineering, and Enterprise software development.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers?division=info-tech"
                className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-95"
              >
                Request Tech Specialists
              </Link>
              <Link
                href="/apply?role=Software%20Engineer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-95"
              >
                Apply for Tech Roles
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/technology-engineering-workspace.jpg"
                alt="Cloud systems and enterprise software engineers collaborating at sit-stand workstation in modern tech setting"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg">
                <span className="font-bold text-white text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Technical Skills & Code Vetted</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classifications Grid */}
      <section id="job-classifications" className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            IT & Engineering Specializations
          </h2>
          <p className="text-xs text-slate-500">
            From modern cloud architectures to enterprise EHR integrations and cybersecurity operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {it.jobClassifications.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2 text-sm">
                {group.category}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {group.roles.map((role, rIdx) => (
                  <li key={rIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
