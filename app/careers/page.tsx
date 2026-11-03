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
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Careers & Placement Support",
  description:
    "Explore flexible per-diem PRN, contract, and direct placement opportunities across Michigan with reliable direct-deposit payroll and 24/7 coordinator care.",
  path: "/careers",
  image: "/images/hero-staffing-coordination.jpg",
  imageAlt: "Staffing coordinator guiding candidate through credentialing and career placements in Warren, MI",
});

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
      
      {/* Visual Header Banner with Bright Editorial Design */}
      <section className="bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 text-slate-950 rounded-3xl p-8 sm:p-12 lg:p-14 border border-emerald-200/80 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Professional Staffing Opportunities • 600+ Clinicians</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Careers at Vibrus Group
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Join Vibrus Group&apos;s network of over 600+ credentialed professionals. We coordinate per-diem PRN shifts, local contracts, and direct placement opportunities across Michigan with transparent payroll and 24/7 live team support.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/apply"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4" />
                <span>60-Second Express Apply</span>
              </Link>
              <a
                href={siteConfig.externalLinks.jobsoid}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs rounded-xl transition-all shadow-xs flex items-center gap-2 active:scale-95"
              >
                <span>Browse External Jobsoid Board</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group-hover:scale-[1.02] transition-transform duration-500 bg-white">
              <Image
                src="/images/hero-staffing-coordination.jpg"
                alt="Vibrus Group staffing coordinator guiding candidate through credentialing and career opportunities"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-md">
                <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent Scheduling & Electronic Payroll</span>
                </span>
                <span className="text-slate-500 text-[11px] block mt-0.5">
                  24/7 Human Dispatch from Warren, Michigan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Directory */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-blue-400 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg">
            RN
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Healthcare & Clinical Careers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Per-diem PRN shifts, local travel contracts, and permanent nursing placements across premier Southeast Michigan hospitals and long-term care systems.
          </p>
          <ul className="text-xs text-slate-500 space-y-1.5">
            <li>• RN (ICU, ER, Med/Surg, Telemetry, OR, L&D)</li>
            <li>• LPN & Certified Nursing Assistant (CNA)</li>
            <li>• Physical, Occupational & Speech Therapists</li>
          </ul>
          <div className="pt-2">
            <Link
              href="/careers/healthcare"
              className="text-blue-700 hover:text-blue-800 font-bold text-xs inline-flex items-center gap-1"
            >
              <span>Explore Healthcare Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-400 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg">
            IND
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Industrial & Commercial Careers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Safety-first manufacturing, automotive assembly, warehousing, logistics, IT, and office support placements throughout Wayne, Oakland, and Macomb.
          </p>
          <ul className="text-xs text-slate-500 space-y-1.5">
            <li>• Certified Forklift Operators (OSHA-compliant)</li>
            <li>• Warehouse Sorters & Quality Control Inspectors</li>
            <li>• Administrative Assistants & IT Helpdesk</li>
          </ul>
          <div className="pt-2">
            <Link
              href="/careers/general"
              className="text-emerald-700 hover:text-emerald-800 font-bold text-xs inline-flex items-center gap-1"
            >
              <span>Explore Industrial & Commercial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Talent Support & Growth
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Candidate Support & Advantages
          </h2>
          <p className="text-xs text-slate-500">
            We value the commitment our healthcare clinicians and industrial specialists bring to every shift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Express Application CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-vibrus-navy text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Ready to Work on Your Terms?
        </h2>
        <p className="text-slate-200 max-w-xl mx-auto text-sm">
          Submit your contact details and resume in 60 seconds. A Vibrus Group talent coordinator will connect with you to review matching Michigan assignments.
        </p>
        <div>
          <Link
            href="/apply"
            className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all inline-flex items-center gap-2 active:scale-95"
          >
            <span>Complete 60-Second Express Application</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
