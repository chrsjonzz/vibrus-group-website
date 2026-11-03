import React from "react";
import Link from "next/link";
import { FileCheck2, Users2, Phone, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function CtaBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-vibrus-navy to-vibrus-navy-deep text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto rounded-3xl bg-slate-800/40 border border-slate-700/60 p-8 sm:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>30-Minute Callback Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Experience the Vibrus Advantage?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Whether you need urgent clinical shift coverage, qualified industrial crews, or are ready to explore rewarding career opportunities, our Warren dispatch team is live 24/7.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>600+ Credentialed Staff</span>
              </span>
              <span>•</span>
              <span>Transparent Pay Schedules</span>
              <span>•</span>
              <span>Oakland, Wayne, Macomb & Statewide</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/employers"
              className="flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all text-sm group"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Request Staff (24/7 Dispatch)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/apply"
              className="flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all text-sm group"
            >
              <Users2 className="w-4 h-4" />
              <span>60-Second Express Apply</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700 transition-colors text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Phone: {siteConfig.phone}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
