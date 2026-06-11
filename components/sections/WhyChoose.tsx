"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, ShieldCheck, IndianRupee, HeadphonesIcon, Sparkles, Volume2, VolumeX } from "lucide-react";
import { slideRight } from "@/lib/animations";

const features = [
  { icon: Clock, label: "On-Time Deliveries", desc: "99% punctuality across our routes" },
  { icon: ShieldCheck, label: "Safe & Secure Handling", desc: "Insured cargo with end-to-end care" },
  { icon: IndianRupee, label: "Affordable Pricing", desc: "Transparent rates, no hidden fees" },
  { icon: HeadphonesIcon, label: "24/7 Customer Support", desc: "Always reachable, always responsive" },
];

export default function WhyChoose() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      // Unmuting — make sure playback continues with audio
      video.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <div className="w-full lg:w-[45%]">
            <span className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <Sparkles size={13} /> Our Advantage
            </span>
            <h2 className="text-[34px] md:text-[44px] font-bold text-navy-deep mb-5 tracking-tight text-balance leading-[1.1]">
              Why Choose <span className="gradient-text">Apexnova Logistics</span>
            </h2>
            <p className="text-theme-muted mb-12 text-[16.5px] max-w-xl leading-relaxed">
              We combine national reach with local expertise to deliver unparalleled logistics solutions — built on transparency, technology, and trust.
            </p>

            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.07 } },
                    }}
                    whileHover={!shouldReduceMotion ? { y: -4 } : {}}
                    className="group relative bg-white border border-gray-100 rounded-2xl p-5 transition-all duration-300 overflow-hidden hover:shadow-soft hover:border-orange/30"
                  >
                    {/* Hover wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-transparent to-navy/0 group-hover:from-orange/[0.04] group-hover:to-navy/[0.04] transition-all duration-500" />
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange to-orange-dark scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-400 rounded-r" />

                    <div className="relative flex items-start gap-4">
                      <div className="bg-gradient-to-br from-orange/15 to-orange/5 w-12 h-12 rounded-xl flex items-center justify-center text-orange shrink-0 group-hover:shadow-glow-orange transition-shadow">
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="font-semibold text-navy-deep mb-1 tracking-tight">{feature.label}</div>
                        <div className="text-[14px] sm:text-[13px] text-theme-muted leading-relaxed">{feature.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight}
            className="w-full lg:w-[55%] relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange/30 via-transparent to-navy/30 rounded-[40px] blur-2xl opacity-60" />
            <motion.div
              animate={!shouldReduceMotion ? { y: [0, -14, 0] } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
              className="relative aspect-video rounded-[32px] overflow-hidden shadow-premium will-change-transform bg-navy-deep"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/worker-warehouse.jpg"
                className="block w-full h-full object-cover"
              >
                <source src="/vedios/backgroundvedio.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />

              {/* Sound toggle */}
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Unmute video" : "Mute video"}
                aria-pressed={!muted}
                className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-full bg-navy-deep/60 hover:bg-navy-deep/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </motion.div>

            {/* Trusted badge — placed below the video, separate */}
            <div className="mt-7 glass p-5 rounded-2xl shadow-premium">
              <div className="flex items-center gap-2.5 text-navy-deep font-bold text-lg mb-1 tracking-tight">
                <ShieldCheck className="text-orange" size={22} />
                Trusted Since Day One
              </div>
              <p className="text-sm text-theme-muted">Serving 100+ businesses nationwide</p>
            </div>

            <motion.div
              animate={!shouldReduceMotion ? { y: [0, -10, 0] } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl shadow-premium hidden md:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping-soft" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </div>
                <span className="text-[13px] font-semibold text-navy-deep">Live Operations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
