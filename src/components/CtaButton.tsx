import type { Cta } from "@/types";

const variantClass: Record<Cta["variant"], string> = {
  primary: "tcl-btn tcl-btn-primary",
  light: "tcl-btn tcl-btn-light",
  dark: "tcl-btn tcl-btn-dark",
  text: "tcl-btn tcl-btn-text",
};

export function CtaButton({
  cta,
  fullWidthMobile = true,
}: {
  cta: Cta;
  fullWidthMobile?: boolean;
}) {
  const isText = cta.variant === "text";
  const cls =
    variantClass[cta.variant] +
    (fullWidthMobile && !isText ? " w-full sm:w-auto" : "");
  return (
    <a href={cta.href} className={cls}>
      {cta.label}
    </a>
  );
}
