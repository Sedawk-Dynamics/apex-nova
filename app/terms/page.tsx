import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { LEGAL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms & Conditions | Apexnova Logistics" },
  description:
    "Terms & Conditions governing the use of the Apexnova Logistics website and our transportation and logistics services across India.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions — Apexnova Logistics",
    description: "Terms governing use of our website and logistics services.",
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website or engaging our logistics services."
      lastUpdated="June 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
        website operated by {LEGAL_NAME} (&ldquo;{SITE_NAME}&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and the transportation, freight, and logistics
        services we provide. By accessing our website, requesting a quote, or booking our services,
        you agree to be bound by these Terms.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>&ldquo;Services&rdquo;</strong> means transportation, Full Truck Load (FTL), Part Truck Load (PTL), express cargo, logistics coordination, supply chain support, and related services we offer.</li>
        <li><strong>&ldquo;Customer&rdquo;</strong> means any individual or business that requests a quote or engages our Services.</li>
        <li><strong>&ldquo;Consignment&rdquo;</strong> means the goods handed over to us for transportation.</li>
      </ul>

      <h2>3. Services</h2>
      <p>
        We provide domestic and coordinated logistics services on a best-effort basis. All bookings
        are subject to vehicle availability, route feasibility, and confirmation by our team. A quote
        does not constitute a confirmed booking until acknowledged in writing by us.
      </p>

      <h2>4. Quotations &amp; Pricing</h2>
      <ul>
        <li>Quotes are provided free of charge and are valid for the period stated, or 7 days if not specified.</li>
        <li>Pricing is based on the information you provide (origin, destination, cargo type, weight, and requirements). Inaccurate information may result in revised charges.</li>
        <li>Additional charges may apply for detention, waiting time, re-routing, multiple pickups/drops, or special handling.</li>
      </ul>

      <h2>5. Customer Responsibilities</h2>
      <ul>
        <li>Provide accurate consignment details, correct addresses, and valid documentation (including e-way bills and invoices where applicable).</li>
        <li>Ensure goods are properly packed and labelled for transportation.</li>
        <li>Do not tender prohibited, illegal, hazardous, or restricted goods without prior written disclosure and approval.</li>
      </ul>

      <h2>6. Payment</h2>
      <p>
        Payment terms will be as agreed at the time of booking. Advance payment may be required for
        certain bookings. We reserve the right to withhold delivery or services in case of
        non-payment of due amounts.
      </p>

      <h2>7. Liability</h2>
      <p>
        We take reasonable care in handling and coordinating your consignments. However, our
        liability is limited to the extent permitted under applicable law and any agreed contract of
        carriage. We are not liable for indirect, incidental, or consequential losses, or for delays
        or losses caused by events beyond our reasonable control (see Force Majeure).
      </p>

      <h2>8. Force Majeure</h2>
      <p>
        We shall not be liable for any failure or delay in performance caused by circumstances beyond
        our reasonable control, including but not limited to natural disasters, strikes, accidents,
        road closures, government restrictions, or acts of God.
      </p>

      <h2>9. Cancellations</h2>
      <p>
        Cancellation terms and any applicable charges are described in our{" "}
        <a href="/refund">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>10. Website Use &amp; Intellectual Property</h2>
      <p>
        All content on this website — including text, graphics, logos, and images — is the property
        of {LEGAL_NAME} and is protected by applicable laws. You may not reproduce, distribute, or
        use our content without prior written permission.
      </p>

      <h2>11. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party sites (such as maps or social media). We are not
        responsible for the content or practices of those third parties.
      </p>

      <h2>12. Governing Law &amp; Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
        jurisdiction of the courts of Gautam Buddha Nagar (Noida), Uttar Pradesh.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of our website or services after
        changes are posted constitutes acceptance of the revised Terms.
      </p>
    </LegalPage>
  );
}
