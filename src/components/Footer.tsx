"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const FOOTER_NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171816] text-[#F5F1E9] border-t border-[#D8C3A5]/15 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#D8C3A5]/10">
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block focus:outline-none" aria-label="Abode Builders Home">
              <div className="relative h-14 sm:h-16 w-44 sm:w-52">
                <Image
                  src="/logo-white.png"
                  alt="ABODE BUILDERS"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="font-serif italic text-xl text-[#D8C3A5] font-light">
              {COMPANY_INFO.statement}
            </p>

            <p className="text-xs sm:text-sm text-[#F5F1E9]/70 max-w-sm leading-relaxed font-light">
              Crafting tactile, modern residences that harmonize contemporary architectural precision with the organic serenity of earth, timber, and tropical nature.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#222320] border border-[#D8C3A5]/20 hover:border-[#D8C3A5] text-[#D8C3A5] flex items-center justify-center transition-colors"
                aria-label="Abode Builders on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#222320] border border-[#D8C3A5]/20 hover:border-[#D8C3A5] text-[#D8C3A5] flex items-center justify-center transition-colors"
                aria-label="Abode Builders on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#222320] border border-[#D8C3A5]/20 hover:border-[#D8C3A5] text-[#D8C3A5] flex items-center justify-center transition-colors"
                aria-label="Abode Builders on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#222320] border border-[#D8C3A5]/20 hover:border-[#D8C3A5] text-[#D8C3A5] flex items-center justify-center transition-colors"
                aria-label="Abode Builders on YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#F5F1E9]/75 hover:text-[#D8C3A5] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8C3A5] font-semibold block">
              Contact & Studio
            </span>
            <div className="space-y-3 text-xs sm:text-sm text-[#F5F1E9]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8C3A5] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.office.address}, {COMPANY_INFO.office.city}, {COMPANY_INFO.office.state} - {COMPANY_INFO.office.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8C3A5] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#D8C3A5]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8C3A5] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#D8C3A5]">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[11px] text-[#D8C3A5] uppercase tracking-wider block mb-1">
                Regional Studios:
              </span>
              <p className="text-xs text-[#F5F1E9]/60">
                Kochi • Bangalore • Kozhikode • Wayanad
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1E9]/60">
          <p>{COMPANY_INFO.meta.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="text-[#D8C3A5]/60">Modern Homes • Earthy Feels</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D8C3A5] hover:text-[#F5F1E9] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
