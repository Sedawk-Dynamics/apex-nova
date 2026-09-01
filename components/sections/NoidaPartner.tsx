"use client";

import { motion } from "framer-motion";
import { MapPin, Route, Globe2, Building2 } from "lucide-react";

// Client-supplied section (Sep 2026) — sits between the About intro and Our Services.
const points = [
  {
    icon: Building2,
    title: "Built Around Your Requirements",
    desc: "Choosing a logistics partner is about more than finding a company that can move goods from one location to another. Businesses need transportation solutions that fit their shipment, destination, timeline and operational requirements.",
  },
  {
    icon: Globe2,
    title: "Domestic & International Expertise",
    desc: "ApexNova Logistics combines its Noida-based operations with experience across domestic transportation, international logistics, freight operations and supply chain management. This allows us to support businesses with logistics requirements ranging from domestic transportation across India to international freight movements.",
  },
  {
    icon: MapPin,
    title: "Accessible Across Delhi NCR",
    desc: "Our location in Noida makes us accessible to businesses in Noida and the wider Delhi NCR region, while our transportation and logistics capabilities extend across India and international markets.",
  },
  {
    icon: Route,
    title: "Coordination End to End",
    desc: "Whether your requirement involves transportation from Noida to another city in India or an international shipment moving by air or ocean, ApexNova provides logistics coordination and transportation support based on your business requirements.",
  },
];

export default function NoidaPartner() {
  return (
    <section className="relative bg-theme-light py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[460px] h-[460px] bg-navy/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20"
          >
            <MapPin size={13} /> Why Noida Matters
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[44px] font-bold text-navy-deep tracking-tight text-balance leading-[1.1]"
          >
            Your Noida-Based Partner for{" "}
            <span className="gradient-text">Domestic &amp; International Logistics</span>
          </motion.h2>
        </div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                }}
                className="group relative bg-white rounded-3xl border border-gray-100 p-7 overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-orange via-orange-glow to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-navy-deep to-navy text-orange rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 shadow-md">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-navy-deep mb-2 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-theme-muted text-[14.5px] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
