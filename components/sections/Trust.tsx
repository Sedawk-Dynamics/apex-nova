"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Factory,
  Package,
  Store,
  ShoppingCart,
  Shirt,
  Cpu,
  Car,
  Wrench,
  ShoppingBag,
  Globe2,
  Sparkles,
  Handshake,
  Truck,
  Users,
  Building2,
} from "lucide-react";

// === Industries Served ===
const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "FMCG", icon: Package },
  { name: "Retail", icon: Store },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Textile", icon: Shirt },
  { name: "Electronics", icon: Cpu },
  { name: "Automotive", icon: Car },
  { name: "Engineering", icon: Wrench },
  { name: "Consumer Goods", icon: ShoppingBag },
  { name: "Import & Export", icon: Globe2 },
];

// === Partnership types we are actively building ===
const partnerships = [
  { name: "Transport Partners", icon: Truck, desc: "Reliable carriers expanding our reach across India." },
  { name: "Fleet Operators", icon: Building2, desc: "Trusted operators powering dependable capacity." },
  { name: "Logistics Associates", icon: Users, desc: "Collaborators who share our service standards." },
  { name: "Business Organizations", icon: Handshake, desc: "Long-term relationships built on mutual growth." },
];

export default function Trust() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ========= INDUSTRIES SERVED ========= */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20"
          >
            <Sparkles size={13} /> Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-[44px] font-bold text-navy-deep mb-4 tracking-tight text-balance leading-[1.1]"
          >
            Logistics Solutions for{" "}
            <span className="gradient-text">Every Sector</span>
          </motion.h2>
          <p className="text-theme-muted max-w-2xl mx-auto text-[16px] leading-relaxed">
            From manufacturing and FMCG to e-commerce and import &amp; export — we support businesses across diverse sectors.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-24"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={!shouldReduceMotion ? { y: -6 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative bg-white rounded-2xl border border-gray-100 p-5 text-center hover:shadow-card-hover hover:border-orange/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-orange via-orange-glow to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center shadow-md group-hover:shadow-glow-navy transition-shadow">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div className="text-navy-deep font-semibold text-[14px] tracking-tight">
                  {industry.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========= BUILDING TRUSTED PARTNERSHIPS ========= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-orange text-[11.5px] font-bold tracking-[0.25em] uppercase mb-3 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <Handshake size={12} /> Partnerships
            </span>
            <h3 className="text-[26px] md:text-[34px] font-bold text-navy-deep tracking-tight mb-4 leading-tight">
              Building Trusted Partnerships Across India
            </h3>
            <p className="text-theme-muted text-[15.5px] leading-relaxed">
              As a growing logistics company, we are actively expanding our network of transport
              partners, fleet operators, logistics associates, and business organizations across India.
              Our focus is on creating long-term partnerships based on trust, reliability,
              professionalism, and mutual growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {partnerships.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  whileHover={!shouldReduceMotion ? { y: -6 } : {}}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-card-hover hover:border-orange/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange to-orange-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-400 rounded-r" />
                  <div className="w-12 h-12 mb-4 rounded-xl bg-orange/10 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-navy-deep font-semibold text-[16px] tracking-tight mb-1.5">
                    {p.name}
                  </h4>
                  <p className="text-theme-muted text-[13.5px] leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
