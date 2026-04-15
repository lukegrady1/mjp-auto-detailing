import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit, Azeret_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MJP Auto Detailing | Mobile Detailing | West Boylston",
  description:
    "Professional mobile auto detailing in West Boylston, Worcester, and Central MA. Interior, exterior, paint correction, and more. Fully insured. Book today.",
  keywords: [
    "auto detailing",
    "West Boylston",
    "Worcester MA",
    "mobile detailing",
    "car detail near me",
    "interior detail",
    "exterior detail",
    "paint correction",
    "headlight restoration",
    "Central Massachusetts",
  ],
  openGraph: {
    title: "MJP Auto Detailing | Professional Mobile Auto Detailing in Central MA",
    description: "Professional mobile auto detailing serving West Boylston, Worcester, and all of Central Massachusetts. Exterior and interior detailing, paint correction, headlight restoration, and more. Fully insured and IDA certified — we come to you. Book online today.",
    url: "https://mjpautodetailing.com",
    siteName: "MJP Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mjpautodetailing.com/logo.webp",
        width: 512,
        height: 512,
        alt: "MJP Auto Detailing Logo",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "MJP Auto Detailing",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Boylston",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: ["West Boylston", "Worcester", "Holden", "Sterling", "Boylston"],
  priceRange: "$$",
  telephone: "TBD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${outfit.variable} ${azeretMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
