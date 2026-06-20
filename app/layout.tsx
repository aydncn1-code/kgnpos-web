import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "./components/WhatsappButton";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kgnpos.com"),
  title: {
    default: "KGNPOS — Adisyon Programı & Restoran POS Sistemi | Kafe, Restoran, Fast Food",
    template: "%s | KGNPOS",
  },
  description:
    "KGNPOS ile restoran, kafe ve fast food işletmenizi kolayca yönetin. Bulut tabanlı adisyon programı, tablet POS, masa yönetimi, QR menü, paket servis ve e-fatura tek platformda. 14 gün ücretsiz deneyin.",
  keywords: [
    "adisyon programı",
    "adisyon sistemi",
    "restoran POS sistemi",
    "kafe POS sistemi",
    "tablet POS",
    "bulut tabanlı POS",
    "masa yönetimi",
    "QR menü",
    "paket servis yönetimi",
    "sipariş takip programı",
    "restoran adisyon sistemi",
    "kafe adisyon programı",
    "restoran yönetim sistemi",
    "online adisyon",
    "dokunmatik POS",
    "e-fatura entegrasyonu",
    "yazar kasa yazılımı",
    "fast food POS sistemi",
    "kafe yönetim sistemi",
    "KGNPOS",
  ],
  authors: [{ name: "KGNPOS", url: "https://kgnpos.com" }],
  creator: "KGNPOS",
  publisher: "KGNPOS",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://kgnpos.com",
  },
  verification: {
    google: "9E32BfI75ho4dn-dHsJHEB24mhFuViRGYuzVXMN0H_o",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kgnpos.com",
    siteName: "KGNPOS",
    title: "KGNPOS — Restoran ve Kafe POS Sistemi",
    description:
      "Restoran, kafe ve fast food işletmeleri için bulut tabanlı adisyon programı ve tablet POS. Masa yönetimi, QR menü, paket servis ve e-fatura tek platformda.",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "KGNPOS Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "KGNPOS — Restoran ve Kafe POS Sistemi",
    description:
      "Restoran, kafe ve işletmeler için bulut tabanlı POS yazılımı. 7/24 destek, kolay kurulum.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsappButton />
        <CookieBanner />
      </body>
    </html>
  );
}
