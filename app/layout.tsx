import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit, Azeret_Mono } from "next/font/google";
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
  title: "MJP Auto Detailing | West Boylston, MA",
  description:
    "Professional mobile auto detailing in West Boylston, Worcester, and surrounding Massachusetts communities. Book online today.",
  keywords: [
    "auto detailing",
    "West Boylston",
    "Worcester MA",
    "mobile detailing",
    "ceramic coating",
    "car detail near me",
  ],
  openGraph: {
    title: "MJP Auto Detailing",
    description: "Premium auto detailing serving West Boylston and Central MA.",
    url: "https://mjpautodetailing.com",
    siteName: "MJP Auto Detailing",
    locale: "en_US",
    type: "website",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
