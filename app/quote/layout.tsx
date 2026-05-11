import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Logistics Quote",
  description:
    "Request a free freight quote from Apexnova Logistics. Tell us about your shipment — origin, destination, cargo, and weight — and our team responds with the best rate within 2 hours.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Get a Free Quote — Apexnova Logistics",
    description:
      "Free shipping quote within 2 hours. FTL, PTL, NCR local, corporate logistics & on-demand.",
    url: "/quote",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
