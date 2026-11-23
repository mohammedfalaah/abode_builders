"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Sparkles, ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/data/testimonials";

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#222320] text-[#F5F1E9] relative border-y border-[#D8C3A5]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D8C3A5]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D8C3A5] font-bold">
              OUR PROCESS
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] tracking-tight leading-tight">
            A Methodical Journey <br />
            <span className="italic font-normal text-[#D8C3A5]">to Perfection.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F5F1E9]/75 font-light leading-relaxed">
            From preliminary sketches to zero-snag ceremonial handover, every milestone is orchestrated with absolute clarity and craftsmanship.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Navigation */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#D8C3A5]/20 -translate-y-1/2 z-0" />
            
            {/* Animated progress bar fill */}
            <div
              className="absolute top-1/2 left-0 h-[2px] bg-[#D8C3A5] -translate-y-1/2 z-0 transition-all duration-500"
              style={{
                width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%`,
              }}
            />

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#D8C3A5] text-[#171816] font-bold scale-110 shadow-2xl ring-4 ring-[#D8C3A5]/30"
                        : isPast
                        ? "bg-[#9C8061] text-[#F5F1E9]"
                        : "bg-[#171816] text-[#F5F1E9]/60 border border-[#D8C3A5]/20 group-hover:border-[#D8C3A5]"
                    }`}
                  >
                    {step.step}
                  </div>

                  <span
                    className={`mt-3 text-xs uppercase tracking-widest font-semibold transition-colors ${
                      isActive ? "text-[#D8C3A5]" : "text-[#F5F1E9]/60 group-hover:text-[#F5F1E9]"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Step Selector */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                activeStepIndex === idx
                  ? "bg-[#D8C3A5] text-[#171816]"
                  : "bg-[#171816] text-[#F5F1E9]/70 border border-[#D8C3A5]/20"
              }`}
            >
              {step.step} • {step.title}
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#171816] border border-[#D8C3A5]/25 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#222320] text-[#D8C3A5] border border-[#D8C3A5]/20">
                    Stage {currentStep.step} of 04
                  </span>
                  <span className="text-xs text-[#D8C3A5] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {currentStep.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
                  {currentStep.title} — {currentStep.subtitle}
                </h3>

                <p className="text-sm sm:text-base text-[#F5F1E9]/80 leading-relaxed font-light">
                  {currentStep.description}
                </p>

                <div className="pt-4 border-t border-[#D8C3A5]/10">
                  <span className="text-xs uppercase tracking-widest text-[#D8C3A5] font-semibold block mb-3">
                    Stage Inclusions & Safeguards:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStep.keyPoints.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-[#F5F1E9]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8C3A5] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary Badge */}
              <div className="lg:col-span-5 bg-[#222320] p-6 sm:p-8 rounded-2xl border border-[#D8C3A5]/20 flex flex-col justify-between space-y-6">
                <div>
                  <Sparkles className="w-7 h-7 text-[#D8C3A5] mb-3" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block">
                    Phase Outcome
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#F5F1E9] mt-1">
                    {currentStep.highlight}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#D8C3A5]/10">
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))
                    }
                    className="text-xs text-[#F5F1E9]/70 hover:text-[#D8C3A5]"
                  >
                    ← Previous Phase
                  </button>
                  <button
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8C3A5] hover:text-[#F5F1E9]"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
