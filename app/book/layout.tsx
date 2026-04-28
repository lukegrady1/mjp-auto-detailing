import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Book a Mobile Auto Detail | MJP Auto Detailing | Northborough, MA" },
  description:
    "Book your mobile auto detail with MJP Auto Detailing online. Choose a service, tell us about your vehicle, and we come to you in Northborough, Worcester, and Central Massachusetts.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book a Mobile Auto Detail | MJP Auto Detailing",
    description:
      "Schedule your mobile auto detail in Northborough, Worcester, and Central Massachusetts. We bring everything we need — just tell us where and when.",
    url: "/book",
    type: "website",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
