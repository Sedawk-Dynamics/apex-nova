"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { showToast } from "@/components/ui/ToastManager";

const quoteSchema = z.object({
  // Step 1
  serviceType: z.string().min(1, "Service type is required"),
  origin: z.string().min(2, "Origin city is required"),
  destination: z.string().min(2, "Destination city is required"),
  cargoType: z.string().min(1, "Cargo type is required"),
  weight: z.string().min(1, "Weight is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  specialReq: z.string().optional(),
  
  // Step 2
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  phone: z.string().min(10, "Phone number is required"),
  whatsapp: z.boolean().optional(),
  email: z.string().email("Valid email is required"),
  source: z.string().optional(),
  
  // Step 3
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

type QuoteData = z.infer<typeof quoteSchema>;

const servicesList = [
  { id: "FTL", label: "Full Truck Load (FTL)" },
  { id: "PTL", label: "Part Load (PTL)" },
  { id: "NCR", label: "NCR Local Delivery" },
  { id: "Corp", label: "Corporate Logistics" },
  { id: "OnDemand", label: "On-Demand Urgent" },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: "",
      whatsapp: false,
    },
    mode: "onChange",
  });

  const formData = watch();

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["serviceType", "origin", "destination", "cargoType", "weight", "pickupDate"]);
    } else if (step === 2) {
      isValid = await trigger(["name", "phone", "email"]);
    }

    if (isValid) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showToast("Please fill all required fields correctly.", "error");
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: QuoteData) => {
    setIsSubmitting(true);
    try {
      const payload = {
        name: data.name,
        company: data.company,
        phone: data.phone,
        email: data.email,
        service: data.serviceType,
        origin: data.origin,
        destination: data.destination,
        cargoType: data.cargoType,
        weight: data.weight,
        message: `Pickup Date: ${data.pickupDate}\nSource: ${data.source}\nSpecial Requirements: ${data.specialReq}\nWhatsApp Same as Phone: ${data.whatsapp ? 'Yes' : 'No'}`
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");
      
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      showToast("Submission failed. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-theme-light flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 sm:p-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="text-green-500 w-12 h-12" />
          </motion.div>
          <h1 className="text-3xl font-bold text-navy mb-4">Quote Request Submitted!</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you <span className="font-semibold text-navy">{formData.name}</span>! Our team will contact you at <span className="font-semibold text-navy">{formData.phone}</span> shortly with the best rate for your shipment.
          </p>
          <div className="flex justify-center">
            <Link href="/" className="bg-orange text-white px-6 py-3 rounded-full font-bold hover:bg-orange-dark transition-colors">
              Go to Homepage
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-0 bg-theme-light">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 tracking-tight"
          >
            Get a <span className="gradient-text">Free Quote</span>
          </motion.h1>
          <p className="text-gray-300 text-lg mb-5 max-w-xl mx-auto">
            Tell us about your shipment and we&apos;ll get back with the best rate promptly.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 glass-dark text-white/85 text-[12.5px] font-medium px-4 py-1.5 rounded-full"
          >
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-orange">Get a Quote</span>
          </motion.div>
        </div>
      </section>

      {/* MULTI-STEP FORM */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Stepper UI */}
          <div className="mb-10">
            <div className="flex justify-between items-center relative">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 -z-10 rounded-full"></div>
              <motion.div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-orange -z-10 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(step - 1) * 50}%` }}
                transition={{ duration: 0.4 }}
              />

              {[1, 2, 3].map((num) => {
                const isActive = step === num;
                const isCompleted = step > num;
                
                return (
                  <div key={num} className="flex flex-col items-center gap-2 bg-theme-light px-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                      isActive ? 'bg-orange text-white border-4 border-orange-100 shadow-md' :
                      isCompleted ? 'bg-orange text-white' : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}>
                      {isCompleted ? <Check size={18} /> : num}
                    </div>
                    <span className={`text-xs font-semibold hidden sm:block ${isActive || isCompleted ? 'text-navy' : 'text-gray-400'}`}>
                      {num === 1 ? 'Shipment Details' : num === 2 ? 'Contact Info' : 'Confirm & Submit'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">1. Shipment Details</h2>
                  
                  <div className="space-y-6">
                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Service Type *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicesList.map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setValue("serviceType", srv.id, { shouldValidate: true })}
                            className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                              formData.serviceType === srv.id 
                                ? 'border-orange bg-orange-50 text-navy shadow-sm' 
                                : 'border-gray-200 text-gray-600 hover:border-orange-300'
                            }`}
                          >
                            {srv.label}
                          </button>
                        ))}
                      </div>
                      {errors.serviceType && <p className="text-red-500 text-xs mt-2">{errors.serviceType.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Origin City *</label>
                        <input
                          {...register("origin")}
                          placeholder="e.g. Delhi, Noida, Gurgaon"
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors ${errors.origin ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        />
                        {errors.origin && <p className="text-red-500 text-xs mt-1">{errors.origin.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Destination City *</label>
                        <input
                          {...register("destination")}
                          placeholder="e.g. Mumbai"
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors ${errors.destination ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        />
                        {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="col-span-1 sm:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Cargo Type *</label>
                        <select
                          {...register("cargoType")}
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors bg-white ${errors.cargoType ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        >
                          <option value="">Select</option>
                          <option value="Electronics">Electronics</option>
                          <option value="FMCG">FMCG</option>
                          <option value="Industrial">Industrial Goods</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Pharma">Pharmaceuticals</option>
                          <option value="Auto">Auto Parts</option>
                          <option value="Garments">Garments</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.cargoType && <p className="text-red-500 text-xs mt-1">{errors.cargoType.message}</p>}
                      </div>
                      
                      <div className="col-span-1 sm:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Approx Weight *</label>
                        <div className="relative">
                          <input
                            {...register("weight")}
                            type="number"
                            placeholder="e.g. 500"
                            className={`w-full h-12 px-4 pr-10 rounded-xl border-2 outline-none transition-colors ${errors.weight ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">kg</span>
                        </div>
                        {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>}
                      </div>

                      <div className="col-span-1 sm:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Date *</label>
                        <input
                          {...register("pickupDate")}
                          type="date"
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors ${errors.pickupDate ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        />
                        {errors.pickupDate && <p className="text-red-500 text-xs mt-1">{errors.pickupDate.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Special Requirements (Optional)</label>
                      <textarea
                        {...register("specialReq")}
                        placeholder="Any specific instructions for pickup/delivery..."
                        className="w-full h-24 p-4 rounded-xl border-2 border-gray-200 focus:border-orange outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full bg-orange text-white h-14 rounded-full font-bold text-lg hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 shadow-md"
                      >
                        Next Step <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">2. Contact Info</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                        <input
                          {...register("name")}
                          type="text"
                          autoComplete="name"
                          placeholder="Your Name"
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                        <input
                          {...register("company")}
                          type="text"
                          autoComplete="organization"
                          placeholder="Optional"
                          className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-orange outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                        <input
                          {...register("phone")}
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}

                        <label className="flex items-center gap-2 mt-3 cursor-pointer">
                          <input type="checkbox" {...register("whatsapp")} className="w-4 h-4 rounded text-orange focus:ring-orange accent-orange" />
                          <span className="text-sm text-gray-600">Same as WhatsApp number</span>
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                        <input
                          {...register("email")}
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          className={`w-full h-12 px-4 rounded-xl border-2 outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-orange'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">How did you hear about us?</label>
                      <select
                        {...register("source")}
                        className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-orange outline-none transition-colors bg-white text-gray-700"
                      >
                        <option value="">Select Option</option>
                        <option value="Google">Google Search</option>
                        <option value="Referral">Referral</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Direct Visit">Direct Visit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="pt-4 flex gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="w-1/3 bg-white text-navy border-2 border-gray-200 h-14 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={20} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-2/3 bg-orange text-white h-14 rounded-full font-bold text-lg hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 shadow-md"
                      >
                        Next Step <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8"
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">3. Review & Confirm</h2>
                  
                  <div className="space-y-8">
                    {/* Review Section */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 relative">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)} 
                        className="absolute top-6 right-6 text-orange text-sm font-bold hover:underline"
                      >
                        Edit Shipment
                      </button>
                      <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-2">Shipment Details</h3>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 block mb-1">Service Type</span>
                          <span className="font-semibold text-navy">{servicesList.find(s => s.id === formData.serviceType)?.label || formData.serviceType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block mb-1">Cargo Type</span>
                          <span className="font-semibold text-navy">{formData.cargoType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block mb-1">Route</span>
                          <span className="font-semibold text-navy">{formData.origin} → {formData.destination}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block mb-1">Weight & Date</span>
                          <span className="font-semibold text-navy">{formData.weight} kg | {formData.pickupDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 relative">
                      <button 
                        type="button" 
                        onClick={() => setStep(2)} 
                        className="absolute top-6 right-6 text-orange text-sm font-bold hover:underline"
                      >
                        Edit Contact
                      </button>
                      <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-2">Contact Info</h3>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 block mb-1">Name</span>
                          <span className="font-semibold text-navy">{formData.name}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block mb-1">Phone</span>
                          <span className="font-semibold text-navy">{formData.phone}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-500 block mb-1">Email</span>
                          <span className="font-semibold text-navy">{formData.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Declaration */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer p-4 border-2 border-gray-100 rounded-xl hover:border-orange transition-colors">
                        <input type="checkbox" {...register("agree")} className="w-5 h-5 mt-0.5 rounded text-orange focus:ring-orange accent-orange" />
                        <span className="text-sm text-gray-600 font-medium">
                          By submitting, you agree to be contacted by Apexnova Logistics regarding your shipment request and acknowledge our privacy terms.
                        </span>
                      </label>
                      {errors.agree && <p className="text-red-500 text-xs mt-2 font-medium">{errors.agree.message}</p>}
                    </div>

                    <div className="pt-2 flex gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="w-1/4 bg-white text-navy border-2 border-gray-200 h-14 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-3/4 bg-orange text-white h-14 rounded-full font-bold text-lg hover:bg-orange-dark transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="animate-spin border-t-white rounded-full border-4 border-white/30 w-6 h-6"></div>
                        ) : (
                          "Submit Quote Request"
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>
    </main>
  );
}
