"use client";
import React, { useMemo, useState } from "react";

export default function PilotDocModal({ open, onClose, docUrl }) {
  const [loading, setLoading] = useState(true);

  // Build Google Docs links if possible (fallbacks if not a GDoc URL)
  const { openUrl, pdfUrl } = useMemo(() => {
    try {
      const u = new URL(docUrl);
      const isGDoc =
        u.hostname.includes("docs.google.com") &&
        u.pathname.includes("/document/d/");
      if (isGDoc) {
        const parts = u.pathname.split("/");
        const idIndex = parts.findIndex((p) => p === "d") + 1;
        const docId = parts[idIndex] || "";
        return {
          openUrl: `https://docs.google.com/document/d/${docId}/edit`,
          pdfUrl: `https://docs.google.com/document/d/${docId}/export?format=pdf`,
        };
      }
      // Non-GDoc fallback: just return the same URL and no PDF
      return { openUrl: docUrl, pdfUrl: null };
    } catch {
      return { openUrl: docUrl, pdfUrl: null };
    }
  }, [docUrl]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="m-0 text-lg font-semibold">Pilot Brief</h3>
          <div className="flex items-center gap-3">
            <a
              href={openUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
              title="Open in new tab">
              Open in new tab
            </a>
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline"
                title="Download as PDF">
                Download PDF
              </a>
            )}
            <button
              aria-label="Close"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900">
              ×
            </button>
          </div>
        </div>

        <div className="relative w-full" style={{ height: "70vh" }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />
                <span className="text-sm text-gray-700">Loading document…</span>
              </div>
            </div>
          )}
          <iframe
            title="Pilot Brief"
            src={docUrl}
            className="w-full h-full"
            style={{ border: 0 }}
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
