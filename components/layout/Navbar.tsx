"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  FileCheck2,
  Users2,
  Stethoscope,
  Truck,
  Building2,
  Briefcase,
  Cpu,
  Utensils,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function Navbar() {
  // Desktop single-active dropdown state: only one can be open at a time
  const [activeDropdown, setActiveDropdown] = useState<"divisions" | "careers" | null>(null);

  // Mobile menu independent state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);

  const pathname = usePathname();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const divisionsButtonRef = useRef<HTMLButtonElement>(null);
  const careersButtonRef = useRef<HTMLButtonElement>(null);

  // Automatically close all menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside listener: closes any active desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    // Escape key listener: closes active dropdown and refocuses triggering button
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (activeDropdown === "divisions") {
          setActiveDropdown(null);
          divisionsButtonRef.current?.focus();
        } else if (activeDropdown === "careers") {
          setActiveDropdown(null);
          careersButtonRef.current?.focus();
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDropdown, mobileMenuOpen]);

  const toggleDropdown = (name: "divisions" | "careers") => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const divisionIcons: Record<string, React.ReactNode> = {
    "Healthcare Solutions": <Stethoscope className="w-4 h-4 text-blue-600" />,
    "Industrial & Logistics": <Truck className="w-4 h-4 text-amber-600" />,
    "Office & Administrative": <Building2 className="w-4 h-4 text-slate-600" />,
    "Professional & Executive": <Briefcase className="w-4 h-4 text-indigo-600" />,
    "IT & Engineering": <Cpu className="w-4 h-4 text-cyan-600" />,
    "Hospitality": <Utensils className="w-4 h-4 text-rose-600" />,
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" ref={navContainerRef}>
          
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-xl p-1.5 transition-transform hover:scale-[1.01]"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200/90 bg-white shadow-md flex items-center justify-center p-1 group-hover:border-blue-400 transition-colors">
              <Image
                src="/images/vibrus-logo.jpg"
                alt="Vibrus Group Logo"
                width={46}
                height={46}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-vibrus-navy group-hover:text-blue-700 transition-colors">
                VIBRUS GROUP
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Workforce Solutions • Est. Michigan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <Link
              href="/employers"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/employers"
                  ? "text-blue-700 bg-blue-50/80 font-bold shadow-sm"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Employers
            </Link>

            {/* Candidates Dropdown */}
            <div className="relative">
              <button
                ref={careersButtonRef}
                type="button"
                id="careers-menu-button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "careers"}
                aria-controls="careers-menu-dropdown"
                onClick={() => toggleDropdown("careers")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  activeDropdown === "careers"
                    ? "text-blue-700 bg-blue-50 font-bold shadow-sm ring-1 ring-blue-200"
                    : pathname.startsWith("/careers") || pathname === "/apply"
                    ? "text-blue-700 bg-blue-50/80 font-bold shadow-sm"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                <span>Candidates</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "careers" ? "rotate-180 text-blue-700" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Candidates Panel - Fully Opaque Enterprise Panel */}
              <div
                id="careers-menu-dropdown"
                role="menu"
                aria-labelledby="careers-menu-button"
                className={`absolute left-0 w-[360px] mt-2 bg-white border border-slate-200 rounded-2xl shadow-[0_25px_50px_-12px_rgba(15,23,42,0.22)] py-0 z-[100] transition-all duration-150 ease-out origin-top overflow-hidden ${
                  activeDropdown === "careers"
                    ? "opacity-100 scale-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Candidate Career Pathways
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    60-Sec Intake
                  </span>
                </div>

                <div className="p-2 space-y-1 bg-white">
                  <Link
                    href="/apply"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 text-slate-800 hover:text-blue-700 transition-all group"
                  >
                    <div className="mt-0.5 p-2 bg-emerald-50 text-emerald-700 rounded-lg shadow-xs border border-emerald-100">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                        60-Second Express Apply
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Rapid direct candidate intake application
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/careers/healthcare"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-700 transition-all group"
                  >
                    <div className="mt-0.5 p-2 bg-blue-50 text-blue-700 rounded-lg shadow-xs border border-blue-100">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                        Healthcare Careers
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Clinical nursing, therapy & allied health opportunities
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/careers/general"
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-700 transition-all group"
                  >
                    <div className="mt-0.5 p-2 bg-amber-50 text-amber-700 rounded-lg shadow-xs border border-amber-100">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                        General & Industrial Careers
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Warehousing, machine trades, administration & IT
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="p-3 border-t border-slate-100 bg-slate-50 flex flex-col gap-1.5 text-xs">
                  <a
                    href={siteConfig.externalLinks.jobsoid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-slate-700 hover:text-blue-700 font-semibold py-1.5 px-2 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-slate-200"
                  >
                    <span>External Jobsoid Board</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href={siteConfig.externalLinks.indeed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-slate-700 hover:text-blue-700 font-semibold py-1.5 px-2 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-slate-200"
                  >
                    <span>Indeed Company Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Divisions Dropdown */}
            <div className="relative">
              <button
                ref={divisionsButtonRef}
                type="button"
                id="divisions-menu-button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "divisions"}
                aria-controls="divisions-menu-dropdown"
                onClick={() => toggleDropdown("divisions")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  activeDropdown === "divisions"
                    ? "text-blue-700 bg-blue-50 font-bold shadow-sm ring-1 ring-blue-200"
                    : pathname.startsWith("/divisions")
                    ? "text-blue-700 bg-blue-50/80 font-bold shadow-sm"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                <span>Divisions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "divisions" ? "rotate-180 text-blue-700" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Divisions Panel - Fully Opaque Enterprise Panel */}
              <div
                id="divisions-menu-dropdown"
                role="menu"
                aria-labelledby="divisions-menu-button"
                className={`absolute left-0 w-[420px] mt-2 bg-white border border-slate-200 rounded-2xl shadow-[0_25px_50px_-12px_rgba(15,23,42,0.22)] py-0 z-[100] transition-all duration-150 ease-out origin-top overflow-hidden ${
                  activeDropdown === "divisions"
                    ? "opacity-100 scale-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Specialized Industry Divisions
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    24/7 Dispatch
                  </span>
                </div>

                <div className="p-2 space-y-1 bg-white">
                  {siteConfig.navigation[2].children?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-700 transition-all group"
                    >
                      <div className="mt-0.5 p-2 bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-700 rounded-lg transition-colors shadow-xs border border-slate-200/60">
                        {divisionIcons[item.name] || <Briefcase className="w-4 h-4 text-slate-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold group-hover:translate-x-0.5 transition-transform text-slate-900 group-hover:text-blue-700">
                          {item.name}
                        </div>
                        {item.description && (
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="p-3 border-t border-slate-100 bg-slate-50 flex justify-between items-center text-xs">
                  <Link
                    href="/divisions"
                    onClick={() => setActiveDropdown(null)}
                    className="font-bold text-blue-700 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    <span>All Divisions Overview</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-slate-400">Warren, MI Hub</span>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/about"
                  ? "text-blue-700 bg-blue-50/80 font-bold shadow-sm"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              About Vibrus
            </Link>

            <Link
              href="/coverage"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/coverage"
                  ? "text-blue-700 bg-blue-50/80 font-bold shadow-sm"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Michigan Coverage
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/contact"
                  ? "text-blue-700 bg-blue-50/80 font-bold shadow-sm"
                  : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Dual Primary Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-blue-700 bg-blue-50/90 border border-blue-200/80 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all shadow-sm hover:shadow active:scale-95"
            >
              <Users2 className="w-4 h-4 text-blue-600" />
              <span>60-Sec Apply</span>
            </Link>

            <Link
              href="/employers"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <FileCheck2 className="w-4 h-4 text-blue-100" />
              <span>Request Staff (24/7)</span>
            </Link>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href={`tel:${siteConfig.phoneRaw}`}
              aria-label="Call Dispatch"
              className="p-2.5 text-blue-700 bg-blue-50 rounded-xl border border-blue-200 shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-slate-200 shadow-sm"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Mobile Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer (Independent from desktop state) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl px-4 pt-3 pb-8 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-2">
            {/* Primary Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Link
                href="/employers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 px-3 bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md text-center"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Request Staff</span>
              </Link>
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-3 px-3 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold rounded-xl text-center shadow-sm"
              >
                <Users2 className="w-4 h-4" />
                <span>60-Sec Apply</span>
              </Link>
            </div>

            <Link
              href="/employers"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 text-base font-semibold rounded-xl ${
                pathname === "/employers" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Employers
            </Link>

            {/* Mobile Candidates Accordion */}
            <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-700"
                aria-expanded={mobileCareersOpen}
              >
                <span className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-emerald-600" />
                  <span>Candidates</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                    mobileCareersOpen ? "rotate-180 text-blue-700" : ""
                  }`}
                />
              </button>

              {mobileCareersOpen && (
                <div className="px-3 pb-3 space-y-1 bg-white border-t border-slate-100 pt-2">
                  <Link
                    href="/apply"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-50 rounded-lg"
                  >
                    60-Second Express Apply
                  </Link>
                  <Link
                    href="/careers/healthcare"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg"
                  >
                    Healthcare Careers
                  </Link>
                  <Link
                    href="/careers/general"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg"
                  >
                    General & Industrial Careers
                  </Link>
                  <Link
                    href="/careers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold text-blue-700 hover:underline pt-1 border-t border-slate-100"
                  >
                    All Careers Overview →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Divisions Accordion */}
            <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-blue-700"
                aria-expanded={mobileDivisionsOpen}
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>Divisions ({siteConfig.navigation[2].children?.length || 6})</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                    mobileDivisionsOpen ? "rotate-180 text-blue-700" : ""
                  }`}
                />
              </button>

              {mobileDivisionsOpen && (
                <div className="px-3 pb-3 space-y-1 bg-white border-t border-slate-100 pt-2">
                  {siteConfig.navigation[2].children?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold text-blue-700 hover:underline pt-1 border-t border-slate-100"
                  >
                    View All Divisions Overview →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 text-base font-semibold rounded-xl ${
                pathname === "/about" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About Vibrus
            </Link>

            <Link
              href="/coverage"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 text-base font-semibold rounded-xl ${
                pathname === "/coverage" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Michigan Coverage
            </Link>

            <Link
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 text-base font-semibold rounded-xl ${
                pathname === "/testimonials" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Client & Clinician Testimonials
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 text-base font-semibold rounded-xl ${
                pathname === "/contact" ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Contact Warren Headquarters
            </Link>

            {/* Direct Phone Dispatch on Mobile */}
            <div className="pt-4 border-t border-slate-200">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Dispatch: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
