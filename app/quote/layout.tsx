import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Get a Free Logistics Quote in 2 Hours | Apexnova Logistics",
  },
  description:
    "Request a custom freight quote from Apexnova Logistics — FTL, PTL, NCR local & pan-India transport. Transparent pricing, response within 2 hours.",
  keywords: [
    "free logistics quote",
    "freight quote India",
    "FTL quote",
    "PTL quote",
    "Apexnova quote",
    "NCR shipping quote",
  ],
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Free Quote — Apexnova Logistics",
    description:
      "Free shipping quote within 2 hours. FTL, PTL, NCR local, corporate logistics & on-demand.",
    url: "/quote",
    type: "website",
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Get a Free Logistics Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexnova0",
    creator: "@apexnova0",
    title: "Get a Free Logistics Quote — Apexnova",
    description: "Transparent pricing, response within 2 hours.",
    images: ["/images/hero-truck.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Get a Quote", item: SITE_URL + "/quote" },
  ],
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
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
