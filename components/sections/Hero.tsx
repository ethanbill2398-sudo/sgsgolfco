"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPrograms = () => {
    document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85"
          alt="Premium golf course aerial view"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-hero-gradient" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(63,125,59,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(13,43,82,0.6) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-wide text-center text-white pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-golf animate-pulse" />
          <span className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
            Short Game Specialists
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="heading-xl text-white mb-6 max-w-4xl mx-auto"
        >
          Unlock Your{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Short Game</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="absolute bottom-1 left-0 right-0 h-[3px] bg-green-golf origin-left rounded-full"
            />
          </span>{" "}
          Potential
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="body-lg text-white/80 max-w-2xl mx-auto mb-4"
        >
          Did you know nearly{" "}
          <span className="text-white font-semibold">65% of golf shots</span> happen inside 90 yards?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="body-base text-white/65 max-w-xl mx-auto mb-10"
        >
          Let&apos;s make that the strongest part of your game.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 bg-white text-navy font-body font-semibold
                       px-8 py-4 rounded-xl shadow-lg text-base
                       hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-xl
                       transition-all duration-200 ease-out"
          >
            Book Your First Lesson
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={scrollToPrograms}
            className="btn-secondary text-base"
          >
            <PlayCircle className="w-4.5 h-4.5" />
            View Programs
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            { value: "100+", label: "Golfers Coached" },
            { value: "5", label: "Structured Lessons" },
            { value: "65%", label: "Shots Inside 90 Yards" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-semibold text-2xl text-white">{stat.value}</div>
              <div className="font-body text-xs text-white/55 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5
                   text-white/50 hover:text-white/80 transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <span className="font-body text-xs uppercase tracking-[0.12em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
