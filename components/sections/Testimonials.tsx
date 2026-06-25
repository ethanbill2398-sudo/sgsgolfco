"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    quote: "My short game improved more in two lessons than it had in years of playing. The structure is exactly what I was missing.",
    author: "Mike T.",
    detail: "Golfer for 8 years, finally broke 90",
  },
  {
    stars: 5,
    quote: "I finally stopped three-putting. The putting lesson was genuinely game-changing — I went from averaging 36 putts to 28 in two weeks.",
    author: "Sarah K.",
    detail: "Beginner golfer, 6 months in",
  },
  {
    stars: 5,
    quote: "The best golf money I've ever spent. Simple, clear coaching that actually sticks. I use what I learned every single round.",
    author: "James R.",
    detail: "Weekend golfer, broke 100 after lesson 2",
  },
  {
    stars: 5,
    quote: "Took the group lesson with three friends. All of us left with something completely different to work on. Incredibly personalized even in a group.",
    author: "The Anderson Group",
    detail: "Group lesson, family outing",
  },
  {
    stars: 5,
    quote: "I was embarrassed about my bunker play for years. After one lesson I can genuinely say I'm no longer scared of sand. Life-changing.",
    author: "Derek M.",
    detail: "15-handicap, now 11",
  },
  {
    stars: 5,
    quote: "Short game made simple is not just a tagline — it's exactly what this is. No complicated theory. Just fundamentals that work.",
    author: "Linda W.",
    detail: "First time golfer, now plays weekly",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-gray-bg">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label mb-4">Real Results</p>
          <h2 className="heading-lg text-navy mb-5">
            Golfers Who Took the Shot.{" "}
            <span className="text-green-golf">And Saw the Difference.</span>
          </h2>
          <p className="body-lg text-navy/60">
            Turning bogeys into pars — one shot at a time. Here&apos;s what our students say.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white rounded-2xl p-7 border border-gray-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-7 h-7 text-navy/15 mb-3" />
              <StarRating count={t.stars} />
              <p className="font-body text-base text-navy/75 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-5 border-t border-gray-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy/8 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-semibold text-sm text-navy">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-navy">{t.author}</p>
                  <p className="font-body text-xs text-navy/45">{t.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
