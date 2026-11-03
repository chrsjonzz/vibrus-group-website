import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Quote, AlertCircle, Handshake, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonialsData";

export const metadata: Metadata = {
  title: "Testimonials Showcase — Vibrus Group LLC (Review Pending)",
  description:
    "Preview layout for Vibrus Group client and candidate feedback. Official endorsements pending executive review prior to live domain cutover.",
};

export default function TestimonialsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Section with Illustrative Partnership Photography */}
      <section className="bg-gradient-to-br from-slate-900 via-vibrus-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold backdrop-blur-md shadow-xs">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Pending Management Review & Client Approval</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Client & Staff Endorsements
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Vibrus Group values long-term partnerships built on reliability, clinical excellence, and rapid response. Official testimonials and facility endorsements will be published upon formal executive sign-off prior to live domain cutover.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Executive Review in Progress</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Fabricated Reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
              <Image
                src="/images/employer-consultation.jpg"
                alt="Facility leadership and workforce staffing partners in a strategic consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 text-white text-xs">
                <div className="font-bold flex items-center gap-1.5 text-amber-300">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>Trusted Facility Partnerships</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Illustrative partner collaboration showcase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.category}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">
                  {item.status}
                </span>
              </div>

              <Quote className="w-10 h-10 text-slate-300" />

              <p className="text-sm text-slate-600 leading-relaxed italic">
                &ldquo;{item.quotePlaceholder}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-slate-800">{item.sector}</span>
              <span className="text-[11px] text-slate-400">Approval Required</span>
            </div>
          </div>
        ))}
      </section>

      {/* Action Footer */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">Client and Clinician Endorsement Submissions</h2>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          Executive leadership (Paddy and Achla) will review and approve formal client references and partner quotes before public release on vibrusgroup.com.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors shadow-sm inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </section>

    </div>
  );
}
