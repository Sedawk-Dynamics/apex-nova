import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — FTL, PTL, NCR Local & Corporate Logistics",
  description:
    "Apexnova Logistics services: Full Truck Load (FTL), Part Load (PTL), NCR local delivery, corporate logistics, and on-demand urgent transport across India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Apexnova Logistics — Services",
    description:
      "FTL, PTL, NCR local, corporate logistics & on-demand transport built for ambitious Indian businesses.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
