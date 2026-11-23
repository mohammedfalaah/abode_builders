"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";

const PROJECT_TYPES = [
  "New Home Construction",
  "Architecture & Design",
  "Interior Design",
  "Renovation & Remodeling",
  "Commercial / Hospitality",
  "Other Consultation",
];

const BUDGET_RANGES = [
  "₹50 Lakhs - ₹1 Crore",
  "₹1 Crore - ₹2.5 Crores",
  "₹2.5 Crores - ₹5 Crores",
  "₹5 Crores+",
];

export default function QuoteModal() {
  const { isQuoteOpen, closeQuote, selectedProjectType } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: selectedProjectType || PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    message: "",
  });

  useEffect(() => {
    if (selectedProjectType) {
      setFormData((prev) => ({ ...prev, projectType: selectedProjectType }));
    }
  }, [selectedProjectType]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.location.trim()) errs.location = "Project location / city is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#E8DDCC", "#8A7158", "#B5A18A"],
        });
      } catch {
        // Fallback
      }
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      projectType: PROJECT_TYPES[0],
      budget: BUDGET_RANGES[1],
      message: "",
    });
    closeQuote();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuote();
    };
    if (isQuoteOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isQuoteOpen, closeQuote]);

  return (
    <AnimatePresence>
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuote}
            className="absolute inset-0 bg-[#252522]/60 backdrop-blur-sm"
          />

          {/* Modal Container in Soft White */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white border border-[#E8DDCC] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-[#252522]"
          >
            {/* Close Button */}
            <button
              onClick={closeQuote}
              className="absolute top-5 right-5 p-2 rounded-full text-[#8A7158] hover:text-[#252522] hover:bg-[#F8F6F1] transition-colors"
              aria-label="Close quote modal"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#777B63]/15 border border-[#777B63]/30 text-[#777B63]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#252522]">
                  Inquiry Received
                </h3>
                <p className="text-sm sm:text-base text-[#252522]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#8A7158] font-bold">{formData.name}</span>. Our lead architectural consultant will review your project brief and get in touch within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Abode%20Builders%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.projectType)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#777B63] text-white font-medium text-sm hover:brightness-110 transition-all shadow-sm"
                  >
                    Direct WhatsApp Follow-up →
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#E8DDCC] text-[#252522] text-sm hover:bg-[#F8F6F1] transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="relative h-10 w-36 mb-3">
                    <Image
                      src="/logo-dark.png"
                      alt="ABODE BUILDERS"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A7158] font-bold">
                    Private Consultation
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#252522] mt-1">
                    Request an Architectural Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-[#252522]/70 mt-2">
                    Share your vision with us. We will prepare an initial spatial evaluation and budget projection.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Menon"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[#F8F6F1] border ${
                          errors.name ? "border-red-500" : "border-[#E8DDCC] focus:border-[#8A7158]"
                        } rounded-xl px-3.5 py-2.5 text-sm text-[#252522] placeholder-[#252522]/35 outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-1.5 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98470 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#F8F6F1] border ${
                          errors.phone ? "border-red-500" : "border-[#E8DDCC] focus:border-[#8A7158]"
                        } rounded-xl px-3.5 py-2.5 text-sm text-[#252522] placeholder-[#252522]/35 outline-none transition-colors`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-1.5 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#F8F6F1] border ${
                          errors.email ? "border-red-500" : "border-[#E8DDCC] focus:border-[#8A7158]"
                        } rounded-xl px-3.5 py-2.5 text-sm text-[#252522] placeholder-[#252522]/35 outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Project Location */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-1.5 font-bold">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kochi, Wayanad, Bangalore"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full bg-[#F8F6F1] border ${
                          errors.location ? "border-red-500" : "border-[#E8DDCC] focus:border-[#8A7158]"
                        } rounded-xl px-3.5 py-2.5 text-sm text-[#252522] placeholder-[#252522]/35 outline-none transition-colors`}
                      />
                      {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-1.5 font-bold">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-[#E8DDCC] focus:border-[#8A7158] rounded-xl px-3.5 py-2.5 text-sm text-[#252522] outline-none transition-colors cursor-pointer"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type} className="bg-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-2 font-bold">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-2.5 py-2 rounded-xl text-xs font-semibold border text-center transition-all ${
                            formData.budget === b
                              ? "bg-[#252522] text-[#F8F6F1] border-[#252522] shadow-sm"
                              : "bg-[#F8F6F1] border-[#E8DDCC] text-[#252522]/75 hover:border-[#8A7158]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A7158] mb-1.5 font-bold">
                      Project Brief / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your plot size, lifestyle preferences, timeline, or specific architectural aspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8F6F1] border border-[#E8DDCC] focus:border-[#8A7158] rounded-xl px-3.5 py-2.5 text-sm text-[#252522] placeholder-[#252522]/35 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#252522]/70 font-medium">
                      <Phone className="w-3.5 h-3.5 text-[#8A7158]" />
                      <span>Direct line: {COMPANY_INFO.phone}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#252522] hover:bg-[#8A7158] text-[#F8F6F1] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-md disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#F8F6F1] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
