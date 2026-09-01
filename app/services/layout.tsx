import type { Metadata } from "next";
import { SITE_URL, LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Domestic & International Logistics Services | Freight Forwarding Company",
  },
  description:
    "ApexNova Logistics provides domestic and international logistics services, including freight forwarding, air and sea freight, transportation and import-export support from Noida across India and global markets.",
  keywords: [
    "FTL services India",
    "PTL services India",
    "Part Truck Load transportation",
    "Express Cargo services",
    "Pan India transportation",
    "supply chain support India",
    "customized logistics solutions",
    "domestic and international logistics",
    "freight forwarding company Noida",
    "international freight forwarding India",
    "air freight forwarding Noida",
    "sea freight forwarding India",
    "import export logistics Noida",
    "customs coordination India",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Domestic & International Logistics Services | Freight Forwarding Company",
    description:
      "ApexNova Logistics provides domestic and international logistics services, including freight forwarding, air and sea freight, transportation and import-export support from Noida across India and global markets.",
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
    title: "Domestic & International Logistics Services | Freight Forwarding Company",
    description:
      "ApexNova Logistics provides domestic and international logistics services, including freight forwarding, air and sea freight, transportation and import-export support from Noida across India and global markets.",
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
      "Dedicated full truck load transportation providing direct movement from the pickup point to the delivery location, suitable for full loads and high-volume business shipments.",
    url: `${SITE_URL}/services#service-01`,
  },
  {
    name: "Part Truck Load (PTL) Services",
    serviceType: "Freight Transportation",
    description:
      "Part load transportation for smaller consignments that do not require an entire truck, letting businesses use only the vehicle space their shipment needs.",
    url: `${SITE_URL}/services#service-02`,
  },
  {
    name: "Express Cargo Services",
    serviceType: "Express Freight",
    description:
      "Priority transportation for shipments that need to move within a shorter timeframe, planned around the shipment, route and required delivery timeline.",
    url: `${SITE_URL}/services#service-03`,
  },
  {
    name: "Pan-India Transportation",
    serviceType: "Freight Transportation",
    description:
      "Transportation coordinated between Noida, Delhi NCR and major commercial and industrial locations across North, South, East and West India.",
    url: `${SITE_URL}/services#service-04`,
  },
  {
    name: "International Freight Forwarding",
    serviceType: "Freight Forwarding",
    description:
      "International freight forwarding from Noida, coordinating commercial shipments between India and international destinations with the relevant transportation and logistics partners.",
    url: `${SITE_URL}/services#international-freight`,
  },
  {
    name: "Air Freight Forwarding",
    serviceType: "Air Freight",
    description:
      "Air freight support for international shipments, based on the cargo, destination and required transit time.",
    url: `${SITE_URL}/services#international-freight`,
  },
  {
    name: "Sea Freight Forwarding",
    serviceType: "Ocean Freight",
    description:
      "Sea freight services moving commercial cargo between India and international markets, suitable for larger shipments where transit time and cargo requirements allow.",
    url: `${SITE_URL}/services#international-freight`,
  },
  {
    name: "Import & Export Logistics",
    serviceType: "Import Export Logistics",
    description:
      "Logistics coordination across the different stages of moving commercial goods between India and international destinations for businesses involved in international trade.",
    url: `${SITE_URL}/services#international-freight`,
  },
  {
    name: "Customs Coordination",
    serviceType: "Customs Coordination",
    description:
      "Coordination with the relevant parties to support the logistics process around customs requirements on international shipments.",
    url: `${SITE_URL}/services#international-freight`,
  },
  {
    name: "Supply Chain Management",
    serviceType: "Supply Chain Management",
    description:
      "Coordination of goods moving between different points in a supply chain, including suppliers, manufacturers, warehouses, distributors and other business locations.",
    url: `${SITE_URL}/services#supply-chain`,
  },
  {
    name: "Vendor Management",
    serviceType: "Vendor Management",
    description:
      "Coordination with fleet and transport vendors for vehicle availability, shipment movement and updates where a shipment involves more than one transportation partner.",
    url: `${SITE_URL}/services#supply-chain`,
  },
  {
    name: "Customized Logistics Solutions",
    serviceType: "Logistics & Supply Chain",
    description:
      "Transportation and logistics support arranged around shipment volume, route, frequency, destination and other business requirements.",
    url: `${SITE_URL}/services#supply-chain`,
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
        text: "Yes. Alongside our domestic transportation services, we support businesses with international logistics and freight requirements — including air freight, ocean freight, import & export logistics and customs coordination support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide both FTL and PTL transportation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ApexNova provides both Full Truck Load (FTL) and Part Truck Load (PTL) transportation for business shipments. The suitable option depends on the shipment size, vehicle requirement and transportation needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide air freight and sea freight services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ApexNova provides air freight and sea freight support for businesses moving commercial shipments between India and international destinations. The suitable option depends on the cargo, destination and required transit time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide logistics services from Noida to other parts of India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Based in Noida, ApexNova coordinates business transportation from Noida and Delhi NCR to destinations across India. We also support international shipments moving between India and overseas markets.",
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
