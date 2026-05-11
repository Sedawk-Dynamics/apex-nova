"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Heart,
  Eye,
  Zap,
  Star,
  Target,
  Compass,
  Lightbulb,
  ShieldCheck,
  Truck,
  Package,
  Boxes,
  MapPin,
  Building2,
  Layers,
  CheckCircle2,
  Clock,
  FileCheck,
  Receipt,
  Radio,
  Headphones,
  Factory,
  ShoppingCart,
  ShoppingBag,
  Cpu,
  Wrench,
  Container,
  CircleDashed,
  Handshake,
  TrendingUp,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  slideLeft,
  slideRight,
  scaleIn,
} from "@/lib/animations";

const coreValues = [
  {
    title: "Reliability",
    icon: Shield,
    desc: "We commit to timely and dependable logistics support.",
  },
  {
    title: "Transparency",
    icon: Eye,
    desc: "We maintain honest communication and operational clarity.",
  },
  {
    title: "Professionalism",
    icon: Star,
    desc: "We deliver services with discipline, responsibility, and efficiency.",
  },
  {
    title: "Customer Commitment",
    icon: Heart,
    desc: "We prioritize long-term business relationships and customer satisfaction.",
  },
  {
    title: "Operational Excellence",
    icon: Zap,
    desc: "We focus on continuous improvement and service efficiency.",
  },
];

const services = [
  {
    title: "Full Truck Load (FTL)",
    icon: Truck,
    desc: "Dedicated trucks for bulk and large-volume shipments.",
  },
  {
    title: "Part Truck Load (PTL)",
    icon: Package,
    desc: "Flexible and cost-effective transportation solutions.",
  },
  {
    title: "On-Demand Logistics",
    icon: Zap,
    desc: "Urgent and fast vehicle placement services.",
  },
  {
    title: "Local & NCR Logistics",
    icon: MapPin,
    desc: "Efficient intra-city and NCR transportation support.",
  },
  {
    title: "Corporate Logistics",
    icon: Building2,
    desc: "Customized logistics solutions for business operations.",
  },
  {
    title: "Supply Chain Support",
    icon: Layers,
    desc: "Reliable coordination for smooth goods movement.",
  },
];

const industries = [
  { name: "FMCG", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail & Distribution", icon: ShoppingCart },
  { name: "E-commerce", icon: Package },
  { name: "Traders & Wholesalers", icon: Handshake },
  { name: "Electronics", icon: Cpu },
  { name: "Packaging Industry", icon: Boxes },
  { name: "Consumer Goods", icon: ShoppingBag },
  { name: "Industrial Goods & Machinery", icon: Wrench },
];

const whyChoose = [
  {
    title: "Reliable & Timely Deliveries",
    desc: "We ensure safe and on-time shipment execution.",
    icon: Clock,
  },
  {
    title: "Quick Vehicle Placement",
    desc: "Fast response and efficient vehicle arrangement.",
    icon: Zap,
  },
  {
    title: "Competitive Pricing",
    desc: "Cost-effective logistics solutions without compromising quality.",
    icon: TrendingUp,
  },
  {
    title: "Dedicated Coordination",
    desc: "Professional shipment handling and continuous support.",
    icon: Handshake,
  },
  {
    title: "Flexible Operations",
    desc: "Customized logistics support based on client requirements.",
    icon: Layers,
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates and clear coordination throughout operations.",
    icon: Radio,
  },
];

const safetyPoints = [
  {
    title: "Secure Shipment Handling",
    desc: "Professional care and safe transportation practices.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Transport Network",
    desc: "Trusted vendors and verified vehicle coordination.",
    icon: CheckCircle2,
  },
  {
    title: "POD & Documentation Support",
    desc: "Timely proof of delivery and documentation management.",
    icon: FileCheck,
  },
  {
    title: "GST Billing Support",
    desc: "Professional invoicing and compliance support.",
    icon: Receipt,
  },
  {
    title: "Real-Time Coordination",
    desc: "Continuous shipment monitoring and communication.",
    icon: Radio,
  },
  {
    title: "Customer Support",
    desc: "Responsive operational assistance for smooth execution.",
    icon: Headphones,
  },
];

const vehicleCategories = [
  {
    title: "Light Commercial Vehicles (LCV)",
    icon: Truck,
    items: ["Tata Ace / Chota Hathi", "Pickup Vehicles", "Mini Trucks"],
  },
  {
    title: "Medium Commercial Vehicles",
    icon: Truck,
    items: ["14 Ft Trucks", "17 Ft Trucks", "19 Ft Trucks"],
  },
  {
    title: "Heavy Commercial Vehicles",
    icon: Container,
    items: [
      "20 Ft Containers",
      "22 Ft Containers",
      "24 Ft Containers",
      "28 Ft Trucks",
    ],
  },
  {
    title: "Container Vehicles",
    icon: Container,
    items: [
      "20 Ft Closed Containers",
      "32 Ft Single Axle Containers",
      "32 Ft Multi Axle Containers",
    ],
  },
  {
    title: "Trailer & Heavy Load Vehicles",
    icon: Truck,
    items: [
      "32 Ft Trailers",
      "40 Ft Trailers",
      "50 Ft Trailers",
      "60 Ft Trailers",
    ],
  },
  {
    title: "Open & Specialized Vehicles",
    icon: Wrench,
    items: [
      "Open Body Trucks",
      "Closed Body Vehicles",
      "Platform Trucks",
      "High Bed Trailers",
      "Industrial Material Movement Vehicles",
    ],
  },
];

const processSteps = [
  { title: "Requirement", desc: "Capture shipment needs", icon: Lightbulb },
  { title: "Vehicle Placement", desc: "Match the right vehicle", icon: Truck },
  { title: "Pickup", desc: "Timely cargo collection", icon: Package },
  { title: "Transit", desc: "Real-time coordination", icon: Radio },
  { title: "Delivery", desc: "Safe & on-time arrival", icon: MapPin },
  { title: "POD Submission", desc: "Proof of delivery filed", icon: FileCheck },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const titleText = "About Us";
  const words = titleText.split(" ");

  const founderLines = [
    "At Apexnova Logistics, we believe logistics is not just about transportation — it is about delivering trust, reliability, and long-term partnerships.",
    "Our mission is to provide efficient, transparent, and customer-focused logistics solutions that help businesses grow with confidence.",
    "We are committed to operational excellence, timely deliveries, and building strong relationships through dependable service and professional coordination.",
  ];

  return (
    <div className="min-h-screen pb-0">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-b from-navy to-navy-deep min-h-[44vh] relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[140px] animate-blob" />
        <div
          className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-white/15 rounded-full blur-[140px] animate-blob"
          style={{ animationDelay: "3s" }}
        />

        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-[30px] opacity-30 z-0 border border-white/10"
            style={{
              width: 200 + i * 50,
              height: 200 + i * 50,
              left: `${10 + i * 20}%`,
              top: `${-10 + (i % 2) * 40}%`,
            }}
            animate={!shouldReduceMotion ? { rotate: [0, 360] } : {}}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <div className="relative z-10 text-center mt-20 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 flex flex-wrap justify-center gap-x-2">
            {words.map((word, index) => (
              <span key={index} className="overflow-hidden inline-block">
                <motion.span
                  custom={index}
                  variants={{
                    hidden: { y: "100%" },
                    visible: (i) => ({
                      y: 0,
                      transition: {
                        delay: i * 0.08,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }),
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
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 glass-dark text-white/85 text-[12.5px] font-medium px-4 py-1.5 rounded-full"
          >
            <Link href="/" className="hover:text-orange transition-colors">
              Home
            </Link>
            <span className="opacity-50">›</span>
            <span className="text-orange">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideLeft}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                  alt="Apexnova Logistics Warehouse Operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <motion.div
                animate={!shouldReduceMotion ? { y: [0, -10, 0] } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 items-center gap-4 z-20 hidden md:flex"
              >
                <div className="bg-orange/10 w-12 h-12 rounded-full flex items-center justify-center text-orange shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-navy font-bold text-xl">100+</div>
                  <div className="text-gray-500 text-sm">Happy Clients</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideRight}
              className="w-full lg:w-1/2"
            >
              <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-5 sm:mb-6">
                About Apexnova Logistics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5 text-[15px] sm:text-base">
                Apexnova Logistics Pvt. Ltd. is a professionally managed and
                fast-growing logistics & transportation company based in
                NCR, India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5 text-[15px] sm:text-base">
                We specialize in dependable transportation and supply chain
                solutions with a strong focus on timely delivery, operational
                efficiency, and customer satisfaction across NCR and PAN India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
                Our services are designed to support businesses across FMCG,
                manufacturing, retail, e-commerce, trading, and industrial
                sectors through reliable transportation, quick vehicle
                placement, and transparent coordination.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-4 sm:px-6 py-2 border border-orange text-orange font-semibold rounded-full text-xs sm:text-sm">
                  NCR Based
                </span>
                <span className="px-4 sm:px-6 py-2 border border-orange text-orange font-semibold rounded-full text-xs sm:text-sm">
                  Pan India Vision
                </span>
                <span className="px-4 sm:px-6 py-2 border border-orange text-orange font-semibold rounded-full text-xs sm:text-sm">
                  Technology-Driven
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-theme-light py-16 sm:py-20 overflow-hidden perspective-1000">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              WHAT DRIVES US
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Vision &amp; Mission
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              whileHover={
                !shouldReduceMotion
                  ? { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
                  : {}
              }
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8 md:p-10 will-change-transform"
            >
              <div className="bg-orange/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-orange mb-5 sm:mb-6">
                <Compass size={26} strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                To become one of India&apos;s most trusted and technology-driven
                logistics partners by delivering reliable, efficient, and
                customer-focused transportation solutions.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
                },
              }}
              whileHover={
                !shouldReduceMotion
                  ? { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }
                  : {}
              }
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8 md:p-10 will-change-transform"
            >
              <div className="bg-orange/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-orange mb-5 sm:mb-6">
                <Target size={26} strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                To provide transparent, cost-effective, and dependable logistics
                services that help businesses operate smoothly and grow
                confidently.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Core Values
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                whileHover="hover"
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center group hover:border-orange hover:bg-[rgba(244,121,32,0.04)] transition-colors duration-300 hover:shadow-lg flex flex-col"
              >
                <div className="w-14 h-14 mx-auto bg-gray-50 rounded-xl flex items-center justify-center text-orange mb-4 group-hover:bg-orange/10 transition-colors">
                  <motion.div
                    variants={{
                      hover: {
                        rotate: 360,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        },
                      },
                    }}
                  >
                    <value.icon size={26} />
                  </motion.div>
                </div>
                <h3 className="text-navy font-bold text-[16px] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-theme-light py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Our Services
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={!shouldReduceMotion ? { y: -6 } : {}}
                className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:border-orange/40 hover:shadow-soft transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center mb-4 group-hover:shadow-glow-navy transition-shadow shrink-0">
                  <s.icon size={24} />
                </div>
                <h3 className="text-navy font-bold text-[17px] mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              WHO WE SERVE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Industries We Serve
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[15px]">
              Trusted by businesses across sectors for dependable, efficient,
              and scalable logistics support.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.name}
                variants={scaleIn}
                whileHover={!shouldReduceMotion ? { y: -4 } : {}}
                className="group bg-theme-light rounded-2xl border border-gray-100 p-5 sm:p-6 flex items-center gap-4 hover:bg-white hover:border-orange/40 hover:shadow-soft transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-white transition-colors">
                  <ind.icon size={22} />
                </div>
                <span className="text-navy font-semibold text-[14px] sm:text-[15px] leading-tight">
                  {ind.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE APEXNOVA */}
      <section className="bg-theme-light py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              THE APEXNOVA EDGE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Why Choose Apexnova?
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={!shouldReduceMotion ? { y: -6 } : {}}
                className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:border-orange/40 hover:shadow-soft transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 text-orange flex items-center justify-center mb-4 group-hover:bg-orange group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-navy font-bold text-[17px] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SAFETY & COMPLIANCE */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              OUR COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Safety &amp; Compliance
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[15px]">
              Building trust through secure handling, verified networks, and
              professional documentation.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {safetyPoints.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={!shouldReduceMotion ? { y: -6 } : {}}
                className="group bg-theme-light rounded-2xl border border-gray-100 p-6 sm:p-7 hover:bg-white hover:border-orange/40 hover:shadow-soft transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center mb-4 group-hover:shadow-glow-navy transition-shadow">
                  <p.icon size={24} />
                </div>
                <h3 className="text-navy font-bold text-[17px] mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AVAILABLE VEHICLE TYPES */}
      <section className="bg-theme-light py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              FLEET CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              Available Vehicle Types
            </h2>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-[15px] leading-relaxed">
              We provide vehicle placement solutions for a wide range of
              logistics and transportation requirements across NCR &amp; PAN
              India.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {vehicleCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:shadow-soft transition-all"
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0">
                    <cat.icon size={22} />
                  </div>
                  <h3 className="text-navy font-bold text-[16px] sm:text-[17px] tracking-tight leading-tight">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-gray-700 text-[14px]"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-orange shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-600 mt-10 max-w-3xl mx-auto text-[14.5px] leading-relaxed"
          >
            We support flexible vehicle placement for FMCG, manufacturing,
            retail, e-commerce, industrial goods, machinery movement, and
            corporate logistics requirements.
          </motion.p>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="bg-white py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              How We Operate
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[15px]">
              A streamlined six-step process built for transparency and
              reliability.
            </p>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange via-orange/40 to-transparent" />
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-5"
            >
              {processSteps.map((step, idx) => (
                <motion.li
                  key={step.title}
                  variants={fadeUp}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-orange-dark text-white flex items-center justify-center shadow-glow-orange">
                    <step.icon size={22} />
                  </div>
                  <div className="bg-theme-light rounded-2xl border border-gray-100 p-5">
                    <div className="text-orange text-[11px] font-bold tracking-widest uppercase mb-1">
                      Step {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-navy font-bold text-[16px] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-[13.5px]">{step.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>

          {/* Desktop: horizontal flow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="hidden lg:grid grid-cols-6 gap-3 relative"
          >
            <div className="absolute top-8 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-orange via-orange/40 to-orange/10" />
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="relative text-center group"
              >
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-orange to-orange-dark text-white flex items-center justify-center shadow-glow-orange mb-4 transition-transform group-hover:scale-110">
                  <step.icon size={24} />
                </div>
                <div className="text-orange text-[11px] font-bold tracking-widest uppercase mb-1">
                  Step {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-navy font-bold text-[15px] mb-1.5 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[12.5px] leading-snug">
                  {step.desc}
                </p>
                {idx < processSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="hidden lg:block absolute top-6 -right-2 text-orange/60"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 sm:mt-14 text-center"
          >
            <div className="inline-flex items-center gap-2 flex-wrap justify-center px-5 py-3 rounded-full bg-theme-light border border-gray-100 text-navy text-[13px] sm:text-[14px] font-semibold">
              <span>Requirement</span>
              <CircleDashed size={14} className="text-orange" />
              <span>Vehicle Placement</span>
              <CircleDashed size={14} className="text-orange" />
              <span>Pickup</span>
              <CircleDashed size={14} className="text-orange" />
              <span>Transit</span>
              <CircleDashed size={14} className="text-orange" />
              <span>Delivery</span>
              <CircleDashed size={14} className="text-orange" />
              <span>POD Submission</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="bg-navy py-16 sm:py-20 overflow-hidden relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-orange/15 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
            <div className="w-full lg:w-2/3 relative z-10">
              <motion.svg
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute -top-10 -left-6 text-orange w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] -z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </motion.svg>
              <span className="inline-block text-orange text-xs font-bold tracking-widest uppercase mb-3">
                MESSAGE FROM FOUNDER
              </span>
              <div className="text-white text-[16px] sm:text-[17.5px] md:text-[18px] italic leading-relaxed mb-6">
                <motion.div
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {founderLines.map((line, i) => (
                    <motion.p
                      key={i}
                      variants={fadeUp}
                      className={i !== founderLines.length - 1 ? "mb-4" : ""}
                    >
                      &ldquo;{line}&rdquo;
                    </motion.p>
                  ))}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-orange font-bold text-[15px] sm:text-base">
                  — Founder &amp; Director
                </p>
                <p className="text-white/70 text-[13px] sm:text-sm">
                  Apexnova Logistics Pvt. Ltd.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 border-2 border-orange border-dashed rounded-full scale-110 animate-rotate-ring opacity-50" />
                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] bg-[#0F1D4A] rounded-full flex items-center justify-center shadow-2xl relative z-10 border border-white/10">
                  <span className="text-orange text-4xl sm:text-5xl font-bold">
                    RS
                  </span>
                </div>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                RS Shah
              </h3>
              <p className="text-orange font-medium mb-5 sm:mb-6 text-sm sm:text-base">
                Director &amp; Founder
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">
                  NCR Operations
                </span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">
                  Pan India Vision
                </span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">
                  Customer First
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-theme-light py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-gray-100 shadow-soft p-7 sm:p-10 md:p-12 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-[280px] h-[280px] bg-orange/10 rounded-full blur-[100px]" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-navy text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                  Ready to move your business forward?
                </h3>
                <p className="text-gray-600 text-[14px] sm:text-[15px]">
                  Talk to our team for a fast, transparent logistics quote.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  href="/quote"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange to-orange-dark text-white px-6 py-3 rounded-full text-[14px] font-semibold shadow-glow-orange hover:shadow-lg transition-shadow w-full sm:w-auto"
                >
                  Get a Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="tel:+919560639966"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-navy font-semibold text-[14px] border border-navy/20 hover:border-orange hover:text-orange transition-colors w-full sm:w-auto"
                >
                  <PhoneCall size={15} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
