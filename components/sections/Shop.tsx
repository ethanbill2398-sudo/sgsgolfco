"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell } from "lucide-react";

const comingSoon = [
  { icon: "🟢", name: "Putting Mats" },
  { icon: "⚪", name: "Training Aids" },
  { icon: "⛳", name: "Foam Practice Balls" },
  { icon: "🪞", name: "Putting Mirrors" },
  { icon: "🔵", name: "Golf Grips" },
  { icon: "👕", name: "SGS Merchandise" },
  { icon: "❄️", name: "Winter Programs" },
  { icon: "🎁", name: "Gift Cards" },
];

export default function Shop() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="shop" className="section-padding bg-gray-bg">
      <div className="container-wide" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-amber-700">
                Coming Soon
              </span>
            </div>
            <h2 className="heading-lg text-navy mb-5">
              The SGS Golf Shop
            </h2>
            <p className="body-lg text-navy/60 max-w-xl mx-auto">
              Curated affiliate products and SGS-recommended training aids — everything you need
              to practice smarter between lessons.
            </p>
          </motion.div>

          {/* Products grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {comingSoon.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-border p-5 text-center
                           opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-body text-sm font-medium text-navy">{item.name}</p>
                <p className="font-body text-xs text-navy/40 mt-1">Coming soon</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Notify form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl border border-gray-border shadow-card p-8 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-navy/8 flex items-center justify-center mx-auto mb-4">
              <Bell className="w-5 h-5 text-navy" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-navy mb-2">Be First to Know</h3>
            <p className="font-body text-sm text-navy/60 mb-6">
              Enter your email and we&apos;ll notify you the moment the shop goes live.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 font-body text-sm text-navy placeholder:text-navy/40 bg-gray-bg
                           border border-gray-border rounded-xl px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30
                           transition-all duration-200"
              />
              <button
                type="submit"
                className="btn-primary text-sm py-3 whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
