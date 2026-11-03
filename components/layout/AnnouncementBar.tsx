import React from "react";
import Link from "next/link";
import { Phone, Clock, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function AnnouncementBar() {
  return (
    <aside aria-label="Operational Dispatch & Coverage" className="bg-vibrus-navy-deep text-slate-200 border-b border-slate-800 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Operational Focus */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-slate-300">
          <span className="inline-flex items-center gap-1.5 font-semibold text-cyan-400">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>24/7 Live Operational Dispatch</span>
          </span>
          <span className="hidden sm:inline text-slate-600" aria-hidden="true">•</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>600+ Credentialed Professionals</span>
          </span>
          <span className="hidden lg:inline text-slate-600" aria-hidden="true">•</span>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Tri-County (Macomb • Oakland • Wayne) & Statewide</span>
          </span>
        </div>

        {/* Right Contact & HQ Info */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-slate-400">
            Warren HQ
          </span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-white font-bold hover:text-amber-400 transition-colors py-0.5 px-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-800 border border-slate-700/60 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
