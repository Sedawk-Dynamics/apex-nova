import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Cookie Policy | Apexnova Logistics" },
  description:
    "How Apexnova Logistics uses cookies and similar technologies on our website, and how you can control them.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: "Cookie Policy — Apexnova Logistics",
    description: "How we use cookies and how you can manage them.",
    url: "/cookies",
    type: "website",
  },
};

export default function CookiePage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="This policy explains what cookies are, how we use them, and how you can control them."
      lastUpdated="June 2026"
    >
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help
        websites function properly, remember preferences, and understand how the site is used.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>
        {LEGAL_NAME} uses only a minimal set of cookies and similar technologies. We currently do not
        run third-party advertising or tracking cookies. The cookies used on our site fall into the
        following categories:
      </p>

      <h3>Essential Cookies</h3>
      <p>
        Required for the website to function correctly (for example, basic performance and security).
        These cannot be switched off in our systems.
      </p>

      <h3>Functional Cookies</h3>
      <p>
        Help remember choices and improve your experience. These are optional and used only to make
        the site work better for you.
      </p>

      <h3>Third-Party Cookies</h3>
      <p>
        Some content we embed &mdash; such as Google Maps &mdash; may set its own cookies. These are
        controlled by the third party under their own privacy and cookie policies.
      </p>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers let you block
        or remove cookies, though disabling some may affect how parts of the website work. Refer to
        your browser&apos;s help section for instructions.
      </p>

      <h2>4. More Information</h2>
      <p>
        For details on how we handle your personal information, please read our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be posted on this page
        with a revised &ldquo;Last updated&rdquo; date.
      </p>
    </LegalPage>
  );
}
