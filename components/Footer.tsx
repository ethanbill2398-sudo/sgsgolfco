"use client";

import { motion } from "framer-motion";
import { Flag, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ],
  Lessons: [
    { label: "Beginner Fundamentals", href: "#programs" },
    { label: "Putting Foundations", href: "#programs" },
    { label: "Chipping Fundamentals", href: "#programs" },
    { label: "20-80 Yard Scoring", href: "#programs" },
    { label: "Bunker Play", href: "#programs" },
  ],
  Connect: [
    { label: "Book a Lesson", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
    { label: "Shop (Coming Soon)", href: "#shop" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "TikTok / YouTube" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-white/80">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container-wide py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-green-golf/30 transition-colors duration-200">
                <Flag className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-heading font-semibold text-lg text-white tracking-tight">SGS Golf Co.</span>
            </button>
            <p className="font-body text-sm leading-relaxed text-white/60 max-w-xs mb-6">
              Helping golfers unlock their short game potential through structured coaching,
              better fundamentals, and smarter practice.
            </p>
            <p className="font-body text-sm font-medium text-green-golf-light italic mb-6">
              "Master the short game. Master your score."
            </p>
            {/* Contact quick info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-green-golf flex-shrink-0" />
                <span>Local Golf Facility — Contact for Location</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail className="w-4 h-4 text-green-golf flex-shrink-0" />
                <span>info@sgsgolfco.com</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.15em] text-white/40 mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/40 text-center sm:text-left">
          © {new Date().getFullYear()} SGS Golf Co. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center
                         text-white/50 hover:text-white hover:bg-white/15 hover:border-white/20
                         transition-all duration-200"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-white/30">
          Helping golfers unlock their short game potential.
        </p>
      </div>
    </footer>
  );
}
