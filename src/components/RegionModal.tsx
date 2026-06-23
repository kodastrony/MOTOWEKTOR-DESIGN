"use client";

import { useState } from "react";
import { CloseIcon } from "./icons";

export function RegionModal() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed right-3 top-[64px] z-[450] w-[360px] max-w-[calc(100vw-24px)] rounded-[6px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute right-3 top-3 text-[var(--mw-grey)] transition hover:text-[var(--mw-ink)]"
      >
        <CloseIcon width={18} height={18} />
      </button>
      <h3 className="pr-6 text-[17px] font-medium text-[var(--mw-ink)]">
        Confirm your location
      </h3>
      <p className="mt-1 text-sm text-[var(--mw-text)]">
        Choose a region to see content tailored to your location.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 rounded-[4px] bg-[var(--mw-text)] py-2 text-sm font-medium text-white transition hover:bg-[#26282c]"
        >
          Region A
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 rounded-[4px] border border-[#d0d1d3] bg-white py-2 text-sm font-medium text-[var(--mw-ink)] transition hover:bg-[#f4f4f4]"
        >
          Region B
        </button>
      </div>
    </div>
  );
}
