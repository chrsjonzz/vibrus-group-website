import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  FileCheck2,
  Lock,
  HeartPulse,
  Clock,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Credentialing & Compliance Standards",
  description:
    "Our verified clinical credentialing standard includes primary-source license validation, background screenings, and audits for compliant Michigan placements.",
  path: "/compliance",
  image: "/images/hero-staffing-coordination.jpg",
  imageAlt: "Staffing operations and credentialing compliance review at Vibrus Group headquarters",
});

export default function CompliancePage() {
  const clinicalChecklist = [
    {
      title: "Primary Source License Verification",
      description: "Direct validation with state licensing boards for all RN, LPN, CNA, Therapy, and Allied professional licenses."
    },
    {
      title: "Pre-Placement Toxicology & Health Screens",
      description: "Comprehensive substance screening adhering to stringent healthcare and facility partner protocols."
    },
    {
      title: "Criminal Background & Fingerprinting",
      description: "Multi-state criminal history searches, ICHAT Michigan state police checks, and sex offender registry screenings."
    },
    {
      title: "Regulatory & Federal Exclusion Audits",
      description: "Comprehensive federal and state exclusion list checks verified before facility assignment."
    },
    {
      title: "Immunizations & Health Screenings",
      description: "Annual 2-step TB skin test or QuantiFERON blood test, Hepatitis B series, MMR, Varicella, Tdap, and annual Influenza verification."
    },
    {
      title: "CPR / BLS / ACLS Certification",
      description: "American Heart Association (AHA) certified life support credential verification prior to facility floor placement."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Section with Bright Editorial Visual Design */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-100 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-full text-xs font-bold shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Compromise Compliance • 600+ Clinicians</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Credentialing & Quality Standards
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At Vibrus Group, patient safety and facility liability protection are paramount. Every one of our <strong>600+ credentialed professionals</strong> undergoes rigorous pre-placement screening and continuous license monitoring.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Primary Source License Verification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Audit-Ready Credential Packets</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group aspect-[4/3] bg-white">
              <Image
                src="/images/professional-executive-consulting.jpg"
                alt="Quality assurance and healthcare credentialing review"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 text-slate-900 text-xs shadow-md">
                <div className="font-bold flex items-center gap-1.5 text-emerald-700">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Audit-Ready Packets</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Complete documentation provided prior to shift start
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Placement Quality Assurance Protocol */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Pre-Placement Quality Assurance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Clinical & Industrial Quality Assurance Protocol
          </h2>
          <p className="text-xs text-slate-500">
            Staff arrive at your facility with complete digital credential packets pre-verified and ready for audit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicalChecklist.map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Certifications & Governance */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <Award className="w-8 h-8 text-amber-500" />
          <h3 className="font-bold text-slate-900">WMBE Certified Enterprise</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Women-Owned Minority Small Business Enterprise providing certified supplier diversity credits for hospital networks and tier-1 industrial contractors.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          <h3 className="font-bold text-slate-900">Employment Authorization Verification</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Committed to full compliance with federal employment verification regulations, ensuring legal employment authorization for 100% of staff. <span className="text-slate-400 block text-[10px] mt-1">[E-Verify / statutory registry enrollment details subject to final management confirmation]</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <Clock className="w-8 h-8 text-blue-500" />
          <h3 className="font-bold text-slate-900">24/7/365 Live Compliance Line</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our credentialing coordinators and operations managers are reachable 24 hours a day to provide immediate audit packets upon state or facility request.
          </p>
        </div>
      </section>

      {/* Management Review Notice Box */}
      <section className="p-6 bg-amber-50/70 border border-amber-200 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="font-bold text-amber-900 text-sm block">
            [MANAGEMENT REVIEW CHECKLIST — DEMO STAGE]
          </span>
          <p className="text-xs text-amber-800 mt-0.5">
            Formal legal disclosures, HIPAA privacy policies, and final production cloud storage selections are documented on our Management Review checklist.
          </p>
        </div>
        <Link
          href="/management-review"
          className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
        >
          View Review Items →
        </Link>
      </section>

    </div>
  );
}
