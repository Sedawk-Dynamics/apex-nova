import type { Metadata } from "next";
import { SITE_URL, LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Logistics Services — FTL, PTL, NCR Local & Corporate | Apexnova Logistics",
  },
  description:
    "Explore Apexnova's freight services: Full Truck Load, Part Load, NCR local delivery, corporate logistics & on-demand urgent transport across India.",
  keywords: [
    "FTL services India",
    "PTL services India",
    "Part Load transportation",
    "NCR local logistics",
    "corporate logistics India",
    "on-demand transport India",
    "supply chain partner India",
    "freight forwarding India",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Apexnova Logistics — Services",
    description:
      "FTL, PTL, NCR local, corporate logistics & on-demand transport built for ambitious Indian businesses.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Apexnova Logistics services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexnova0",
    creator: "@apexnova0",
    title: "Apexnova Logistics — Services",
    description: "FTL, PTL, NCR local & corporate logistics across India.",
    images: ["/images/hero-truck.jpg"],
  },
};

const provider = { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: LEGAL_NAME };
const areaServed = [
  { "@type": "Country", name: "India" },
  { "@type": "AdministrativeArea", name: "NCR" },
];

const services = [
  {
    name: "Full Truck Load (FTL) Services",
    serviceType: "Freight Transportation",
    description:
      "Dedicated full-truck transportation for bulk shipments — faster transit, point-to-point delivery, and cost-efficient handling for large-volume cargo.",
    url: `${SITE_URL}/services#ftl`,
  },
  {
    name: "Part Truck Load (PTL) Services",
    serviceType: "Freight Transportation",
    description:
      "Cost-effective shared-truck transport for smaller shipments — flexible space allocation and consolidated routing across India.",
    url: `${SITE_URL}/services#ptl`,
  },
  {
    name: "NCR Local Logistics",
    serviceType: "Local Delivery",
    description:
      "Same-day and scheduled local deliveries across Delhi, Noida, Greater Noida, Gurgaon and surrounding NCR with optimized routes.",
    url: `${SITE_URL}/services#ncr-local`,
  },
  {
    name: "Corporate Logistics",
    serviceType: "B2B Logistics",
    description:
      "Customized supply-chain logistics for enterprise clients — dedicated account management, scheduled dispatches, and SLA-backed delivery.",
    url: `${SITE_URL}/services#corporate`,
  },
  {
    name: "On-Demand Transportation",
    serviceType: "Urgent Freight",
    description:
      "Quick-response urgent freight movement with rapid vehicle placement for time-critical shipments across India.",
    url: `${SITE_URL}/services#on-demand`,
  },
];

const serviceSchemas = services.map((svc) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: svc.name,
  serviceType: svc.serviceType,
  description: svc.description,
  url: svc.url,
  provider,
  areaServed,
  brand: { "@type": "Brand", name: SITE_NAME },
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
  ],
};

// FAQPage schema — these Q&As also render on the page (see Services FAQ section)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of cargo do you handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We move freight for FMCG, manufacturing, electronics, e-commerce, retail, automobile, packaging, industrial machinery, and general trade — supported by a fleet ranging from LCVs and pickup trucks to 32 ft and 40 ft containers and trailers.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get a quote and dispatch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit our quote form or call +91 9560639966 — our team responds with the best rate within 2 hours. Same-day vehicle placement is available for NCR local and on-demand routes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide shipment tracking and proof of delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide continuous shipment coordination, transit updates, and POD (Proof of Delivery) documentation after every successful delivery, with GST-compliant invoicing.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you cover across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are headquartered in NCR (Greater Noida West) and operate pan-India with active routes across all four regions — North, West, South, and East — covering 25+ cities and 500+ routes.",
      },
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <script
          key={`service-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
