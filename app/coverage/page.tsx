import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MichiganMap } from "@/components/coverage/MichiganMap";
import { SearchableFacilityDirectory } from "@/components/coverage/SearchableFacilityDirectory";
import { MapPin, Clock, Building, ShieldCheck, FileCheck2, Users2 } from "lucide-react";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Michigan Service Areas & Coverage",
  description:
    "Serving Oakland, Wayne, and Macomb counties from our Warren headquarters, with workforce coordination expanding statewide across Michigan communities.",
  path: "/coverage",
  image: "/images/coverage-michigan-healthcare.jpg",
  imageAlt: "Clinical healthcare facility network map covering Macomb, Oakland, and Wayne counties in Michigan",
});

export default function CoveragePage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Section with Authentic Photographic Asset */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-100 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-50 text-cyan-900 border border-cyan-200 rounded-full text-xs font-bold shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              <span>Warren HQ • Tri-County Dispatch Core</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Michigan Regional Coverage
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Headquartered in Warren, Michigan, Vibrus Group delivers 24/7 staffing dispatch across <strong>Macomb, Oakland, and Wayne counties</strong>, with expanding operations across Michigan and the United States.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Request Regional Staffing</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-95"
              >
                <Building className="w-4 h-4 text-blue-600" />
                <span>Warren Operations Desk</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group aspect-[4/3] bg-white">
              <Image
                src="/images/hero-staffing-coordination.jpg"
                alt="24/7 Michigan regional dispatch and operations coordination center in Warren"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 text-slate-900 text-xs shadow-md">
                <div className="font-bold flex items-center gap-1.5 text-blue-800">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>24/7 Dispatch Control</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Macomb • Oakland • Wayne • Statewide Michigan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Interactive County Dispatch Explorer
        </h2>
        <MichiganMap />
      </section>

      {/* Searchable Facility Directory */}
      <section className="space-y-4 pt-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Searchable Facility Directory & Partner Network
          </h2>
          <p className="text-xs text-slate-500">
            Filter Michigan post-acute skilled nursing centers, regional hospital campuses, and industrial distribution hubs.
          </p>
        </div>
        <SearchableFacilityDirectory />
      </section>

    </div>
  );
}
