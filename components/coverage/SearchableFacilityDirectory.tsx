"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Building, Filter, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { michiganFacilities, ServiceAreaListing } from "@/lib/data/facilityDirectoryData";

interface SearchableFacilityDirectoryProps {
  initialLimit?: number;
}

export function SearchableFacilityDirectory({ initialLimit }: SearchableFacilityDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCounty, setSelectedCounty] = useState<string>("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    "All",
    "Healthcare / Post-Acute",
    "Hospital Support",
    "Industrial / Manufacturing",
    "Logistics & Distribution",
  ];

  const counties = ["All", "Macomb", "Oakland", "Wayne", "Washtenaw", "Genesee", "Statewide Michigan"];

  const filteredAreas = useMemo(() => {
    return michiganFacilities.filter((area) => {
      const matchesSearch =
        area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.focusDescription.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || area.category === selectedCategory;

      const matchesCounty =
        selectedCounty === "All" || area.county === selectedCounty;

      return matchesSearch && matchesCategory && matchesCounty;
    });
  }, [searchTerm, selectedCategory, selectedCounty]);

  // If user searched or changed filters, show all matching; otherwise respect initialLimit unless expanded
  const isFiltering = searchTerm.trim().length > 0 || selectedCategory !== "All" || selectedCounty !== "All";
  const displayedAreas = useMemo(() => {
    if (isFiltering || !initialLimit || isExpanded) {
      return filteredAreas;
    }
    return filteredAreas.slice(0, initialLimit);
  }, [filteredAreas, isFiltering, initialLimit, isExpanded]);

  return (
    <div id="facility-locator" className="space-y-6">
      {/* Search & Filters Controls */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search regional coverage by city (e.g. Warren, Troy, Detroit) or sector focus..."
            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-slate-50/50"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Sector:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* County Dropdown Filter */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <label htmlFor="countySelect" className="text-xs font-semibold text-slate-500">County:</label>
            <select
              id="countySelect"
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-blue-600"
            >
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All Counties" : `${c} County`}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500">
        <span>
          Showing <strong>{displayedAreas.length}</strong> of <strong>{filteredAreas.length}</strong> active regional coverage sectors
        </span>
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedCounty("All");
            }}
            className="text-blue-700 font-semibold hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedAreas.map((area) => (
          <div
            key={area.id}
            className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-card transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                  {area.category}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    area.status === "24/7 Dispatch Available"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {area.status}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 leading-snug">
                {area.name}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{area.city}, MI ({area.county} County)</span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 pt-1 border-t border-slate-100">
                <strong>Focus:</strong> {area.focusDescription}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/employers?facility=${encodeURIComponent(area.name)}&county=${encodeURIComponent(area.county)}`}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-900 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs transition-colors"
              >
                <span>Request Staffing in this Sector</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Expand/Collapse Toggle or Link to Coverage */}
      {initialLimit && filteredAreas.length > initialLimit && !isFiltering && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 text-blue-600" />
                <span>Show Fewer Facilities</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-blue-600" />
                <span>View All {filteredAreas.length} Facilities ({filteredAreas.length - initialLimit} More)</span>
              </>
            )}
          </button>
          <Link
            href="/coverage"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Explore Full Coverage Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
        [Note: Specific named healthcare facility clients and commercial accounts are held for management review prior to public release.]
      </div>
    </div>
  );
}
