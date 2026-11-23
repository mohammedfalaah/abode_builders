"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { COMPANY_INFO } from "@/data/company";

interface NavLinkItem {
  name: string;
  href: string;
  sectionId: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "About", href: "/#about", sectionId: "about" },
  { name: "Projects", href: "/projects", sectionId: "projects" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Process", href: "/#process", sectionId: "process" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();
  const router = useRouter();
  const { openQuote } = useModal();

  // Handle scroll state for navbar glassmorphism transition
  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  // Scroll spy to detect active section on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/projects")) {
        setActiveSection("projects");
      } else {
        setActiveSection("");
      }
      return;
    }

    const sections = ["home", "about", "projects", "services", "process", "contact"];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160;

      // Check bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open & listen for ESC key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Smooth scroll handler with offset for floating navbar
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: NavLinkItem) => {
      if (link.sectionId === "projects") {
        // Allow default link navigation to /projects
        return;
      }

      if (pathname === "/") {
        e.preventDefault();
        if (link.sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("home");
          return;
        }

        const target = document.getElementById(link.sectionId);
        if (target) {
          const navOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(link.sectionId);
        }
      } else {
        // Navigating back to home section from another page
        e.preventDefault();
        router.push(link.href);
      }
    },
    [pathname, router]
  );

  return (
    <>
      {/* Floating Centered Pill-Style Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-6 transition-all duration-500 ease-out ${
          scrolled ? "pt-3 sm:pt-4" : "pt-4 sm:pt-6"
        }`}
      >
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-6xl pointer-events-auto rounded-[20px] transition-all duration-500 ease-out flex items-center justify-between px-4 sm:px-6 h-[58px] sm:h-[64px] ${
            scrolled
              ? "bg-white/92 backdrop-blur-xl border border-[#E8DDCC] shadow-[0_12px_36px_-6px_rgba(37,37,34,0.08),0_4px_12px_-2px_rgba(37,37,34,0.03)]"
              : "bg-[#F8F6F1]/82 backdrop-blur-md border border-[#E8DDCC]/70 shadow-[0_4px_24px_-4px_rgba(37,37,34,0.03)]"
          }`}
        >
          {/* Left: ABODE BUILDERS Official Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("home");
              }
            }}
            className="group flex items-center focus:outline-none select-none"
            aria-label="Abode Builders Home"
          >
            <div className="relative h-7 sm:h-8 w-32 sm:w-36 transition-opacity duration-300 group-hover:opacity-85">
              <Image
                src="/logo-dark.png"
                alt="ABODE BUILDERS"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Framer Motion Active Indicator */}
          <nav
            className="hidden md:flex items-center space-x-0.5 lg:space-x-1"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.sectionId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="relative px-3 lg:px-4 py-1.5 text-[11.5px] lg:text-[12.5px] uppercase tracking-[0.14em] font-medium transition-colors focus:outline-none rounded-full group"
                >
                  {/* Active floating pill indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeFloatingNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#E8DDCC]/60 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-[#252522] font-semibold"
                        : "text-[#252522]/70 group-hover:text-[#252522]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right: "Let's Build Your Home ↗" CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openQuote()}
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#252522] hover:bg-[#8A7158] text-[#F8F6F1] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8A7158]/40"
            >
              <span>Let&apos;s Build Your Home</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right: Minimal Architectural Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center rounded-full bg-white/70 border border-[#E8DDCC] text-[#252522] focus:outline-none transition-colors hover:bg-white active:scale-95 shadow-xs"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-4 h-3 flex flex-col justify-between items-center">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-4 h-[1.5px] bg-[#252522] rounded-full block origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-[1.5px] bg-[#252522] rounded-full block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-4 h-[1.5px] bg-[#252522] rounded-full block origin-center"
                />
              </div>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Animated Dropdown / Sheet Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#252522]/35 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Floating Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-3.5 sm:mx-6 mt-20 max-w-lg rounded-[22px] bg-[#F8F6F1]/98 backdrop-blur-2xl border border-[#E8DDCC] shadow-2xl p-6 text-[#252522] overflow-hidden flex flex-col max-h-[calc(100vh-6rem)]"
            >
              {/* Top Row: Mini Brand Identifier and Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DDCC]/70">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A7158] font-bold">
                  Menu • Abode Builders
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-wider text-[#252522]/60 hover:text-[#252522] px-2 py-1 rounded-md"
                >
                  Close ✕
                </button>
              </div>

              {/* Navigation Links with Editorial Serifs & Staggered Reveal */}
              <nav className="py-6 space-y-3 overflow-y-auto">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = activeSection === link.sectionId;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 + 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          setMobileMenuOpen(false);
                          handleNavClick(e, link);
                        }}
                        className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-[#E8DDCC]/60 text-[#252522]"
                            : "hover:bg-white/60 text-[#252522]/80 hover:text-[#252522]"
                        }`}
                      >
                        <span className="font-serif text-2xl tracking-tight">
                          {link.name}
                        </span>
                        <span className="text-[11px] font-mono tracking-widest text-[#8A7158]">
                          0{idx + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA & Quick Contacts */}
              <div className="pt-4 border-t border-[#E8DDCC]/70 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuote();
                  }}
                  className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#252522] hover:bg-[#8A7158] text-[#F8F6F1] font-semibold text-xs uppercase tracking-[0.14em] shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Let&apos;s Build Your Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-[#E8DDCC] text-[#252522] shadow-xs hover:border-[#8A7158] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8A7158]" />
                    <span>Call Studio</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      COMPANY_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-[#E8DDCC] text-[#252522] shadow-xs hover:border-[#25D366] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#8A7158]/80 pt-1">
                  Design • Build • Inspire
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
