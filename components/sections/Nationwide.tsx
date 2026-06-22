"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";

// === 12+ Years of Domestic & International Logistics Expertise ===
const experienceAreas = [
  "Domestic Transportation Management",
  "Full Truck Load (FTL)",
  "Part Truck Load (PTL)",
  "International Logistics Coordination",
  "Freight Forwarding Operations",
  "Import & Export Logistics Support",
  "Air Freight Coordination",
  "Sea Freight Coordination",
  "Vendor & Fleet Management",
  "Supply Chain Coordination",
  "Customer Relationship Management",
];

// Approximate city dot positions on the India map (relative %)
const mapDots = [
  { top: "26%", left: "44%", label: "Delhi", delay: 0 },
  { top: "52%", left: "32%", label: "Mumbai", delay: 0.5 },
  { top: "72%", left: "48%", label: "Bengaluru", delay: 1 },
  { top: "70%", left: "58%", label: "Chennai", delay: 1.5 },
  { top: "44%", left: "70%", label: "Kolkata", delay: 2 },
  { top: "60%", left: "50%", label: "Hyderabad", delay: 2.5 },
];

export default function Nationwide() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-navy-deep py-24 overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-orange/15 rounded-full blur-[160px] animate-blob" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#2A48A5]/30 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left */}
          <div className="w-full lg:w-[52%] z-10">
            <span className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30">
              <Award size={13} /> Industry Experience
            </span>
            <h2 className="text-[30px] md:text-[42px] font-bold text-white mb-5 leading-[1.1] tracking-tight text-balance">
              12+ Years of Domestic &amp; International{" "}
              <span className="gradient-text">Logistics Expertise</span>
            </h2>
            <p className="text-gray-300/90 text-[15.5px] leading-relaxed mb-9 max-w-xl">
              Our foundation is built on extensive, hands-on experience across the full
              spectrum of transportation and logistics operations — expertise we channel
              into reliable service for every customer.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
            >
              {experienceAreas.map((area) => (
                <motion.div
                  key={area}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-center gap-2.5 text-gray-200 text-[14px]"
                >
                  <CheckCircle2 size={16} className="text-orange shrink-0" />
                  <span>{area}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-[48%] relative flex justify-center mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-orange opacity-15 blur-[120px] rounded-full w-3/4 h-3/4 m-auto" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[560px] aspect-[4/5]"
            >
              <Image
                src="/images/map.webp"
                alt="Apexnova Logistics India Coverage Map"
                width={620}
                height={770}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(244,121,32,0.25)]"
              />

              {/* Animated city dots */}
              {mapDots.map((dot, i) => (
                <motion.div
                  key={dot.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 200, damping: 18 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: dot.top, left: dot.left }}
                >
                  <div className="relative">
                    <span
                      className="absolute inset-0 rounded-full bg-orange opacity-60 animate-ping-soft"
                      style={{ animationDelay: `${dot.delay}s` }}
                    />
                    <span className="relative block w-2.5 h-2.5 rounded-full bg-orange ring-2 ring-orange/30" />
                  </div>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10.5px] font-semibold text-white/85 whitespace-nowrap bg-navy-deep/70 px-1.5 py-0.5 rounded">
                    {dot.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
