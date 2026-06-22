import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Apexnova Logistics — Greater Noida HQ | Call +91 9560639966",
  },
  description:
    "Contact Apexnova Logistics in Greater Noida West for freight quotes, support & partnerships. Phone, WhatsApp, email & office address inside.",
  keywords: [
    "contact Apexnova Logistics",
    "Apexnova Greater Noida office",
    "Apexnova phone number",
    "Apexnova WhatsApp",
    "logistics support NCR",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Apexnova Logistics",
    description:
      "Reach our team for quotes, support, or partnerships. Greater Noida HQ. Pan-India service.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Apexnova Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexnova0",
    creator: "@apexnova0",
    title: "Contact Apexnova Logistics",
    description: "Phone, WhatsApp, email & Noida (NCR) office — get a custom logistics quote.",
    images: ["/images/hero-truck.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: SITE_URL + "/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
