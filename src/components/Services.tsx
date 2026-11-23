"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Plus, Minus } from "lucide-react";
import { SERVICES } from "@/data/services";
import { useModal } from "@/context/ModalContext";

export default function Services() {
  const { openQuote } = useModal();
  const [expandedService, setExpandedService] = useState<string | null>(SERVICES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#171816] text-[#F5F1E9] relative border-t border-[#D8C3A5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D8C3A5]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D8C3A5] font-bold">
              EXPERTISE & SERVICES
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] tracking-tight leading-tight">
            From Vision to <br />
            <span className="italic font-normal text-[#D8C3A5]">Reality.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F5F1E9]/75 font-light leading-relaxed">
            A comprehensive architectural and construction practice guiding your home from raw soil to timeless sanctuary.
          </p>
        </div>

        {/* 6 Elegant Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-[#222320] border border-[#D8C3A5]/15 hover:border-[#D8C3A5]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Visual Imagery Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222320] via-[#222320]/40 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#171816]/80 backdrop-blur-md border border-[#D8C3A5]/30 flex items-center justify-center font-mono text-xs text-[#D8C3A5] font-bold">
                    {service.number}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#F5F1E9] group-hover:text-[#D8C3A5] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#F5F1E9]/75 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>

                    {/* Expandable Features */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-[#D8C3A5]/10 space-y-2 overflow-hidden"
                        >
                          <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] font-semibold block">
                            Key Deliverables:
                          </span>
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-start gap-2 text-xs text-[#F5F1E9]/80">
                              <Check className="w-3.5 h-3.5 text-[#D8C3A5] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-6 pt-4 border-t border-[#D8C3A5]/10 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#D8C3A5] hover:text-[#F5F1E9] transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <Minus className="w-3.5 h-3.5" />
                          <span>Show Less</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>View Scope</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openQuote(service.title)}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#F5F1E9] hover:text-[#D8C3A5] transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
