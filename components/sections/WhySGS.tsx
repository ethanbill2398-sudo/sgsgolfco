"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Repeat2,
  Crosshair,
  Map,
  Brain,
  Video,
  UserCheck,
  Shield,
  ClipboardList,
} from "lucide-react";

const features = [
  {
    icon: Repeat2,
    title: "Better Habits",
    description: "Build the repeatable patterns that lead to lower scores on every round.",
  },
  {
    icon: Crosshair,
    title: "Better Contact",
    description: "Stop chunking and thinning. Learn the mechanics of clean, consistent contact.",
  },
  {
    icon: Map,
    title: "Better Course Management",
    description: "Make smarter decisions around the green that save strokes before you even swing.",
  },
  {
    icon: Brain,
    title: "Smarter Practice",
    description: "Stop banging balls and start making every practice session count.",
  },
  {
    icon: Video,
    title: "Video Swing Reviews",
    description: "See exactly what you're doing — and what to fix — with detailed video analysis.",
  },
  {
    icon: UserCheck,
    title: "Personalized Coaching",
    description: "Every lesson is built around your game, your weaknesses, and your goals.",
  },
  {
    icon: Shield,
    title: "Confidence Under Pressure",
    description: "Develop the mental trust in your technique to perform when it matters most.",
  },
  {
    icon: ClipboardList,
    title: "Simple Practice Plans",
    description: "Leave every lesson with a clear, actionable plan to keep improving at home.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhySGS() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label mb-4">Why Choose SGS</p>
          <h2 className="heading-lg text-navy mb-5">
            Better Habits. Better Shots.{" "}
            <span className="text-green-golf">Better Scores.</span>
          </h2>
          <p className="body-lg text-navy/60">
            Everything we do is designed to help you drop strokes fast — through smarter coaching,
            clearer feedback, and a system that actually works.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group p-6 rounded-2xl border border-gray-border bg-gray-bg
                         hover:bg-white hover:border-navy/20 hover:shadow-card
                         transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-navy/8 flex items-center justify-center mb-4
                              group-hover:bg-navy group-hover:scale-105 transition-all duration-300">
                <Icon className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading font-semibold text-base text-navy mb-2">{title}</h3>
              <p className="font-body text-sm text-navy/60 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center font-body text-sm text-navy/40 mt-12 italic"
        >
          Small swings. Big results. — The fastest way to drop strokes starts here.
        </motion.p>
      </div>
    </section>
  );
}
