"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, BookOpen, TrendingDown } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Build Confidence",
    description:
      "Step onto the course knowing exactly what to do around the greens. We replace doubt with a reliable, repeatable process so you can commit to every shot.",
    color: "bg-navy/8",
    iconColor: "text-navy",
  },
  {
    icon: BookOpen,
    title: "Master Fundamentals",
    description:
      "Grip, stance, contact, and motion — we build every skill on a solid foundation. Great short game shots start with the right habits, every single time.",
    color: "bg-green-golf/10",
    iconColor: "text-green-golf",
  },
  {
    icon: TrendingDown,
    title: "Lower Your Scores",
    description:
      "Fewer three-putts. Cleaner chips. Confident bunker escapes. When your short game improves, your scorecard reflects it — fast.",
    color: "bg-navy/8",
    iconColor: "text-navy",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-border">
      <div className="container-wide" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map(({ icon: Icon, title, description, color, iconColor }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-border hover:border-navy/20 hover:shadow-card transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.75} />
              </div>
              <h3 className="heading-md text-navy mb-3">{title}</h3>
              <p className="body-base text-navy/60">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
