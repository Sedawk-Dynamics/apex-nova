"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { getImageProps } from "next/image";
import { ArrowRight, Award, Globe2, Network, HeartHandshake, ShieldCheck, Truck, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { scaleIn } from "@/lib/animations";

const FloatingParticles = dynamic(() => import("@/components/ui/FloatingParticles"), { ssr: false });

const trustChips = [
  { icon: ShieldCheck, label: "12+ Years Expertise" },
  { icon: Globe2, label: "Domestic & International" },
  { icon: Truck, label: "Pan India Network" },
  { icon: MapPin, label: "Customer-First" },
];

// Quick trust-building highlights (replaces unverified statistics).
const highlights = [
  {
    icon: Award,
    title: "12+ Years Industry Expertise",
    desc: "Domestic transportation, international logistics & supply chain operations.",
  },
  {
    icon: Globe2,
    title: "Domestic & International",
    desc: "Strong command of transportation, freight coordination & logistics management.",
  },
  {
    icon: Network,
    title: "Pan India Network Development",
    desc: "Actively building a reliable nationwide logistics ecosystem.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Approach",
    desc: "Transparency, responsiveness and long-term customer satisfaction.",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = ["Logistics", "Company", "in", "Noida", "for", "Reliable", "B2B", "Transportation"];
  const accentIndex = 3; // "Noida" gets gradient
  const subText = "Built on 12+ Years of Industry Expertise";
  const subChars = subText.split("");

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center bg-navy-deep w-full pt-28 sm:pt-32 md:pt-36 pb-48 xs:pb-52 sm:pb-52 md:pb-60 overflow-hidden">
      {/* Background Image & Layered Overlays */}
      <div className="absolute inset-0 z-0">
        {/*
          Client-supplied home banners (Sep 2026), art-directed so only one file
          is ever downloaded: the 1983x793 wide crop on md+, the 1254x1254 square
          crop on mobile where a 2.5:1 image would lose nearly all of its height.
        */}
        {(() => {
          const common = {
            alt: "Apexnova Logistics multimodal freight — branded truck, cargo aircraft and container ship at sunset",
            fill: true,
            sizes: "100vw",
            priority: true,
          };
          const { props: desktop } = getImageProps({
            ...common,
            src: "/images/hero-banner-desktop.webp",
          });
          const { props: mobile } = getImageProps({
            ...common,
            src: "/images/hero-banner-mobile.webp",
            className: "w-full h-full object-cover object-center scale-105",
          });
          return (
            <picture>
              <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes="100vw" />
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img {...mobile} />
            </picture>
          );
        })()}
        {/* Cinematic darken — readable on the left, fully clear on the right to reveal the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/35 to-transparent" />
        {/* Animated brand wash — soft tint only on the far left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2E6B]/35 via-transparent to-transparent animate-hero-gradient" />
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 grid-bg radial-fade opacity-15" />
        {/* Orange glow blob — softer so it doesn't wash out the right-side image */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-orange/10 rounded-full blur-[140px] animate-blob" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-[#2A48A5]/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-[30px] xs:text-[40px] sm:text-[52px] md:text-[58px] lg:text-[64px] xl:text-[68px] font-extrabold text-white leading-[1.08] xs:leading-[1.05] mb-6 sm:mb-7 tracking-tight flex flex-wrap gap-y-2">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className="overflow-hidden inline-block mr-2 sm:mr-3 md:mr-4 last:mr-0"
              >
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
          <p className="text-[16px] xs:text-[17px] sm:text-[18px] md:text-[19px] text-gray-300/95 mb-4 sm:mb-5 min-h-[28px] tracking-tight max-w-xl">
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

          {/* Brand statement */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-[14.5px] sm:text-[15px] text-gray-400/90 leading-relaxed max-w-2xl mb-8 sm:mb-9"
          >
            Driven by Experience. Powered by Partnerships. Committed to Excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <motion.button
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                className="group relative overflow-hidden bg-gradient-to-r from-orange to-orange-dark text-white px-9 py-4 rounded-full text-[15px] font-semibold shadow-lg shadow-orange/30 hover:shadow-glow-orange transition-shadow flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span className="relative z-10">Get a Free Quote</span>
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

            <Link href="/contact" className="w-full sm:w-auto">
              <motion.span
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                className="group glass-dark text-white px-8 py-4 rounded-full text-[15px] font-semibold flex items-center justify-center gap-2.5 hover:bg-white/15 transition-colors w-full sm:w-auto"
              >
                Contact Our Team
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Link>
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
        className="absolute bottom-52 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/55 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-white/0 via-white/60 to-orange animate-scroll-cue" />
      </motion.div>

      {/* Floating Trust Highlights Card */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 translate-y-[42%] sm:translate-y-[48%] md:translate-y-[55%] z-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-premium border border-white/80 p-5 sm:p-7 md:p-8 relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-navy/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group flex flex-col gap-2.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center shadow-md shrink-0">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-navy-deep font-semibold text-[13px] sm:text-[14px] leading-snug tracking-tight mb-1">
                      {item.title}
                    </div>
                    <div className="text-theme-muted text-[11.5px] sm:text-[12px] leading-snug hidden sm:block">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
