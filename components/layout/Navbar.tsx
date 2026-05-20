"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  const navBg = useTransform(
    scrollY,
    [0, 60],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 60],
    ["none", "0 8px 40px rgba(15,29,74,0.08)"]
  );
  const navPadding = useTransform(
    scrollY,
    [0, 60],
    ["18px 0", "10px 0"]
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

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
          backgroundColor: shouldReduceMotion ? "rgba(255,255,255,0.9)" : navBg,
          boxShadow: shouldReduceMotion ? "0 8px 40px rgba(15,29,74,0.08)" : navShadow,
          padding: shouldReduceMotion ? "10px 0" : navPadding,
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(15,29,74,0.06)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className={clsx(
              "rounded-xl transition-all duration-300",
              scrolled ? "bg-transparent" : "bg-white/95 backdrop-blur-sm px-2 py-1 shadow-md"
            )}>
              <Image src="/images/apex-nova.png" alt="Apexnova Logistics" width={200} height={64} priority className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      className={clsx(
                        "text-[14px] font-medium tracking-tight transition-colors pb-1 block relative z-10",
                        isActive
                          ? "text-orange"
                          : scrolled
                            ? "text-navy-deep hover:text-orange"
                            : "text-white hover:text-orange"
                      )}
                    >
                      {link.name}
                    </Link>
                    {isActive && !shouldReduceMotion && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-orange to-orange-glow rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {isActive && shouldReduceMotion && (
                      <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-orange rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
            <Link href="/quote">
              <motion.button
                whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
                whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
                className="relative overflow-hidden bg-gradient-to-r from-orange to-orange-dark text-white pl-5 pr-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-glow-orange flex items-center gap-2 group"
              >
                <span className="relative z-10">Get A Quote</span>
                <motion.span
                  className="relative z-10 flex items-center"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight size={15} />
                </motion.span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={clsx(
              "lg:hidden p-2 min-w-[44px] min-h-[44px] relative z-[60] transition-colors flex items-center justify-center",
              isOpen || scrolled ? "text-navy-deep" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col pt-24 px-6"
            >
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-5"
              >
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.name} variants={fadeUp} custom={i}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "text-xl font-semibold transition-colors block border-b border-gray-100 pb-4 tracking-tight",
                          isActive ? "text-orange" : "text-navy-deep"
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
                    className="bg-gradient-to-r from-orange to-orange-dark text-white px-5 py-4 rounded-2xl text-center font-semibold mt-4 flex items-center justify-center gap-2 w-full shadow-lg shadow-orange/30"
                  >
                    Get A Quote <ArrowRight size={18} />
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
