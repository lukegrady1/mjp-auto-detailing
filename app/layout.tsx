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
  metadataBase: new URL("https://mjpautodetailing.com"),
  title: {
    default: "MJP Auto Detailing | Mobile Auto Detailing in Northborough, MA",
    template: "%s | MJP Auto Detailing",
  },
  description:
    "Professional mobile auto detailing in Northborough, Worcester, and Central Massachusetts. Interior, exterior, paint correction, and headlight restoration. Fully insured and IDA certified — we come to you. Book online today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MJP Auto Detailing | Mobile Auto Detailing in Central MA",
    description:
      "Professional mobile auto detailing serving Northborough, Worcester, and all of Central Massachusetts. Exterior and interior detailing, paint correction, and headlight restoration. Fully insured and IDA certified — we come to you.",
    url: "/",
    siteName: "MJP Auto Detailing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "MJP Auto Detailing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MJP Auto Detailing | Mobile Auto Detailing in Central MA",
    description:
      "Professional mobile auto detailing serving Northborough, Worcester, and Central Massachusetts. Fully insured and IDA certified — we come to you.",
    images: ["/logo.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mjpautodetailing.com/#business",
  name: "MJP Auto Detailing",
  description:
    "Mobile auto detailing service based in Northborough, MA serving Worcester County and Central Massachusetts. Interior detailing, exterior detailing, paint correction, and headlight restoration.",
  url: "https://mjpautodetailing.com",
  logo: "https://mjpautodetailing.com/logo.webp",
  image: "https://mjpautodetailing.com/logo.webp",
  telephone: "+1-774-287-0447",
  email: "info@mjpautodetailing.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Weber Ln",
    addressLocality: "Northborough",
    addressRegion: "MA",
    postalCode: "01532",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3186,
    longitude: -71.6411,
  },
  areaServed: [
    "Northborough, MA",
    "Worcester, MA",
    "Holden, MA",
    "Sterling, MA",
    "Boylston, MA",
    "West Boylston, MA",
    "Shrewsbury, MA",
    "Westborough, MA",
    "Rutland, MA",
    "Paxton, MA",
    "Princeton, MA",
    "Worcester County, MA",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 42.3186,
      longitude: -71.6411,
    },
    geoRadius: 40000,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
      description: "By appointment",
    },
  ],
  sameAs: [
    "https://www.instagram.com/mjpdetails/",
    "https://www.facebook.com/mattypautodetail",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Detailing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Auto Detailing",
          url: "https://mjpautodetailing.com/services/exterior-detail",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Auto Detailing",
          url: "https://mjpautodetailing.com/services/interior-detail",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Auto Detailing",
          url: "https://mjpautodetailing.com/services/full-detail",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paint Correction",
          url: "https://mjpautodetailing.com/services/paint-correction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Headlight Restoration",
          url: "https://mjpautodetailing.com/services/headlight-restoration",
        },
      },
    ],
  },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ETRKJ4EFNZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ETRKJ4EFNZ');
            `,
          }}
        />
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
