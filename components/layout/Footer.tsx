import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer, ShieldCheck, Clock, Award, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  return (
    <footer className="bg-vibrus-navy-deep text-slate-300 border-t border-slate-800">
      {/* Top Banner with Dispatch Commitment */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              24/7 Live Operational Dispatch
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need immediate staffing coverage? Connect with our 24/7 live dispatch team.
            </h3>
            <p className="text-sm text-slate-400">
              Serving hospitals, skilled nursing, warehouses, and corporate facilities across Oakland, Wayne, and Macomb counties.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call (248) 443-5100</span>
            </a>
            <Link
              href="/employers"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              <span>Request Staff On-Demand</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & HQ Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-700 bg-white p-1">
                <Image
                  src="/images/vibrus-logo.jpg"
                  alt="Vibrus Group Official Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  VIBRUS GROUP LLC
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  {siteConfig.badges.wmbe}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Vibrus Group is a premier staffing and workforce solutions partner headquartered in Warren, Michigan.
              Led by executive leadership Paddy and Achla, our principals and team bring over 30 years of combined
              experience providing reliable clinical, industrial, and specialized talent across Michigan and nationwide.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Phone: <a href={`tel:${siteConfig.phoneRaw}`} className="text-white hover:underline">{siteConfig.phone}</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Fax: {siteConfig.fax}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Inquiries: <a href={`mailto:${siteConfig.contacts.primaryRecipient}`} className="text-cyan-300 hover:underline">{siteConfig.contacts.primaryRecipient}</a></span>
              </div>
            </div>
          </div>

          {/* Specialized Divisions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Specialized Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/divisions/healthcare" className="hover:text-cyan-300 transition-colors">
                  Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link href="/divisions/industrial" className="hover:text-cyan-300 transition-colors">
                  Industrial, Warehouse & Logistics
                </Link>
              </li>
              <li>
                <Link href="/divisions/office" className="hover:text-cyan-300 transition-colors">
                  Office & Administrative
                </Link>
              </li>
              <li>
                <Link href="/divisions/professional" className="hover:text-cyan-300 transition-colors">
                  Professional & Executive Search
                </Link>
              </li>
              <li>
                <Link href="/divisions/info-tech" className="hover:text-cyan-300 transition-colors">
                  IT & Engineering
                </Link>
              </li>
              <li>
                <Link href="/divisions/hospitality" className="hover:text-cyan-300 transition-colors">
                  Hospitality Services
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/divisions" className="text-cyan-400 font-semibold hover:underline">
                  All Divisions Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers & Job Seekers */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              For Job Seekers
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/apply" className="text-amber-400 font-semibold hover:underline">
                  ★ 60-Second Express Apply
                </Link>
              </li>
              <li>
                <Link href="/careers/healthcare" className="hover:text-cyan-300 transition-colors">
                  Healthcare Careers (RN, LPN, CNA)
                </Link>
              </li>
              <li>
                <Link href="/careers/general" className="hover:text-cyan-300 transition-colors">
                  General & Industrial Careers
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-300 transition-colors">
                  Career Pathways & Benefits
                </Link>
              </li>
              <li className="pt-3 border-t border-slate-800">
                <span className="block text-[11px] text-slate-500 uppercase font-semibold mb-1">
                  External Portals
                </span>
                <a
                  href={siteConfig.externalLinks.jobsoid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Jobsoid Job Board</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.externalLinks.indeed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Indeed Verified Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Trust, Coverage & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Trust & Coverage
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/coverage" className="hover:text-cyan-300 transition-colors">
                  Michigan Coverage Map
                </Link>
              </li>
              <li>
                <Link href="/coverage#facility-locator" className="hover:text-cyan-300 transition-colors">
                  Searchable Facility Locator
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-cyan-300 transition-colors">
                  Compliance & Credentialing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors">
                  About Vibrus Group
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-cyan-300 transition-colors">
                  Client & Staff Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/management-review"
                  className="inline-flex items-center gap-1 text-amber-400/90 font-medium hover:text-amber-300 hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Management Review Checklist</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Hold & Placeholders Alert Box */}
        <div className="mt-12 p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="font-bold text-amber-400 block">
                [MANAGEMENT REVIEW REQUIRED — DEMO STAGING ENVIRONMENT]
              </span>
              <p className="text-slate-400">
                Official Privacy Policy, Terms of Use, Cookie Policy, Accessibility Statement, and Production Cloud Storage Policy
                are held pending final executive sign-off prior to live domain cutover to vibrusgroup.com.
              </p>
            </div>
            <Link
              href="/management-review"
              className="shrink-0 px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold rounded-md border border-amber-500/40 transition-colors"
            >
              View Checklist →
            </Link>
          </div>
        </div>

        {/* Bottom Copyright & EEO Statement */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Vibrus Group LLC. All rights reserved. Equal Opportunity Employer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <Link href="/management-review#privacy" className="hover:text-white">Privacy Policy (Review Hold)</Link>
            <span>•</span>
            <Link href="/management-review#terms" className="hover:text-white">Terms of Use (Review Hold)</Link>
            <span>•</span>
            <Link href="/management-review#accessibility" className="hover:text-white">Accessibility (Review Hold)</Link>
            <span>•</span>
            <Link href="/compliance" className="hover:text-white">Credentialing Standards</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
