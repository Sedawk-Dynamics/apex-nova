"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const testimonials = [
  {
    quote:
      "Apexnova Logistics has shown great professionalism and commitment towards timely deliveries. Their approach is reliable and customer-focused, making them a promising logistics partner.",
    author: "Ashish Pandey",
    role: "Operations Manager, Trading Business",
    initials: "AP",
  },
  {
    quote:
      "Working with Apexnova has streamlined our supply chain end-to-end. The transparency, real-time visibility, and dedicated support are exactly what enterprise operations demand.",
    author: "Rahul Mehta",
    role: "Supply Chain Lead, Manufacturing",
    initials: "RM",
  },
  {
    quote:
      "From NCR-local pickups to pan-India dispatches, Apexnova has been our consistent partner. Their team treats every shipment with the seriousness of their own business.",
    author: "Priya Sharma",
    role: "Logistics Director, E-commerce",
    initials: "PS",
  },
];

// Approximate city dot positions on the India map (relative %)
const mapDots = [
  { top: "26%", left: "44%", label: "Delhi", delay: 0 },
  { top: "52%", left: "32%", label: "Mumbai", delay: 0.5 },
  { top: "72%", left: "48%", label: "Bengaluru", delay: 1 },
  { top: "70%", left: "58%", label: "Chennai", delay: 1.5 },
  { top: "44%", left: "70%", label: "Kolkata", delay: 2 },
  { top: "60%", left: "50%", label: "Hyderabad", delay: 2.5 },
];

export default function Nationwide() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const stat1 = useCountUp(500, 2000, "+");
  const stat2 = useCountUp(100, 2000, "+");
  const stat3 = useCountUp(25, 2000, "+");

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  const t = testimonials[active];

  return (
    <section className="relative bg-navy-deep py-24 overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-orange/15 rounded-full blur-[160px] animate-blob" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#2A48A5]/30 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left */}
          <div className="w-full lg:w-[45%] z-10 space-y-10">
            <div>
              <span className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30">
                <Star size={13} className="fill-orange" /> Trusted Network
              </span>
              <h2 className="text-[34px] md:text-[46px] font-bold text-white mb-9 leading-[1.08] tracking-tight text-balance">
                Trusted by Businesses <span className="gradient-text">Nationwide</span>
              </h2>

              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-2">
                {[
                  { stat: stat1, label: "Shipments" },
                  { stat: stat2, label: "Clients" },
                  { stat: stat3, label: "Cities" },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div ref={item.stat.ref} className="text-orange text-[34px] md:text-[40px] font-bold mb-1 leading-none">
                      {item.stat.displayValue}
                    </div>
                    <div className="text-gray-400 text-[12.5px] uppercase tracking-wider font-medium">
                      {item.label}
                    </div>
                    <div className="absolute -bottom-2 left-0 h-px w-12 bg-gradient-to-r from-orange to-transparent" />
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-dark rounded-2xl p-7 relative"
                >
                  <Quote className="absolute top-6 left-6 text-orange/70" size={28} />
                  <p className="text-white text-[16.5px] leading-relaxed pl-12 mb-6 italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pl-12">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange to-orange-dark text-white flex items-center justify-center font-bold text-sm shadow-glow-orange">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold tracking-tight">{t.author}</div>
                      <div className="text-gray-400 text-[12.5px]">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Pagination dots */}
              <div className="flex items-center gap-2 mt-5 ml-1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-8 bg-orange" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-[55%] relative flex justify-center mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-orange opacity-15 blur-[120px] rounded-full w-3/4 h-3/4 m-auto" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[620px] aspect-[4/5]"
            >
              <Image
                src="/images/map.webp"
                alt="Apexnova Logistics India Coverage Map"
                width={620}
                height={770}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(244,121,32,0.25)]"
              />

              {/* Animated city dots */}
              {mapDots.map((dot, i) => (
                <motion.div
                  key={dot.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 200, damping: 18 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: dot.top, left: dot.left }}
                >
                  <div className="relative">
                    <span
                      className="absolute inset-0 rounded-full bg-orange opacity-60 animate-ping-soft"
                      style={{ animationDelay: `${dot.delay}s` }}
                    />
                    <span className="relative block w-2.5 h-2.5 rounded-full bg-orange ring-2 ring-orange/30" />
                  </div>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10.5px] font-semibold text-white/85 whitespace-nowrap bg-navy-deep/70 px-1.5 py-0.5 rounded">
                    {dot.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
