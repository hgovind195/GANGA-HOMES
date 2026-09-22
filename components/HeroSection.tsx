"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" id="home">
      <div
        className="w-full min-h-[90vh] md:min-h-[942px] bg-cover bg-center flex flex-col justify-between pt-36 pb-16 px-5 sm:px-8 md:px-16 relative"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto:good,w_1920,c_limit/v1790009724/IMG-20260810-WA0021.jpg_ucowog.jpg")`,
        }}
      >
        {/* Bright, luminous overlays - keeping the villa photo vivid and bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/30 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111113]/60 via-[#111113]/15 to-transparent pointer-events-none"></div>

        {/* Content Box aligned on bottom-left */}
        <div className="relative z-10 max-w-4xl flex flex-col gap-4 mt-auto mb-6">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#d4af37]/40 backdrop-blur-md self-start text-[#ffdf9b] shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-label-sm text-[11px] uppercase tracking-[0.22em] font-bold">
              Bespoke Architectural Maison
            </span>
          </div>

          {/* Main Display Headline with non-italic serif font */}
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Building Homes, <br className="hidden sm:inline" />
            <span className="font-serif font-normal text-[#FFDF9B]">
              Building Trust.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-base sm:text-lg text-[#f3f0eb] max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            Crafting architecturally refined residential sanctuaries and landmark commercial addresses with uncompromising permanence, bespoke materiality, and timeless poise.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFDF9B] text-[#1c1c19] font-label-lg text-xs font-bold uppercase tracking-widest shadow-2xl hover:bg-[#725B24] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/50 border border-white/20 text-white font-label-lg text-xs font-bold uppercase tracking-widest backdrop-blur-md hover:bg-white/10 hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <span>Schedule Atelier Visit</span>
            </Link>
          </div>
        </div>

        {/* Bottom Micro-stat Anchors */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white font-label-sm text-[11px] tracking-widest uppercase bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 shadow-lg">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffdf9b]"></span>
              Premium Structural Quality
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffdf9b]"></span>
              100% Clear Title Assurance
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ffdf9b]"></span>
              Zero Delays Handover
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
