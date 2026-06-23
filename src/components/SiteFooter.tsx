import { footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="w-full bg-white py-6 text-[#5c5e62]">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 text-xs">
        <li className="font-medium text-[#393c41]">Clone &copy; 2026</li>
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-[#171a20] hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
