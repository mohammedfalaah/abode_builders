"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export default function Showcase() {
  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#171816]">
      {/* Full-width Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400&auto=format&fit=crop"
          alt="Abode Builders - Architectural Showcase Villa"
          fill
          priority={false}
          className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
        />
        {/* Layered Luxury Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171816] via-[#171816]/50 to-[#171816]/80" />
        <div className="absolute inset-0 bg-[#171816]/30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#222320]/80 border border-[#D8C3A5]/30 backdrop-blur-md mb-6"
        >
          <Compass className="w-3.5 h-3.5 text-[#D8C3A5]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold">
            Architectural Showcase
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F1E9] tracking-tight leading-[1.1]"
        >
          Built Around the Way <br />
          <span className="italic font-normal text-[#D8C3A5]">
            You Live.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-[#F5F1E9]/85 font-light leading-relaxed"
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
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D8C3A5] hover:bg-[#F5F1E9] text-[#171816] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
