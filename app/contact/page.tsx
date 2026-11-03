"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Building
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit message");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please call (248) 443-5100 directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Section with Bright Editorial Visual Design */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-100 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100/80 text-blue-800 border border-blue-200 rounded-full text-xs font-bold shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>24/7 Human Dispatch Active</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Contact Warren Headquarters
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our operational leads and staffing coordinators are available 24 hours a day, 7 days a week. We look forward to partnering with your healthcare facility, distribution center, or corporate enterprise.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>30-Minute Callback Commitment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Warren, Michigan Operations</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group aspect-[4/3] bg-white">
              <Image
                src="/images/about-culture-team.jpg"
                alt="Vibrus Group client relations and dispatch operations team in Warren, Michigan"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 text-slate-900 text-xs shadow-md">
                <div className="font-bold flex items-center gap-1.5 text-blue-800">
                  <Building className="w-3.5 h-3.5 text-blue-600" />
                  <span>Warren Headquarters</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Responsive dispatch & workforce coordination
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Inquiries Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Send an Inquiry</h2>
            <p className="text-xs text-slate-500 mt-1">
              Have a question about workforce solutions or partnerships? Send our coordinators a direct message.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, {formData.name}. Your message has been recorded for our operations team ({siteConfig.contacts.activeRecipients.join(", ")}). We will respond promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-blue-700 hover:underline pt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label htmlFor="contactFormName" className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                <input
                  id="contactFormName"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Davis"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactFormEmail" className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    id="contactFormEmail"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contactFormPhone" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    id="contactFormPhone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(248) 555-0123"
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contactFormSubject" className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                <select
                  id="contactFormSubject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Healthcare Staffing Inquiry">Healthcare Staffing Inquiry</option>
                  <option value="Industrial / Warehouse Staffing">Industrial / Warehouse Staffing</option>
                  <option value="Private Duty / Home Care">Private Duty / Home Care</option>
                  <option value="Vendor Management (MSP)">Vendor Management (MSP / RPO)</option>
                  <option value="Candidate Application Support">Candidate Application Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="contactFormMessage" className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                <textarea
                  id="contactFormMessage"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can Vibrus Group assist your facility or career?"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Operations</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: HQ Office Details & Map Link */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Warren Operational Headquarters
            </h3>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{siteConfig.legalName}</div>
                  <div>{siteConfig.address.street}, {siteConfig.address.suite}</div>
                  <div>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold uppercase">24/7 Dispatch Phone</div>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-bold text-blue-700 hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold uppercase">Corporate Fax</div>
                  <div className="text-sm font-semibold text-slate-800">{siteConfig.fax}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500 font-semibold uppercase">Operational & Intake Contact</div>
                  <div className="text-xs text-slate-900 pt-0.5 space-y-1">
                    <div>Operations & Intake Lead: <a href="mailto:sharon@vibrusgroup.com" className="text-blue-700 font-medium hover:underline">sharon@vibrusgroup.com</a></div>
                    <div className="text-[11px] text-slate-600">24/7 Dispatch Phone: <span className="font-semibold text-slate-900">{siteConfig.phone}</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a
                href="https://maps.google.com/?q=31201+Chicago+Rd+S+Suite+B202+Warren+MI+48093"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps / Get Directions</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
