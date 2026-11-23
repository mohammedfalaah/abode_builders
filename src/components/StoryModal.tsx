"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Sparkles, Building2, Trees, Compass } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function StoryModal() {
  const { isStoryOpen, closeStory } = useModal();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeStory();
    };
    if (isStoryOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isStoryOpen, closeStory]);

  return (
    <AnimatePresence>
      {isStoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStory}
            className="absolute inset-0 bg-[#171816]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#222320] border border-[#D8C3A5]/25 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-[#F5F1E9]"
          >
            {/* Close Button */}
            <button
              onClick={closeStory}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D8C3A5]/70 hover:text-[#F5F1E9] hover:bg-[#171816] transition-colors z-20"
              aria-label="Close story modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video / Visual Teaser */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 border border-[#D8C3A5]/20 group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="Abode Builders Architectural Film"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171816] via-[#171816]/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D8C3A5]/90 text-[#171816] flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold mt-4">
                  Architectural Short Film
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F5F1E9] mt-1">
                  Modern Homes. Earthy Feels.
                </h4>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6 text-[#F5F1E9]/85 leading-relaxed">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#D8C3A5] font-medium">
                  The Genesis
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] mt-1">
                  Twelve Years of Sculpting Sanctuary
                </h3>
              </div>

              <p className="text-sm sm:text-base">
                Abode Builders was born from a fundamental frustration with generic urban homes: boxy plaster structures that shut out the sky, trap heat, and divorce residents from the natural elements. We envisioned an architecture studio that treated light, ventilation, earth, and rainwater as primary building blocks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#171816]/70 border border-[#D8C3A5]/15">
                  <Building2 className="w-6 h-6 text-[#D8C3A5] mb-2" />
                  <h4 className="font-serif text-lg text-[#F5F1E9]">Contemporary Rigor</h4>
                  <p className="text-xs text-[#F5F1E9]/70 mt-1">
                    Clean lines, cantilevered planes, and unvarnished honest materiality.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#171816]/70 border border-[#D8C3A5]/15">
                  <Trees className="w-6 h-6 text-[#777C62] mb-2" />
                  <h4 className="font-serif text-lg text-[#F5F1E9]">Earthy Warmth</h4>
                  <p className="text-xs text-[#F5F1E9]/70 mt-1">
                    Rammed earth, courtyards, reclaimed teak, and tactile natural stone.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#171816]/70 border border-[#D8C3A5]/15">
                  <Compass className="w-6 h-6 text-[#9C8061] mb-2" />
                  <h4 className="font-serif text-lg text-[#F5F1E9]">Microclimatic Craft</h4>
                  <p className="text-xs text-[#F5F1E9]/70 mt-1">
                    Designed around sun paths and monsoons for natural 4°C passive cooling.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#F5F1E9]/75 pt-2">
                Today, with over 100 residences built across Kerala, Karnataka, and Tamil Nadu, every Abode home remains a bespoke testament to our belief that modern luxury should never sacrifice the sensory warmth of nature.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
