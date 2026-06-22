import type { Metadata } from "next";
import { SITE_URL, LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Logistics Services — FTL, PTL, Express Cargo & Pan India | Apexnova Logistics",
  },
  description:
    "Explore Apexnova's services: Full Truck Load, Part Truck Load, Express Cargo, Pan India transportation, supply chain support & customized logistics — built on 12+ years of domestic and international expertise.",
  keywords: [
    "FTL services India",
    "PTL services India",
    "Part Truck Load transportation",
    "Express Cargo services",
    "Pan India transportation",
    "supply chain support India",
    "customized logistics solutions",
    "domestic and international logistics",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Apexnova Logistics — Services",
    description:
      "FTL, PTL, Express Cargo, Pan India transportation, supply chain support & customized logistics for Indian businesses.",
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
    description: "FTL, PTL, Express Cargo, Pan India transportation & supply chain support.",
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
    url: `${SITE_URL}/services#service-01`,
  },
  {
    name: "Part Truck Load (PTL) Services",
    serviceType: "Freight Transportation",
    description:
      "Cost-effective shared-truck transport for smaller shipments — flexible space allocation and consolidated routing across India.",
    url: `${SITE_URL}/services#service-02`,
  },
  {
    name: "Express Cargo Services",
    serviceType: "Express Freight",
    description:
      "Priority movement for time-critical shipments with quick response and efficient execution across India.",
    url: `${SITE_URL}/services#service-03`,
  },
  {
    name: "Pan India Transportation",
    serviceType: "Freight Transportation",
    description:
      "Reliable nationwide transportation with optimized routing and dependable transit across all four regions of India.",
    url: `${SITE_URL}/services#service-04`,
  },
  {
    name: "Customized Logistics & Supply Chain Support",
    serviceType: "Logistics & Supply Chain",
    description:
      "Tailored logistics solutions with professional vendor management and dependable supply chain coordination, built around each business's needs.",
    url: `${SITE_URL}/services#service-05`,
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
        text: "We move freight for manufacturing, FMCG, retail, e-commerce, textile, electronics, automotive, engineering, consumer goods, and import & export businesses — supported by a fleet ranging from LCVs and pickup trucks to 32 ft and 40 ft containers and trailers.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get a quote and dispatch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit our quote form or call +91 9560639966 — our team responds promptly with the best rate for your shipment. Quick vehicle placement is available for express and on-demand requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide shipment coordination and proof of delivery?",
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
        text: "We are based in Noida (NCR) and operate pan-India with a growing network across all four regions — North, West, South, and East — which we continue to expand.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support international logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our foundation is built on 12+ years of domestic and international logistics expertise. We are actively developing future capabilities in international freight forwarding, air and sea freight, and import & export logistics support.",
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
