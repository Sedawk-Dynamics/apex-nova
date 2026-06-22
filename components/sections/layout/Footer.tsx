"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, ArrowRight, Award, Globe2, Truck, Headphones, Sparkles } from "lucide-react";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { SOCIALS, MAP_DIRECTIONS_URL } from "@/lib/site";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const services = [
  { name: "Full Truck Load (FTL)", href: "/services" },
  { name: "Part Truck Load (PTL)", href: "/services" },
  { name: "Express Cargo Services", href: "/services" },
  { name: "Pan India Transportation", href: "/services" },
  { name: "Supply Chain Support", href: "/services" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Get a Quote", href: "/quote" },
  { name: "Contact Us", href: "/contact" },
];

const trustBadges = [
  { icon: Award, label: "12+ Years Expertise" },
  { icon: Globe2, label: "Domestic & International" },
  { icon: Truck, label: "Pan-India Network" },
  { icon: Headphones, label: "Dedicated Support" },
];

const socials = [
  { icon: LinkedinIcon, href: SOCIALS.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: SOCIALS.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SOCIALS.instagram, label: "Instagram" },
  { icon: TwitterIcon, href: SOCIALS.twitter, label: "X / Twitter" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative bg-gradient-to-b from-navy via-navy-deep to-[#0A1538] text-gray-400 overflow-hidden">
      {/* === Ambient background system === */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[160px] pointer-events-none animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2A48A5]/15 rounded-full blur-[160px] pointer-events-none animate-blob" style={{ animationDelay: "4s" }} />

      {/* ============== PRE-FOOTER CTA ============== */}
      <section className="relative pt-20 pb-10 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#1B2E6B]/70 via-[#0F1D4A]/90 to-[#0A1538] p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-premium">
            {/* Inner ambient + grid */}
            <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            <div className="absolute -top-32 -right-24 w-[420px] h-[420px] bg-orange/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -left-24 w-[360px] h-[360px] bg-[#2A48A5]/30 rounded-full blur-[120px]" />

            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange/70 to-transparent" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 text-orange text-[11.5px] font-bold tracking-[0.3em] uppercase mb-5 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/25"
                >
                  <Sparkles size={12} /> Let&apos;s Move Forward
                </motion.span>
                <h3 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.08] text-balance">
                  Ready to Move Your{" "}
                  <span className="gradient-text">Business Faster</span>?
                </h3>
                <p className="text-gray-300/90 mt-5 max-w-xl text-[15.5px] leading-relaxed">
                  Get a custom logistics quote with transparent pricing, dedicated support,
                  and a growing pan-India network — backed by 12+ years of domestic and
                  international logistics expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
                <Link href="/quote">
                  <motion.button
                    whileHover={!shouldReduceMotion ? { scale: 1.04 } : {}}
                    whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                    className="group relative overflow-hidden bg-gradient-to-r from-orange to-orange-dark text-white px-7 py-4 rounded-full text-[14.5px] font-semibold flex items-center justify-center gap-2 shadow-glow-orange w-full"
                  >
                    <span className="relative z-10">Get Free Quote</span>
                    <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  </motion.button>
                </Link>
                <a
                  href="tel:+919560639966"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-[14.5px] border border-white/20 hover:border-white/50 hover:bg-white/[0.06] backdrop-blur-sm transition-colors"
                >
                  <Phone size={15} /> Talk to Us
                </a>
              </div>
            </div>

            {/* Trust strip */}
            <div className="relative mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange shrink-0">
                      <Icon size={17} />
                    </div>
                    <div className="text-white/80 text-[13.5px] font-medium tracking-tight">
                      {badge.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============== FIND US (MAP) ============== */}
      <section className="relative px-6 pt-6 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
            <div className="relative bg-navy-deep">
              <GoogleMapEmbed
                title="Apexnova Logistics — Greater Noida HQ"
                className="!rounded-none h-[240px] sm:h-[280px] lg:h-[300px]"
              />
            </div>
            <div className="relative p-7 lg:p-9 flex flex-col justify-center bg-gradient-to-br from-[#0F1D4A] to-[#0A1538]">
              <span className="inline-flex items-center gap-2 text-orange text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
                <MapPin size={12} /> Find Us
              </span>
              <h3 className="text-white text-[22px] md:text-[26px] font-bold tracking-tight mb-3 leading-tight">
                Visit Our Office
              </h3>
              <p className="text-gray-300 text-[13.5px] leading-relaxed mb-5">
                <strong className="text-white font-semibold">Corporate:</strong> 3rd Floor, Plot No. A-280, Transport Nagar, Sector 69, Noida, Uttar Pradesh &ndash; 201301
              </p>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-orange text-white text-[13px] font-semibold hover:bg-orange-dark transition-colors shadow-md"
              >
                <MapPin size={14} /> Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============== MAIN FOOTER ============== */}
      <div className="relative pt-14 pb-8">
        {/* Subtle top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-10 lg:gap-12 mb-14"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative inline-block bg-white p-3 rounded-2xl shadow-soft overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-orange/20 to-transparent pointer-events-none" />
                <Image src="/images/apexnovahorizontallogo.png" alt="Apexnova Logistics India Pvt. Ltd." width={1126} height={267} className="relative h-14 sm:h-16 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-[14.5px] leading-relaxed text-gray-400 max-w-sm">
              Built on 12+ years of domestic and international logistics expertise,
              Apexnova Logistics is committed to delivering reliable transportation
              solutions, fostering trusted partnerships, and creating long-term value
              for businesses across India.
            </p>

            {/* Mini location chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12.5px] text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange opacity-75 animate-ping-soft" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
              </span>
              Serving NCR & Pan India
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={!shouldReduceMotion ? { y: -3, scale: 1.08 } : {}}
                  whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="group relative w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors overflow-hidden"
                >
                  {/* Liquid hover wash */}
                  <span className="absolute inset-0 bg-gradient-to-br from-orange to-orange-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Glow */}
                  <span className="absolute inset-0 rounded-xl shadow-glow-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">
                    <Icon size={16} />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white text-[13px] font-semibold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="relative">
                      {l.name}
                      <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-to-r from-orange to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                    </span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} className="sm:col-span-1 lg:col-span-3">
            <h3 className="text-white text-[13px] font-semibold uppercase tracking-[0.2em] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="relative">
                      {s.name}
                      <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-to-r from-orange to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                    </span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-white text-[13px] font-semibold uppercase tracking-[0.2em] mb-6">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <div className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange shrink-0 group-hover:shadow-glow-orange transition-shadow">
                    <MapPin size={15} />
                  </div>
                  <div className="text-[13.5px] text-gray-400 leading-relaxed">
                    3rd Floor, Plot No. A-280, Transport Nagar,
                    <br />
                    Sector 69, Noida, Uttar Pradesh – 201301, India
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="tel:+919560639966"
                  className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange shrink-0 group-hover:bg-orange group-hover:text-white group-hover:border-orange group-hover:shadow-glow-orange transition-all">
                    <Phone size={15} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Phone</span>
                    <span className="text-[14px] text-gray-300 group-hover:text-white transition-colors font-medium">
                      +91 9560639966
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@apexnovalogistics.com"
                  className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange shrink-0 group-hover:bg-orange group-hover:text-white group-hover:border-orange group-hover:shadow-glow-orange transition-all">
                    <Mail size={15} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Email</span>
                    <span className="text-[14px] text-gray-300 group-hover:text-white transition-colors break-all font-medium">
                      info@apexnovalogistics.com
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ============== BOTTOM STRIP ============== */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative border-t border-white/10 pt-7">
            {/* Subtle accent dot center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange rounded-full shadow-glow-orange" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-gray-500">
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <span>© {new Date().getFullYear()} Apexnova Logistics India Pvt. Ltd.</span>
                <span className="hidden md:inline w-1 h-1 bg-gray-600 rounded-full" />
                <span>All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/" className="link-underline hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/" className="link-underline hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
