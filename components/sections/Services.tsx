"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Truck,
  Package,
  Zap,
  Navigation,
  Network,
  Layers,
  Users,
  Settings,
  ArrowUpRight,
  Plane,
  Ship,
  Globe2,
  FileCheck,
  PackageCheck,
} from "lucide-react";
import Link from "next/link";
import { staggerContainer, scaleIn } from "@/lib/animations";

const services = [
  {
    icon: Truck,
    title: "Full Truck Load (FTL)",
    description:
      "Dedicated truck transportation for bulk and full-load shipments where businesses require dedicated vehicle capacity.",
    cta: "Explore FTL Services",
  },
  {
    icon: Package,
    title: "Part Truck Load (PTL)",
    description:
      "Flexible transportation for smaller consignments that do not require a complete truck.",
    cta: "Explore PTL Services",
  },
  {
    icon: Zap,
    title: "Express Cargo Services",
    description:
      "Priority transportation support for time-sensitive commercial shipments where delivery timelines are important.",
    cta: "Explore Express Cargo",
  },
  {
    icon: Navigation,
    title: "Pan-India Transportation",
    description:
      "Transportation support connecting businesses with major destinations and commercial locations across India.",
    cta: "Explore Pan-India Transportation",
  },
  {
    icon: Network,
    title: "Logistics Coordination",
    description:
      "End-to-end coordination across the different stages and parties involved in moving your shipment.",
    cta: "Explore Logistics Coordination",
  },
  {
    icon: Layers,
    title: "Supply Chain Support",
    description:
      "Logistics support designed to help businesses coordinate the movement of goods across their supply chain.",
    cta: "Explore Supply Chain Support",
  },
  {
    icon: Users,
    title: "Vendor Management",
    description:
      "Professional coordination with transportation and fleet partners to support business logistics requirements.",
    cta: "Explore Vendor Management",
  },
  {
    icon: Settings,
    title: "Customized Logistics Solutions",
    description:
      "Tailored logistics arrangements built around your shipment, destination, volume and specific business requirements.",
    cta: "Explore Customized Solutions",
  },
];

// Client update (Sep 2026): international offerings are now presented as current
// services, replacing the previous "Future Expansion Capability" framing.
const internationalServices = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "International cargo transportation by air for businesses that require an appropriate air freight solution for their shipment requirements.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "Ocean transportation for international cargo, providing a practical freight option for businesses moving goods between international markets.",
  },
  {
    icon: Globe2,
    title: "International Logistics",
    description:
      "Coordination and transportation support for businesses managing shipments between India and international destinations.",
    cta: "Explore International Logistics",
  },
  {
    icon: PackageCheck,
    title: "Import & Export Logistics",
    description:
      "Logistics support for businesses involved in importing and exporting goods, helping coordinate transportation requirements across international markets.",
  },
  {
    icon: FileCheck,
    title: "Customs Coordination Support",
    description:
      "Coordination support for customs-related requirements involved in the movement of international commercial shipments.",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-theme-light py-24 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 grid-bg-light opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-[34px] md:text-[44px] font-bold text-navy-deep mb-4 tracking-tight text-balance"
          >
            Reliable Logistics <span className="gradient-text">Built for Your Business</span>
          </motion.h2>
          <p className="text-theme-muted text-[16.5px] max-w-3xl mx-auto leading-relaxed">
            ApexNova provides a range of transportation and logistics services designed to support
            different business requirements. From domestic road transportation to international
            freight, our services cover the movement and coordination requirements businesses face
            across their supply chain.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={scaleIn}
                custom={index}
                whileHover={!shouldReduceMotion ? {
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                } : {}}
                className="group relative bg-white rounded-3xl border border-gray-100 p-7 will-change-transform overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                {/* Gradient hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-orange/0 to-orange/0 group-hover:from-orange/5 group-hover:via-transparent group-hover:to-navy/5 transition-all duration-500" />
                {/* Top accent bar */}
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-orange via-orange-glow to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <motion.div
                  variants={{ hover: { rotate: -6, scale: 1.05 } }}
                  className="relative bg-gradient-to-br from-navy-deep to-navy text-orange rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:shadow-glow-navy transition-shadow"
                >
                  <motion.div
                    variants={{ hover: { scale: [1, 1.15, 1], transition: { duration: 0.5 } } }}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </motion.div>
                </motion.div>

                <h3 className="text-[18px] font-semibold text-navy-deep mb-2.5 relative z-10 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-theme-muted text-[14.5px] leading-relaxed relative z-10 mb-5">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="relative z-10 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-deep group-hover:text-orange transition-colors"
                >
                  {service.cta}
                  <ArrowUpRight size={15} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* International Freight & Global Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-[#0F1D4A] p-8 sm:p-10 overflow-hidden border border-white/10 shadow-premium"
        >
          <div className="absolute inset-0 grid-bg radial-fade opacity-25" />
          <div className="absolute -top-24 -right-24 w-[360px] h-[360px] bg-orange/15 rounded-full blur-[120px]" />

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 text-orange text-[11.5px] font-bold tracking-[0.25em] uppercase mb-3 px-3.5 py-1.5 rounded-full bg-orange/15 border border-orange/30">
                  <Globe2 size={12} /> Global Reach
                </span>
                <h3 className="text-white text-[24px] md:text-[30px] font-bold tracking-tight">
                  International Freight &amp; Global Logistics
                </h3>
              </div>
              <p className="text-gray-300/90 text-[14.5px] leading-relaxed max-w-md">
                Alongside our domestic transportation services, ApexNova supports businesses with
                international logistics and freight requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {internationalServices.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange shrink-0">
                        <Icon size={18} />
                      </div>
                      <span className="text-white text-[15px] font-semibold leading-snug tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-gray-300/85 text-[13.5px] leading-relaxed">
                      {item.description}
                    </p>
                    {item.cta && (
                      <Link
                        href="/services"
                        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-orange hover:text-orange-glow transition-colors"
                      >
                        {item.cta}
                        <ArrowUpRight size={14} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
