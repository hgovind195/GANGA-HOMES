"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Award, Compass, Ruler, ShieldAlert } from "lucide-react";
import Card3D from "@/components/Card3D";

export default function FounderSection() {
  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#111113] border-y border-[#d4af37]/20 relative overflow-hidden scroll-mt-24" id="leadership">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left: Founder Portrait & Badges */}
        <div className="lg:col-span-5 relative">
          <Card3D maxTilt={10} scale={1.02} className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-[#181818] border border-[#d4af37]/35">
              <img
                src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto:good,w_900,c_limit/v1790010101/IMG_6595.JPG_ztgkus.jpg"
                alt="Aneesh V M - Founder & Managing Director, Ganga Homes and Developers"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col gap-0.5 sm:gap-1 text-white max-w-[60%] sm:max-w-none">
                <span className="font-label-sm text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#d4af37] font-semibold">
                  Founding Atelier
                </span>
                <span className="font-headline-sm text-lg sm:text-2xl tracking-tight font-medium text-white">
                  Aneesh V M
                </span>
                <span className="font-serif text-[11px] sm:text-sm text-[#FFDF9B]/95 italic font-medium">
                  Founder &amp; Managing Director
                </span>
              </div>
            </div>
          </Card3D>

          {/* Floating Credential Badge with 3D Pop - Compact on Mobile to Prevent Any Overlap */}
          <div className="absolute bottom-3 right-3 sm:bottom-6 sm:-right-6 p-2 sm:p-4 rounded-xl bg-[#1c1b1c]/95 sm:bg-[#1c1b1c] shadow-2xl border border-[#d4af37]/40 max-w-[135px] sm:max-w-xs flex items-center gap-2 sm:gap-4 backdrop-blur-md z-20 hover:scale-105 transition-transform duration-300">
            <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#d4af37] text-[#111113] flex items-center justify-center flex-shrink-0 shadow-md">
              <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#111113]" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-xs sm:text-lg text-white font-semibold whitespace-nowrap">14+ Years</span>
              <span className="font-body-sm text-[9px] sm:text-xs text-[#E5E2DD]/90 leading-tight">
                Mastery in Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Right: Leadership Bio & Qualifications */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-[#d4af37] font-label-sm uppercase tracking-[0.25em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              <span>Leadership &amp; Vision</span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Aneesh V M <br />
              <span className="font-serif text-[#FFDF9B] italic font-normal text-lg sm:text-2xl md:text-3xl tracking-wide block mt-1 sm:mt-1.5">
                Founder &amp; Managing Director
              </span>
            </h2>
          </div>

          <div className="font-body-lg text-base sm:text-lg text-white font-normal leading-relaxed flex flex-col gap-4">
            <div className="font-medium text-white text-xl text-[#FFDF9B]">
              Building with Experience. Delivering with Trust.
            </div>
            <p className="text-neutral-300">
              When I started Ganga Homes &amp; Developers, my vision was simple — to bring 14 years of experience, knowledge, and commitment into every project we undertake.
            </p>
            <p className="text-neutral-300">
              Our goal is to create high-quality projects that are carefully planned, professionally executed, and delivered on time. We believe that a successful project is not just about constructing a building; it is about creating lasting value, maintaining quality, and earning the trust of our clients.
            </p>
            <p className="text-neutral-300">
              At Ganga Homes &amp; Developers, we are committed to combining experience, quality, transparency, and timely delivery in everything we do.
            </p>
            <p className="text-neutral-300 italic border-l-2 border-[#d4af37] pl-4 my-1">
              &quot;We believe that the strongest form of promotion is not advertising — it is the satisfaction of our clients and the trust they place in us.&quot;
            </p>
          </div>

          {/* 3 Qualification Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Card3D maxTilt={10} scale={1.04} className="h-full">
              <div className="h-full p-4 rounded-xl bg-[#1c1b1c] border border-[#d4af37]/30 shadow-md hover:border-[#d4af37] transition-all flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2b] flex items-center justify-center text-[#d4af37]">
                  <Ruler className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm font-semibold text-white">Diploma in Civil Engineering</span>
                  <span className="font-body-sm text-[11px] text-[#C8C6C5] mt-0.5">Structural ethics &amp; precision</span>
                </div>
              </div>
            </Card3D>

            <Card3D maxTilt={10} scale={1.04} className="h-full">
              <div className="h-full p-4 rounded-xl bg-[#1c1b1c] border border-[#d4af37]/30 shadow-md hover:border-[#d4af37] transition-all flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2b] flex items-center justify-center text-[#d4af37]">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm font-semibold text-white">Diploma in Interior Designing</span>
                  <span className="font-body-sm text-[11px] text-[#C8C6C5] mt-0.5">Bespoke space planning &amp; decor</span>
                </div>
              </div>
            </Card3D>

            <Card3D maxTilt={10} scale={1.04} className="h-full">
              <div className="h-full p-4 rounded-xl bg-[#1c1b1c] border border-[#d4af37]/30 shadow-md hover:border-[#d4af37] transition-all flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2b] flex items-center justify-center text-[#d4af37]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm font-semibold text-white">14+ Years of Excellence</span>
                  <span className="font-body-sm text-[11px] text-[#C8C6C5] mt-0.5">Architectural design &amp; construction</span>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Consultation Link */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#725B24] text-white font-label-lg text-xs uppercase tracking-wider hover:bg-[#FFDF9B] hover:text-[#1c1c19] transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <span>Consult with Atelier Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
