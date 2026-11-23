"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles, Feather } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function About() {
  const { openStory } = useModal();

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F5F1E9] text-[#171816] transition-colors relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8C3A5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Architectural Photograph with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
                alt="Abode Builders - Natural light and Kerala inspired courtyard architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171816]/40 via-transparent to-transparent" />
            </div>

            {/* Floating Architectural Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#171816] text-[#F5F1E9] p-6 sm:p-7 rounded-2xl shadow-2xl border border-[#D8C3A5]/30 max-w-[260px] sm:max-w-[280px]"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block">
                Philosophy in Practice
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#F5F1E9] mt-1.5 leading-snug">
                Sensory architecture grounded in local soil, wind, and memory.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-[#D8C3A5]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8C3A5]" />
                <span>12+ Years of Mastery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Typography & Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#9C8061]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#9C8061] font-bold">
                ABOUT ABODE
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#171816] leading-[1.1] tracking-tight">
              More Than Construction. <br />
              <span className="italic font-normal text-[#9C8061]">
                We Create Spaces for Life.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#171816]/80 leading-relaxed font-light">
              At Abode Builders, we design and build homes that reflect your lifestyle, values, and connection to nature. Every space is thoughtfully planned, every detail carefully crafted, and every home built to feel uniquely yours.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#171816]/70 leading-relaxed">
              We look beyond superficial trends. By weaving passive climate principles, local materials like rammed earth, laterite, and seasoned teak with clean modernist lines, our homes remain naturally cool, deeply comforting, and timelessly relevant for generations.
            </p>

            {/* Three Micro-Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-[#171816]/10">
              <div className="space-y-1">
                <Compass className="w-5 h-5 text-[#9C8061]" />
                <h4 className="font-serif text-base text-[#171816] font-semibold">Climate Attuned</h4>
                <p className="text-xs text-[#171816]/70 leading-normal">
                  Harnessing sun paths, cross breeze & monsoon rain.
                </p>
              </div>

              <div className="space-y-1">
                <Feather className="w-5 h-5 text-[#777C62]" />
                <h4 className="font-serif text-base text-[#171816] font-semibold">Earthy Tactility</h4>
                <p className="text-xs text-[#171816]/70 leading-normal">
                  Rammed earth, natural stone & authentic timber.
                </p>
              </div>

              <div className="space-y-1">
                <Sparkles className="w-5 h-5 text-[#9C8061]" />
                <h4 className="font-serif text-base text-[#171816] font-semibold">Bespoke Living</h4>
                <p className="text-xs text-[#171816]/70 leading-normal">
                  No two homes alike — tailored purely for you.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={openStory}
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest font-semibold text-[#171816] hover:text-[#9C8061] transition-colors"
              >
                <span>Discover Our Story</span>
                <span className="w-10 h-10 rounded-full border border-[#171816]/30 group-hover:border-[#9C8061] flex items-center justify-center transition-all group-hover:translate-x-1.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
