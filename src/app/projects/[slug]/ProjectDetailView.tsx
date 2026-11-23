"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import QuoteModal from "@/components/QuoteModal";
import StoryModal from "@/components/StoryModal";
import { ModalProvider, useModal } from "@/context/ModalContext";
import { Project } from "@/types";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Layers,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";

interface ProjectDetailViewProps {
  project: Project;
  relatedProjects: Project[];
}

function ProjectDetailViewContent({ project, relatedProjects }: ProjectDetailViewProps) {
  const { openQuote } = useModal();

  return (
    <div className="min-h-screen bg-[#171816] text-[#F5F1E9] flex flex-col justify-between selection:bg-[#D8C3A5] selection:text-[#171816]">
      <Navbar />

      <main className="flex-1">
        {/* Large Hero Image Banner */}
        <section className="relative min-h-[75vh] lg:min-h-[85vh] w-full flex items-end overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171816] via-[#171816]/55 to-[#171816]/40" />

          {/* Hero Caption */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20">
            <div className="mb-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C3A5] hover:text-[#F5F1E9] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Projects</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#D8C3A5] text-[#171816] text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#222320]/80 backdrop-blur-md border border-[#D8C3A5]/30 text-xs text-[#F5F1E9]">
                Year {project.year}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-[#222320]/80 backdrop-blur-md border border-[#D8C3A5]/30 text-xs text-[#D8C3A5] font-mono">
                {project.status}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F1E9] tracking-tight leading-[1.05]">
              {project.name}
            </h1>
            <p className="mt-3 text-base sm:text-xl text-[#F5F1E9]/80 font-light max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </section>

        {/* Project Key Specifications Bar */}
        <section className="bg-[#222320] border-y border-[#D8C3A5]/15 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex flex-col border-l border-[#D8C3A5]/20 pl-4">
                <span className="text-xs uppercase tracking-wider text-[#D8C3A5]">Location</span>
                <span className="font-serif text-xl sm:text-2xl text-[#F5F1E9] mt-1">{project.location}</span>
              </div>
              <div className="flex flex-col border-l border-[#D8C3A5]/20 pl-4">
                <span className="text-xs uppercase tracking-wider text-[#D8C3A5]">Built Area</span>
                <span className="font-serif text-xl sm:text-2xl text-[#F5F1E9] mt-1">{project.area}</span>
              </div>
              <div className="flex flex-col border-l border-[#D8C3A5]/20 pl-4">
                <span className="text-xs uppercase tracking-wider text-[#D8C3A5]">Typology</span>
                <span className="font-serif text-xl sm:text-2xl text-[#F5F1E9] mt-1">{project.category}</span>
              </div>
              <div className="flex flex-col border-l border-[#D8C3A5]/20 pl-4">
                <span className="text-xs uppercase tracking-wider text-[#D8C3A5]">Year Built</span>
                <span className="font-serif text-xl sm:text-2xl text-[#F5F1E9] mt-1">{project.year}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Editorial Content: Overview & Design Concept */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 7 cols: Overview & Concept */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block mb-2">
                  01 / Project Overview
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9] leading-tight">
                  Architecture Rooted in Landscape & Memory
                </h2>
                <p className="mt-6 text-base sm:text-lg text-[#F5F1E9]/80 leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              <div className="pt-8 border-t border-[#D8C3A5]/15">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block mb-2">
                  02 / The Design Concept
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">
                  Choreography of Space, Light & Earth
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#F5F1E9]/75 leading-relaxed">
                  {project.designConcept}
                </p>
              </div>

              {/* Architectural Details */}
              <div className="pt-8 border-t border-[#D8C3A5]/15">
                <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block mb-4">
                  03 / Architectural Highlights
                </span>
                <div className="space-y-4">
                  {project.architecturalDetails.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl bg-[#222320]/70 border border-[#D8C3A5]/15"
                    >
                      <h4 className="font-serif text-lg text-[#D8C3A5] flex items-center gap-2">
                        <span className="font-mono text-xs opacity-60">0{idx + 1}.</span>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F5F1E9]/75 mt-1.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Materials Palette & Consultation Box */}
            <div className="lg:col-span-5 space-y-8">
              {/* Materials Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#222320] border border-[#D8C3A5]/20 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-[#D8C3A5]" />
                  <h3 className="font-serif text-2xl text-[#F5F1E9]">
                    Tactile Materials
                  </h3>
                </div>
                <p className="text-xs text-[#F5F1E9]/65 mb-6">
                  Every material is chosen for durability in coastal and tropical climates while aging gracefully with an organic patina.
                </p>

                <div className="space-y-4">
                  {project.materials.map((mat) => (
                    <div key={mat.name} className="border-b border-[#D8C3A5]/10 pb-3 last:border-b-0">
                      <h4 className="text-sm font-semibold text-[#D8C3A5]">{mat.name}</h4>
                      <p className="text-xs text-[#F5F1E9]/75 mt-0.5 leading-relaxed">{mat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commission Similar Home Box */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#9C8061]/15 border border-[#D8C3A5]/30">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block">
                  Envisioning Similar Living?
                </span>
                <h4 className="font-serif text-2xl text-[#F5F1E9] mt-1">
                  Commission an Abode Residence
                </h4>
                <p className="text-xs text-[#F5F1E9]/80 mt-2 leading-relaxed">
                  Discuss your plot, spatial requirements, and bespoke architectural budget with our studio principals.
                </p>
                <button
                  onClick={() => openQuote(`Inspired by: ${project.name}`)}
                  className="mt-6 w-full py-3.5 rounded-full bg-[#D8C3A5] hover:bg-[#F5F1E9] text-[#171816] font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Consult On This Project Style ↗
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Architectural Gallery Masonry */}
        <section className="py-16 bg-[#222320] border-t border-[#D8C3A5]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block mb-2">
                Visual Documentation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
                Architectural Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D8C3A5]/20 group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.name} plate 0${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171816]/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#171816]/80 text-[10px] uppercase tracking-wider text-[#D8C3A5]">
                    Plate 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D8C3A5]/15">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block">
                More Architecture
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] mt-1">
                Related Residences
              </h3>
            </div>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-widest text-[#D8C3A5] hover:text-[#F5F1E9] font-semibold flex items-center gap-1.5"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((relProj) => (
              <div
                key={relProj.id}
                className="group p-6 rounded-2xl bg-[#222320] border border-[#D8C3A5]/15 hover:border-[#D8C3A5]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relProj.image}
                      alt={relProj.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-xs text-[#D8C3A5] uppercase tracking-wider">{relProj.category}</span>
                  <h4 className="font-serif text-2xl text-[#F5F1E9] group-hover:text-[#D8C3A5] transition-colors mt-1">
                    {relProj.name}
                  </h4>
                  <p className="text-xs text-[#F5F1E9]/70 mt-1 line-clamp-2">{relProj.tagline}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D8C3A5]/10">
                  <Link
                    href={`/projects/${relProj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#D8C3A5]"
                  >
                    <span>Explore Residence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppSticky />
      <QuoteModal />
      <StoryModal />
    </div>
  );
}

export default function ProjectDetailView({ project, relatedProjects }: ProjectDetailViewProps) {
  return (
    <ModalProvider>
      <ProjectDetailViewContent project={project} relatedProjects={relatedProjects} />
    </ModalProvider>
  );
}
