"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModal } from "@/context/ModalContext";

export default function HeroStats() {
  const { openStory } = useModal();

  return (
    <div className="border-t border-[#E8DDCC] bg-[#F8F6F1]/95 backdrop-blur-md py-6 sm:py-8 text-[#252522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Key Metric Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-auto flex-1">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="flex flex-col text-left border-l border-[#B5A18A]/50 pl-4 sm:pl-5"
              >
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#252522] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[#8A7158] uppercase tracking-wider font-bold mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#252522]/60 mt-0.5 hidden sm:block">
                  {stat.note}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Watch Story Action */}
          <div className="w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8DDCC] flex justify-start lg:justify-end">
            <button
              onClick={openStory}
              className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white hover:bg-[#F8F6F1] border border-[#E8DDCC] hover:border-[#8A7158] text-[#252522] transition-all shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#252522] text-[#F8F6F1] flex items-center justify-center pl-0.5 group-hover:scale-110 group-hover:bg-[#8A7158] transition-all">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-[0.2em] text-[#8A7158] font-bold">
                  Architectural Film
                </span>
                <span className="block text-sm font-serif text-[#252522] group-hover:text-[#8A7158] transition-colors">
                  Watch Our Story →
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
