"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Heart, Eye, Zap, Star, Target, Compass, Lightbulb, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer, slideLeft, slideRight, scaleIn } from "@/lib/animations";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const titleText = "About Us";
  const words = titleText.split(" ");

  const founderText = `At Apexnova Logistics, we believe that logistics is more than just transportation — it is about trust, commitment, responsibility, and long-term business relationships.
Our goal is to provide dependable and efficient logistics solutions that help businesses move forward with confidence and peace of mind.`;
  const founderLines = founderText.split("\n");

  return (
    <div className="min-h-screen pb-0">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-b from-navy to-navy-deep min-h-[44vh] relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[140px] animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-white/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "3s" }} />

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
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <div className="relative z-10 text-center mt-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex flex-wrap justify-center gap-x-2">
            {words.map((word, index) => (
              <span key={index} className="overflow-hidden inline-block">
                <motion.span
                  custom={index}
                  variants={{
                    hidden: { y: "100%" },
                    visible: (i) => ({ y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
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
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-orange">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" stroke="#F47920" strokeWidth="4" strokeDasharray="10 10" className="group-hover:animate-drawBorder" />
                </svg>
              </div>

              <motion.div
                animate={!shouldReduceMotion ? { y: [0, -10, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 hidden md:flex"
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
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                About Apexnova Logistics
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Apexnova Logistics India Pvt Ltd is a dynamic and fast-growing logistics
                and supply chain company committed to delivering reliable, efficient, and
                cost-effective transportation solutions. Headquartered in NCR, we specialize
                in seamless freight services tailored to manufacturers, traders, and
                e-commerce businesses. With a customer-first approach and a vision to grow
                across India, we are building a logistics network rooted in trust,
                professionalism, and consistent service quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-2 border border-orange text-orange font-semibold rounded-full text-sm">
                  NCR Based
                </span>
                <span className="px-6 py-2 border border-orange text-orange font-semibold rounded-full text-sm">
                  Pan India Vision
                </span>
                <span className="px-6 py-2 border border-orange text-orange font-semibold rounded-full text-sm">
                  Technology-Driven
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-theme-light py-20 overflow-hidden perspective-1000">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Vision & Mission</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Vision */}
            <motion.div
              variants={{
                hidden: { opacity: 0, rotateY: 90 },
                visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={!shouldReduceMotion ? { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 group will-change-transform"
            >
              <div className="bg-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange mb-6">
                <Compass size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;To become one of India&apos;s most trusted, efficient, and
                technology-driven logistics companies by delivering reliable transportation
                solutions with professionalism, transparency, and customer satisfaction
                across the nation.&rdquo;
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={{
                hidden: { opacity: 0, rotateY: 90 },
                visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={!shouldReduceMotion ? { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 group will-change-transform"
            >
              <div className="bg-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange mb-6">
                <Target size={28} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;To deliver fast, secure, transparent, and cost-effective logistics
                solutions while maintaining the highest standards of operational excellence,
                customer service, and professional coordination.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY APEXNOVA STARTED */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideLeft}
              className="w-full lg:w-1/2"
            >
              <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
                OUR ORIGIN STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Why <span className="gradient-text">Apexnova</span> Started
              </h2>
              <p className="text-gray-700 leading-relaxed italic text-[16.5px] mb-6">
                &ldquo;Apexnova Logistics was established with a vision to overcome common
                logistics challenges such as delayed deliveries, lack of communication,
                unreliable service, and inefficient transportation management.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to create a logistics network that businesses can truly rely on for
                timely, secure, and professional transportation services — one shipment,
                one relationship, one milestone at a time.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideRight}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lightbulb, title: "Born From Need", desc: "Solving real industry pain points" },
                  { icon: Shield, title: "Built on Trust", desc: "Long-term business relationships" },
                  { icon: Zap, title: "Efficient by Design", desc: "Optimized for speed & cost" },
                  { icon: Heart, title: "Customer First", desc: "Every shipment matters" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group bg-theme-light rounded-2xl border border-gray-100 p-5 hover:border-orange/30 hover:shadow-soft transition-all"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-deep to-navy text-orange flex items-center justify-center mb-3 group-hover:shadow-glow-navy transition-shadow">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-navy font-bold text-[15px] mb-1 tracking-tight">{item.title}</h3>
                      <p className="text-gray-600 text-[12.5px] leading-snug">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="bg-navy py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-2/3 relative z-10">
              <motion.svg
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute -top-10 -left-6 text-orange w-[120px] h-[120px] -z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </motion.svg>
              <span className="inline-block text-orange text-xs font-bold tracking-widest uppercase mb-3">
                FOUNDER&apos;S MESSAGE
              </span>
              <div className="text-white text-[18px] italic leading-relaxed mb-6">
                <motion.div
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {founderLines.map((line, i) => (
                    <motion.p key={i} variants={fadeUp} className={i !== founderLines.length - 1 ? "mb-4" : ""}>
                      &ldquo;{line}&rdquo;
                    </motion.p>
                  ))}
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-orange font-bold"
              >
                — RS Shah, Director &amp; Founder, Apexnova Logistics
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 border-2 border-orange border-dashed rounded-full scale-110 animate-rotate-ring opacity-50"></div>
                <div className="w-[160px] h-[160px] bg-[#0F1D4A] rounded-full flex items-center justify-center shadow-2xl relative z-10 border border-white/10">
                  <span className="text-orange text-5xl font-bold">RS</span>
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold">RS Shah</h3>
              <p className="text-orange font-medium mb-6">Director &amp; Founder</p>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">NCR Operations</span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">Pan India Vision</span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/10">Customer First</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAFETY & RELIABILITY COMMITMENT */}
      <section className="bg-theme-light py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-[28px] border border-gray-100 shadow-soft p-10 md:p-14 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-orange/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-[280px] h-[280px] bg-navy/10 rounded-full blur-[100px]" />

            <div className="relative flex flex-col md:flex-row gap-10 items-center">
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center shadow-glow-orange">
                  <ShieldCheck size={44} className="text-white" />
                </div>
              </div>

              <div className="flex-1">
                <span className="inline-block text-orange text-xs font-bold tracking-widest uppercase mb-3">
                  OUR COMMITMENT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 leading-tight">
                  Safety &amp; Reliability First
                </h2>
                <p className="text-gray-700 leading-relaxed italic text-[16.5px] mb-5">
                  &ldquo;At Apexnova Logistics, safety and reliability are our top priorities.
                  We are committed to ensuring the secure handling, proper coordination, and
                  timely movement of every shipment through responsible logistics management
                  and professional transportation practices.&rdquo;
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Insured Cargo", "Trained Crew", "Secure Handling", "Real-Time Coordination"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-orange/10 text-orange text-[12px] font-semibold rounded-full border border-orange/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2 block">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Core Values</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { title: "Reliability", icon: Shield, desc: "Consistent and dependable logistics services." },
              { title: "Customer Commitment", icon: Heart, desc: "Prioritize client satisfaction and long-term relationships." },
              { title: "Transparency", icon: Eye, desc: "Clear and honest communication in every operation." },
              { title: "Efficiency", icon: Zap, desc: "Timely deliveries and optimized logistics solutions." },
              { title: "Professionalism", icon: Star, desc: "High standards in service quality and business conduct." },
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                whileHover="hover"
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center group hover:border-orange hover:bg-[rgba(244,121,32,0.05)] transition-colors duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 mx-auto bg-gray-50 rounded-xl flex items-center justify-center text-orange mb-4 group-hover:bg-orange/10 transition-colors">
                  <motion.div
                    variants={{
                      hover: { rotate: 360, transition: { type: "spring", stiffness: 200, damping: 20 } }
                    }}
                  >
                    <value.icon size={28} />
                  </motion.div>
                </div>
                <h3 className="text-navy font-bold text-[16px] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-[14px]">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-theme-light py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Why Choose Apexnova</h2>
          </div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-0"
          >
            {[
              { id: "01", title: "Reliable & Timely Delivery", desc: "Every shipment handled with precision and delivered on time." },
              { id: "02", title: "Customer-Centric Approach", desc: "Understand client requirements and provide customized logistics solutions." },
              { id: "03", title: "Cost-Effective Services", desc: "Competitive pricing without compromising on service quality." },
              { id: "04", title: "Professional & Transparent Operations", desc: "Clear communication and complete transparency in every process." },
              { id: "05", title: "Growing Network & Scalability", desc: "Continuously expanding reach to serve clients efficiently across NCR and beyond." },
            ].map((feature) => (
              <motion.div
                key={feature.id}
                variants={slideLeft}
                whileHover="hover"
                className="flex items-start md:items-center gap-6 p-6 border-b border-gray-200 transition-colors group relative overflow-hidden bg-theme-light hover:bg-white hover:shadow-md cursor-default"
              >
                <motion.div
                  variants={{
                    hover: { scaleY: 1 }
                  }}
                  initial={{ scaleY: 0 }}
                  className="absolute left-0 top-0 bottom-0 w-1 bg-orange origin-bottom"
                />
                <div className="w-14 h-14 shrink-0 rounded-full bg-orange text-white flex items-center justify-center text-xl font-bold shadow-md relative z-10">
                  {feature.id}
                </div>
                <div className="relative z-10">
                  <h3 className="text-navy text-[18px] font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
