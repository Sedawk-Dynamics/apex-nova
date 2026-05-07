"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { showToast } from "@/components/ui/ToastManager";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().optional(),
  origin: z.string().optional(),
  destination: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");
      
      showToast("Your message has been sent! We'll get back to you within 24 hours.", "success");
      reset();
    } catch {
      showToast("Something went wrong. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pb-0 bg-white">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-b from-navy to-navy-deep min-h-[44vh] relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[140px] animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-white/15 rounded-full blur-[140px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="relative z-10 text-center mt-20 px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-[56px] font-bold text-white mb-4 tracking-tight"
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <p className="text-gray-300 text-lg mb-5 max-w-xl mx-auto">
            We&apos;re here to help. Reach out for quotes, support, or partnerships.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 glass-dark text-white/85 text-[12.5px] font-medium px-4 py-1.5 rounded-full"
          >
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-orange">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Info */}
          <div className="w-full lg:w-[40%] space-y-6">
            {/* Phone */}
            <a href="tel:+919560639966" className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-orange transition-colors group">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Phone</div>
                <div className="text-navy font-bold">+91 9560639966</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/919560639966" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-green-500 transition-colors group">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">WhatsApp</div>
                <div className="text-navy font-bold">+91 9560639966</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@apexnovalogistics.com" className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-orange transition-colors group">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Email</div>
                <div className="text-navy font-bold">info@apexnovalogistics.com</div>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center text-orange shrink-0 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Address</div>
                <div className="text-navy font-bold text-sm leading-relaxed">
                  Corporate: Greater Noida West, Sector-1, UP – 201306<br/>
                  <span className="text-gray-500 font-normal">Reg: 205A, 2nd Floor, Block B-14, Supertech Eco Village 1, Noida, UP – 201301</span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center text-orange shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium mb-1">Working Hours</div>
                <div className="text-navy font-bold">Mon–Sat: 9:00 AM – 7:00 PM</div>
                <div className="text-red-400 font-medium mt-1">Sunday: Closed</div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-orange transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-orange transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-[60%]"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <input
                      {...register("name")}
                      placeholder="Full Name *"
                      className={`w-full rounded-xl border-2 px-4 h-12 outline-none transition-colors ${errors.name ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                  </div>
                  {/* Company Name */}
                  <div>
                    <input
                      {...register("company")}
                      placeholder="Company Name"
                      className="w-full rounded-xl border-2 border-gray-200 focus:border-orange px-4 h-12 outline-none transition-colors"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <input
                      {...register("phone")}
                      placeholder="Phone Number *"
                      className={`w-full rounded-xl border-2 px-4 h-12 outline-none transition-colors ${errors.phone ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      {...register("email")}
                      placeholder="Email Address *"
                      className={`w-full rounded-xl border-2 px-4 h-12 outline-none transition-colors ${errors.email ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange"}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                  </div>
                  {/* Service Needed */}
                  <div className="md:col-span-2">
                    <select
                      {...register("service")}
                      className="w-full rounded-xl border-2 border-gray-200 focus:border-orange px-4 h-12 outline-none transition-colors bg-white text-gray-700"
                    >
                      <option value="">Select Service Needed</option>
                      <option value="FTL">Full Truck Load (FTL)</option>
                      <option value="PTL">Part Load (PTL)</option>
                      <option value="NCR Local">NCR Local</option>
                      <option value="Corporate Logistics">Corporate Logistics</option>
                      <option value="On-Demand">On-Demand</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  {/* Origin */}
                  <div>
                    <input
                      {...register("origin")}
                      placeholder="Origin City"
                      className="w-full rounded-xl border-2 border-gray-200 focus:border-orange px-4 h-12 outline-none transition-colors"
                    />
                  </div>
                  {/* Destination */}
                  <div>
                    <input
                      {...register("destination")}
                      placeholder="Destination City"
                      className="w-full rounded-xl border-2 border-gray-200 focus:border-orange px-4 h-12 outline-none transition-colors"
                    />
                  </div>
                  {/* Message */}
                  <div className="md:col-span-2">
                    <textarea
                      {...register("message")}
                      placeholder="Your Message..."
                      className="w-full rounded-xl border-2 border-gray-200 focus:border-orange p-4 h-32 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange text-white rounded-full h-14 text-lg font-bold hover:bg-orange-dark transition-colors flex items-center justify-center disabled:opacity-70 gap-2"
                  >
                    {loading ? (
                      <div className="animate-spin border-t-white rounded-full border-4 border-white/30 w-6 h-6"></div>
                    ) : (
                      <>Send Message <ArrowRight size={20} /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-theme-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Find Us</h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d112130.64024344078!2d77.34862590204739!3d28.567086829774643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87205d0!2sGreater%20Noida%20West%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715456208001!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-8 bg-white max-w-3xl mx-auto rounded-full py-4 px-8 text-center text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-center gap-2">
            <MapPin size={18} className="text-orange shrink-0" />
            Registered: 205A, 2nd Floor, Block B-14, Supertech Eco Village 1, Noida, Gautam Buddha Nagar – 201301, UP
          </div>
        </div>
      </section>

    </div>
  );
}
