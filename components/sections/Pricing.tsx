"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "solo",
    name: "Solo Lesson",
    price: "$60",
    unit: "per lesson",
    description: "One-on-one focused coaching tailored entirely to your game.",
    features: [
      "60-minute private lesson",
      "Personalized feedback",
      "Video analysis available",
      "Customized practice plan",
      "Any of the 5 lesson programs",
    ],
    cta: "Book a Lesson",
    popular: false,
    highlight: false,
  },
  {
    id: "package",
    name: "2-Lesson Package",
    price: "$100",
    unit: "save $20",
    description: "The fastest path to improvement — two focused sessions back to back.",
    features: [
      "Two 60-minute private lessons",
      "Progressive skill building",
      "Video analysis included",
      "Detailed practice plans",
      "Priority booking",
      "Best value for solo golfers",
    ],
    cta: "Book Package",
    popular: true,
    highlight: true,
  },
  {
    id: "group",
    name: "Group Lessons",
    price: "$50",
    unit: "per person",
    description: "Perfect for friends, couples, or small groups who want to improve together.",
    features: [
      "2–6 golfers per session",
      "60-minute group lesson",
      "Interactive & social format",
      "Same structured curriculum",
      "Great for beginners",
    ],
    cta: "Book Group",
    popular: false,
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label mb-4">Simple Pricing</p>
          <h2 className="heading-lg text-navy mb-5">
            Invest in the Part of Your Game{" "}
            <span className="text-green-golf">That Matters Most</span>
          </h2>
          <p className="body-lg text-navy/60">
            No hidden fees. No complicated packages. Just straightforward pricing for lessons
            that actually move the needle.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col transition-all duration-300",
                plan.highlight
                  ? "bg-navy text-white shadow-navy ring-2 ring-navy scale-[1.02] hover:scale-[1.04]"
                  : "bg-white border border-gray-border shadow-card hover:shadow-card-hover hover:-translate-y-1"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-golf text-white text-xs font-semibold font-body uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-white" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className={cn("font-body text-sm font-semibold uppercase tracking-wider mb-2", plan.highlight ? "text-white/50" : "text-navy/40")}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-2 mb-1">
                  <span className={cn("font-heading font-semibold text-5xl tracking-tight", plan.highlight ? "text-white" : "text-navy")}>
                    {plan.price}
                  </span>
                  <span className={cn("font-body text-sm mb-2", plan.highlight ? "text-white/50" : "text-navy/45")}>
                    {plan.unit}
                  </span>
                </div>
                <p className={cn("font-body text-sm leading-relaxed", plan.highlight ? "text-white/65" : "text-navy/60")}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={cn("w-4.5 h-4.5 flex-shrink-0 mt-0.5", plan.highlight ? "text-green-golf-light" : "text-green-golf")} strokeWidth={2.5} />
                    <span className={cn("font-body text-sm", plan.highlight ? "text-white/80" : "text-navy/70")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={cn(
                  "w-full font-body font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200",
                  plan.highlight
                    ? "bg-white text-navy hover:bg-white/90 hover:-translate-y-0.5 shadow-md"
                    : "bg-navy text-white hover:bg-navy-light hover:-translate-y-0.5 shadow-navy/20 shadow-md"
                )}
              >
                {plan.id === "group" && <Users className="w-4 h-4" />}
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center font-body text-sm text-navy/40 mt-10"
        >
          All lessons booked through the contact form. Payment collected on the day of your lesson.
          Gift cards available — perfect for any golfer.
        </motion.p>
      </div>
    </section>
  );
}
