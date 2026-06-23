"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/types";
import { navItems, contact } from "@/lib/content";
import { LogoWordmark, MenuIcon, CloseIcon, PhoneIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tel = `tel:${contact.phoneSales.replace(/\s/g, "")}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || open !== null;

  return (
    <header className="sticky top-0 z-[500] w-full" onMouseLeave={() => setOpen(null)}>
      <div
        className="relative flex items-center justify-between px-4 transition-colors duration-200 sm:px-6"
        style={{
          height: "var(--mw-header-h)",
          background: solid ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.82)",
          backdropFilter: "blur(8px)",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        {/* Wordmark */}
        <a href="#" className="flex items-center" aria-label="MotoWektor — strona główna">
          <LogoWordmark />
        </a>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.panel ? item.label : null)}>
              <button
                type="button"
                className="tcl-nav-item"
                onClick={() =>
                  setOpen((o) => (o === item.label ? null : item.panel ? item.label : null))
                }
              >
                {item.label}
              </button>
            </div>
          ))}
        </nav>

        {/* Right: phone CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <a
            href={tel}
            className="hidden items-center gap-2 rounded-full bg-[var(--mw-yellow)] px-4 py-2 text-sm font-semibold text-[var(--mw-ink)] transition hover:bg-[var(--mw-yellow-hover)] lg:inline-flex"
          >
            <PhoneIcon width={16} height={16} />
            {contact.phoneSales}
          </a>
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

      {/* Desktop dropdown panel (text menus, e.g. Dla dealerów) */}
      <DesktopDropdown
        item={navItems.find((n) => n.label === open) || null}
        onClose={() => setOpen(null)}
      />

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu items={navItems} tel={tel} onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function DesktopDropdown({ item, onClose }: { item: NavItem | null; onClose: () => void }) {
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--mw-grey)]">
                {group.heading}
              </p>
            )}
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[15px] text-[var(--mw-ink)] hover:underline">
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
  tel,
  onClose,
}: {
  items: NavItem[];
  tel: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[600] flex flex-col bg-white lg:hidden">
      <div
        className="flex items-center justify-between px-4"
        style={{ height: "var(--mw-header-h)" }}
      >
        <LogoWordmark />
        <button type="button" className="tcl-nav-icon" aria-label="Zamknij" onClick={onClose}>
          <CloseIcon width={22} height={22} />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-2">
        {items.map((item) => (
          <a
            key={item.label}
            href="#"
            onClick={onClose}
            className="block rounded-[4px] px-3 py-3 text-[16px] font-medium text-[var(--mw-ink)] hover:bg-[var(--mw-panel)]"
          >
            {item.label}
          </a>
        ))}
        <a
          href={tel}
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[var(--mw-yellow)] px-4 py-3 text-sm font-semibold text-[var(--mw-ink)]"
        >
          <PhoneIcon width={18} height={18} />
          Zadzwoń teraz
        </a>
      </nav>
    </div>
  );
}
