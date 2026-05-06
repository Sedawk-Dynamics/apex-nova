import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Nationwide from "@/components/sections/Nationwide";
import Coverage from "@/components/sections/Coverage";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyChoose />
      <Nationwide />
      <Coverage />
      <CTABand />
    </main>
  );
}
