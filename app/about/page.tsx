import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Clock,
  Users,
  Building,
  CheckCircle2,
  FileCheck2,
  Users2,
  MapPin,
  Phone
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "About Vibrus Group LLC — Michigan Staffing Leadership",
  description:
    "Learn about Vibrus Group LLC, a Women-Owned Minority Small Business Enterprise (WMBE) in Warren, MI. Led by Paddy and Achla, offering 30+ years of healthcare and industrial staffing expertise.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero Section with Bright Editorial Visual Design */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-100 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200/80 rounded-full text-xs font-bold shadow-2xs">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{siteConfig.badges.wmbe}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              About Vibrus Group
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A leading provider of diversified workforce and staffing solutions, combining over 30 years of executive healthcare and industrial expertise with personal, dependable client service across Michigan and nationwide.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Partner With Vibrus</span>
              </Link>
              <Link
                href="/careers"
                className="px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4 text-blue-600" />
                <span>Join Our Professional Network</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group aspect-[4/3] bg-white">
              <Image
                src="/images/about-culture-team.jpg"
                alt="Vibrus Group leadership and workforce planning team collaborating in Michigan corporate office"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 text-slate-900 text-xs shadow-md">
                <div className="font-bold flex items-center gap-1.5 text-blue-800">
                  <Building className="w-3.5 h-3.5 text-blue-600" />
                  <span>Warren, Michigan Headquarters</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Decades of trusted workforce partnership across Michigan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Enterprise Profile */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Executive Leadership & Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              30+ Years of Combined Staffing Excellence
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Vibrus Group LLC</strong> is a <strong>Women-Owned Minority Small Business Enterprise (WMBE)</strong> with extensive experience in the staffing and healthcare industries. Our principals and staff possess over 30 years of combined experience providing high-quality staff to our clients throughout Michigan and across the United States.
              </p>
              <p>
                Under the executive direction of <strong>Paddy and Achla</strong>, Vibrus Group has grown into a trusted workforce partner for hospitals, post-acute skilled nursing facilities, outpatient clinics, automotive manufacturers, logistics warehouses, and corporate enterprises.
              </p>
              <p>
                Our core philosophy has remained unwavering since our founding: <em>&ldquo;Single Source — Specialized Solutions.&rdquo;</em> We become a seamless, natural extension of your operational team, matching top-tier talent to demanding environments while maximizing overall value and containing costs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Executive Leadership: Paddy & Achla</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>600+ Credentialed Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>24/7 Operational Dispatch Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Warren, Michigan Headquarters</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-white p-1">
                <Image
                  src="/images/vibrus-logo.jpg"
                  alt="Vibrus Group Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Vibrus Group LLC</h3>
                <span className="text-xs text-slate-500">Corporate Fast Facts</span>
              </div>
            </div>

            <dl className="space-y-3 text-xs">
              <div>
                <dt className="text-slate-400 font-medium">Headquarters</dt>
                <dd className="font-bold text-slate-800">{siteConfig.address.full}</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">Enterprise Designation</dt>
                <dd className="font-bold text-amber-700">{siteConfig.badges.wmbe}</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">Primary Regional Coverage</dt>
                <dd className="font-bold text-slate-800">Macomb, Oakland & Wayne Counties (and Statewide Michigan)</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">24/7 Operations Line</dt>
                <dd className="font-bold text-blue-700">{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">Demo Intake Routing</dt>
                <dd className="font-mono text-slate-700">{siteConfig.contacts.activeRecipients.join(", ")} <span className="text-[10px] text-slate-400 font-sans block">(Operations Lead Sharon; server-log mode)</span></dd>
              </div>
            </dl>
          </div>

        </div>
      </section>

      {/* Compliance, EEO & E-Verify Commitment */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Legal & Regulatory Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Equal Opportunity Employer & Verification Policies
            </h2>
          </div>
          <div className="px-3 py-1 bg-amber-50 border border-amber-300 rounded-lg text-[11px] font-semibold text-amber-800 w-fit">
            [Pending Final Management Legal Sign-off]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-600 leading-relaxed">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              <span>Equal Opportunity Employer (EEO)</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vibrus Group is an Equal Opportunity Employer. This company does not and will not discriminate in employment and personnel practices on the basis of race, sex, age, handicap, religion, national origin, sexual orientation, marital status, amnesty, or status as a covered veteran or any other covered entity prohibited by applicable law. Vibrus Group also complies with applicable state and local laws governing non-discrimination in employment.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>E-Verify Verification Commitment</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vibrus Group uses E-Verify where legal. We are committed to complete compliance with all regulations issued by the Department of Homeland Security and the federal government, ensuring that 100% of our clinical and industrial personnel possess verified legal authorization to work in the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Partner with a Proven Michigan Staffing Leader
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Whether you need to request urgent shift staff or are looking to take your professional career to the next level, our Warren dispatch team is ready 24/7.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/employers"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg"
          >
            Request Staff On-Demand
          </Link>
          <Link
            href="/apply"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg"
          >
            60-Second Express Apply
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            Contact Warren HQ
          </Link>
        </div>
      </section>

    </div>
  );
}
