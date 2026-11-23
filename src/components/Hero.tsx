"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Play } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModal } from "@/context/ModalContext";
import HeroStats from "./HeroStats";

export default function Hero() {
  const { openStory, openQuote } = useModal();

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F8F6F1] text-[#252522]">
      {/* Background Architectural Image with Subtle Scale */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
            alt="Abode Builders - Modern Tropical Luxury Residence"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Sophisticated Warm Ivory Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F1] via-[#F8F6F1]/55 to-[#F8F6F1]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F1]/92 via-[#F8F6F1]/60 to-transparent" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-44 md:pt-52 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow in Earth Brown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E8DDCC] backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A7158]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#8A7158] font-bold">
              {COMPANY_INFO.tagline}
            </span>
          </motion.div>

          {/* Main Headline in Charcoal and Earth Brown */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#252522] leading-[1.05]"
          >
            Modern Homes.{" "}
            <br />
            <span className="italic font-normal text-[#8A7158]">
              Earthy Feels.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-[#252522]/80 font-normal max-w-2xl leading-relaxed"
          >
            Thoughtfully designed, expertly built homes that blend modern living with the warmth of nature.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#252522] hover:bg-[#8A7158] text-[#F8F6F1] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/95 hover:bg-white border border-[#E8DDCC] hover:border-[#8A7158] text-[#252522] text-sm font-semibold tracking-wide transition-all shadow-sm backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4 text-[#777B63]" />
              <span>WhatsApp / Talk to Us</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Hero Statistics Bar with Watch Story Trigger */}
      <div className="relative z-10 w-full">
        <HeroStats />
      </div>
    </section>
  );
}
