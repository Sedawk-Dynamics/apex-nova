"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Clock, Truck, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useCountUp } from "@/hooks/useCountUp";
import { scaleIn } from "@/lib/animations";

const FloatingParticles = dynamic(() => import("@/components/ui/FloatingParticles"), { ssr: false });

const trustChips = [
  { icon: ShieldCheck, label: "Trusted Partner" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Truck, label: "Pan India Network" },
  { icon: MapPin, label: "NCR Headquarters" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const stat1 = useCountUp(500, 2000, "+");
  const stat2 = useCountUp(100, 2000, "+");
  const stat3 = useCountUp(25, 2000, "+");

  const titleWords = ["Fast,", "Secure", "&", "Reliable", "Logistics", "Across", "India"];
  const accentIndex = 3; // "Reliable" gets gradient
  const subText = "Delivering Your Business, On Time – Every Time.";
  const subChars = subText.split("");

  return (
    <section className="relative min-h-[92vh] flex items-center bg-navy-deep w-full pt-32 md:pt-36 pb-48 md:pb-52 overflow-hidden">
      {/* Background Image & Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="Freight truck on highway at dusk"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Cinematic darken */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/40" />
        {/* Animated brand wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2E6B]/85 via-[#0F1D4A]/70 to-transparent animate-hero-gradient" />
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
        {/* Orange glow blob */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-orange/25 rounded-full blur-[140px] animate-blob" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-[#2A48A5]/30 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-[44px] sm:text-[56px] lg:text-[68px] font-extrabold text-white leading-[1.05] mb-7 tracking-tight flex flex-wrap gap-x-4 gap-y-2">
            {titleWords.map((word, index) => (
              <span key={index} className="overflow-hidden inline-block">
                <motion.span
                  custom={index}
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: (i) => ({
                      y: 0,
                      opacity: 1,
                      transition: { delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    }),
                  }}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${index === accentIndex ? "gradient-text" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p className="text-[18px] md:text-[19px] text-gray-300/95 mb-9 min-h-[28px] tracking-tight max-w-xl">
            {subChars.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.7 + index * 0.018 } },
                }}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                className="group relative overflow-hidden bg-gradient-to-r from-orange to-orange-dark text-white px-9 py-4 rounded-full text-[15px] font-semibold shadow-lg shadow-orange/30 hover:shadow-glow-orange transition-shadow flex items-center gap-2"
              >
                <span className="relative z-10">Get Free Quote</span>
                <motion.span
                  className="relative z-10 flex items-center"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </motion.button>
            </Link>

            <motion.a
              href="tel:+919560639966"
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
              className="group glass-dark text-white px-8 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 hover:bg-white/15 transition-colors"
            >
              <motion.span
                variants={{ hover: { rotate: [-15, 15, -10, 10, 0], transition: { duration: 0.5 } } }}
                whileHover="hover"
              >
                <Phone size={17} />
              </motion.span>
              Call Now
            </motion.a>
          </motion.div>

          {/* Trust Chips */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } } }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {trustChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <motion.div
                  key={chip.label}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-dark text-white/85 text-[12.5px] font-medium"
                >
                  <Icon size={14} className="text-orange" />
                  {chip.label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-44 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/55 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-white/0 via-white/60 to-orange animate-scroll-cue" />
      </motion.div>

      {/* Floating Stats Card */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 translate-y-[60%] z-20 px-6"
      >
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-premium border border-white/80 p-8 relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-navy/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200/70">
            {[
              { stat: stat1, label: "Shipments Delivered" },
              { stat: stat2, label: "Happy Clients" },
              { stat: stat3, label: "Cities Covered" },
            ].map((item, idx) => (
              <div key={idx} className="text-center pt-4 md:pt-0 group">
                <div ref={item.stat.ref} className="gradient-text text-[42px] md:text-[44px] font-bold leading-none mb-2 inline-block">
                  {item.stat.displayValue}
                </div>
                <div className="text-theme-muted font-medium text-[13px] tracking-wide uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
