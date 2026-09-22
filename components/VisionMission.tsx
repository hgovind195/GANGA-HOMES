"use client";

import React from "react";
import { Eye, Compass, Check } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#F6F3EE] relative scroll-mt-24" id="ethos">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-[#725B24] font-bold">
            Our Foundation
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1C1C19] font-bold">
            Purpose &amp; Guiding Ethos
          </h2>
          <div className="w-12 h-0.5 bg-[#725B24] mt-2"></div>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision Card */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-[#C0C8C4]/60 hover:border-[#E2C381]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-[#F0EDE9] flex items-center justify-center text-[#725B24] group-hover:bg-[#725B24] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="font-headline-sm text-2xl text-[#725B24] font-bold">01</span>
              </div>

              <div className="flex flex-col gap-1.5 pt-2">
                <span className="font-label-sm text-xs uppercase tracking-[0.2em] text-[#725B24] font-bold">
                  Aspiration &amp; Horizon
                </span>
                <h3 className="font-headline-sm text-xl text-[#1C1C19] font-bold group-hover:text-[#0f2347] transition-colors">
                  Our Vision
                </h3>
              </div>

              <blockquote className="font-body-md text-sm sm:text-base leading-relaxed text-[#404945] italic font-normal border-l-3 border-[#725B24] pl-4 my-1">
                &ldquo;To become a trusted and respected construction company recognized for uncompromising quality, precision, and professional excellence. We envision building structures that are not only strong and aesthetically pleasing, but also built to last for generations.&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 mt-6 border-t border-[#F0EDE9] flex items-center justify-between text-[#1C1C19] font-label-sm text-xs uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                Timeless Permanence
              </span>
              <span className="text-[#725B24] font-bold">Long-term Value</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-[#C0C8C4]/60 hover:border-[#E2C381]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-[#F0EDE9] flex items-center justify-center text-[#725B24] group-hover:bg-[#725B24] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="font-headline-sm text-2xl text-[#725B24] font-bold">02</span>
              </div>

              <div className="flex flex-col gap-1.5 pt-2">
                <span className="font-label-sm text-xs uppercase tracking-[0.2em] text-[#725B24] font-bold">
                  Principles &amp; Delivery
                </span>
                <h3 className="font-headline-sm text-xl text-[#1C1C19] font-bold group-hover:text-[#0f2347] transition-colors">
                  Our Mission
                </h3>
              </div>

              <blockquote className="font-body-md text-sm sm:text-base leading-relaxed text-[#404945] italic font-normal border-l-3 border-[#725B24] pl-4 my-1">
                &ldquo;We strive to deliver high-quality residential, commercial, villa, and apartment projects with transparency, precision, and professional responsibility. We don&apos;t just aim to complete projects; we aim to create work that continues to reflect our quality and values years after completion.&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 mt-6 border-t border-[#F0EDE9] flex items-center justify-between text-[#1C1C19] font-label-sm text-xs uppercase tracking-widest font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                Workmanship &amp; Integrity
              </span>
              <span className="text-[#725B24] font-bold">Total Assurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
