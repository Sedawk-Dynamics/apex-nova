"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Building2, Sparkles, ShieldCheck, ArrowRight, Quote } from "lucide-react";

const pillars = [
  "Domestic Transportation",
  "International Logistics",
  "Freight Operations",
  "Supply Chain Management",
  "Customer Relationship Management",
];

export default function AboutIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-white pt-40 sm:pt-44 md:pt-52 pb-20 sm:pb-24 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 grid-bg-light opacity-30 pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-[460px] h-[460px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — Intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%]"
          >
            <span className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <Building2 size={13} /> About Apexnova Logistics
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-navy-deep mb-6 tracking-tight text-balance leading-[1.1]">
              Noida-Based B2B Logistics for{" "}
              <span className="gradient-text">Domestic &amp; International Shipments</span>
            </h2>
            <div className="space-y-4 text-theme-muted text-[15.5px] leading-relaxed max-w-2xl">
              <p>
                ApexNova Logistics India Pvt. Ltd. is a Noida-based logistics and transportation
                company helping businesses move goods across India and international destinations.
                With 12+ years of industry experience in domestic transportation, freight
                operations, international logistics and supply chain management, we provide FTL,
                PTL, express cargo, pan-India transportation, air freight, ocean freight and
                customized logistics solutions for businesses shipping across the globe.
              </p>
              <p>
                As a B2B transportation and logistics company in Noida, we support businesses with
                transportation and freight requirements across domestic and international markets.
                Whether you need to move a full truckload within India, arrange transportation for
                smaller consignments, move time-sensitive cargo or coordinate international
                shipments by air or ocean, our team works to provide a logistics solution aligned
                with your shipment requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-navy-deep/80 text-[12.5px] font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={!shouldReduceMotion ? { y: -4 } : {}}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-[#0F1D4A] p-8 sm:p-10 overflow-hidden shadow-premium border border-white/10">
              <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange/20 rounded-full blur-[100px]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-orange text-[11.5px] font-bold tracking-[0.25em] uppercase mb-5 px-3.5 py-1.5 rounded-full bg-orange/15 border border-orange/30">
                  <Sparkles size={12} /> Our Commitment
                </span>

                <Quote className="text-orange/60 mb-3" size={30} />
                <p className="text-white text-[17px] sm:text-[18px] leading-relaxed font-medium mb-5">
                  Every shipment, every partnership, and every customer relationship is guided by
                  professionalism, accountability, transparency, and compliance.
                </p>
                <p className="text-gray-300/90 text-[14.5px] leading-relaxed mb-7">
                  We are committed to delivering reliable logistics solutions, fostering trusted
                  partnerships, and creating long-term value through consistent service excellence,
                  ethical business practices, and customer-focused operations.
                </p>

                <div className="flex items-center gap-2.5 text-white/85 text-[13.5px] font-medium pt-6 border-t border-white/10">
                  <ShieldCheck size={18} className="text-orange" />
                  Driven by Experience. Powered by Partnerships.
                </div>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 mt-6 text-[14px] font-semibold text-orange hover:text-orange-glow transition-colors"
                >
                  Learn more about us
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
