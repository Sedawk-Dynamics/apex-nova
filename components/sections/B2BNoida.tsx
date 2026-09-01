"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, Warehouse, Store, ArrowRight, Briefcase } from "lucide-react";

// Client-supplied section (Sep 2026) — sits between Our Services and Our Advantage.
const destinations = [
  { icon: Factory, label: "Manufacturing Facilities" },
  { icon: Warehouse, label: "Warehouses & Distribution Centres" },
  { icon: Store, label: "Dealers & Retail Locations" },
];

export default function B2BNoida() {
  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[58%]"
          >
            <span className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <Briefcase size={13} /> B2B Logistics
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-navy-deep mb-6 tracking-tight text-balance leading-[1.1]">
              B2B Logistics Services in <span className="gradient-text">Noida</span>
            </h2>
            <div className="space-y-4 text-theme-muted text-[15.5px] leading-relaxed max-w-2xl">
              <p>
                ApexNova Logistics provides B2B logistics services for businesses, supporting
                companies with the transportation, freight and supply chain requirements involved
                in their commercial operations. We work with businesses that need to move goods
                between manufacturing facilities, warehouses, distribution centres, suppliers,
                dealers, retail locations and other business destinations across India and
                international markets.
              </p>
              <p>
                Our B2B logistics solutions are designed around the operational requirements of
                each business. This includes regular transportation requirements, bulk and
                full-load movements, part-load transportation, express cargo, pan-India
                distribution and international freight through air and ocean transportation.
              </p>
              <p>
                As a logistics company in Noida, our local presence enables us to support
                businesses in Noida and the wider Delhi NCR region, while our transportation and
                logistics network allows us to coordinate commercial shipments across India and
                international destinations.
              </p>
            </div>

            <Link
              href="/quote"
              className="group inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange to-orange-dark text-white px-7 py-3.5 rounded-full text-[14.5px] font-semibold shadow-lg shadow-orange/25 hover:shadow-glow-orange transition-shadow"
            >
              Get a Free Quote
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Destinations we move between */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[42%]"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-[#0F1D4A] p-8 sm:p-9 overflow-hidden shadow-premium border border-white/10">
              <div className="absolute inset-0 grid-bg radial-fade opacity-25" />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange/20 rounded-full blur-[100px]" />

              <div className="relative">
                <h3 className="text-white text-[20px] font-bold tracking-tight mb-2">
                  Where We Move Business Cargo
                </h3>
                <p className="text-gray-300/90 text-[14px] leading-relaxed mb-7">
                  Commercial shipments coordinated across India and international destinations.
                </p>

                <div className="space-y-3">
                  {destinations.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div
                        key={d.label}
                        className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.08] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange shrink-0">
                          <Icon size={18} />
                        </div>
                        <span className="text-white/90 text-[13.5px] font-medium leading-snug">
                          {d.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
