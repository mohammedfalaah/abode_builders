"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export default function Showcase() {
  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#F8F6F1] text-[#252522]">
      {/* Full-width Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects/sajid/hero.jpg"
          alt="Abode Builders - Mr. Sajid Babu 14,000 sq.ft. Modern Colonial Residence"
          fill
          priority
          className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
        />
        {/* Layered Luxury Warm Ivory Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F1] via-[#F8F6F1]/55 to-[#F8F6F1]/30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E8DDCC] backdrop-blur-md mb-6 shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 text-[#8A7158]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8A7158] font-bold">
            Architectural Showcase
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#252522] tracking-tight leading-[1.1]"
        >
          Built Around the Way <br />
          <span className="italic font-normal text-[#8A7158]">
            You Live.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-[#252522]/80 font-normal leading-relaxed"
        >
          Where raw textures embrace tailored comfort. Every home we sculpt is an enduring dialogue between tropical landscape, modern structural boldness, and intimate sanctuaries for private retreat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#252522] hover:bg-[#8A7158] text-[#F8F6F1] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
