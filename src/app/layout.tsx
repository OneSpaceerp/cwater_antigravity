import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { RFQProvider } from "@/context/RFQContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConversionBar } from "@/components/layout/ConversionBar";
import { getAssetUrl } from "@/lib/basePath";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "C-Water | Industrial Water Treatment & Engineering Solutions Egypt",
    template: "%s | C-Water Engineering",
  },
  description:
    "C-Water is Egypt's leading integrated water-treatment engineering partner. Advanced chemistry, automatic filtration, dosing, sensing, and SCADA monitoring in partnership with Walchem, TIMEX, and Kurita Europe.",
  keywords: [
    "Water Treatment Egypt",
    "Cooling Tower Treatment",
    "Boiler Water Chemicals",
    "Walchem Egypt",
    "TIMEX Filtration",
    "Kurita Europe Egypt",
    "Reverse Osmosis Antiscalant",
    "Industrial Water Engineering Cairo",
    "Automatic Self Cleaning Filter",
    "Cetamine Kurita",
  ],
  authors: [{ name: "C-Water Engineering Team" }],
  creator: "C-Water",
  publisher: "C-Water Egypt",
  metadataBase: new URL("https://cw-eg.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: "https://cw-eg.com",
    title: "C-Water | Water Treatment, Engineered Around Your Operation",
    description:
      "Advanced chemistry, filtration, monitoring and control combined with local Egyptian engineering expertise.",
    siteName: "C-Water",
    images: [
      {
        url: getAssetUrl("/images/logo.png"),
        width: 300,
        height: 124,
        alt: "C-Water Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C-Water | Water Treatment, Engineered Around Your Operation",
    description:
      "Advanced chemistry, filtration, monitoring and control combined with local engineering expertise.",
    images: [getAssetUrl("/images/logo.png")],
  },
  icons: {
    icon: [
      { url: getAssetUrl("/favicon.png"), type: "image/png" },
      { url: getAssetUrl("/favicon.ico") },
    ],
    shortcut: getAssetUrl("/favicon.png"),
    apple: getAssetUrl("/favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${outfit.variable} ${cairo.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-cwater-blue selection:text-white">
        <LanguageProvider>
          <RFQProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ConversionBar />
          </RFQProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
