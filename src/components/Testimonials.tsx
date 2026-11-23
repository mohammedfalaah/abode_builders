"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F8F6F1] text-[#252522] relative overflow-hidden border-b border-[#E8DDCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#8A7158]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#8A7158] font-bold">
                HOMEOWNER VOICES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252522] tracking-tight leading-tight">
              Words From Our <br />
              <span className="italic font-normal text-[#8A7158]">Homeowners.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#E8DDCC] hover:border-[#8A7158] bg-white hover:bg-[#F8F6F1] flex items-center justify-center text-[#252522] transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#E8DDCC] hover:border-[#8A7158] bg-white hover:bg-[#F8F6F1] flex items-center justify-center text-[#252522] transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Display in Soft White */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-[#E8DDCC] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative"
          >
            {/* Left 7 cols: Quote & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <Quote className="w-10 h-10 text-[#8A7158]/35 mb-4" />

                {/* Star rating in Earth Brown */}
                <div className="flex items-center gap-1 mb-4 text-[#8A7158]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-serif text-2xl sm:text-3xl text-[#252522] leading-snug">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <p className="mt-4 text-xs sm:text-sm text-[#252522]/70 leading-relaxed font-normal">
                  {current.fullReview}
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-6 border-t border-[#E8DDCC] flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#E8DDCC] shrink-0">
                  <Image
                    src={current.image}
                    alt={current.clientName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#252522] font-semibold leading-tight">
                    {current.clientName}
                  </h4>
                  <span className="text-xs text-[#8A7158] font-medium block">
                    {current.roleOrDesignation}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-[#252522]/50 mt-0.5">
                    <span className="text-[#8A7158] font-medium">{current.projectName}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8A7158]" />
                      {current.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Project Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8DDCC] shadow-md">
                <Image
                  src={current.projectImage}
                  alt={current.projectName}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#E8DDCC] font-bold block">
                    Homeowner Residence
                  </span>
                  <span className="font-serif text-lg">
                    {current.projectName}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#252522]"
                  : "w-2 bg-[#B5A18A]/40 hover:bg-[#8A7158]"
              }`}
              aria-label={`Jump to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
