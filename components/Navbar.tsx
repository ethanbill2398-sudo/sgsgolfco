"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-card border-b border-gray-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="SGS Golf Co. home"
          >
            <div className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300",
              scrolled ? "bg-navy" : "bg-white/15 backdrop-blur-sm border border-white/30"
            )}>
              <Flag className={cn("w-4.5 h-4.5", scrolled ? "text-white" : "text-white")} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={cn(
                "font-heading font-semibold text-base tracking-tight transition-colors duration-300",
                scrolled ? "text-navy" : "text-white"
              )}>SGS Golf Co.</span>
              <span className={cn(
                "font-body text-[10px] uppercase tracking-[0.14em] transition-colors duration-300",
                scrolled ? "text-navy/50" : "text-white/60"
              )}>Short Game Specialists</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className={cn(
                  "font-body text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200",
                  scrolled
                    ? "text-navy/70 hover:text-navy hover:bg-navy/6"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLink("#contact")}
              className={cn(
                "font-body text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200",
                scrolled
                  ? "bg-navy text-white hover:bg-navy-light shadow-navy/20 shadow-md hover:-translate-y-0.5"
                  : "bg-white text-navy hover:bg-white/90 shadow-lg hover:-translate-y-0.5"
              )}
            >
              Book a Lesson
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-200",
              scrolled
                ? "text-navy hover:bg-navy/8"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed top-0 left-0 right-0 z-40 pt-20 bg-white border-b border-gray-border shadow-card-hover md:hidden"
          >
            <nav className="container-wide flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="font-body text-base font-medium text-navy/80 hover:text-navy px-4 py-3 rounded-xl text-left hover:bg-navy/6 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 pb-2 border-t border-gray-border mt-2">
                <button
                  onClick={() => handleLink("#contact")}
                  className="btn-primary w-full justify-center"
                >
                  Book a Lesson
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-navy/20 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
