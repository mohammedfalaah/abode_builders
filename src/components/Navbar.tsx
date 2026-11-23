"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
            ? "bg-[#F8F6F1]/92 backdrop-blur-md border-b border-[#E8DDCC] py-3.5 shadow-sm text-[#252522]"
            : "bg-[#F8F6F1]/80 backdrop-blur-sm border-b border-[#E8DDCC]/50 py-5 sm:py-6 text-[#252522]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Dark logotype on Warm Ivory */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none"
            aria-label="Abode Builders Home"
          >
            <div className="relative h-10 sm:h-12 w-36 sm:w-44">
              <Image
                src="/logo-dark.png"
                alt="ABODE BUILDERS"
                fill
                priority
                className="object-contain object-left group-hover:opacity-85 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E8DDCC] shadow-sm">
            {NAV_LINKS.map((link) => {
              const isProjects = link.name === "Projects";
              const isActive = isProjects ? pathname.startsWith("/projects") : pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm tracking-wider uppercase transition-colors rounded-full ${
                    isActive
                      ? "text-[#F8F6F1] bg-[#252522] font-semibold shadow-sm"
                      : "text-[#252522]/75 hover:text-[#252522] hover:bg-[#E8DDCC]/30"
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
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#252522] hover:bg-[#8A7158] text-[#F8F6F1] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openQuote()}
              className="px-3 py-1.5 rounded-full bg-[#252522] text-[#F8F6F1] text-[11px] font-semibold tracking-wider uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#E8DDCC] text-[#252522] focus:outline-none shadow-sm"
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
            className="fixed inset-0 z-50 md:hidden bg-[#F8F6F1]/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 text-[#252522]"
          >
            {/* Top close bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="relative h-10 w-36"
                aria-label="Abode Builders Home"
              >
                <Image
                  src="/logo-dark.png"
                  alt="ABODE BUILDERS"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#252522] hover:bg-[#E8DDCC]/40"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-4 my-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8A7158] font-bold mb-2">
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
                    className="font-serif text-3xl text-[#252522] hover:text-[#8A7158] transition-colors flex items-center justify-between py-1"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans tracking-widest text-[#B5A18A]">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions & Contact */}
            <div className="space-y-4 pt-6 border-t border-[#E8DDCC]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#252522] text-[#F8F6F1] font-semibold text-sm tracking-wider uppercase shadow-md hover:bg-[#8A7158]"
              >
                <span>Get a Quote ↗</span>
              </button>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white border border-[#E8DDCC] text-[#252522] shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A7158]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white border border-[#E8DDCC] text-[#252522] shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#777B63]" />
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
