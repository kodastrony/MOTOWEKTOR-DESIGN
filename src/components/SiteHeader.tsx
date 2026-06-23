"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/types";
import { navItems } from "@/lib/content";
import {
  LogoWordmark,
  HelpIcon,
  GlobeIcon,
  AccountIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || open !== null;

  return (
    <header
      className="sticky top-0 z-[500] w-full"
      onMouseLeave={() => setOpen(null)}
    >
      <div
        className="relative flex items-center justify-between px-4 transition-colors duration-200 sm:px-6"
        style={{
          height: "var(--tsla-header-h)",
          background: solid ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: solid ? "blur(6px)" : "none",
        }}
      >
        {/* Wordmark */}
        <a href="#" className="flex items-center text-[#171a20]" aria-label="Home">
          <LogoWordmark />
        </a>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.panel ? item.label : null)}>
              <button
                type="button"
                className="tcl-nav-item"
                onClick={() => setOpen((o) => (o === item.label ? null : item.panel ? item.label : null))}
              >
                {item.label}
              </button>
            </div>
          ))}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-1">
          <button type="button" className="tcl-nav-icon hidden sm:inline-flex" aria-label="Help">
            <HelpIcon width={20} height={20} />
          </button>
          <button type="button" className="tcl-nav-icon hidden sm:inline-flex" aria-label="Language and region">
            <GlobeIcon width={20} height={20} />
          </button>
          <button type="button" className="tcl-nav-icon hidden sm:inline-flex" aria-label="Account">
            <AccountIcon width={20} height={20} />
          </button>
          <button
            type="button"
            className="tcl-nav-item lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon width={22} height={22} />
          </button>
        </div>
      </div>

      {/* Desktop dropdown panel */}
      <DesktopDropdown
        item={navItems.find((n) => n.label === open) || null}
        onClose={() => setOpen(null)}
      />

      {/* Mobile menu */}
      {mobileOpen && (
        <MobileMenu items={navItems} onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

function DesktopDropdown({
  item,
  onClose,
}: {
  item: NavItem | null;
  onClose: () => void;
}) {
  if (!item || !item.panel) return null;
  return (
    <div
      className="absolute left-0 top-full hidden w-full border-t border-black/5 bg-white/97 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur lg:block"
      onMouseLeave={onClose}
    >
      <div className="mx-auto flex max-w-5xl gap-16 px-8 py-9">
        {item.panel.map((group, i) => (
          <div key={i}>
            {group.heading && (
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#5c5e62]">
                {group.heading}
              </p>
            )}
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-[#171a20] hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[600] flex flex-col bg-white lg:hidden">
      <div
        className="flex items-center justify-between px-4"
        style={{ height: "var(--tsla-header-h)" }}
      >
        <LogoWordmark className="text-[#171a20]" />
        <button type="button" className="tcl-nav-icon" aria-label="Close" onClick={onClose}>
          <CloseIcon width={22} height={22} />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-2">
        {items.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={onClose}
            className="block rounded-[4px] px-3 py-3 text-[15px] font-medium text-[#171a20] hover:bg-[#f4f4f4]"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-4 border-t border-black/5 pt-4">
          {["Account", "Find Us", "Support"].map((l) => (
            <a
              key={l}
              href="#"
              onClick={onClose}
              className="block rounded-[4px] px-3 py-3 text-[15px] text-[#393c41] hover:bg-[#f4f4f4]"
            >
              {l}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
