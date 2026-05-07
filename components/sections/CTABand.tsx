"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABand() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 bg-navy-deep">
      {/* Animated brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange via-[#D66315] to-orange animate-cta-gradient bg-[length:200%_200%] opacity-95" />

      {/* Subtle grid mesh */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />

      {/* Background trucks */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        {[15, 22, 30].map((duration, i) => (
          <motion.svg
            key={i}
            className="absolute w-48 h-auto fill-white"
            style={{ top: `${20 + i * 25}%` }}
            animate={!shouldReduceMotion ? { x: ["-100vw", "100vw"] } : {}}
            transition={{ duration, repeat: Infinity, ease: "linear", delay: i * 2 }}
            viewBox="0 0 24 24"
          >
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </motion.svg>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-white text-[12px] font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm"
        >
          Get Started Today
        </motion.span>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-white text-[36px] md:text-[48px] font-bold mb-4 tracking-tight text-balance"
        >
          Ready to Move Your Business Forward?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } },
          }}
          className="text-white/95 text-lg mb-9 max-w-2xl mx-auto tracking-tight"
        >
          Fast, transparent pricing — quote within 2 hours, no hidden charges
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleIn}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/quote" className="inline-block">
            <motion.button
              whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.96 } : {}}
              className="group relative overflow-hidden bg-white text-navy-deep px-9 py-4 rounded-full text-[15px] font-bold shadow-lg flex items-center justify-center gap-2 hover:shadow-2xl"
            >
              <span className="relative z-10">Request Free Quote</span>
              <ArrowRight size={17} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
            </motion.button>
          </Link>

          <a
            href="tel:+919560639966"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            <Phone size={16} /> +91 95606 39966
          </a>
        </motion.div>
      </div>
    </section>
  );
}
