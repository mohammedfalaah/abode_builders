"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/company";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#171816]/90 backdrop-blur-md border-b border-[#D8C3A5]/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#222320] border border-[#D8C3A5]/30 flex items-center justify-center text-[#D8C3A5] group-hover:border-[#D8C3A5] transition-colors">
              <span className="font-serif text-lg font-bold tracking-tighter">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-[0.2em] font-semibold text-[#F5F1E9] group-hover:text-[#D8C3A5] transition-colors leading-tight">
                ABODE
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D8C3A5]/90 font-light">
                BUILDERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#222320]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D8C3A5]/15">
            {NAV_LINKS.map((link) => {
              const isProjects = link.name === "Projects";
              const isActive = isProjects ? pathname.startsWith("/projects") : pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm tracking-wider uppercase transition-colors rounded-full ${
                    isActive
                      ? "text-[#171816] bg-[#D8C3A5] font-semibold"
                      : "text-[#F5F1E9]/80 hover:text-[#F5F1E9] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openQuote()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D8C3A5] hover:bg-[#F5F1E9] text-[#171816] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openQuote()}
              className="px-3 py-1.5 rounded-full bg-[#D8C3A5] text-[#171816] text-[11px] font-semibold tracking-wider uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#222320]/80 border border-[#D8C3A5]/20 text-[#F5F1E9] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-over Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden bg-[#171816]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24"
          >
            {/* Top close bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded bg-[#222320] border border-[#D8C3A5]/40 flex items-center justify-center text-[#D8C3A5] font-serif font-bold">
                  A
                </div>
                <span className="font-serif tracking-[0.2em] text-[#F5F1E9] font-medium text-base">
                  ABODE BUILDERS
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#D8C3A5] hover:bg-[#222320]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-4 my-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D8C3A5]/60 mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl text-[#F5F1E9] hover:text-[#D8C3A5] transition-colors flex items-center justify-between py-1"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans tracking-widest text-[#D8C3A5]/40">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions & Contact */}
            <div className="space-y-4 pt-6 border-t border-[#D8C3A5]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#D8C3A5] text-[#171816] font-semibold text-sm tracking-wider uppercase shadow-lg"
              >
                <span>Get a Quote ↗</span>
              </button>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#222320] border border-[#D8C3A5]/20 text-[#F5F1E9]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8C3A5]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#222320] border border-[#D8C3A5]/20 text-[#F5F1E9]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
