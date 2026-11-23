"use client";

import React from "react";
import { motion } from "framer-motion";

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "DESIGN WITH PURPOSE",
    description:
      "Every detail is thoughtfully designed to balance functionality, aesthetics, and lifestyle.",
    detailText:
      "From sightlines framing nature to passive solar choreography, nothing is accidental. We craft layouts that respond effortlessly to your daily domestic rituals.",
    lineIllustration: (
      <svg className="w-12 h-12 stroke-[#D8C3A5]" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
        {/* Architectural layout & purpose lines */}
        <rect x="6" y="6" width="36" height="36" rx="2" strokeOpacity="0.8" />
        <line x1="6" y1="20" x2="42" y2="20" strokeDasharray="3 3" />
        <line x1="24" y1="20" x2="24" y2="42" />
        <circle cx="15" cy="31" r="3" />
        <path d="M30 13L36 13M33 10L33 16" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "BUILD WITH INTEGRITY",
    description:
      "Quality materials, transparent processes, and craftsmanship that lasts.",
    detailText:
      "We source non-toxic, durable raw materials directly from trusted stone quarries and timber yards. Our engineering practices exceed municipal standards to ensure multi-generational longevity.",
    lineIllustration: (
      <svg className="w-12 h-12 stroke-[#D8C3A5]" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
        {/* Foundation & structural integrity grid */}
        <path d="M8 40L24 10L40 40H8Z" strokeOpacity="0.8" />
        <line x1="16" y1="25" x2="32" y2="25" />
        <line x1="24" y1="10" x2="24" y2="40" strokeDasharray="2 2" />
        <circle cx="24" cy="25" r="2" fill="#D8C3A5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "INSPIRE THROUGH SPACES",
    description:
      "We create environments that make everyday living more meaningful.",
    detailText:
      "Architecture shapes emotional wellbeing. By opening homes to open skies, soft courtyards, rain chains, and warm textured surfaces, daily life becomes an inspiring sanctuary.",
    lineIllustration: (
      <svg className="w-12 h-12 stroke-[#D8C3A5]" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
        {/* Light rays & open courtyard resonance */}
        <circle cx="24" cy="24" r="16" strokeOpacity="0.7" />
        <path d="M24 4V12M24 36V44M4 24H12M36 24H44" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-[#222320] text-[#F5F1E9] relative border-y border-[#D8C3A5]/10 overflow-hidden">
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D8C3A5_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#D8C3A5]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D8C3A5] font-bold">
              OUR PHILOSOPHY
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] leading-[1.1] tracking-tight"
          >
            We Believe Good Design <br />
            <span className="italic font-normal text-[#D8C3A5]">
              Should Feel Natural.
            </span>
          </motion.h2>

          <p className="mt-6 text-base sm:text-lg text-[#F5F1E9]/75 font-light leading-relaxed">
            True luxury does not shout with opulent ornamentation. It is felt in the gentle shift of afternoon breezes through an open atrium, the cool touch of honed basalt stone, and spaces crafted with conscious intention.
          </p>
        </div>

        {/* Three Content Blocks */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[#171816]/70 border border-[#D8C3A5]/15 hover:border-[#D8C3A5]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              {/* Top Accent with Minimal Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-xl bg-[#222320] border border-[#D8C3A5]/20 group-hover:scale-110 transition-transform">
                    {pillar.lineIllustration}
                  </div>
                  <span className="font-serif text-3xl font-light text-[#D8C3A5]/40 group-hover:text-[#D8C3A5] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F1E9] tracking-wide mb-3 group-hover:text-[#D8C3A5] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm font-medium text-[#D8C3A5] leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <p className="text-xs text-[#F5F1E9]/65 leading-relaxed font-light">
                  {pillar.detailText}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-[#D8C3A5]/10 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#F5F1E9]/40 group-hover:text-[#D8C3A5] transition-colors">
                <span>Core Pillar</span>
                <span>Abode Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
