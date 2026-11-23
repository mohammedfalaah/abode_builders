"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";

const PROJECT_TYPES = [
  "New Home Construction",
  "Architecture & Design",
  "Interior Design",
  "Renovation",
  "Commercial Project",
  "Other",
];

const BUDGET_OPTIONS = [
  "₹50 Lakhs - ₹1 Crore",
  "₹1 Crore - ₹2.5 Crores",
  "₹2.5 Crores - ₹5 Crores",
  "₹5 Crores+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectLocation: "",
    projectType: PROJECT_TYPES[0],
    estimatedBudget: BUDGET_OPTIONS[1],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone number is required";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.projectLocation.trim()) errs.projectLocation = "Project location is required";
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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#D8C3A5", "#9C8061", "#F5F1E9"],
        });
      } catch {
        // Fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      projectLocation: "",
      projectType: PROJECT_TYPES[0],
      estimatedBudget: BUDGET_OPTIONS[1],
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#171816] text-[#F5F1E9] relative border-t border-[#D8C3A5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#D8C3A5]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#D8C3A5] font-bold">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F1E9] tracking-tight leading-tight">
            Begin Your Architectural <br />
            <span className="italic font-normal text-[#D8C3A5]">Chapter.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F5F1E9]/75 font-light leading-relaxed">
            Reach out directly to our principal architects for consultation, site feasibility, or custom design-build inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#222320] border border-[#D8C3A5]/20 rounded-3xl p-7 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#777C62]/20 border border-[#777C62]/40 text-[#D8C3A5]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E9]">
                  Consultation Request Sent
                </h3>
                <p className="text-sm sm:text-base text-[#F5F1E9]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#D8C3A5] font-medium">{formData.fullName}</span>. One of our senior architects will reach out shortly to review your requirements.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Abode%20Builders%2C%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(formData.projectLocation)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm hover:brightness-110 transition-all"
                  >
                    Quick WhatsApp Connect →
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#D8C3A5]/30 text-[#F5F1E9] text-sm hover:bg-[#171816]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Varma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-[#171816] border ${
                        errors.fullName ? "border-red-500" : "border-[#D8C3A5]/25 focus:border-[#D8C3A5]"
                      } rounded-xl px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#F5F1E9]/30 outline-none transition-colors`}
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98470 12345"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full bg-[#171816] border ${
                        errors.phoneNumber ? "border-red-500" : "border-[#D8C3A5]/25 focus:border-[#D8C3A5]"
                      } rounded-xl px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#F5F1E9]/30 outline-none transition-colors`}
                    />
                    {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="anand@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#171816] border ${
                        errors.email ? "border-red-500" : "border-[#D8C3A5]/25 focus:border-[#D8C3A5]"
                      } rounded-xl px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#F5F1E9]/30 outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-1.5 font-medium">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kochi, Bangalore, Wayanad"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className={`w-full bg-[#171816] border ${
                        errors.projectLocation ? "border-red-500" : "border-[#D8C3A5]/25 focus:border-[#D8C3A5]"
                      } rounded-xl px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#F5F1E9]/30 outline-none transition-colors`}
                    />
                    {errors.projectLocation && <p className="text-red-400 text-xs mt-1">{errors.projectLocation}</p>}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-1.5 font-medium">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#171816] border border-[#D8C3A5]/25 focus:border-[#D8C3A5] rounded-xl px-4 py-3 text-sm text-[#F5F1E9] outline-none transition-colors cursor-pointer"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#222320]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-2 font-medium">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, estimatedBudget: opt })}
                        className={`px-3 py-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                          formData.estimatedBudget === opt
                            ? "bg-[#D8C3A5] text-[#171816] border-[#D8C3A5] font-semibold"
                            : "bg-[#171816] border-[#D8C3A5]/20 text-[#F5F1E9]/75 hover:border-[#D8C3A5]/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C3A5]/90 mb-1.5 font-medium">
                    Message / Spatial Aspirations
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your land, family lifestyle, or architectural dreams..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#171816] border border-[#D8C3A5]/25 focus:border-[#D8C3A5] rounded-xl p-4 text-sm text-[#F5F1E9] placeholder-[#F5F1E9]/30 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#D8C3A5] hover:bg-[#F5F1E9] text-[#171816] font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#171816] border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Details</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#222320] border border-[#D8C3A5]/20 shadow-xl space-y-5">
              <h3 className="font-serif text-2xl text-[#F5F1E9]">
                Studio & Consultation
              </h3>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3.5 group text-sm text-[#F5F1E9]/80 hover:text-[#D8C3A5] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#171816] border border-[#D8C3A5]/20 flex items-center justify-center shrink-0 group-hover:border-[#D8C3A5]">
                    <Phone className="w-4 h-4 text-[#D8C3A5]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] block">Direct Studio Line</span>
                    <span className="font-medium text-[#F5F1E9]">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 group text-sm text-[#F5F1E9]/80 hover:text-[#25D366] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#171816] border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:border-[#25D366]">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] block">Instant Messaging</span>
                    <span className="font-medium text-[#F5F1E9]">WhatsApp +91 98470 12345</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3.5 group text-sm text-[#F5F1E9]/80 hover:text-[#D8C3A5] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#171816] border border-[#D8C3A5]/20 flex items-center justify-center shrink-0 group-hover:border-[#D8C3A5]">
                    <Mail className="w-4 h-4 text-[#D8C3A5]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] block">Inquiry Email</span>
                    <span className="font-medium text-[#F5F1E9]">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-sm text-[#F5F1E9]/80">
                  <div className="w-9 h-9 rounded-full bg-[#171816] border border-[#D8C3A5]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#D8C3A5]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] block">Principal Studio</span>
                    <span className="font-medium text-[#F5F1E9]">
                      {COMPANY_INFO.office.address}, {COMPANY_INFO.office.city}, {COMPANY_INFO.office.state}
                    </span>
                  </div>
                </div>
              </div>

              {/* Regional Studios */}
              <div className="pt-4 border-t border-[#D8C3A5]/10">
                <span className="text-[10px] uppercase tracking-wider text-[#D8C3A5] font-semibold block mb-2">
                  Regional Studios
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {COMPANY_INFO.regionalOffices.map((ro) => (
                    <span
                      key={ro.city}
                      className="px-3 py-1 rounded-full bg-[#171816] border border-[#D8C3A5]/15 text-[#F5F1E9]/80"
                    >
                      {ro.city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Visual Card */}
            <div className="rounded-3xl overflow-hidden border border-[#D8C3A5]/20 bg-[#222320] shadow-xl">
              <div className="p-4 bg-[#222320] border-b border-[#D8C3A5]/10 flex items-center justify-between text-xs">
                <span className="text-[#D8C3A5] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Kochi Principal Studio
                </span>
                <span className="text-[#F5F1E9]/50">Mon - Sat: 9:00 AM - 6:30 PM</span>
              </div>
              <div className="relative aspect-[16/9] w-full bg-[#171816]">
                <iframe
                  title="Abode Builders Office Location"
                  src={COMPANY_INFO.office.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
