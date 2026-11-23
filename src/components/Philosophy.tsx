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
      <svg className="w-12 h-12 stroke-[#8A7158]" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
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
      <svg className="w-12 h-12 stroke-[#8A7158]" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
        <path d="M8 40L24 10L40 40H8Z" strokeOpacity="0.8" />
        <line x1="16" y1="25" x2="32" y2="25" />
        <line x1="24" y1="10" x2="24" y2="40" strokeDasharray="2 2" />
        <circle cx="24" cy="25" r="2" fill="#8A7158" />
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
      <svg className="w-12 h-12 stroke-[#8A7158]" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
        <circle cx="24" cy="24" r="16" strokeOpacity="0.7" />
        <path d="M24 4V12M24 36V44M4 24H12M36 24H44" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-[#E8DDCC]/30 text-[#252522] relative border-b border-[#E8DDCC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#8A7158]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#8A7158] font-bold">
              OUR PHILOSOPHY
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252522] leading-[1.1] tracking-tight"
          >
            We Believe Good Design <br />
            <span className="italic font-normal text-[#8A7158]">
              Should Feel Natural.
            </span>
          </motion.h2>

          <p className="mt-6 text-base sm:text-lg text-[#252522]/75 font-normal leading-relaxed">
            True luxury does not shout with opulent ornamentation. It is felt in the gentle shift of afternoon breezes through an open atrium, the cool touch of honed basalt stone, and spaces crafted with conscious intention.
          </p>
        </div>

        {/* Three Content Blocks in Soft White */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DDCC] hover:border-[#8A7158] transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Top Accent with Minimal Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-xl bg-[#F8F6F1] border border-[#E8DDCC] group-hover:scale-110 transition-transform">
                    {pillar.lineIllustration}
                  </div>
                  <span className="font-serif text-3xl font-light text-[#B5A18A] group-hover:text-[#8A7158] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#252522] tracking-wide mb-3 group-hover:text-[#8A7158] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm font-semibold text-[#8A7158] leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <p className="text-xs text-[#252522]/70 leading-relaxed font-normal">
                  {pillar.detailText}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-[#E8DDCC] flex items-center justify-between text-[11px] uppercase tracking-widest text-[#B5A18A] group-hover:text-[#8A7158] transition-colors">
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
