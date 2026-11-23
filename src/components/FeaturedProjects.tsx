"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const CATEGORIES = [
  "All Projects",
  "Residential",
  "Villas",
  "Contemporary",
  "Interior",
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "All Projects") return true;
    return p.categories.includes(activeCategory) || p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#171816] text-[#F5F1E9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D8C3A5]/15">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C3A5]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#D8C3A5] font-bold">
                FEATURED ARCHITECTURE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] tracking-tight leading-tight">
              Spaces That Tell <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#D8C3A5]">a Story.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F5F1E9]/75 font-light leading-relaxed">
              Explore thoughtfully designed homes where architecture, materials, and nature come together.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D8C3A5] hover:text-[#F5F1E9] transition-colors py-2"
          >
            <span>View All Architecture</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="py-8 flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#D8C3A5] text-[#171816] shadow-lg scale-105 font-bold"
                  : "bg-[#222320] text-[#F5F1E9]/75 hover:text-[#F5F1E9] hover:bg-[#2b2c28] border border-[#D8C3A5]/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 mt-4"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                asymmetricIndex={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Portfolio Link */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#222320] hover:bg-[#D8C3A5] text-[#F5F1E9] hover:text-[#171816] border border-[#D8C3A5]/30 hover:border-[#D8C3A5] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl"
          >
            <span>Browse Complete Portfolio ({PROJECTS.length} Residences)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
