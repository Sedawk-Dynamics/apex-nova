"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHoveringWA, setIsHoveringWA] = useState(false);
  const [isHoveringCall, setIsHoveringCall] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3 sm:gap-4 pointer-events-none">
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={scrollToTop}
            whileHover={!shouldReduceMotion ? "hover" : ""}
            className="w-11 h-11 sm:w-12 sm:h-12 bg-navy text-white rounded-full flex items-center justify-center shadow-lg hover:bg-navy/90 transition-colors pointer-events-auto"
            aria-label="Scroll to top"
          >
            <motion.div
              variants={{
                hover: { y: [0, -4, 0], transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" } }
              }}
            >
              <ArrowUp size={22} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <div className="flex items-center gap-3 relative pointer-events-auto">
        <AnimatePresence>
          {isHoveringCall && !shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-navy border border-gray-100 whitespace-nowrap absolute right-[100%] mr-4"
            >
              Call us now
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-gray-100" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.9 }}
          whileHover={!shouldReduceMotion ? { scale: 1.12 } : {}}
          onHoverStart={() => setIsHoveringCall(true)}
          onHoverEnd={() => setIsHoveringCall(false)}
          href="tel:+919560639966"
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-xl z-10"
          aria-label="Call Apexnova Logistics"
        >
          <div className="absolute inset-0 rounded-full border-2 border-navy animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60" />
          <Phone size={22} className="relative z-10" />
        </motion.a>
      </div>

      <div className="flex items-center gap-3 relative pointer-events-auto">
        <AnimatePresence>
          {isHoveringWA && !shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-navy border border-gray-100 whitespace-nowrap absolute right-[100%] mr-4"
            >
              Chat with us on WhatsApp
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-gray-100"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
          whileHover={!shouldReduceMotion ? { scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 10 } } : {}}
          onHoverStart={() => setIsHoveringWA(true)}
          onHoverEnd={() => setIsHoveringWA(false)}
          href="https://wa.me/919560639966?text=Hi,%20I'd%20like%20to%20enquire%20about%20your%20logistics%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl z-10"
          aria-label="Chat on WhatsApp"
        >
          {/* Notification Ping */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
