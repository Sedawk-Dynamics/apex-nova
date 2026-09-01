import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import NoidaPartner from "@/components/sections/NoidaPartner";
import Services from "@/components/sections/Services";
import B2BNoida from "@/components/sections/B2BNoida";
import WhyChoose from "@/components/sections/WhyChoose";
import Trust from "@/components/sections/Trust";
import Nationwide from "@/components/sections/Nationwide";
import Coverage from "@/components/sections/Coverage";

// Client-supplied home page title & description (Sep 2026). `absolute` stops the
// root layout's "%s | Apexnova Logistics" template from doubling the brand name.
export const metadata: Metadata = {
  title: { absolute: "Logistics Company in Noida | B2B Logistics Services" },
  description:
    "ApexNova Logistics is a trusted logistics company in Noida offering FTL, PTL, express cargo, transportation and supply chain solutions across India. Get a quote today.",
  alternates: { canonical: "/" },
  // Keep social cards in step with the new home title rather than falling back
  // to the root layout’s default.
  openGraph: {
    title: "Logistics Company in Noida | B2B Logistics Services",
    description:
      "ApexNova Logistics is a trusted logistics company in Noida offering FTL, PTL, express cargo, transportation and supply chain solutions across India. Get a quote today.",
    url: "/",
  },
  twitter: {
    title: "Logistics Company in Noida | B2B Logistics Services",
    description:
      "ApexNova Logistics is a trusted logistics company in Noida offering FTL, PTL, express cargo, transportation and supply chain solutions across India. Get a quote today.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutIntro />
      <NoidaPartner />
      <Services />
      <B2BNoida />
      <WhyChoose />
      <Trust />
      <Nationwide />
      <Coverage />
    </main>
  );
}
