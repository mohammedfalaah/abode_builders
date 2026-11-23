"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModal } from "@/context/ModalContext";

export default function HeroStats() {
  const { openStory } = useModal();

  return (
    <div className="border-t border-[#D8C3A5]/15 bg-[#171816]/85 backdrop-blur-md py-6 sm:py-8">
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
                className="flex flex-col text-left border-l border-[#D8C3A5]/25 pl-4 sm:pl-5"
              >
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1E9] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[#D8C3A5] uppercase tracking-wider font-medium mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#F5F1E9]/50 mt-0.5 hidden sm:block">
                  {stat.note}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Watch Story Action */}
          <div className="w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D8C3A5]/10 flex justify-start lg:justify-end">
            <button
              onClick={openStory}
              className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#222320] hover:bg-[#2b2c28] border border-[#D8C3A5]/30 hover:border-[#D8C3A5] text-[#F5F1E9] transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#D8C3A5] text-[#171816] flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-[0.2em] text-[#D8C3A5] font-semibold">
                  Architectural Film
                </span>
                <span className="block text-sm font-serif text-[#F5F1E9] group-hover:text-[#D8C3A5] transition-colors">
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
