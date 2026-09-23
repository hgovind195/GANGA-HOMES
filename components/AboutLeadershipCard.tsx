"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Quote } from "lucide-react";

export default function AboutLeadershipCard() {
  return (
    <section className="w-full py-20 px-5 sm:px-8 md:px-16 bg-[#111113] border-y border-[#d4af37]/25 relative overflow-hidden" id="leadership">
      {/* Ambient background glow */}
      <div className="absolute left-1/4 -top-24 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-24 bottom-0 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Prominent High-Contrast Dark & Gold Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111113] border-2 border-[#d4af37]/60 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-5 sm:p-10 md:p-12">
            
          {/* Subtle luxury ambient sheen */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Executive Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center relative">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-2xl bg-[#111113]">
                <img
                  src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto:good,w_900,c_limit/v1790010101/IMG_6595.JPG_ztgkus.jpg"
                  alt="Aneesh V M - Founder & Managing Director"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/95 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-0.5 text-white">
                  <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#FFDF9B] font-medium">
                    Founder &amp; Managing Director
                  </span>
                  <span className="font-headline-sm text-xl text-white font-semibold">
                    Aneesh V M
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: From the Director's Desk Letter */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-white">
              
              {/* Header Badge & Title */}
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#d4af37]/40 w-fit text-[#FFDF9B]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.25em] font-bold">
                    From the Director&apos;s Desk
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight">
                  A Message from Leadership
                </h2>
                <span className="font-serif text-base sm:text-xl text-[#FFDF9B] italic font-normal -mt-1 block">
                  Aneesh V M &mdash; Founder &amp; Managing Director
                </span>
              </div>

              {/* The Director's Message */}
              <div className="p-6 sm:p-7 rounded-2xl bg-black/40 border border-[#d4af37]/35 shadow-inner relative flex flex-col gap-4">
                <Quote className="w-8 h-8 text-[#d4af37]/30 absolute top-4 right-4 pointer-events-none" />
                
                <p className="font-body-md text-sm sm:text-base text-neutral-200 leading-relaxed italic border-l-2 border-[#d4af37] pl-4">
                  &ldquo;When I founded Ganga Homes &amp; Developers, the vision was clear: to build spaces where uncompromising engineering precision meets timeless architectural beauty.&rdquo;
                </p>

                <p className="font-body-sm text-xs sm:text-sm text-[#E2E8F0]/90 leading-relaxed">
                  As an emerging startup atelier, every project we undertake receives my direct, personal oversight. We believe that true luxury is founded upon complete transparency, ethical site execution, and earning the lifelong trust of our clients.
                </p>

                <p className="font-body-sm text-xs sm:text-sm text-[#E2E8F0]/90 leading-relaxed">
                  Whether crafting a bespoke residence, carrying out structural revitalization, or steering turnkey developments, our promise remains steadfast: delivering enduring spaces that your family and business will cherish for generations.
                </p>

                {/* Director's Sign-Off */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
                  <span className="font-label-sm text-[11px] uppercase tracking-wider text-neutral-400">
                    Warm Regards,
                  </span>
                  <span className="font-handwriting text-2xl sm:text-3xl text-[#FFDF9B]">
                    Aneesh V M
                  </span>
                  <span className="font-serif text-[11px] sm:text-xs text-[#d4af37] tracking-wider font-medium">
                    Founder &amp; Managing Director &bull; Ganga Homes &amp; Developers
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFDF9B] text-[#111113] font-label-sm text-xs uppercase tracking-wider font-bold hover:bg-[#d4af37] transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <span>Connect Directly with the Director</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
