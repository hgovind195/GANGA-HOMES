"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col pt-20 sm:pt-28">
      {/* Banner */}
      <section className="w-full py-10 sm:py-16 px-4 sm:px-8 md:px-16 bg-[#111113] text-white border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-2.5 sm:gap-4">
          <div className="inline-flex items-center gap-2 text-[#d4af37] font-label-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span>Private Concierge</span>
          </div>
          <h1 className="font-display-lg text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-[#E5E2DD] max-w-2xl leading-relaxed">
            Schedule a confidential viewing or consult directly with Aneesh V M and senior atelier leadership.
          </p>
        </div>
      </section>

      {/* Main Contact Section with Location Map */}
      <ContactForm showMap={true} />
    </div>
  );
}
