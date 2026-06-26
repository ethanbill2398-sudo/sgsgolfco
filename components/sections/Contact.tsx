"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const experienceLevels = [
  "Complete Beginner",
  "Learning the basics (100+ scores)",
  "Breaking 100",
  "Breaking 90",
  "Competitive golfer",
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", handle: "@sgsgolfco", href: "#" },
  { icon: Facebook, label: "Facebook", handle: "SGS Golf Co.", href: "#" },
  { icon: Youtube, label: "TikTok", handle: "@sgsgolfco", href: "#" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", experience: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = cn(
    "w-full font-body text-sm text-navy placeholder:text-navy/35",
    "bg-gray-bg border border-gray-border rounded-xl px-4 py-3.5",
    "focus:outline-none focus:ring-2 focus:ring-navy/15 focus:border-navy/30",
    "transition-all duration-200"
  );

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label mb-4">Get in Touch</p>
          <h2 className="heading-lg text-navy mb-5">
            Book Your Lesson Today
          </h2>
          <p className="body-lg text-navy/60">
            Build precision. Build confidence. Your path to lower scores starts with a single message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-xl text-navy mb-5">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Local Golf Facility — details on booking" },
                  { icon: Mail, label: "Email", value: "info@sgsgolfco.com" },
                  { icon: Phone, label: "Phone", value: "Contact via form for fastest reply" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-navy/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-navy/40 uppercase tracking-wider">{label}</p>
                      <p className="font-body text-sm text-navy/75 mt-0.5 leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-heading font-semibold text-base text-navy mb-4">Follow Along</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-border
                               hover:border-navy/20 hover:bg-gray-bg transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-navy/8 flex items-center justify-center group-hover:bg-navy transition-colors duration-200">
                      <Icon className="w-3.5 h-3.5 text-navy group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-navy/40">{label}</p>
                      <p className="font-body text-sm font-medium text-navy">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="p-5 rounded-2xl bg-navy relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-golf/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <p className="font-body text-sm text-white/75 leading-relaxed relative z-10">
                <span className="text-white font-semibold">&ldquo;Short game made simple.&rdquo;</span>
                {" "}Every great score starts around the green — let&apos;s build yours together.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-gray-border shadow-card p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-golf/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-golf" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-navy mb-3">You&apos;re on your way!</h3>
                  <p className="font-body text-base text-navy/60 max-w-sm mx-auto">
                    Thanks for reaching out. I&apos;ll be in touch within 24 hours to confirm your lesson details.
                  </p>
                  <p className="font-body text-sm text-green-golf mt-4 font-medium">
                    Your path to lower scores starts here. 🏌️
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 mb-1.5 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 mb-1.5 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 mb-1.5 block">
                      Golf Experience
                    </label>
                    <select
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      className={cn(inputClass, "cursor-pointer")}
                    >
                      <option value="">Select your experience level...</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-navy/50 mb-1.5 block">
                      Tell Me About Your Game
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What's the biggest weakness in your short game? What lesson are you interested in? Any upcoming rounds you're preparing for?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    <Send className="w-4.5 h-4.5" />
                    Send My Booking Request
                  </button>
                  <p className="font-body text-xs text-center text-navy/35">
                    I&apos;ll reply within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
