"use client";

import { ChatIcon, WheelIcon, ArrowUpIcon } from "./icons";

export function StickyBottomBars() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[400] px-3 pb-3">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        {/* Ask a question pill */}
        <div className="pointer-events-auto flex flex-1 items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur">
          <ChatIcon width={18} height={18} className="shrink-0 text-[#393c41]" />
          <span className="flex-1 truncate text-sm text-[#393c41]">
            Ask a Question{" "}
            <span className="hidden text-[#9a9da1] sm:inline">
              &ldquo;What&rsquo;s the range?&rdquo;
            </span>
          </span>
          <button
            type="button"
            aria-label="Send"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e6e7e9] text-[#5c5e62] transition hover:bg-[#d8d9db]"
          >
            <ArrowUpIcon width={14} height={14} />
          </button>
        </div>
        {/* Schedule a drive */}
        <button
          type="button"
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-medium text-[#171a20] shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition hover:bg-white"
        >
          <WheelIcon width={18} height={18} className="text-[#3e6ae1]" />
          <span className="hidden sm:inline">Schedule a Drive Today</span>
          <span className="sm:hidden">Drive</span>
        </button>
      </div>
    </div>
  );
}
