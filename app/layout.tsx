import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.seoTitle,
  description: site.seoDescription,
  keywords: [
    "crédito puente construcción",
    "equity raising inmobiliario",
    "levantamiento de capital vivienda",
    "estructuración financiera inmobiliaria",
    "asesoría desarrolladores inmobiliarios",
    "financiamiento de proyectos de vivienda",
  ],
  authors: [{ name: site.advisorName }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.domain,
    title: site.seoTitle,
    description: site.seoDescription,
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
