import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ExpressApplyForm } from "@/components/forms/ExpressApplyForm";
import {
  Users2,
  Sparkles,
  ShieldCheck,
  Award,
  CheckCircle2,
  ExternalLink,
  DollarSign,
  Calendar,
  HeartHandshake
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "60-Second Express Apply",
  description:
    "Complete our fast 60-second express application. Connect with dedicated Michigan recruiters for nursing, allied health, logistics, and skilled trade shifts.",
  path: "/apply",
  image: "/images/candidate-healthcare-professional.jpg",
  imageAlt: "Candidate submitting express job application on mobile and laptop",
});

export default function ApplyPage({
  searchParams,
}: {
  searchParams: { role?: string };
}) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Professional Opportunities • Dedicated Placement Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          60-Second Express Apply
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Explore career opportunities across Michigan. Connect with Vibrus Group&apos;s team of over <strong>600+ credentialed professionals</strong> serving healthcare, industrial, and specialized facilities.
        </p>
      </div>

      {/* Main Grid: Form + Benefits Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Express Form */}
        <div className="lg:col-span-8">
          <ExpressApplyForm initialRole={searchParams.role} />
        </div>

        {/* Right Column: Candidate Benefits & Portals */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Visual Candidate Showcase Card */}
          <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/candidate-healthcare-professional.jpg"
              alt="Confident clinician and professional ready for career placement"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>600+ Credentialed Talent Network</span>
              </span>
            </div>
          </div>

          {/* Why Join Vibrus Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              Why Professionals Choose Vibrus
            </h3>
            
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Established Pay Structures:</strong> Competitive wage tiers aligned with facility requirements and professional credentials. <span className="text-slate-400 block text-[10px]">[Specific wage terms subject to client contract & management approval]</span></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Timely Payroll Processing:</strong> Regular, reliable direct deposit disbursements and electronic pay statements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span><strong>Placement Matching:</strong> Opportunities across per-diem PRN, contract assignments, and direct placements tailored to your qualifications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Dedicated Staffing Coordinator:</strong> Direct support from our Warren headquarters team to coordinate assignments and compliance renewals.</span>
              </li>
            </ul>
          </div>

          {/* External Portals Card */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Prefer Browsing Job Boards?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can also browse our currently posted openings on our external job portals:
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={siteConfig.externalLinks.jobsoid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-sm text-xs font-semibold text-slate-800 transition-all group"
              >
                <span>Vibrus Jobsoid Careers Portal</span>
                <ExternalLink className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href={siteConfig.externalLinks.indeed}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-sm text-xs font-semibold text-slate-800 transition-all group"
              >
                <span>Indeed Company Profile & Reviews</span>
                <ExternalLink className="w-4 h-4 text-blue-700 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Direct Resume Email */}
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl text-xs text-blue-900 space-y-1">
            <span className="font-bold block">Prefer to email your resume directly?</span>
            <p className="text-blue-800 text-[11px]">
              You can send your CV or credentials directly to:
            </p>
            <a
              href={`mailto:${siteConfig.contacts.jobsEmail}`}
              className="font-mono text-blue-700 font-bold hover:underline block pt-0.5"
            >
              {siteConfig.contacts.jobsEmail}
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
