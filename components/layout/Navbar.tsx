"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Scroll animations
  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 60],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 60],
    ["none", "0 4px 30px rgba(0,0,0,0.08)"]
  );
  const navPadding = useTransform(
    scrollY,
    [0, 60],
    ["16px 0", "8px 0"]
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tracking", href: "/tracking" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: shouldReduceMotion ? "rgba(255,255,255,1)" : navBg,
          boxShadow: shouldReduceMotion ? "0 4px 30px rgba(0,0,0,0.08)" : navShadow,
          padding: shouldReduceMotion ? "8px 0" : navPadding,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/apex-nova.png" alt="Apexnova Logistics" width={200} height={64} className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      className={clsx(
                        "text-sm font-medium transition-colors pb-1 block relative z-10",
                        isActive ? "text-orange" : "text-gray-700 hover:text-orange"
                      )}
                    >
                      {link.name}
                    </Link>
                    {isActive && !shouldReduceMotion && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {isActive && shouldReduceMotion && (
                      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange" />
                    )}
                  </li>
                );
              })}
            </ul>
            <Link href="/quote">
              <motion.button
                whileHover={!shouldReduceMotion ? { scale: 1.02 } : {}}
                whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                className="relative overflow-hidden bg-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md hover:shadow-lg group"
              >
                <span className="relative z-10">Get A Quote</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-navy p-2 relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col pt-24 px-6"
            >
              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.name} variants={fadeUp} custom={i}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "text-xl font-medium transition-colors block border-b border-gray-100 pb-4",
                          isActive ? "text-orange" : "text-gray-700"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div variants={fadeUp} custom={navLinks.length}>
                  <Link
                    href="/quote"
                    onClick={() => setIsOpen(false)}
                    className="bg-orange text-white px-5 py-4 rounded-xl text-center font-semibold mt-4 block w-full shadow-md"
                  >
                    Get A Quote
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
