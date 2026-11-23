"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import FeaturedProjects from "@/components/FeaturedProjects";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import StoryModal from "@/components/StoryModal";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-[#171816] text-[#F5F1E9] flex flex-col selection:bg-[#D8C3A5] selection:text-[#171816]">
        {/* Transparent-to-Glass Sticky Navigation */}
        <Navbar />

        {/* 1. Full-screen Cinematic Hero with Integrated Stats Bar */}
        <Hero />

        {/* 2. About Section - Warm Ivory Editorial Split Layout */}
        <About />

        {/* 3. Philosophy Section - Deep Charcoal with 3 Architectural Content Blocks */}
        <Philosophy />

        {/* 4. Featured Projects - Spaces That Tell a Story */}
        <FeaturedProjects />

        {/* 5. Architectural Showcase - Built Around the Way You Live */}
        <Showcase />

        {/* 6. Services Section - From Vision to Reality */}
        <Services />

        {/* 7. Our Process - Horizontal Desktop / Vertical Mobile Timeline */}
        <Process />

        {/* 8. Testimonials - Words From Our Homeowners */}
        <Testimonials />

        {/* 9. Architectural Conversation CTA */}
        <CTA />

        {/* 10. Contact Section - Full Form with Budget, Location, WhatsApp, Maps */}
        <Contact />

        {/* 11. Sophisticated Dark Footer */}
        <Footer />

        {/* Persistent Luxury Modals & Floating WhatsApp */}
        <QuoteModal />
        <StoryModal />
        <WhatsAppSticky />
      </div>
    </ModalProvider>
  );
}
