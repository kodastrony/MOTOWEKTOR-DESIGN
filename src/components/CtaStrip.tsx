import { ctaStripLinks } from "@/lib/content";

export function CtaStrip() {
  return (
    <section className="w-full px-2 py-2 sm:px-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {ctaStripLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex min-h-[72px] items-center justify-center rounded-[4px] px-4 text-center text-sm font-medium text-[var(--mw-ink)] transition hover:bg-[var(--mw-panel)]"
            style={{ background: "var(--tsla-panel)" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
