"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Factory, Cpu, ShoppingCart, Store, Car, Package, Sparkles, Handshake } from "lucide-react";

// === Industries Served ===
const industries = [
  { name: "FMCG", icon: Package, blurb: "Fast-moving consumer goods distribution" },
  { name: "Manufacturing", icon: Factory, blurb: "Plant-to-warehouse heavy logistics" },
  { name: "Electronics", icon: Cpu, blurb: "Sensitive cargo with secure handling" },
  { name: "E-commerce", icon: ShoppingCart, blurb: "Reliable last-mile & fulfilment" },
  { name: "Retail", icon: Store, blurb: "Store replenishment & multi-stop runs" },
  { name: "Automobile", icon: Car, blurb: "Auto parts & components transport" },
];

// === Clients ===
// Drop real logo files into /public/images/clients/ and set `logo` to the path.
// Until then, the placeholder pill renders with the company name.
const clients: { name: string; logo?: string }[] = [
  { name: "Client One" },
  { name: "Client Two" },
  { name: "Client Three" },
  { name: "Client Four" },
  { name: "Client Five" },
  { name: "Client Six" },
];

// === Transport / Service Partners ===
// Drop real logo files into /public/images/partners/ and set `logo` to the path.
const partners: { name: string; logo?: string }[] = [
  { name: "Partner One" },
  { name: "Partner Two" },
  { name: "Partner Three" },
  { name: "Partner Four" },
  { name: "Partner Five" },
];

function LogoTile({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="group relative shrink-0 h-20 w-40 md:h-24 md:w-48 rounded-2xl border border-gray-200 bg-white flex items-center justify-center px-5 transition-all duration-300 hover:border-orange/40 hover:shadow-soft">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={160}
          height={64}
          className="max-h-12 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
      ) : (
        <span className="text-[12px] md:text-[13px] font-semibold tracking-wide text-navy-deep/60 group-hover:text-navy-deep transition-colors text-center">
          {name}
        </span>
      )}
    </div>
  );
}

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
            <span className="gradient-text">Every Industry</span>
          </motion.h2>
          <p className="text-theme-muted max-w-2xl mx-auto text-[16px] leading-relaxed">
            From fast-moving consumer goods to heavy manufacturing — we tailor freight workflows for every sector we serve.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24"
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
                <div className="text-navy-deep font-semibold text-[15px] tracking-tight mb-1">
                  {industry.name}
                </div>
                <div className="text-[12.5px] text-theme-muted leading-snug hidden md:block">
                  {industry.blurb}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========= CLIENTS ========= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 text-orange text-[11.5px] font-bold tracking-[0.25em] uppercase mb-3 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <Handshake size={12} /> Trusted Clients
            </span>
            <h3 className="text-[24px] md:text-[30px] font-bold text-navy-deep tracking-tight">
              Brands that move with Apexnova
            </h3>
          </motion.div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex gap-5 w-max"
              animate={!shouldReduceMotion ? { x: ["0%", "-50%"] } : {}}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <LogoTile key={`${client.name}-${i}`} name={client.name} logo={client.logo} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ========= PARTNERS ========= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 text-orange text-[11.5px] font-bold tracking-[0.25em] uppercase mb-3 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <Handshake size={12} /> Service Partners
            </span>
            <h3 className="text-[24px] md:text-[30px] font-bold text-navy-deep tracking-tight">
              Powered by a strong network
            </h3>
          </motion.div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex gap-5 w-max"
              animate={!shouldReduceMotion ? { x: ["-50%", "0%"] } : {}}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, i) => (
                <LogoTile key={`${partner.name}-${i}`} name={partner.name} logo={partner.logo} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
