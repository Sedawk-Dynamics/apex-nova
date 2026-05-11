import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Apexnova Logistics",
  description:
    "Get in touch with Apexnova Logistics India Pvt Ltd. Call +91 9560639966, email info@apexnovalogistics.com, or visit our Greater Noida office. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Apexnova Logistics",
    description:
      "Reach our team for quotes, support, or partnerships. Greater Noida HQ. Pan-India service.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
