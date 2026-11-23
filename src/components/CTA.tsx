"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/company";

export default function CTA() {
  const { openQuote } = useModal();

  return (
    <section className="relative w-full py-28 sm:py-36 overflow-hidden bg-[#171816]">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
          alt="Abode Builders - Timeless Modern Residence"
          fill
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171816]/95 via-[#171816]/80 to-[#171816]/95" />
        <div className="absolute inset-0 bg-[#171816]/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#222320]/80 border border-[#D8C3A5]/30 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D8C3A5]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold">
            Let&apos;s Build Together
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F1E9] tracking-tight leading-[1.1]">
          Your Dream Home <br />
          <span className="italic font-normal text-[#D8C3A5]">
            Starts With a Conversation.
          </span>
        </h2>

        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-[#F5F1E9]/80 font-light leading-relaxed">
          Have a vision for your home? Let&apos;s create something meaningful together.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openQuote()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D8C3A5] hover:bg-[#F5F1E9] text-[#171816] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#222320]/90 hover:bg-[#222320] border border-[#25D366]/40 text-[#F5F1E9] text-sm font-medium tracking-wide transition-all backdrop-blur-md hover:border-[#25D366]"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
