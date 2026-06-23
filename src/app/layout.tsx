import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MotoWektor — Sprawdzone zabudowy samochodów dostawczych",
  description:
    "Producent profesjonalnych zabudów do samochodów dostawczych od 2008 roku — kontenery, chłodnie i izotermy, skrzynie, TwinCab, furgony serwisowe. Bielsko-Biała.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
