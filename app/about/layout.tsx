import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Apexnova Logistics",
  description:
    "Learn about Apexnova Logistics India Pvt Ltd — our vision, mission, founder's message, and commitment to safe, reliable, technology-driven logistics across India.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Apexnova Logistics",
    description:
      "Vision, mission, and the story behind India's emerging trusted logistics partner.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
