import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Trust from "@/components/sections/Trust";
import Nationwide from "@/components/sections/Nationwide";
import Coverage from "@/components/sections/Coverage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutIntro />
      <Services />
      <WhyChoose />
      <Trust />
      <Nationwide />
      <Coverage />
    </main>
  );
}
