"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Calendar, Ruler } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  asymmetricIndex?: number;
}

export default function ProjectCard({ project, asymmetricIndex = 0 }: ProjectCardProps) {
  const isLarge = asymmetricIndex % 3 === 0;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white border border-[#E8DDCC] transition-all duration-700 hover:border-[#8A7158] hover:shadow-2xl flex flex-col justify-between ${
        isLarge ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="block relative w-full overflow-hidden">
        {/* Project Image Container */}
        <div
          className={`relative w-full overflow-hidden ${
            isLarge ? "aspect-[16/10] sm:aspect-[21/10]" : "aspect-[4/3] sm:aspect-[16/11]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DDCC] text-[11px] uppercase tracking-wider text-[#252522] font-bold shadow-sm">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DDCC] text-[11px] text-[#252522] flex items-center gap-1.5 shadow-sm font-medium">
              <Calendar className="w-3 h-3 text-[#8A7158]" />
              <span>{project.year}</span>
            </span>
          </div>

          {/* Floating Hover Arrow Icon */}
          <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#252522] text-[#F8F6F1] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>

      {/* Editorial Content Below */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#8A7158] font-bold mb-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
            <span className="text-[#B5A18A]">•</span>
            <span className="flex items-center gap-1 text-[#252522]/65 font-normal">
              <Ruler className="w-3 h-3 text-[#8A7158]" />
              {project.area}
            </span>
          </div>

          <Link href={`/projects/${project.slug}`}>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#252522] group-hover:text-[#8A7158] transition-colors leading-tight">
              {project.name}
            </h3>
          </Link>

          <p className="mt-2 text-xs sm:text-sm text-[#252522]/70 line-clamp-2 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        {/* View Project CTA */}
        <div className="mt-5 pt-4 border-t border-[#E8DDCC] flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#252522] group-hover:text-[#8A7158] transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <span className="text-[10px] uppercase tracking-wider text-[#B5A18A] font-mono">
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}
