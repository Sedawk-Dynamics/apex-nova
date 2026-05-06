"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { useCountUp } from "@/hooks/useCountUp";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { scaleIn, fadeUp } from "@/lib/animations";

const FloatingParticles = dynamic(() => import("@/components/ui/FloatingParticles"), { ssr: false });

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { x: parallaxX, y: parallaxY } = useMouseParallax(0.02);

  const stat1 = useCountUp(500, 2000, "+");
  const stat2 = useCountUp(100, 2000, "+");
  const stat3 = useCountUp(25, 2000, "+");

  const titleText = "Fast, Secure & Reliable Logistics Across India";
  const words = titleText.split(" ");
  const subText = "Delivering Your Business, On Time – Every Time.";
  const subChars = subText.split("");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy w-full pt-10 pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="Freight truck on highway at dusk"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2E6B] via-[#0F1D4A] to-transparent opacity-95 animate-hero-gradient" />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/10"
          >
            <motion.span
              animate={!shouldReduceMotion ? { scale: [1, 1.03, 1], opacity: [0.9, 1, 0.9] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              🚚 Pan India Logistics
            </motion.span>
          </motion.div>

          <h1 className="text-[42px] sm:text-[52px] font-extrabold text-white leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-1">
            {words.map((word, index) => (
              <span key={index} className="overflow-hidden inline-block">
                <motion.span
                  custom={index}
                  variants={{
                    hidden: { y: "100%" },
                    visible: (i) => ({
                      y: 0,
                      transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    })
                  }}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="text-[18px] text-gray-300 mb-8 min-h-[28px]">
            {subChars.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.6 + index * 0.03 } }
                }}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
                whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                className="group relative overflow-hidden bg-orange text-white px-8 py-3.5 rounded-full text-[15px] font-semibold transition-colors shadow-lg flex items-center gap-2"
              >
                <span className="relative z-10">Get Free Quote</span>
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
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </motion.button>
            </Link>
            
            <motion.a
              href="tel:+919560639966"
              whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
              className="group border-2 border-white text-white px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <motion.span
                variants={{
                  hover: { rotate: [-15, 15, -10, 10, 0], transition: { duration: 0.5 } }
                }}
                whileHover="hover"
              >
                <Phone size={18} />
              </motion.span>
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-6"
      >
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center pt-4 md:pt-0 relative group">
              <div ref={stat1.ref} className="text-orange text-4xl font-bold mb-1">{stat1.displayValue}</div>
              <div className="text-gray-500 font-medium text-sm">Shipments Delivered</div>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ delay: 1, duration: 0.8 }} 
                className="absolute -bottom-4 left-0 h-0.5 bg-orange origin-left" 
              />
            </div>
            <div className="text-center pt-4 md:pt-0 relative group">
              <div ref={stat2.ref} className="text-orange text-4xl font-bold mb-1">{stat2.displayValue}</div>
              <div className="text-gray-500 font-medium text-sm">Happy Clients</div>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ delay: 1.2, duration: 0.8 }} 
                className="absolute -bottom-4 left-0 h-0.5 bg-orange origin-left" 
              />
            </div>
            <div className="text-center pt-4 md:pt-0 relative group">
              <div ref={stat3.ref} className="text-orange text-4xl font-bold mb-1">{stat3.displayValue}</div>
              <div className="text-gray-500 font-medium text-sm">Cities Covered</div>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ delay: 1.4, duration: 0.8 }} 
                className="absolute -bottom-4 left-0 h-0.5 bg-orange origin-left" 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
