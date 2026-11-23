"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function WhatsAppSticky() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Abode Builders on WhatsApp"
        className="flex items-center gap-3 pl-3.5 pr-4 py-3 rounded-full bg-[#222320]/90 hover:bg-[#171816] border border-[#25D366]/40 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#25D366] group"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
          <MessageSquare className="w-4 h-4 fill-white text-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] font-medium leading-tight">
            Consult Architect
          </span>
          <span className="text-xs font-semibold text-white leading-tight">
            WhatsApp Us
          </span>
        </div>
      </a>
    </div>
  );
}
