import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "About Apexnova Logistics — 12+ Years of Domestic & International Expertise",
  },
  description:
    "Meet Apexnova Logistics — a growing company built on 12+ years of domestic and international logistics expertise, serving manufacturing, FMCG, retail, e-commerce & more across India.",
  keywords: [
    "About Apexnova Logistics",
    "domestic and international logistics",
    "12 years logistics experience",
    "FTL PTL provider India",
    "freight forwarding India",
    "supply chain India",
    "pan India transport company",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Apexnova Logistics — 12+ Years of Domestic & International Expertise",
    description:
      "Vision, mission, core values, services, industries, fleet & process — built on 12+ years of domestic and international logistics expertise across India.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "About Apexnova Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexnova0",
    creator: "@apexnova0",
    title: "About Apexnova Logistics",
    description:
      "Reliable, transparent and customer-focused logistics across NCR & PAN India.",
    images: ["/images/hero-truck.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "About", item: SITE_URL + "/about" },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
