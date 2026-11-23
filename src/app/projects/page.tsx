"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import QuoteModal from "@/components/QuoteModal";
import StoryModal from "@/components/StoryModal";
import { ModalProvider } from "@/context/ModalContext";
import { PROJECTS } from "@/data/projects";
import { Search, ArrowLeft } from "lucide-react";

const CATEGORIES = [
  "All Projects",
  "Residential",
  "Villas",
  "Contemporary",
  "Interior",
];

function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      activeCategory === "All Projects" ||
      p.categories.includes(activeCategory) ||
      p.category === activeCategory;

    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#252522] flex flex-col justify-between selection:bg-[#E8DDCC] selection:text-[#252522]">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7158] hover:text-[#252522] font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#8A7158]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#8A7158] font-bold">
                PORTFOLIO ARCHIVE
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#252522] tracking-tight leading-tight">
              Selected Architectural <br />
              <span className="italic font-normal text-[#8A7158]">Works.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#252522]/75 font-normal leading-relaxed">
              Every residence is an organic dialogue between climate, vernacular heritage, and timeless contemporary minimalism.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="py-6 border-y border-[#E8DDCC] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 whitespace-nowrap shadow-sm ${
                    activeCategory === cat
                      ? "bg-[#252522] text-[#F8F6F1] font-bold shadow-md"
                      : "bg-white text-[#252522]/75 hover:text-[#252522] border border-[#E8DDCC]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-[#8A7158] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city, project name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E8DDCC] focus:border-[#8A7158] rounded-full pl-10 pr-4 py-2 text-xs text-[#252522] placeholder-[#252522]/40 outline-none transition-colors shadow-sm"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="py-4 text-xs uppercase tracking-widest text-[#8A7158] font-bold flex items-center justify-between">
            <span>Showing {filteredProjects.length} of {PROJECTS.length} Residences</span>
            {activeCategory !== "All Projects" && (
              <span>Filter: {activeCategory}</span>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  asymmetricIndex={idx}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border border-[#E8DDCC] p-8 my-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[#252522]">No residences found</h3>
              <p className="text-sm text-[#252522]/60 mt-2">
                Try clearing your search query or choosing another category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All Projects");
                  setSearchQuery("");
                }}
                className="mt-5 px-6 py-2.5 rounded-full bg-[#252522] text-[#F8F6F1] text-xs uppercase tracking-wider font-bold shadow-sm hover:bg-[#8A7158]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppSticky />
      <QuoteModal />
      <StoryModal />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <ModalProvider>
      <ProjectsPageContent />
    </ModalProvider>
  );
}
