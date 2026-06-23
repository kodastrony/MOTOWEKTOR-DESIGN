import Image from "next/image";
import { footerColumns, contact } from "@/lib/content";

export function SiteFooter() {
  const telHref = `tel:${contact.phoneSales.replace(/\s/g, "")}`;
  return (
    <footer className="w-full border-t border-[var(--mw-line)] bg-[var(--mw-panel)] text-[var(--mw-text)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* brand + contact */}
        <div>
          <Image
            src="/images/motowektor/logo.png"
            alt="MotoWektor"
            width={199}
            height={26}
            style={{ height: 26, width: "auto" }}
          />
          <p className="mt-4 text-sm leading-relaxed">
            {contact.company}
            <br />
            {contact.address}
          </p>
          <p className="mt-3 text-sm">
            <a
              href={telHref}
              className="font-semibold text-[var(--mw-ink)] transition hover:text-[var(--mw-amber)]"
            >
              {contact.phoneSales}
            </a>
            <br />
            <a href={`mailto:${contact.email}`} className="hover:underline">
              {contact.email}
            </a>
          </p>
          <p className="mt-3 text-xs text-[var(--mw-grey)]">
            {contact.hoursSales}
            <br />
            {contact.hoursService}
          </p>
        </div>

        {/* link columns */}
        {footerColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--mw-grey)]">
              {col.heading}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-[var(--mw-ink)] hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-[var(--mw-line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-[var(--mw-grey)] sm:flex-row">
          <span>© 2026 Moto Wektor Sp. z o.o. · NIP 553-242-04-03 · REGON 240936974</span>
          <span className="flex gap-4">
            <a href="#" className="transition hover:text-[var(--mw-ink)]">Facebook</a>
            <a href="#" className="transition hover:text-[var(--mw-ink)]">YouTube</a>
            <a href="#" className="transition hover:text-[var(--mw-ink)]">Instagram</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
