import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.seoTitle,
    template: `%s · ${site.brand}`,
  },
  description: site.seoDescription,
  keywords: [
    "asesoría de capital inmobiliario",
    "crédito puente construcción",
    "equity inmobiliario vivienda",
    "estructuración financiera inmobiliaria",
    "levantamiento de capital vivienda",
    "deuda mezzanine inmobiliaria",
  ],
  authors: [{ name: site.brand }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.domain,
    title: site.seoTitle,
    description: site.seoDescription,
    siteName: site.brand,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
