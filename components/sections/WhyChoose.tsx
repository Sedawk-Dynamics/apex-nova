"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, ShieldCheck, IndianRupee, HeadphonesIcon } from "lucide-react";
import Image from "next/image";
import { slideLeft, slideRight } from "@/lib/animations";

const features = [
  { icon: Clock, label: "On-Time Deliveries" },
  { icon: ShieldCheck, label: "Safe & Secure Handling" },
  { icon: IndianRupee, label: "Affordable Pricing" },
  { icon: HeadphonesIcon, label: "24/7 Customer Support" },
];

export default function WhyChoose() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Content Left */}
          <div className="w-full lg:w-[60%]">
            <span className="text-orange text-[12px] font-bold tracking-[0.2em] uppercase block mb-2">
              OUR ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-[36px] font-semibold text-navy mb-4">
              Why Choose Apexnova Logistics
            </h2>
            <p className="text-theme-dark mb-10 text-[16px]">
              We combine national reach with local expertise to provide unparalleled logistics solutions.
            </p>

            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    variants={slideLeft}
                    custom={i}
                    whileHover="hover"
                    className="group relative flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-5 transition-colors duration-300 overflow-hidden"
                  >
                    <motion.div
                      variants={{
                        hover: { backgroundColor: "rgba(244,121,32,0.05)" }
                      }}
                      className="absolute inset-0 z-0"
                    />
                    <motion.div
                      variants={{
                        hover: { scaleY: 1 }
                      }}
                      initial={{ scaleY: 0 }}
                      className="absolute left-0 top-0 bottom-0 w-1 bg-orange origin-bottom z-10"
                    />
                    
                    <div className="relative z-10 bg-orange/10 w-12 h-12 rounded-full flex items-center justify-center text-orange shrink-0">
                      <motion.div
                        variants={{
                          hover: { scale: [1, 1.2, 1], transition: { duration: 0.4 } }
                        }}
                      >
                        <Icon size={24} />
                      </motion.div>
                    </div>
                    <span className="relative z-10 font-semibold text-navy">
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Image Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight}
            className="w-full lg:w-[40%] relative"
          >
            <motion.div
              animate={!shouldReduceMotion ? { y: [0, -12, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={!shouldReduceMotion ? { scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } } : {}}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl will-change-transform cursor-pointer"
            >
              <Image
                src="/images/worker-warehouse.jpg"
                alt="Logistics worker in warehouse"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={!shouldReduceMotion ? { y: [0, 8, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 will-change-transform z-10"
            >
              <div className="flex items-center gap-2 text-navy font-bold text-lg mb-1">
                <ShieldCheck className="text-orange" size={24} />
                Trusted Since 2018
              </div>
              <p className="text-sm text-theme-muted">
                Serving 100+ businesses nationwide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
