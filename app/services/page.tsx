"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";

const servicesData = [
  {
    id: "01",
    title: "Full Truck Load (FTL) Services",
    desc: "We provide dedicated full truck load transportation for bulk shipments, ensuring faster delivery, safety, and cost efficiency for large-scale business requirements.",
    features: ["Dedicated Vehicle", "Faster Transit Time", "Direct Point-to-Point"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Part Load (PTL) Services",
    desc: "Our part load services are ideal for smaller shipments, offering cost-effective and flexible transportation solutions without the need for a full truck.",
    features: ["Cost-Effective", "Flexible Space Allocation", "Consolidated Shipping"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Local & NCR Logistics",
    desc: "We offer reliable and timely local transportation services across NCR, ensuring smooth and efficient movement of goods within the region.",
    features: ["Same-day options", "Deep NCR Network", "Optimized Local Routes"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Business & Corporate Logistics Solutions",
    desc: "We provide customized logistics solutions tailored to the specific needs of businesses, ensuring seamless supply chain operations and long-term reliability.",
    features: ["Tailored Solutions", "Dedicated Account Manager", "Supply Chain Integration"],
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "On-Demand Transportation Services",
    desc: "Our on-demand logistics services are designed to meet urgent delivery requirements with quick response and efficient execution.",
    features: ["Quick Response Time", "Urgent Deliveries", "Flexible Booking"],
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pb-0">
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
            className="text-4xl md:text-[56px] font-bold text-white mb-4 tracking-tight"
          >
            Our <span className="gradient-text">Services</span>
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
            Logistics Solutions Built for Your Business
          </h2>
          <p className="text-gray-600 text-lg">
            From bulk freight to last-mile delivery — we have a solution for every shipment.
          </p>
        </div>
      </section>

      {/* DETAIL CARDS */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-[280px] group hover:shadow-md transition-shadow`}
              >
                <div className="w-full lg:w-1/2 relative min-h-[280px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    {service.id}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h2>
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
                      href="/contact"
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

      {/* COMPARISON TABLE */}
      <section className="bg-theme-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Which Service is Right for You?
            </h2>
          </div>
          
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[800px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-5 font-semibold border-b border-navy-light w-1/4">Feature</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">FTL</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">PTL</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">NCR Local</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">Corporate</th>
                    <th className="p-5 font-semibold border-b border-navy-light text-center">On-Demand</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="p-5 font-medium">Ideal For</td>
                    <td className="p-5 text-center text-sm">Bulk Load</td>
                    <td className="p-5 text-center text-sm">Small Load</td>
                    <td className="p-5 text-center text-sm">City Delivery</td>
                    <td className="p-5 text-center text-sm">B2B Needs</td>
                    <td className="p-5 text-center text-sm">Urgent</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-5 font-medium">Minimum Load</td>
                    <td className="p-5 text-center text-sm">Full Truck</td>
                    <td className="p-5 text-center text-sm">Partial</td>
                    <td className="p-5 text-center text-sm">Flexible</td>
                    <td className="p-5 text-center text-sm">Flexible</td>
                    <td className="p-5 text-center text-sm">Any</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="p-5 font-medium">Dedicated Vehicle</td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                    <td className="p-5 text-center"><XCircle className="mx-auto text-gray-300" size={20} /></td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                    <td className="p-5 text-center"><CheckCircle className="mx-auto text-green-500" size={20} /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-5 font-medium">Cost</td>
                    <td className="p-5 text-center text-sm">$$$</td>
                    <td className="p-5 text-center text-sm">$</td>
                    <td className="p-5 text-center text-sm">$$</td>
                    <td className="p-5 text-center text-sm">Custom</td>
                    <td className="p-5 text-center text-sm">$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                  <p className="text-gray-600 text-[14px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
