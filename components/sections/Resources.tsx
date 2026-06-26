"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Best Wedges for Beginners",
    excerpt: "Choosing the right wedge can save you 5+ strokes per round. We break down what to look for and which lofts to prioritize first.",
    category: "Equipment",
    readTime: "4 min read",
    image: "/images/putting-closeup.jpg",
    color: "bg-navy/8",
  },
  {
    title: "How to Break 100",
    excerpt: "Breaking 100 is less about your swing and more about your decision-making. Here's the exact strategy we teach in every beginner lesson.",
    category: "Strategy",
    readTime: "6 min read",
    image: "/images/golf-group-playing.jpg",
    color: "bg-green-golf/10",
  },
  {
    title: "5 Putting Drills That Actually Work",
    excerpt: "Stop three-putting with these proven drills. The gate drill alone has helped dozens of our students drop 4+ putts per round.",
    category: "Putting",
    readTime: "5 min read",
    image: "/images/putting-closeup.jpg",
    color: "bg-navy/8",
  },
  {
    title: "Chipping Tips for Cleaner Contact",
    excerpt: "The number one reason golfers chunk chips is a simple setup issue. Fix these two things and watch your contact immediately improve.",
    category: "Chipping",
    readTime: "4 min read",
    image: "/images/golf-group-green.jpg",
    color: "bg-green-golf/10",
  },
  {
    title: "Course Management for Weekend Golfers",
    excerpt: "Smart course management can save 6-8 shots without changing your swing at all. Here's how to think your way around the golf course.",
    category: "Strategy",
    readTime: "7 min read",
    image: "/images/golf-group-playing.jpg",
    color: "bg-navy/8",
  },
  {
    title: "How to Practice at Home",
    excerpt: "You don't need a putting green in your backyard. These simple practice routines can be done in your living room and they actually work.",
    category: "Practice",
    readTime: "5 min read",
    image: "/images/putting-closeup.jpg",
    color: "bg-green-golf/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Resources() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="section-label mb-4">Free Resources</p>
            <h2 className="heading-lg text-navy">
              Golf Tips & Guides
            </h2>
          </div>
          <p className="body-base text-navy/55 max-w-sm">
            Practical insights to help you improve between lessons — no fluff, just actionable golf advice.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={cardVariants}
              className="card group overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                <div className={`absolute top-4 left-4 ${article.color} backdrop-blur-sm px-3 py-1 rounded-full`}>
                  <span className="font-body text-xs font-semibold text-navy">{article.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-green-golf transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-navy/60 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-navy/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-body text-xs">{article.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 font-body text-xs font-semibold text-navy group-hover:text-green-golf transition-colors duration-200">
                    Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
