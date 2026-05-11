import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Apexnova Logistics — Vision, Mission & Fleet Capabilities",
  description:
    "Apexnova Logistics Pvt. Ltd. is a fast-growing NCR-based logistics partner offering FTL, PTL, on-demand transport, corporate logistics & supply chain support across India — with a verified fleet of LCVs, containers and trailers.",
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
    title: "About Apexnova Logistics",
    description:
      "Vision, mission, core values, services, industries, fleet & process — meet your trusted NCR-based logistics partner serving PAN India.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Apexnova Logistics",
    description:
      "Reliable, transparent and customer-focused logistics across NCR & PAN India.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
