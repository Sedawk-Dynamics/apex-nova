"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-r from-orange via-[#D66315] to-orange animate-cta-gradient bg-[length:200%_200%]">
      {/* Background Trucks */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        {[15, 22, 30].map((duration, i) => (
          <motion.svg
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-48 h-auto fill-white"
            style={{
              top: `${20 + i * 25}%`,
            }}
            animate={!shouldReduceMotion ? { x: ["-100vw", "100vw"] } : {}}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            viewBox="0 0 24 24"
          >
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </motion.svg>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-white text-[40px] font-bold mb-4"
        >
          Get Your Quote Now!
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } }
          }}
          className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
        >
          Fast, transparent pricing with no hidden charges
        </motion.p>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleIn}
        >
          <Link href="/contact" className="inline-block relative">
            <motion.button
              whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
              className="group relative overflow-hidden bg-white text-navy px-10 py-4 rounded-full text-[16px] font-bold shadow-lg flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Request Free Quote</span>
              <motion.span
                variants={{
                  hover: { x: 0, opacity: 1, width: "auto" },
                  initial: { x: -10, opacity: 0, width: 0 }
                }}
                initial="initial"
                whileHover="hover"
                className="relative z-10 flex items-center"
              >
                <ArrowRight size={18} />
              </motion.span>
              
              {/* Ripple effect wrapper */}
              <div className="absolute inset-0 rounded-full bg-navy/10 opacity-0 group-active:opacity-100 group-active:scale-110 transition-all duration-300 pointer-events-none" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
