"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const programs = [
  {
    id: 1,
    number: "01",
    title: "Beginner Fundamentals",
    tagline: "Your foundation starts here",
    duration: "60 Minutes",
    image: "https://images.unsplash.com/photo-1600376987698-8ab3e1c34b4e?w=800&q=80",
    description:
      "Build the foundation every golfer needs. We cover everything from how you hold the club to your first clean strikes.",
    skills: ["Grip & Setup", "Aim & Alignment", "Stance & Posture", "Pendulum Motion", "First Contact"],
    color: "from-navy to-navy-light",
    badge: "Start Here",
  },
  {
    id: 2,
    number: "02",
    title: "Putting Foundations",
    tagline: "Where three-putts go to die",
    duration: "60 Minutes",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",
    description:
      "Putting accounts for nearly 40% of your strokes. We fix the most common mistakes and give you a reliable stroke you can trust.",
    skills: ["Distance Control", "Gate Drill", "Green Reading", "Speed Control", "Alignment System"],
    color: "from-green-golf to-green-golf-light",
    badge: "Most Impactful",
  },
  {
    id: 3,
    number: "03",
    title: "Chipping Foundations",
    tagline: "Clean chips. Consistent contact.",
    duration: "60 Minutes",
    image: "https://images.unsplash.com/photo-1535132011086-b8818f016104?w=800&q=80",
    description:
      "Stop guessing which club to use. Learn a repeatable chipping system that works from any lie, any distance.",
    skills: ["High vs Low Chips", "Different Lies", "Ball Position", "Contact & Consistency", "Club Selection"],
    color: "from-navy to-navy-light",
    badge: null,
  },
  {
    id: 4,
    number: "04",
    title: "20–80 Yard Scoring",
    tagline: "The scoring zone made simple",
    duration: "60 Minutes",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
    description:
      "The shots between chipping and a full swing are where rounds are made or broken. Learn to control distance and trajectory with confidence.",
    skills: ["Pitch Shots", "Trajectory Control", "Distance Control", "Clock System", "Shot Selection"],
    color: "from-green-golf to-green-golf-light",
    badge: "Game Changer",
  },
  {
    id: 5,
    number: "05",
    title: "Master the Bunker",
    tagline: "Escape every time — guaranteed",
    duration: "60 Minutes",
    image: "https://images.unsplash.com/photo-1543982616-5bd1b46ca52c?w=800&q=80",
    description:
      "Bunkers don't have to be scary. Learn the mechanics of consistent sand play and build the confidence to escape every single time.",
    skills: ["Open Stance Setup", "Using the Bounce", "Dollar Bill Drill", "Distance Control", "Confidence Building"],
    color: "from-navy to-navy-light",
    badge: null,
  },
];

function ProgramCard({ program, index }: { program: (typeof programs)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="card overflow-hidden"
    >
      {/* Card header */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80`} />
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-heading font-semibold text-5xl text-white/20 leading-none">
              {program.number}
            </span>
            {program.badge && (
              <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold font-body px-3 py-1 rounded-full">
                {program.badge}
              </span>
            )}
          </div>
          <div>
            <p className="font-body text-xs text-white/70 uppercase tracking-wider mb-1">{program.tagline}</p>
            <h3 className="font-heading font-semibold text-xl text-white">{program.title}</h3>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-navy/40" />
          <span className="font-body text-sm text-navy/50">{program.duration}</span>
        </div>
        <p className="body-base text-navy/65 mb-4">{program.description}</p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-body text-sm font-semibold text-navy hover:text-green-golf transition-colors duration-200 mb-4"
        >
          {expanded ? "Hide details" : "What you'll learn"}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", expanded && "rotate-180")} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden space-y-2 mb-5"
            >
              {program.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-golf flex-shrink-0" />
                  <span className="font-body text-sm text-navy/70">{skill}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full btn-primary justify-center text-sm py-3"
        >
          Book This Lesson
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="programs" className="section-padding bg-gray-bg">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label mb-4">Lesson Programs</p>
          <h2 className="heading-lg text-navy mb-5">
            Five Lessons. Total Short Game Mastery.
          </h2>
          <p className="body-lg text-navy/60">
            Each lesson is a complete, structured unit. Work through all five and you&apos;ll have
            a complete short game toolkit — or pick the one your game needs most right now.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
