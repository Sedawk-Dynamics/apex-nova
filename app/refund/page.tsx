import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Refund & Cancellation Policy | Apexnova Logistics" },
  description:
    "Apexnova Logistics refund and cancellation policy for logistics and transportation service bookings.",
  alternates: { canonical: "/refund" },
  openGraph: {
    title: "Refund & Cancellation Policy — Apexnova Logistics",
    description: "Our policy on booking cancellations and refunds.",
    url: "/refund",
    type: "website",
  },
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      subtitle="This policy explains how cancellations and refunds are handled for our logistics services."
      lastUpdated="June 2026"
    >
      <h2>1. Overview</h2>
      <p>
        {LEGAL_NAME} provides transportation and logistics services. As we coordinate vehicles,
        routes, and partners specifically for each booking, this policy explains when and how refunds
        or cancellation charges apply.
      </p>

      <h2>2. Quotations</h2>
      <p>
        Requesting a quote is completely free and carries no obligation. No payment is required to
        receive a quote.
      </p>

      <h2>3. Cancellations by the Customer</h2>
      <ul>
        <li><strong>Before vehicle placement / dispatch:</strong> Bookings cancelled before a vehicle is assigned or dispatched are generally eligible for a full refund of any advance paid, less any transaction charges.</li>
        <li><strong>After vehicle placement / dispatch:</strong> Once a vehicle has been arranged, dispatched, or loading has begun, cancellation charges may apply to cover vehicle placement, fuel, and coordination costs already incurred.</li>
        <li><strong>In transit:</strong> Bookings cannot be cancelled once the consignment is in transit; charges for the service rendered will apply.</li>
      </ul>

      <h2>4. Refund Eligibility</h2>
      <p>Refunds may be considered in the following cases:</p>
      <ul>
        <li>Advance paid for a booking that was cancelled before dispatch.</li>
        <li>Duplicate or excess payment made in error.</li>
        <li>A confirmed service that we were unable to provide.</li>
      </ul>

      <h2>5. Non-Refundable Charges</h2>
      <ul>
        <li>Services already performed or partially performed.</li>
        <li>Costs already incurred for vehicle placement, fuel, detention, or third-party charges.</li>
        <li>Payment gateway or bank transaction fees.</li>
      </ul>

      <h2>6. Refund Process &amp; Timeline</h2>
      <p>
        To request a refund, contact us with your booking details. Approved refunds will be processed
        to the original payment method, typically within 7&ndash;14 business days of approval,
        depending on your bank or payment provider.
      </p>

      <h2>7. Damage or Service Issues</h2>
      <p>
        Any claims relating to loss, damage, or service issues must be raised promptly and will be
        handled in accordance with our{" "}
        <a href="/terms">Terms &amp; Conditions</a> and the applicable contract of carriage.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may revise this Refund &amp; Cancellation Policy from time to time. The latest version will
        always be available on this page.
      </p>
    </LegalPage>
  );
}
