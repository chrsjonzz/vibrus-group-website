"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Download, Filter, Search, ShieldCheck, Save, Copy, Check, Eye, EyeOff } from "lucide-react";
import { APPROVAL_REGISTER_ITEMS, ApprovalItem } from "@/lib/data/approvalRegisterData";

export function ManagementApprovalRegister() {
  const [items, setItems] = useState<ApprovalItem[]>(APPROVAL_REGISTER_ITEMS);
  const [selectedArea, setSelectedArea] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("All");
  const [hideSorted, setHideSorted] = useState<boolean>(true);
  const [savedNotification, setSavedNotification] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Restore from localStorage on mount if available
  useEffect(() => {
    const saved = localStorage.getItem("vibrus_management_approvals");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed);
        }
      } catch (e) {}
    }
  }, []);

  const handleStatusChange = (actualIndex: number, newStatus: string) => {
    const updated = [...items];
    updated[actualIndex].status = newStatus;
    setItems(updated);
    localStorage.setItem("vibrus_management_approvals", JSON.stringify(updated));
  };

  const handleNotesChange = (actualIndex: number, newNotes: string) => {
    const updated = [...items];
    updated[actualIndex].notes = newNotes;
    setItems(updated);
    localStorage.setItem("vibrus_management_approvals", JSON.stringify(updated));
  };

  const handleMilestoneChange = (actualIndex: number, newMilestone: string) => {
    const updated = [...items];
    updated[actualIndex].milestone = newMilestone;
    setItems(updated);
    localStorage.setItem("vibrus_management_approvals", JSON.stringify(updated));
  };

  const handleSave = () => {
    localStorage.setItem("vibrus_management_approvals", JSON.stringify(items));
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  // Safe Blob-based CSV Export (Never truncated by # or URL length)
  const handleExportCSV = () => {
    const headers = ["Item #", "Area", "Current Demo Behavior", "Decision Required", "Recommended Option", "Owner", "Status", "Executive Notes", "Milestone"];
    const rows = items.map(i => [
      i.num,
      `"${i.area.replace(/"/g, '""')}"`,
      `"${i.behavior.replace(/"/g, '""')}"`,
      `"${i.decision.replace(/"/g, '""')}"`,
      `"${i.recommended.replace(/"/g, '""')}"`,
      `"${i.owner.replace(/"/g, '""')}"`,
      `"${i.status.replace(/"/g, '""')}"`,
      `"${(i.notes || '').replace(/"/g, '""')}"`,
      `"${i.milestone.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Vibrus_Group_Management_Approval_Decisions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // One-click clipboard copy of modified decisions
  const handleCopyDecisions = () => {
    const modified = items.filter(i => i.status !== "Pending Review" || (i.notes && i.notes.trim().length > 0));
    if (modified.length === 0) {
      navigator.clipboard.writeText("No decisions updated yet.");
    } else {
      const summary = modified.map(i => 
        `Item ${i.num} (${i.area}): [${i.status}] - Decision: ${i.decision} | Notes: ${i.notes || "None"} | Milestone: ${i.milestone}`
      ).join("\n\n");
      navigator.clipboard.writeText(summary);
    }
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  // KPIs
  const stats = useMemo(() => {
    const total = items.length;
    const staging = items.filter(i => i.status === "Approved (Staging)").length;
    const approved = items.filter(i => i.status === "Approved").length;
    const pending = items.filter(i => i.status === "Pending Review").length;
    const edits = items.filter(i => i.status === "Approved with Edits").length;
    const rejected = items.filter(i => i.status.includes("Rejected") || i.status.includes("Hold")).length;
    const sortedCount = approved + staging + edits + rejected;
    const progress = Math.round((sortedCount / total) * 100);
    return { total, staging, approved, pending, edits, rejected, sortedCount, progress };
  }, [items]);

  // Filtered Items (With Hide Approved / Sorted toggle support)
  const filtered = useMemo(() => {
    return items.filter(item => {
      // If hideSorted is active, hide items that have been approved or sorted (show only what needs approval)
      if (hideSorted && item.status !== "Pending Review") {
        return false;
      }
      const matchArea = selectedArea === "All" || item.area === selectedArea;
      const matchStatus = selectedStatus === "All" || item.status === selectedStatus;
      const q = searchQuery === "All" ? "" : searchQuery.toLowerCase().trim();
      const matchSearch = !q || (item.num + item.area + item.behavior + item.decision + item.recommended + item.owner + item.notes).toLowerCase().includes(q);
      return matchArea && matchStatus && matchSearch;
    });
  }, [items, selectedArea, selectedStatus, searchQuery, hideSorted]);

  const categories = ["All", "Business Claims", "Leadership & Identity", "Contact Routing", "Email & IONOS", "File Uploads", "Recruiting Integrations", "Facility Requests", "Content & Visual Assets", "Legal & Compliance", "Coverage & Locations", "Domain & Ownership", "SEO & Legacy URLs"];
  const statuses = ["All", "Pending Review", "Approved", "Approved (Staging)", "Approved with Edits", "Rejected", "Hold for Legal / Exec"];

  return (
    <div className="space-y-6 pt-6">
      
      {/* Header & Export Controls */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Executive Decision Matrix
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
            72-Point Production Approval Ledger
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Review each item, select your decision from the drop-downs below, and export or copy your finalized record.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <button
            onClick={handleExportCSV}
            title="Download full CSV with all decisions"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Export to Excel (CSV)</span>
          </button>
          
          <button
            onClick={handleCopyDecisions}
            title="Copy all modified decisions to clipboard to paste in chat or email"
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs transition active:scale-95"
          >
            {copiedNotification ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedNotification ? "Copied to Clipboard!" : "Copy Decisions"}</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Save Progress</span>
          </button>
          
          {savedNotification && (
            <span className="text-xs font-bold text-emerald-600 animate-pulse">Saved!</span>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs text-center">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Items</div>
          <div className="text-2xl font-black text-slate-900 mt-0.5">{stats.total}</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs text-center bg-blue-50/40">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Staging Approved</div>
          <div className="text-2xl font-black text-blue-700 mt-0.5">{stats.staging}</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs text-center bg-emerald-50/40">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Production Approved</div>
          <div className="text-2xl font-black text-emerald-700 mt-0.5">{stats.approved}</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs text-center bg-amber-50/40">
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Pending Review</div>
          <div className="text-2xl font-black text-amber-700 mt-0.5">{stats.pending}</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs text-center bg-purple-50/40">
          <div className="text-[10px] font-bold uppercase tracking-wider text-purple-700">Approved with Edits</div>
          <div className="text-2xl font-black text-purple-700 mt-0.5">{stats.edits}</div>
        </div>
        <div className="bg-emerald-600 text-white p-4 rounded-2xl border border-emerald-700 shadow-2xs text-center">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">Completion</div>
          <div className="text-2xl font-black mt-0.5">{stats.progress}%</div>
        </div>
      </div>

      {/* Filter Toolbar with "Only Items Needing Approval" Toggle */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* View Filter Toggle (Needs Approval vs All) */}
          <button
            onClick={() => setHideSorted(!hideSorted)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
              hideSorted 
                ? "bg-amber-500 text-white border-amber-600 shadow-xs" 
                : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
            }`}
          >
            {hideSorted ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{hideSorted ? `Showing: Only What Needs Approval (${filtered.length})` : "Showing: All 72 Items (Click to Hide Approved)"}</span>
          </button>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong>{filtered.length}</strong> of {items.length} items
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery === "All" ? "" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-blue-600"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-800 outline-none focus:ring-2 focus:ring-blue-600"
          >
            {statuses.map(s => (
              <option key={s} value={s}>{s === "All" ? "All Statuses" : s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Interactive Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto max-h-[75vh]">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-900 text-white sticky top-0 z-20">
              <tr>
                <th className="py-3 px-3 w-16 text-center font-bold border-r border-slate-800">#</th>
                <th className="py-3 px-3 w-36 font-bold border-r border-slate-800">Category</th>
                <th className="py-3 px-4 w-72 font-bold border-r border-slate-800">Current Demo Behavior</th>
                <th className="py-3 px-4 w-80 font-bold border-r border-slate-800">Decision / Confirmation Required</th>
                <th className="py-3 px-4 w-80 font-bold border-r border-slate-800">Recommended Option</th>
                <th className="py-3 px-3 w-36 font-bold border-r border-slate-800">Owner</th>
                <th className="py-3 px-3 w-48 font-bold border-r border-slate-800 bg-blue-950 text-center">Decision (Dropdown)</th>
                <th className="py-3 px-4 w-64 font-bold border-r border-slate-800">Executive Notes / Edits</th>
                <th className="py-3 px-3 w-48 font-bold text-center">Target Milestone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filtered.map((item) => {
                const actualIndex = items.findIndex(i => i.num === item.num);
                return (
                  <tr key={item.num} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-3 text-center font-bold text-slate-400 border-r border-slate-100">
                      {item.num}
                    </td>
                    <td className="py-3.5 px-3 font-bold text-slate-800 border-r border-slate-100">
                      {item.area}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed border-r border-slate-100">
                      {item.behavior}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-950 leading-relaxed border-r border-slate-100">
                      {item.decision}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed border-r border-slate-100">
                      {item.recommended}
                    </td>
                    <td className="py-3.5 px-3 text-slate-500 font-medium border-r border-slate-100">
                      {item.owner}
                    </td>
                    <td className="py-3.5 px-3 border-r border-slate-100 bg-amber-50/20">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(actualIndex, e.target.value)}
                        className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-bold outline-none cursor-pointer shadow-2xs ${
                          item.status === "Approved"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                            : item.status === "Approved (Staging)"
                            ? "bg-blue-50 text-blue-800 border-blue-300"
                            : item.status === "Approved with Edits"
                            ? "bg-purple-50 text-purple-800 border-purple-300"
                            : item.status === "Pending Review"
                            ? "bg-amber-50 text-amber-800 border-amber-300"
                            : "bg-rose-50 text-rose-800 border-rose-300"
                        }`}
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Approved">Approved (Production)</option>
                        <option value="Approved (Staging)">Approved (Staging)</option>
                        <option value="Approved with Edits">Approved with Edits</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Hold for Legal / Exec">Hold for Legal / Exec</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 border-r border-slate-100">
                      <input
                        type="text"
                        value={item.notes || ""}
                        onChange={(e) => handleNotesChange(actualIndex, e.target.value)}
                        placeholder="Type executive guidance..."
                        className="w-full px-2 py-1 text-xs rounded-md border border-slate-200 outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                      />
                    </td>
                    <td className="py-3.5 px-3">
                      <select
                        value={item.milestone}
                        onChange={(e) => handleMilestoneChange(actualIndex, e.target.value)}
                        className="w-full px-2 py-1 rounded-md border border-slate-200 text-xs bg-white text-slate-700 outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="Mission 002 Production Launch">Mission 002 Production</option>
                        <option value="Phase 2 Post-Launch Enhancement">Phase 2 Post-Launch</option>
                        <option value="Staging Review Only">Staging Review Only</option>
                        <option value="Decline / Do Not Implement">Decline</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
