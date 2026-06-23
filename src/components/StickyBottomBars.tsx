"use client";

import { PhoneIcon, ArrowRightIcon } from "./icons";
import { contact } from "@/lib/content";

export function StickyBottomBars() {
  const tel = `tel:${contact.phoneSales.replace(/\s/g, "")}`;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[400] px-3 pb-3">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        {/* Call */}
        <a
          href={tel}
          className="pointer-events-auto flex flex-1 items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-sm shadow-[0_4px_16px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
        >
          <PhoneIcon width={18} height={18} className="shrink-0 text-[var(--mw-amber)]" />
          <span className="font-semibold text-[var(--mw-ink)]">Zadzwoń</span>
          <span className="hidden text-[var(--mw-text)] sm:inline">{contact.phoneSales}</span>
        </a>
        {/* Quote */}
        <a
          href="#"
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-[var(--mw-yellow)] px-5 py-3 text-sm font-semibold text-[var(--mw-ink)] shadow-[0_4px_16px_rgba(0,0,0,0.14)] transition hover:bg-[var(--mw-yellow-hover)]"
        >
          <span>Zapytaj o wycenę</span>
          <ArrowRightIcon width={16} height={16} />
        </a>
      </div>
    </div>
  );
}
