"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";
import { showToast } from "@/components/ui/ToastManager";

interface TrackingEvent {
  timestamp: string;
  location: string;
  status: string;
  completed: boolean;
}

interface TrackingData {
  awb: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  events: TrackingEvent[];
}

export default function TrackingPage() {
  const [awb, setAwb] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!awb.trim()) {
      showToast("Please enter an AWB number", "error");
      return;
    }

    setLoading(true);
    setTrackingData(null);

    try {
      const res = await fetch(`/api/tracking?awb=${encodeURIComponent(awb)}`);
      const data = await res.json();
      
      if (!res.ok) {
        showToast(data.error || "Failed to fetch tracking details", "error");
      } else {
        setTrackingData(data);
        showToast("Tracking data found", "success");
      }
    } catch {
      showToast("An error occurred while tracking", "error");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-theme-light pb-20">
      {/* HERO BANNER */}
      <section className="bg-navy min-h-[40vh] relative flex flex-col justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-54.627 54.627-.83-.83zM60 5.373l-54.627 54.627-.83-.83L59.17 4.543zM60 15.373L15.373 60l-.83-.83L59.17 14.543zM60 25.373L25.373 60l-.83-.83L59.17 24.543zM60 35.373L35.373 60l-.83-.83L59.17 34.543zM60 45.373L45.373 60l-.83-.83L59.17 44.543zM60 55.373L55.373 60l-.83-.83L59.17 54.543zM44.627 0L0 44.627l.83.83L45.457.83zM34.627 0L0 34.627l.83.83L35.457.83zM24.627 0L0 24.627l.83.83L25.457.83zM14.627 0L0 14.627l.83.83L15.457.83zM4.627 0L0 4.627l.83.83L5.457.83z\' fill=\'%23ffffff\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="relative z-10 text-center mt-20">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Track Your Shipment
          </motion.h1>
          <p className="text-gray-300 text-lg mb-4 max-w-xl mx-auto px-6">
            Enter your AWB number to get real-time shipment status.
          </p>
          <div className="text-gray-400 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &gt; <span className="text-white">Tracking</span>
          </div>
        </div>
      </section>

      {/* TRACKING WIDGET */}
      <section className="py-20 px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto p-10 -mt-32 relative z-20">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">Enter Tracking Number</h2>
          <p className="text-gray-500 text-center mb-8">Please provide your AWB number below</p>
          
          <form onSubmit={handleTrack} className="space-y-6">
            <input
              type="text"
              value={awb}
              onChange={(e) => setAwb(e.target.value)}
              placeholder="e.g. APX-2025-001234"
              className="w-full rounded-xl border-2 border-gray-200 focus:border-orange focus:ring-0 h-14 px-4 text-lg outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange text-white rounded-full h-14 text-lg font-bold hover:bg-orange-dark transition-colors flex items-center justify-center disabled:opacity-70"
            >
              {loading ? (
                <div className="animate-spin border-t-white rounded-full border-4 border-white/30 w-6 h-6"></div>
              ) : (
                "Track Now"
              )}
            </button>
          </form>
        </div>
        
        <p className="text-gray-500 italic text-sm text-center mt-6">
          Try sample AWB: APX-2025-001234 to see tracking in action
        </p>

        {/* TRACKING RESULT */}
        {trackingData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mt-12 space-y-6"
          >
            {/* Header Card */}
            <div className="bg-navy text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 shadow-lg">
              <div>
                <div className="font-bold text-xl mb-2">AWB: {trackingData.awb}</div>
                <span className="bg-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Status: {trackingData.status}
                </span>
              </div>
              <div className="flex items-center gap-3 text-lg font-medium bg-white/10 px-4 py-2 rounded-xl">
                <span>{trackingData.origin}</span>
                <ArrowRight size={20} className="text-orange" />
                <span>{trackingData.destination}</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="relative border-l-2 border-orange/30 ml-4 space-y-10 py-2">
                {trackingData.events.map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${
                        event.completed ? "bg-green-500" : "bg-orange"
                      } ${!event.completed && idx === trackingData.events.length - 1 ? "animate-pulse" : ""}`}
                    ></div>
                    
                    <h3 className="font-bold text-navy text-lg leading-none mb-2">{event.status}</h3>
                    <div className="text-gray-500 text-sm mb-1">{event.timestamp}</div>
                    <div className="text-gray-600 text-sm font-medium">{event.location}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="bg-white rounded-2xl border-2 border-orange/30 p-6 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange/10 text-orange rounded-full flex items-center justify-center">
                  <Truck size={24} />
                </div>
                <div>
                  <div className="text-gray-500 text-sm font-medium mb-1">Estimated Delivery</div>
                  <div className="text-navy text-2xl font-bold">{trackingData.estimatedDelivery}</div>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 font-bold px-4 py-1.5 rounded-full text-sm">
                On Track
              </span>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
