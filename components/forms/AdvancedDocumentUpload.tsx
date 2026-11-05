"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  UploadCloud,
  FileText,
  FileImage,
  FolderUp,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  Minimize2,
  Trash2,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  FileSpreadsheet
} from "lucide-react";

export interface UploadFileItem {
  id: string;
  file: File;
  name: string;
  relativePath?: string;
  size: number;
  type: string;
  extension: string;
  status: "queued" | "uploading" | "success" | "error" | "cancelled";
  progress: number;
  errorMessage?: string;
  previewUrl?: string;
  textContent?: string;
}

export interface AdvancedDocumentUploadProps {
  files: UploadFileItem[];
  onFilesChange: (files: UploadFileItem[]) => void;
  maxFiles?: number;
  maxFileSizeBytes?: number;
  maxTotalSizeBytes?: number;
  allowedExtensions?: string[];
  label?: string;
  sublabel?: string;
  idPrefix?: string;
}

const DEFAULT_ALLOWED = [".pdf", ".docx", ".doc", ".txt", ".png", ".jpg", ".jpeg"];
const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const DEFAULT_MAX_TOTAL_SIZE = 40 * 1024 * 1024; // 40 MB
const DEFAULT_MAX_FILES = 10;

export function AdvancedDocumentUpload({
  files,
  onFilesChange,
  maxFiles = DEFAULT_MAX_FILES,
  maxFileSizeBytes = DEFAULT_MAX_FILE_SIZE,
  maxTotalSizeBytes = DEFAULT_MAX_TOTAL_SIZE,
  allowedExtensions = DEFAULT_ALLOWED,
  label = "Upload Documents, Credentials & Specifications",
  sublabel = "Attach up to 10 files (PDF, Word, Text, or Images). Max 10 MB per file, 40 MB total.",
  idPrefix = "doc-upload",
}: AdvancedDocumentUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  // Preview Modal State
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Calculate current total size
  const totalSizeBytes = files.reduce((acc, f) => acc + f.size, 0);

  // Cleanup object URLs when component unmounts
  useEffect(() => {
    return () => {
      files.forEach((f) => {
        if (f.previewUrl) {
          URL.revokeObjectURL(f.previewUrl);
        }
      });
    };
  }, [files]);

  // Keyboard navigation for preview modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (previewIndex === null) return;
      if (e.key === "Escape") {
        closePreview();
      } else if (e.key === "ArrowLeft") {
        prevPreview();
      } else if (e.key === "ArrowRight") {
        nextPreview();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, files.length]);

  // Helper to sanitize path & filename
  const sanitizeName = (rawName: string) => {
    return rawName.replace(/[\/\\]/g, "_").replace(/[^a-zA-Z0-9._-]/g, "_");
  };

  const processIncomingFiles = useCallback(
    async (incoming: FileList | File[]) => {
      setDuplicateWarning(null);
      setGeneralError(null);

      const incomingArr = Array.from(incoming);
      if (incomingArr.length === 0) return;

      if (files.length + incomingArr.length > maxFiles) {
        setGeneralError(`Maximum file limit reached. You can attach up to ${maxFiles} files.`);
        return;
      }

      let runningTotal = totalSizeBytes;
      const newItems: UploadFileItem[] = [];
      const duplicates: string[] = [];

      for (const f of incomingArr) {
        // Safe normalized name
        const cleanName = sanitizeName(f.name);
        const ext = cleanName.includes(".")
          ? "." + cleanName.split(".").pop()!.toLowerCase()
          : "";

        // 1. Check duplicate
        const isDuplicate = files.some(
          (existing) => existing.name === cleanName && existing.size === f.size
        );
        if (isDuplicate) {
          duplicates.push(f.name);
          continue;
        }

        // 2. Validate Extension
        if (!allowedExtensions.includes(ext)) {
          setGeneralError(
            `File "${f.name}" has an unsupported format (${ext || "unknown"}). Allowed formats: ${allowedExtensions.join(", ")}.`
          );
          continue;
        }

        // 3. Validate Single File Size
        if (f.size > maxFileSizeBytes) {
          setGeneralError(
            `File "${f.name}" exceeds the ${(maxFileSizeBytes / (1024 * 1024)).toFixed(0)} MB limit (${(f.size / (1024 * 1024)).toFixed(2)} MB).`
          );
          continue;
        }

        // 4. Validate Total Size
        if (runningTotal + f.size > maxTotalSizeBytes) {
          setGeneralError(
            `Adding "${f.name}" would exceed the total upload limit of ${(maxTotalSizeBytes / (1024 * 1024)).toFixed(0)} MB.`
          );
          break;
        }

        runningTotal += f.size;

        // Generate safe in-memory preview URL
        let previewUrl: string | undefined;
        let textContent: string | undefined;

        if (f.type.startsWith("image/") || ext === ".pdf") {
          previewUrl = URL.createObjectURL(f);
        } else if (ext === ".txt") {
          try {
            const rawText = await f.text();
            textContent = rawText.slice(0, 15000); // first 15k chars for safe in-page preview
          } catch (e) {
            textContent = "Unable to read text preview.";
          }
        }

        const item: UploadFileItem = {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          file: f,
          name: cleanName,
          relativePath: (f as any).webkitRelativePath || undefined,
          size: f.size,
          type: f.type || "application/octet-stream",
          extension: ext,
          status: "success",
          progress: 100,
          previewUrl,
          textContent,
        };

        newItems.push(item);
      }

      if (duplicates.length > 0) {
        setDuplicateWarning(
          `Skipped ${duplicates.length} duplicate file(s): ${duplicates.join(", ")}.`
        );
      }

      if (newItems.length > 0) {
        onFilesChange([...files, ...newItems]);
      }
    },
    [files, totalSizeBytes, maxFiles, maxFileSizeBytes, maxTotalSizeBytes, allowedExtensions, onFilesChange]
  );

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processIncomingFiles(e.dataTransfer.files);
    }
  };

  // File removal
  const removeFile = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const target = files.find((f) => f.id === id);
    if (target?.previewUrl) {
      URL.revokeObjectURL(target.previewUrl);
    }
    const updated = files.filter((f) => f.id !== id);
    onFilesChange(updated);
    if (previewIndex !== null) {
      if (updated.length === 0) {
        closePreview();
      } else if (previewIndex >= updated.length) {
        setPreviewIndex(updated.length - 1);
      }
    }
  };

  // Clear all files
  const clearAllFiles = () => {
    files.forEach((f) => {
      if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
    });
    onFilesChange([]);
    closePreview();
  };

  // Preview Modal Controls
  const openPreview = (index: number) => {
    setPreviewIndex(index);
    setZoomLevel(1);
    setRotation(0);
  };

  const closePreview = () => {
    setPreviewIndex(null);
    setZoomLevel(1);
    setRotation(0);
    setIsFullscreen(false);
  };

  const prevPreview = () => {
    if (previewIndex === null || files.length === 0) return;
    setPreviewIndex((prev) => (prev! > 0 ? prev! - 1 : files.length - 1));
    setZoomLevel(1);
    setRotation(0);
  };

  const nextPreview = () => {
    if (previewIndex === null || files.length === 0) return;
    setPreviewIndex((prev) => (prev! < files.length - 1 ? prev! + 1 : 0));
    setZoomLevel(1);
    setRotation(0);
  };

  const zoomIn = () => setZoomLevel((z) => Math.min(3, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoomLevel((z) => Math.max(0.5, +(z - 0.25).toFixed(2)));
  const resetZoom = () => {
    setZoomLevel(1);
    setRotation(0);
  };
  const rotateClockwise = () => setRotation((r) => (r + 90) % 360);

  const toggleFullscreen = () => {
    if (!previewContainerRef.current) return;
    if (!document.fullscreenElement) {
      previewContainerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Formatting helpers
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const previewItem = previewIndex !== null && files[previewIndex] ? files[previewIndex] : null;

  return (
    <div className="space-y-4">
      {/* Label and Guidance */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          {label}
        </label>
        <p className="text-xs text-slate-500 mt-0.5">{sublabel}</p>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div
        id="advanced-doc-upload-container"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center transition-all ${
          isDragging
            ? "border-blue-500 bg-blue-50/80 shadow-md scale-[1.005]"
            : "border-slate-300 bg-slate-50/70 hover:bg-slate-50 hover:border-slate-400"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
            <UploadCloud className="w-6 h-6 animate-pulse" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-800">
              Drag & drop documents here, or choose an upload method:
            </p>
            <p className="text-xs text-slate-500">
              Select multiple individual files or an entire folder of credentials
            </p>
          </div>

          {/* Action Buttons: Multi-File and Folder Pickers */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Standard Multi-File Input */}
            <input
              ref={fileInputRef}
              id={`${idPrefix}-files`}
              type="file"
              multiple
              accept={allowedExtensions.join(",")}
              onChange={(e) => {
                if (e.target.files) processIncomingFiles(e.target.files);
                e.target.value = "";
              }}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Select Documents</span>
            </button>

            {/* Folder / Directory Input */}
            <input
              ref={folderInputRef}
              id={`${idPrefix}-folder`}
              type="file"
              multiple
              {...({ webkitdirectory: "" } as any)}
              onChange={(e) => {
                if (e.target.files) processIncomingFiles(e.target.files);
                e.target.value = "";
              }}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => folderInputRef.current?.click()}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center gap-2 active:scale-95"
            >
              <FolderUp className="w-3.5 h-3.5 text-blue-600" />
              <span>Select Folder</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400 font-mono pt-1">
            Accepted: {allowedExtensions.join(" ")}
          </div>
        </div>
      </div>

      {/* Warnings & Error Alerts */}
      {duplicateWarning && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-center gap-2 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{duplicateWarning}</span>
        </div>
      )}

      {generalError && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{generalError}</span>
        </div>
      )}

      {/* Attached Files List & Progress */}
      {files.length > 0 && (
        <div className="space-y-3 pt-2">
          {/* Header Summary */}
          <div className="flex items-center justify-between text-xs text-slate-600 px-1">
            <span className="font-bold text-slate-800">
              Attached Documents ({files.length} / {maxFiles}) • Total: {formatBytes(totalSizeBytes)}
            </span>
            <button
              type="button"
              onClick={clearAllFiles}
              className="text-rose-600 hover:text-rose-700 font-bold text-xs hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>

          {/* Overall Upload Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (files.length / maxFiles) * 100)}%` }}
            />
          </div>

          {/* File Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {files.map((item, idx) => {
              const isPdf = item.extension === ".pdf";
              const isImg = [".png", ".jpg", ".jpeg"].includes(item.extension);
              const isDoc = [".doc", ".docx"].includes(item.extension);

              return (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      {isPdf && <FileText className="w-5 h-5 text-rose-600" />}
                      {isImg && <FileImage className="w-5 h-5 text-blue-600" />}
                      {isDoc && <FileText className="w-5 h-5 text-blue-800" />}
                      {!isPdf && !isImg && !isDoc && <FileCheck2 className="w-5 h-5 text-emerald-600" />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-900 truncate" title={item.name}>
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <span>{formatBytes(item.size)}</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: In-Page Preview & Remove */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      id={`preview-btn-${idx}`}
                      onClick={() => openPreview(idx)}
                      title="Preview in page"
                      aria-label={`Preview ${item.name}`}
                      className="p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      id={`remove-file-btn-${idx}`}
                      onClick={(e) => removeFile(item.id, e)}
                      title="Remove file"
                      aria-label={`Remove ${item.name}`}
                      className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Secure In-Page Document Preview Modal */}
      {previewIndex !== null && previewItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Document Preview: ${previewItem.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6"
        >
          <div
            ref={previewContainerRef}
            className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold truncate max-w-md" title={previewItem.name}>
                    {previewItem.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {formatBytes(previewItem.size)} • Document {previewIndex + 1} of {files.length}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                id="close-preview-btn"
                aria-label="Close Preview"
                onClick={closePreview}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Close preview (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Preview Controls Toolbar */}
            <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  id="preview-prev-btn"
                  aria-label="Previous Document"
                  onClick={prevPreview}
                  disabled={files.length <= 1}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                  title="Previous Document"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="preview-next-btn"
                  aria-label="Next Document"
                  onClick={nextPreview}
                  disabled={files.length <= 1}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                  title="Next Document"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-slate-500 font-mono px-2">
                  {previewIndex + 1} / {files.length}
                </span>
              </div>

              {/* Zoom & Rotation Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  id="zoom-out-btn"
                  aria-label="Zoom Out"
                  onClick={zoomOut}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-700 px-1 min-w-[48px] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  id="zoom-in-btn"
                  aria-label="Zoom In"
                  onClick={zoomIn}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="rotate-btn"
                  aria-label="Rotate 90° Clockwise"
                  onClick={rotateClockwise}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                  title="Rotate 90° Clockwise"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="reset-zoom-btn"
                  aria-label="Reset Zoom"
                  onClick={resetZoom}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                  title="Reset Zoom & Orientation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hidden sm:inline-flex"
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => removeFile(previewItem.id)}
                  className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 flex items-center gap-1"
                  title="Remove from submission"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs font-semibold">Remove</span>
                </button>
              </div>
            </div>

            {/* In-Page Document Preview Viewer Canvas */}
            <div className="flex-1 overflow-auto bg-slate-900/5 p-4 sm:p-8 flex items-center justify-center min-h-[350px]">
              {/* PDF Preview */}
              {previewItem.extension === ".pdf" && previewItem.previewUrl && (
                <div
                  className="w-full h-[60vh] max-h-[600px] bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 origin-center"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  }}
                >
                  <object
                    data={`${previewItem.previewUrl}#toolbar=0&navpanes=0`}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className="p-8 text-center space-y-3">
                      <p className="text-sm text-slate-700 font-semibold">
                        PDF preview is supported in your browser.
                      </p>
                      <a
                        href={previewItem.previewUrl}
                        download={previewItem.name}
                        className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold inline-block"
                      >
                        Download PDF to Review
                      </a>
                    </div>
                  </object>
                </div>
              )}

              {/* Image Preview */}
              {[".png", ".jpg", ".jpeg"].includes(previewItem.extension) && previewItem.previewUrl && (
                <div className="max-w-full max-h-[60vh] overflow-hidden flex items-center justify-center">
                  <img
                    src={previewItem.previewUrl}
                    alt={`Preview of ${previewItem.name}`}
                    className="max-h-[55vh] max-w-full object-contain rounded-xl shadow-lg transition-transform duration-200 origin-center"
                    style={{
                      transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                    }}
                  />
                </div>
              )}

              {/* Plain Text Preview */}
              {previewItem.extension === ".txt" && (
                <div
                  className="w-full max-h-[60vh] bg-white rounded-xl p-5 border border-slate-200 shadow-md overflow-auto font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap transition-transform duration-200 origin-center"
                  style={{
                    transform: `scale(${zoomLevel})`,
                  }}
                >
                  {previewItem.textContent || "No text content available."}
                </div>
              )}

              {/* Word Documents (.doc, .docx) Safe Inspection Card */}
              {[".doc", ".docx"].includes(previewItem.extension) && (
                <div
                  className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg text-center space-y-4 transition-transform duration-200 origin-center"
                  style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center mx-auto border border-blue-200 shadow-xs">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-slate-900">{previewItem.name}</h5>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      Microsoft Word Document • {formatBytes(previewItem.size)}
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5 text-left">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Safe Document Container</span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Word files are safely validated client-side. Untrusted document macros are blocked from in-browser execution.
                    </p>
                  </div>

                  <p className="text-xs text-slate-500">
                    Your document is ready to be securely transmitted with your application.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Private local document preview (no public file exposure)</span>
              </span>
              <button
                type="button"
                onClick={closePreview}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
