"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Truck, Navigation, Warehouse, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, scaleIn } from "@/lib/animations";

const services = [
  {
    icon: Truck,
    title: "Local Transport",
    description: "City-to-city freight with real-time updates and dedicated dispatch.",
  },
  {
    icon: Navigation,
    title: "Pan India Delivery",
    description: "Nationwide coverage across 25+ cities with optimized routing.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure, climate-controlled storage with inventory transparency.",
  },
  {
    icon: Zap,
    title: "Express Cargo",
    description: "Priority express delivery for time-critical shipments.",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-theme-light py-24 pt-44 md:pt-48 overflow-hidden">
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
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-[34px] md:text-[44px] font-bold text-navy-deep mb-4 tracking-tight text-balance"
          >
            Logistics Solutions, <span className="gradient-text">Built for Scale</span>
          </motion.h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto tracking-tight">
            End-to-end logistics infrastructure crafted for ambitious Indian businesses
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

                <h3 className="text-[19px] font-semibold text-navy-deep mb-2.5 relative z-10 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-theme-muted text-[15px] leading-relaxed relative z-10 mb-5">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="relative z-10 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-deep group-hover:text-orange transition-colors"
                >
                  Explore service
                  <motion.span
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: 0, y: 0 }}
                    className="inline-flex"
                  >
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
