"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Truck, Navigation, Warehouse, Zap } from "lucide-react";
import { staggerContainer, scaleIn, slideLeft, slideRight } from "@/lib/animations";

const services = [
  {
    icon: Truck,
    title: "Local Transport",
    description: "City-to-city freight with real-time updates",
  },
  {
    icon: Navigation,
    title: "Pan India Delivery",
    description: "Nationwide coverage across 25+ cities",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure, climate-controlled storage facilities",
  },
  {
    icon: Zap,
    title: "Express Cargo",
    description: "Priority express delivery for urgent shipments",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-theme-light py-20 pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 overflow-hidden">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideLeft}
            className="text-orange text-[12px] font-bold tracking-[0.2em] uppercase block mb-2"
          >
            WHAT WE OFFER
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight}
            className="text-3xl md:text-[36px] font-semibold text-navy mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-theme-dark max-w-2xl mx-auto">
            End-to-end logistics solutions tailored for Indian businesses
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 24px 48px rgba(27,46,107,0.15)"
                } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 text-center will-change-transform"
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" stroke="#F47920" strokeWidth="2" strokeDasharray="10 10" className="group-hover:animate-drawBorder" />
                </svg>
                
                <motion.div
                  variants={{
                    hover: { rotate: 8, scale: 1.15 }
                  }}
                  className="bg-navy/10 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-orange transition-colors"
                >
                  <motion.div
                    variants={{
                      hover: { scale: [1, 1.2, 1], transition: { duration: 0.5 } }
                    }}
                  >
                    <Icon size={32} />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-[20px] font-semibold text-navy mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-theme-muted text-[15px] leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
