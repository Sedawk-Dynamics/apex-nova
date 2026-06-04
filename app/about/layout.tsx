import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "About Apexnova Logistics — NCR-Based Pan-India Freight Partner",
  },
  description:
    "Meet Apexnova Logistics — NCR-based, technology-driven freight partner serving FMCG, manufacturing, retail & e-commerce with verified fleet across India.",
  keywords: [
    "About Apexnova Logistics",
    "logistics company NCR",
    "Greater Noida logistics",
    "FTL PTL provider India",
    "vehicle placement",
    "supply chain India",
    "container trailer fleet",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Apexnova Logistics — NCR-Based Pan-India Freight Partner",
    description:
      "Vision, mission, core values, services, industries, fleet & process — meet your trusted NCR-based logistics partner serving PAN India.",
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
