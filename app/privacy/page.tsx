import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Apexnova Logistics" },
  description:
    "How Apexnova Logistics collects, uses, and protects the personal information you share through our website and enquiry forms.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Apexnova Logistics",
    description: "How we collect, use, and protect your personal information.",
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains what information we collect and how we use and protect it."
      lastUpdated="June 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        {LEGAL_NAME} (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how
        we collect, use, disclose, and safeguard your information when you visit our website or use
        our services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>When you use our contact or quote forms, we may collect:</p>
      <ul>
        <li><strong>Contact details</strong> — name, company name, phone number, email address.</li>
        <li><strong>Shipment details</strong> — origin, destination, cargo type, weight, pickup date, and any special requirements you provide.</li>
        <li><strong>Message content</strong> — any information you include in your enquiry.</li>
        <li><strong>Technical data</strong> — basic usage information collected automatically (such as browser type and pages visited) via standard web technologies.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To respond to your enquiries and provide quotes.</li>
        <li>To arrange, coordinate, and deliver logistics services you request.</li>
        <li>To communicate with you about your shipments and our services.</li>
        <li>To improve our website and service quality.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>

      <h2>4. Legal Basis &amp; Consent</h2>
      <p>
        We process your information based on your consent (provided when you submit a form) and our
        legitimate interest in operating and improving our business. You may withdraw consent at any
        time by contacting us.
      </p>

      <h2>5. How We Share Information</h2>
      <p>
        We do <strong>not</strong> sell your personal information. We may share it only with:
      </p>
      <ul>
        <li>Transport partners, fleet operators, and logistics associates strictly as needed to fulfil your service request.</li>
        <li>Service providers who support our operations (for example, email and hosting providers).</li>
        <li>Authorities where required by law.</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Our website uses cookies and similar technologies. For details, please see our{" "}
        <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your information only for as long as necessary to fulfil the purposes described in
        this policy, or as required by applicable law.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures to protect your information,
        including secure (HTTPS) transmission. However, no method of transmission over the internet
        is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>9. Your Rights</h2>
      <p>You may request to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Correct inaccurate or incomplete information.</li>
        <li>Request deletion of your information, subject to legal requirements.</li>
        <li>Withdraw consent to further processing.</li>
      </ul>
      <p>To exercise any of these rights, contact us using the details below.</p>

      <h2>10. Third-Party Services</h2>
      <p>
        Our website may embed third-party services such as Google Maps and links to social media
        platforms. These providers have their own privacy policies, and we encourage you to review
        them.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        Our services are intended for businesses and adults. We do not knowingly collect personal
        information from children.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at
        the top reflects the latest revision.
      </p>
    </LegalPage>
  );
}
