"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Structured lessons around proven fundamentals",
  "Measurable improvement from day one",
  "We teach scoring — not complicated swing theories",
  "Beginner-friendly, performance-focused coaching",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-gray-bg">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=80"
                alt="Golfer practicing short game"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl px-5 py-4">
                <p className="font-heading font-semibold text-white text-lg leading-tight">
                  "Every great score starts around the green."
                </p>
                <p className="font-body text-xs text-white/60 mt-1">— SGS Golf Co. philosophy</p>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card-hover p-5 border border-gray-border max-w-[180px]"
            >
              <div className="font-heading font-semibold text-3xl text-navy">65%</div>
              <div className="font-body text-xs text-navy/60 leading-snug mt-1">
                of golf shots happen inside 90 yards
              </div>
              <div className="mt-3 h-1 rounded-full bg-gray-bg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "65%" } : {}}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="h-full bg-green-golf rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <p className="section-label mb-4">Our Story</p>
            <h2 className="heading-lg text-navy mb-6">
              Helping Golfers Master the Shots That Matter Most
            </h2>
            <div className="space-y-5 mb-8">
              <p className="body-lg text-navy/70">
                SGS Golf Co. specializes in helping everyday golfers build confidence around the greens.
                Whether you&apos;re trying to break 100, eliminate three-putts, improve your chipping,
                or finally understand the short game — every lesson is structured around proven
                fundamentals and measurable improvement.
              </p>
              <p className="body-base text-navy/60">
                We don&apos;t teach complicated golf swings. <strong className="text-navy font-semibold">We teach scoring.</strong>
              </p>
              <p className="body-base text-navy/60 italic border-l-2 border-green-golf pl-4">
                "Golf is hard. Learning it shouldn&apos;t be."
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-golf flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-base text-navy/75">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Start Your Journey
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
