"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-0 relative overflow-hidden" ref={ref}>
      <div className="relative h-[480px] flex items-center">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1544551763-92ab472cad5d?w=1920&q=80"
          alt="Golf course at sunset"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/60" />

        {/* Content */}
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label text-green-golf-light mb-4"
            >
              Your path to lower scores starts here
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-lg text-white mb-5"
            >
              Ready to Lower Your Scores?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-lg text-white/70 mb-8 max-w-lg"
            >
              Friendly coaching for real golfers. Golf is hard — learning it shouldn&apos;t be.
              Book your first lesson today and start building precision and confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2.5 bg-white text-navy font-body font-semibold
                           px-8 py-4 rounded-xl shadow-lg hover:bg-white/95 hover:-translate-y-0.5
                           transition-all duration-200 ease-out"
              >
                <Calendar className="w-4.5 h-4.5" />
                Book Your Lesson Today
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <span className="font-body text-sm text-white/50">
                No commitment. Pay on the day.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
