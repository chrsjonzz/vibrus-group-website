"use client";

import React, { useState } from "react";
import { Clock, Building, ShieldCheck, MapPin } from "lucide-react";
import { countyCoverageStats } from "@/lib/data/facilityDirectoryData";
import { siteConfig } from "@/lib/config/site";

export function MichiganMap() {
  const [selectedCounty, setSelectedCounty] = useState(countyCoverageStats[0]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-card space-y-8">
      {/* County Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
        {countyCoverageStats.map((item) => (
          <button
            key={item.county}
            onClick={() => setSelectedCounty(item)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCounty.county === item.county
                ? "bg-blue-700 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.county}
          </button>
        ))}
      </div>

      {/* Main Interactive Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* SVG Schematic Map Illustration */}
        <div className="lg:col-span-6 bg-slate-900 rounded-xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[320px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

          <svg viewBox="0 0 400 300" className="w-full max-w-sm relative z-10">
            {/* Outline of SE Michigan Lower Peninsula */}
            <path
              d="M 50 40 Q 180 20 280 60 Q 340 100 350 180 Q 330 260 220 270 Q 120 280 60 220 Z"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="2"
            />

            {/* Oakland County Block */}
            <path
              d="M 140 100 L 220 100 L 220 170 L 140 170 Z"
              fill={selectedCounty.county.includes("Oakland") ? "#2563EB" : "#334155"}
              stroke="#60A5FA"
              strokeWidth="1.5"
              className="transition-colors cursor-pointer"
              onClick={() => setSelectedCounty(countyCoverageStats[1])}
            />
            <text x="180" y="140" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Oakland
            </text>

            {/* Macomb County Block (HQ) */}
            <path
              d="M 222 90 L 290 90 L 290 170 L 222 170 Z"
              fill={selectedCounty.county.includes("Macomb") ? "#D97706" : "#334155"}
              stroke="#F59E0B"
              strokeWidth="1.5"
              className="transition-colors cursor-pointer"
              onClick={() => setSelectedCounty(countyCoverageStats[0])}
            />
            <text x="256" y="130" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Macomb
            </text>
            <circle cx="256" cy="148" r="4" fill="#FBBF24" />
            <text x="256" y="162" fill="#FDE68A" fontSize="9" fontWeight="bold" textAnchor="middle">
              HQ: Warren
            </text>

            {/* Wayne County Block */}
            <path
              d="M 160 172 L 270 172 L 270 240 L 160 240 Z"
              fill={selectedCounty.county.includes("Wayne") ? "#0D9488" : "#334155"}
              stroke="#2DD4BF"
              strokeWidth="1.5"
              className="transition-colors cursor-pointer"
              onClick={() => setSelectedCounty(countyCoverageStats[2])}
            />
            <text x="215" y="210" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              Wayne (Detroit)
            </text>
          </svg>

          <div className="absolute bottom-3 left-4 text-[10px] text-slate-400 font-mono z-10">
            ★ Regional Dispatch Matrix
          </div>
        </div>

        {/* Selected County Details Panel */}
        <div className="lg:col-span-6 space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Regional Staffing Focus
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              {selectedCounty.county}
            </h3>
            <p className="text-sm font-semibold text-slate-600">
              {selectedCounty.role}
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div>
              <div className="text-xs text-slate-500 font-medium">Primary Communities Served:</div>
              <div className="text-sm font-bold text-slate-800">{selectedCounty.coverage}</div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Response Standard:</div>
                <div className="text-sm font-extrabold text-amber-600 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedCounty.dispatchSpeed}</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-500 font-medium">Regional Presence:</div>
                <div className="text-xs font-bold text-slate-800">
                  {selectedCounty.note}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
            >
              Contact Dispatch for {selectedCounty.county.split(" ")[0]}
            </a>
            <a
              href="#facility-locator"
              className="text-xs font-semibold text-blue-700 hover:underline"
            >
              View Service Areas Below ↓
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
