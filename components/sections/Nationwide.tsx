"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { slideLeft } from "@/lib/animations";

export default function Nationwide() {
  const shouldReduceMotion = useReducedMotion();
  const stat1 = useCountUp(500, 2000, "+");
  const stat2 = useCountUp(100, 2000, "+");
  const stat3 = useCountUp(25, 2000, "+");

  return (
    <section className="bg-[#1B2E6B] py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column - Content */}
          <div className="w-full lg:w-[45%] z-10 space-y-10">
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold text-white mb-8 leading-tight">
                Trusted by Businesses Nationwide
              </h2>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 md:gap-12 mb-10">
                <div>
                  <div ref={stat1.ref} className="text-[#F47920] text-4xl font-bold mb-1">{stat1.displayValue}</div>
                  <div className="text-gray-300 text-sm">Shipments Delivered</div>
                </div>
                <div>
                  <div ref={stat2.ref} className="text-[#F47920] text-4xl font-bold mb-1">{stat2.displayValue}</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div ref={stat3.ref} className="text-[#F47920] text-4xl font-bold mb-1">{stat3.displayValue}</div>
                  <div className="text-gray-300 text-sm">Cities Covered</div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              <motion.div
                variants={slideLeft}
                whileHover={!shouldReduceMotion ? {
                  y: -6,
                  borderColor: "rgba(244,121,32,0.4)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                } : {}}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 relative group transition-colors border border-white/5 cursor-pointer will-change-transform"
              >
                <Quote className="absolute top-5 left-5 text-[#F47920] opacity-60" size={32} />
                <p className="text-white text-lg relative z-10 pl-12 mb-4 italic">
                  &quot;Apexnova Logistics has shown great professionalism and commitment towards timely deliveries. Their approach is reliable and customer-focused, making them a promising logistics partner.&quot;
                </p>
                <div className="pl-12 text-gray-400 text-sm">
                  — <span className="text-white font-medium">Ashish Pandey</span>, Operations Manager, Trading Business
                </div>
                <button className="absolute bottom-5 right-5 w-8 h-8 bg-[#F47920] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Map */}
          <div className="w-full lg:w-[55%] relative flex justify-center mt-10 lg:mt-0">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-[#F47920] opacity-15 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[600px] aspect-[4/5] drop-shadow-2xl"
            >
              <Image
                src="/images/map.webp"
                alt="Apexnova Logistics India Coverage Map"
                width={600}
                height={750}
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(244,121,32,0.2)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
