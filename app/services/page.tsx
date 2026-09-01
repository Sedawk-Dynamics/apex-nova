"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  ChevronDown,
  HelpCircle,
  Globe2,
  Plane,
  Ship,
  PackageCheck,
  FileCheck,
  Layers,
  Users,
  Settings,
} from "lucide-react";

const faqs = [
  {
    q: "What types of cargo do you handle?",
    a: "We move freight for manufacturing, FMCG, retail, e-commerce, textile, electronics, automotive, engineering, consumer goods, and import & export businesses — supported by a fleet ranging from LCVs and pickup trucks to 32 ft and 40 ft containers and trailers.",
  },
  {
    q: "How quickly can I get a quote and dispatch?",
    a: "Submit our quote form or call +91 9560639966 — our team responds promptly with the best rate for your shipment. Quick vehicle placement is available for express and on-demand requirements.",
  },
  {
    q: "Do you provide shipment coordination and proof of delivery?",
    a: "Yes. We provide continuous shipment coordination, transit updates, and POD (Proof of Delivery) documentation after every successful delivery, with GST-compliant invoicing.",
  },
  {
    q: "Which areas do you cover across India?",
    a: "We are based in Noida (NCR) and operate pan-India with a growing network across all four regions — North, West, South, and East — which we continue to expand.",
  },
  {
    q: "Do you support international logistics?",
    a: "Yes. Alongside our domestic transportation services, we support businesses with international logistics and freight requirements — including air freight, ocean freight, import & export logistics and customs coordination support.",
  },
  {
    q: "Do you provide both FTL and PTL transportation?",
    a: "Yes. ApexNova provides both Full Truck Load (FTL) and Part Truck Load (PTL) transportation for business shipments. The suitable option depends on the shipment size, vehicle requirement and transportation needs.",
  },
  {
    q: "Do you provide air freight and sea freight services?",
    a: "Yes. ApexNova provides air freight and sea freight support for businesses moving commercial shipments between India and international destinations. The suitable option depends on the cargo, destination and required transit time.",
  },
  {
    q: "Do you provide logistics services from Noida to other parts of India?",
    a: "Yes. Based in Noida, ApexNova coordinates business transportation from Noida and Delhi NCR to destinations across India. We also support international shipments moving between India and overseas markets.",
  },
];

const servicesData = [
  {
    id: "01",
    title: "Full Truck Load (FTL) Services",
    desc: "For larger shipments that need a dedicated vehicle, our FTL service provides direct transportation from the pickup point to the delivery location. It is suitable for full loads and high-volume business shipments.",
    features: ["Dedicated Vehicle", "Direct Point-to-Point", "High-Volume Shipments"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Part Truck Load (PTL) Services",
    desc: "PTL works well for businesses with smaller consignments that do not require an entire truck. It gives businesses the option to use the vehicle space required for their shipment instead of booking a full vehicle.",
    features: ["Pay for Space Used", "Smaller Consignments", "Consolidated Shipping"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Express Cargo Services",
    desc: "For shipments that need to move within a shorter timeframe, our express cargo service provides priority transportation for business requirements. The movement is planned around the shipment, route and required delivery timeline.",
    features: ["Priority Handling", "Shorter Timeframes", "Route-Planned Movement"],
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Pan-India Transportation",
    desc: "ApexNova coordinates transportation between Noida, Delhi NCR and major commercial and industrial locations across India. We support business shipments across North, South, East and West India.",
    features: ["Noida & Delhi NCR Origin", "Commercial & Industrial Hubs", "North, South, East & West"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop"
  }
];

// Client-supplied services page sections (Sep 2026).
const internationalServices = [
  {
    icon: Globe2,
    title: "International Freight Forwarding",
    desc: "As an international freight forwarding company in Noida, ApexNova helps businesses coordinate commercial shipments between India and international destinations. We work with the relevant transportation and logistics partners according to the shipment requirements.",
  },
  {
    icon: Plane,
    title: "Air Freight Forwarding",
    desc: "For international shipments where air transportation is the preferred option, ApexNova provides air freight support based on the cargo, destination and required transit time.",
  },
  {
    icon: Ship,
    title: "Sea Freight Forwarding",
    desc: "Our sea freight services help businesses move commercial cargo between India and international markets. Sea transportation is a suitable option for many larger shipments where transit time and cargo requirements allow for ocean freight.",
  },
  {
    icon: PackageCheck,
    title: "Import & Export Logistics",
    desc: "Businesses involved in international trade need coordination at different stages of a shipment. ApexNova supports the logistics involved in moving commercial goods between India and international destinations.",
  },
  {
    icon: FileCheck,
    title: "Customs Coordination",
    desc: "International shipments may involve customs requirements during the movement. ApexNova coordinates with the relevant parties to support the logistics process around these requirements.",
  },
];

const supplyChainServices = [
  {
    icon: Layers,
    title: "Supply Chain Management",
    desc: "We help businesses coordinate the movement of goods between different points in their supply chain, including suppliers, manufacturers, warehouses, distributors and other business locations.",
  },
  {
    icon: Users,
    title: "Vendor Management",
    desc: "A shipment can involve more than one transportation partner. ApexNova coordinates with fleet and transport vendors for vehicle availability, shipment movement, updates and other requirements during the shipment.",
  },
  {
    icon: Settings,
    title: "Customized Logistics Solutions",
    desc: "Some businesses have regular routes and shipment schedules, while others have requirements that change from one shipment to another. ApexNova can arrange transportation and logistics support around the shipment volume, route, frequency, destination and other business requirements.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen pb-0">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-b from-navy to-navy-deep min-h-[44vh] relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[140px] animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-white/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="relative z-10 text-center mt-20">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-4 tracking-tight text-balance max-w-4xl mx-auto px-6"
          >
            Domestic and <span className="gradient-text">International</span> Logistics Services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 glass-dark text-white/85 text-[12.5px] font-medium px-4 py-1.5 rounded-full"
          >
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-orange">Services</span>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Comprehensive Logistics Solutions for Businesses
          </h2>
          <p className="text-gray-600 text-[17px] leading-relaxed">
            ApexNova provides B2B logistics services for businesses moving goods within India and to
            international destinations. Our services include FTL, PTL, express cargo, pan-India
            transportation, international freight forwarding, air freight, ocean freight and supply
            chain support.
          </p>
        </div>
      </section>

      {/* DOMESTIC TRANSPORTATION SERVICES */}
      {/* overflow-hidden: the cards slide in from x: ±50 — without clipping, the
          off-screen ones widen the document and add a horizontal scrollbar. */}
      <section className="bg-white pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              Within India
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Domestic Transportation Services
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Based in Noida, ApexNova handles transportation requirements for businesses across
              Delhi NCR and other parts of India. We work with businesses that need regular
              transportation, bulk movement, smaller consignments or faster movement for
              time-sensitive shipments.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`scroll-mt-28 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-[280px] group hover:shadow-md transition-shadow`}
              >
                <div className="w-full lg:w-1/2 relative min-h-[280px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Apexnova Logistics`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    {service.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle size={18} className="text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/quote"
                      className="inline-block bg-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-dark transition-colors shadow-sm"
                    >
                      Get Quote for This Service
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INTERNATIONAL FREIGHT & LOGISTICS SERVICES */}
      <section className="bg-theme-light py-20 scroll-mt-28" id="international-freight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              Across Borders
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              International Freight &amp; Logistics Services
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              ApexNova also handles international logistics requirements alongside its domestic
              transportation services. We coordinate commercial shipments between India and
              international markets through freight forwarding, air freight, ocean freight and
              import-export logistics.
            </p>
          </div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {internationalServices.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-7 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-orange via-orange-glow to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center mb-5 shadow-md shrink-0">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-navy-deep mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* SUPPLY CHAIN & LOGISTICS SUPPORT */}
      <section className="bg-white py-20 scroll-mt-28" id="supply-chain">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              Beyond Transportation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Supply Chain &amp; Logistics Support
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Transportation is one part of a business&rsquo;s overall logistics requirements. ApexNova
              works with businesses where shipment movement involves suppliers, manufacturers, transport
              partners, warehouses, distributors and other locations.
            </p>
          </div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {supplyChainServices.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-7 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-orange via-orange-glow to-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center mb-5 shadow-md shrink-0">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-navy-deep mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* COMPARISON TABLE */}
      <section className="bg-theme-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Which Service is Right for You?
            </h2>
          </div>
          
          {/* Desktop: comparison table */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <div className="min-w-[800px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-5 font-semibold border-b border-navy-light w-1/4">Feature</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">FTL</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">PTL</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">Express</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">Pan India</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">Custom</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="p-5 font-medium">Ideal For</td>
                    <td className="p-5 text-center text-sm">Bulk Load</td>
                    <td className="p-5 text-center text-sm">Small Load</td>
                    <td className="p-5 text-center text-sm">Urgent</td>
                    <td className="p-5 text-center text-sm">Nationwide</td>
                    <td className="p-5 text-center text-sm">B2B Needs</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-5 font-medium">Minimum Load</td>
                    <td className="p-5 text-center text-sm">Full Truck</td>
                    <td className="p-5 text-center text-sm">Partial</td>
                    <td className="p-5 text-center text-sm">Any</td>
                    <td className="p-5 text-center text-sm">Flexible</td>
                    <td className="p-5 text-center text-sm">Flexible</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="p-5 font-medium">Dedicated Vehicle</td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                    <td className="p-5 text-center"><XCircle className="mx-auto text-gray-300" size={20} /></td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile: stacked comparison cards */}
          <div className="md:hidden space-y-4">
            {[
              { name: "FTL", ideal: "Bulk Load", load: "Full Truck", dedicated: true },
              { name: "PTL", ideal: "Small Load", load: "Partial", dedicated: false },
              { name: "Express Cargo", ideal: "Urgent", load: "Any", dedicated: true },
              { name: "Pan India Transport", ideal: "Nationwide", load: "Flexible", dedicated: true },
              { name: "Customized Logistics", ideal: "B2B Needs", load: "Flexible", dedicated: true },
            ].map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="bg-navy text-white px-5 py-3 font-semibold text-[15px]">
                  {s.name}
                </div>
                <dl className="divide-y divide-gray-100">
                  <div className="flex justify-between items-center px-5 py-3 text-[14px]">
                    <dt className="text-gray-500 font-medium">Ideal For</dt>
                    <dd className="text-navy font-semibold">{s.ideal}</dd>
                  </div>
                  <div className="flex justify-between items-center px-5 py-3 text-[14px]">
                    <dt className="text-gray-500 font-medium">Minimum Load</dt>
                    <dd className="text-navy font-semibold">{s.load}</dd>
                  </div>
                  <div className="flex justify-between items-center px-5 py-3 text-[14px]">
                    <dt className="text-gray-500 font-medium">Dedicated Vehicle</dt>
                    <dd>
                      {s.dedicated ? (
                        <CheckCircle className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-gray-300" size={20} />
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">How It Works</h2>
          </div>

          <div className="relative">
            {/* Dashed line connector for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-orange/40 z-0"></div>
            
            <div className="flex flex-col md:flex-row gap-10 md:gap-4 justify-between relative z-10">
              {[
                { step: "1", title: "Request Quote", desc: "Submit your requirements online or call us." },
                { step: "2", title: "Confirm Booking", desc: "Get best rates and confirm your shipment." },
                { step: "3", title: "Pickup & Transit", desc: "We pick up on time and track the journey." },
                { step: "4", title: "Delivery & Confirmation", desc: "Safe delivery with proof of receipt." }
              ].map((item, idx) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center md:w-1/4"
                >
                  <div className="w-14 h-14 rounded-full bg-orange text-white text-xl font-bold flex items-center justify-center mb-6 shadow-md border-4 border-white">
                    {item.step}
                  </div>
                  <h3 className="text-navy font-bold text-[18px] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-theme-light py-20" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-orange text-[12px] font-bold tracking-[0.25em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20">
              <HelpCircle size={13} /> FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Quick answers about cargo, timelines, tracking, and coverage. Still curious?{" "}
              <Link href="/contact" className="text-orange font-semibold hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-orange/30 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left min-h-[56px]"
                  >
                    <span className="text-navy font-semibold text-[15px] sm:text-[16px] leading-snug">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-9 h-9 rounded-full bg-orange/10 text-orange flex items-center justify-center"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-gray-600 text-[15px] leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
