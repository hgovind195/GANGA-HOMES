"use client";

import React from "react";
import AboutLeadershipCard from "@/components/AboutLeadershipCard";
import StartupCompanySection from "@/components/StartupCompanySection";
import VisionMission from "@/components/VisionMission";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col pt-20 sm:pt-28">
      {/* 1. About Ganga Homes and Developers - Unified Atelier Banner */}
      <section className="w-full py-10 sm:py-16 px-4 sm:px-8 md:px-16 bg-[#111113] text-white border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-2.5 sm:gap-4">
          <div className="inline-flex items-center gap-2 text-[#d4af37] font-label-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span>Next-Gen Initiative</span>
          </div>
          <h1 className="font-display-lg text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            About Ganga Homes <br />
            <span className="font-serif font-normal text-[#FFDF9B]">&amp; Developers</span>
          </h1>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-[#E5E2DD] max-w-2xl leading-relaxed">
            Built on a solid foundation of structural ethics, legal transparency, and 14+ years of civil and interior architectural mastery under Aneesh V M.
          </p>
        </div>
      </section>

      {/* 2. Guiding Ethos: Vision & Mission (Placed in Top Section) */}
      <VisionMission />

      {/* 3. Startup Company Showcase - Detailed info about our newly founded startup */}
      <StartupCompanySection />

      {/* 4. Compact Managing Director Profile */}
      <AboutLeadershipCard />
    </div>
  );
}
