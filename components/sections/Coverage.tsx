"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Globe2, ArrowUpRight, MapPin } from "lucide-react";

const regions = [
  {
    label: "North",
    accent: "01",
    cities: ["Delhi", "Noida", "Gurgaon", "Jaipur", "Lucknow", "Chandigarh"],
  },
  {
    label: "West",
    accent: "02",
    cities: ["Mumbai", "Pune", "Ahmedabad", "Surat", "Vadodara", "Indore"],
  },
  {
    label: "South",
    accent: "03",
    cities: ["Bengaluru", "Chennai", "Hyderabad", "Coimbatore", "Kochi"],
  },
  {
    label: "East",
    accent: "04",
    cities: ["Kolkata", "Bhubaneswar", "Patna", "Ranchi", "Guwahati"],
  },
];

const stats = [
  { value: "25+", label: "Cities Covered" },
  { value: "4", label: "Regions Active" },
  { value: "500+", label: "Routes Operated" },
  { value: "Pan-India", label: "Network Reach" },
];

export default function Coverage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-theme-light py-24 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20"
          >
            <Globe2 size={13} /> Network Reach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-[34px] md:text-[44px] font-bold text-navy-deep mb-4 tracking-tight text-balance leading-[1.1]"
          >
            A <span className="gradient-text">Growing Network</span> Across India
          </motion.h2>
          <p className="text-theme-muted max-w-2xl mx-auto text-[16.5px] leading-relaxed">
            Continuously expanding into emerging trade hubs across all four regions of India
          </p>
        </div>

        {/* Stat strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="relative bg-white rounded-2xl border border-gray-100 p-5 text-center group hover:shadow-soft transition-shadow"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange to-orange-dark scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400 rounded-l-2xl" />
              <div className="gradient-text text-[28px] md:text-[32px] font-bold leading-none mb-1.5">
                {s.value}
              </div>
              <div className="text-theme-muted text-[12px] uppercase tracking-wider font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regional grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {regions.map((region, idx) => (
            <motion.div
              key={region.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={!shouldReduceMotion ? { y: -6 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative bg-white rounded-3xl border border-gray-100 p-7 overflow-hidden hover:shadow-card-hover hover:border-orange/30 transition-all duration-300"
            >
              {/* Accent corner number */}
              <span className="absolute top-5 right-5 text-[11px] font-bold tracking-[0.2em] text-orange/50 group-hover:text-orange transition-colors">
                {region.accent}
              </span>

              {/* Gradient hover wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-transparent to-navy/0 group-hover:from-orange/[0.04] group-hover:to-navy/[0.04] transition-all duration-500" />

              {/* Top accent bar */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-orange via-orange-glow to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              {/* Full-card link to services */}
              <Link
                href="/services"
                aria-label={`Explore ${region.label} India logistics services`}
                className="absolute inset-0 z-20"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center shadow-md group-hover:shadow-glow-navy transition-shadow">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-[0.2em] text-orange uppercase">
                      Region {idx + 1}
                    </div>
                    <h3 className="text-navy-deep text-[20px] font-semibold tracking-tight leading-none">
                      {region.label} India
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {region.cities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-[14px] text-theme-muted group-hover:text-navy-deep transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange/60 group-hover:bg-orange transition-colors shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[12.5px]">
                  <span className="text-theme-muted font-medium">{region.cities.length} cities</span>
                  <span className="inline-flex items-center gap-1 text-navy-deep group-hover:text-orange font-semibold transition-colors">
                    Explore
                    <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-theme-muted text-[14px] mt-10"
        >
          Don&apos;t see your city?{" "}
          <a href="/contact" className="text-orange font-semibold hover:underline">
            Get in touch — chances are we serve there too.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
