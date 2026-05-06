"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

const cities = [
  "Delhi", "Mumbai", "Bengaluru", "Chennai", "Kolkata", "Hyderabad",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Surat", "+ more"
];

export default function Coverage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-theme-light py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-[36px] font-semibold text-navy mb-4">
          Our Coverage
        </h2>
        <p className="text-theme-dark max-w-2xl mx-auto mb-12">
          Delivering across 25+ cities in India with growing network
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {cities.map((city, i) => (
            <motion.div
              key={city}
              custom={i}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: (index) => ({
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.04, duration: 0.4, type: "spring" }
                })
              }}
              whileHover={!shouldReduceMotion ? { scale: 1.08 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group relative bg-white border border-gray-200 rounded-full px-6 py-2.5 text-[15px] font-medium text-navy hover:bg-orange hover:text-white hover:border-orange transition-colors duration-300 shadow-sm cursor-default z-10"
            >
              {city}
              {/* Ping ripple effect */}
              <div className="absolute inset-0 rounded-full bg-orange opacity-0 group-hover:animate-[ping_0.8s_cubic-bezier(0,0,0.2,1)_1] -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
