"use client";

import React from "react";
import Link from "next/link";
import { 
  Award,
  Building2,
  ShieldCheck,
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Compass,
  Eye,
  HeartHandshake,
  Users
} from "lucide-react";

export default function StartupCompanySection() {
  const startupPillars = [
    {
      icon: Award,
      tag: "Vision in Action",
      title: "Uncompromising Quality & Precision",
      description:
        "True to our vision, we build structures that are not only aesthetically pleasing but engineered for generational permanence. Every column, beam, and finish adheres to rigorous civil precision and structural ethics.",
      highlights: [
        "IS standard reinforced civil engineering",
        "Aesthetic balance with structural permanence",
        "Multi-tier quality inspections on site",
      ],
      badge: "Built for Generations",
    },
    {
      icon: Building2,
      tag: "Mission Scope",
      title: "Residential, Commercial, Villas & Apartments",
      description:
        "Delivering versatile architectural developments across turnkey luxury villas, contemporary residential communities, and prime commercial enclaves—all tailored with functional elegance and long-term utility.",
      highlights: [
        "Turnkey private luxury heritage & modern villas",
        "Boutique apartment suites & residences",
        "Commercial establishments & executive enclaves",
      ],
      badge: "Comprehensive Turnkey Delivery",
    },
    {
      icon: ShieldCheck,
      tag: "Guiding Principle",
      title: "Transparency & Professional Responsibility",
      description:
        "We uphold absolute professional accountability: 100% legally clear titles, statutory compliance, transparent milestone budgets, and direct engineer-led supervision with zero hidden surprises.",
      highlights: [
        "100% legally verified property titles",
        "Transparent milestone schedule & budget",
        "Direct senior engineer site supervision",
      ],
      badge: "100% Legal & Ethical Clarity",
    },
    {
      icon: Users,
      tag: "Client Advocacy",
      title: "Dedicated Client Relations Team",
      description:
        "We have an in-house client relations team providing a dedicated single point of contact. Enjoy transparent weekly milestone briefings, live site updates, rapid query response, and proactive guidance from design to handover.",
      highlights: [
        "Single dedicated point of contact & support",
        "Weekly photo/video progress reporting",
        "Proactive query resolution & aftercare",
      ],
      badge: "Dedicated Client Care",
    },
    {
      icon: HeartHandshake,
      tag: "Enduring Ethos",
      title: "Lasting Value Beyond Completion",
      description:
        "We don't just aim to finish construction handovers; we craft spaces that continue to reflect our quality and values decades down the road. Our greatest credential is the lifelong trust of our clients.",
      highlights: [
        "Generational durability & structural integrity",
        "Post-handover maintenance & servicing",
        "Preserving capital appreciation & legacy",
      ],
      badge: "Generational Trust",
    },
  ];

  const startupStats = [
    { value: "14+", label: "Years Core Technical Mastery", detail: "Hands-on civil engineering and interior architectural precision" },
    { value: "100%", label: "Title Clarity & Transparency", detail: "Rigorously vetted properties with total ethical compliance" },
    { value: "4 Sectors", label: "Villas, Apartments, Homes & Commercial", detail: "Versatile turnkey development under one unified standard" },
    { value: "Generations", label: "Built for Timeless Permanence", detail: "Structures designed to retain beauty, strength, and capital value" },
  ];

  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#FCF9F4] relative border-b border-[#E8DFCE] overflow-hidden" id="startup-story">
      {/* Subtle architectural background accents & side gridlines */}
      <div className="absolute -left-20 top-20 w-80 h-80 rounded-full bg-[#d4af37]/8 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-10 w-96 h-96 rounded-full bg-[#0f2347]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute left-2 sm:left-5 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent pointer-events-none"></div>
      <div className="absolute right-2 sm:right-5 md:right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-[#E8DFCE]/80">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#725B24]/10 border border-[#725B24]/20 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#725B24]" />
              <span className="font-label-sm text-[11px] uppercase tracking-[0.2em] text-[#725B24] font-bold">
                Our Vision &amp; Mission in Practice
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1C1C19] font-bold tracking-tight">
              Driven by Purpose. <br />
              <span className="text-[#725B24] italic font-normal font-serif">
                Defined by Uncompromising Delivery.
              </span>
            </h2>
            <p className="font-body-md text-base sm:text-lg text-[#404945] leading-relaxed mt-2">
              As a newly established construction and architectural development startup, our entire operational foundation is shaped directly by our vision and mission. We unite modern agility with 14+ years of civil and interior mastery to create enduring spaces that inspire trust.
            </p>
          </div>

          {/* Startup Mission Quote Card */}
          <div className="lg:max-w-md p-6 rounded-2xl bg-white border border-[#E5E2DD] shadow-md flex flex-col gap-3 relative">
            <div className="w-8 h-8 rounded-full bg-[#725B24]/15 flex items-center justify-center text-[#725B24]">
              <Compass className="w-4 h-4" />
            </div>
            <p className="font-body-sm text-sm text-[#1C1C19] italic font-medium leading-relaxed">
              &ldquo;We don&apos;t just aim to complete projects; we aim to create work that continues to reflect our quality, precision, and values years after completion.&rdquo;
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-[#F0EDE9] text-xs font-label-sm uppercase tracking-wider text-[#725B24] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
              <span>The Ganga Homes Commitment</span>
            </div>
          </div>
        </div>

        {/* 5 Pillars Aligned with Vision, Mission & Client Care */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {startupPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="h-full">
                <div className="group relative h-full flex flex-col rounded-2xl border border-[#d4af37]/35 shadow-[0_6px_25px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_-10px_rgba(212,175,55,0.22)] hover:border-[#d4af37] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden bg-white">
                  
                  {/* TOP HALF: Signature Atelier Obsidian Dark */}
                  <div className="relative bg-gradient-to-b from-[#18191c] via-[#141517] to-[#0f1012] p-5 sm:p-5.5 text-white border-b border-[#d4af37]/30">
                    {/* Subtle Top Gold Laser Accent Line */}
                    <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent group-hover:via-[#ffdf9b] transition-all duration-500"></div>

                    {/* Top Corner Blueprint Registration Marks */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#d4af37]/50 pointer-events-none group-hover:border-[#ffdf9b] transition-colors"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#d4af37]/50 pointer-events-none group-hover:border-[#ffdf9b] transition-colors"></div>

                    {/* Left Edge Architectural Indicator Bar */}
                    <div className="absolute left-0 top-4 bottom-4 w-[3.5px] bg-gradient-to-b from-[#d4af37] via-[#ffdf9b] to-[#725B24] rounded-r-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>

                    {/* Header: Icon + Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2a2723] to-[#171614] border border-[#d4af37]/50 flex items-center justify-center text-[#ffdf9b] group-hover:scale-105 group-hover:border-[#ffdf9b] transition-all duration-300 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#ffdf9b]/80 font-semibold px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10">
                        <span className="text-[9px] uppercase tracking-wider text-[#d4af37]">PLR</span>
                        <span className="font-bold text-white text-xs">0{idx + 1}</span>
                      </div>
                    </div>

                    {/* Tag + Title in Dark Header */}
                    <div className="flex flex-col gap-1.5 pt-3">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-[9.5px] uppercase tracking-widest text-[#ffdf9b] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_6px_#d4af37]"></span>
                        {pillar.tag}
                      </span>
                      <h3 className="font-headline-sm text-base text-white font-bold group-hover:text-[#ffdf9b] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* BOTTOM HALF: Crisp Architectural Ivory / White */}
                  <div className="p-5 sm:p-5.5 flex flex-col justify-between flex-1 gap-3.5 bg-white relative">
                    {/* Bottom Corner Blueprint Marks */}
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#725B24]/30 pointer-events-none group-hover:border-[#725B24] transition-colors"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#725B24]/30 pointer-events-none group-hover:border-[#725B24] transition-colors"></div>

                    {/* Right Edge CAD Drafting Ruler Ticks */}
                    <div className="absolute right-1.5 top-1/3 flex flex-col gap-1.5 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1.5 h-[1px] bg-[#725B24]/60"></div>
                      <div className="w-2.5 h-[1px] bg-[#d4af37]"></div>
                      <div className="w-1.5 h-[1px] bg-[#725B24]/60"></div>
                      <div className="w-2.5 h-[1px] bg-[#d4af37]"></div>
                      <div className="w-1.5 h-[1px] bg-[#725B24]/60"></div>
                    </div>

                    {/* Faint Architectural Monogram Watermark in Background */}
                    <span className="absolute right-2 bottom-12 font-headline-lg text-6xl text-[#725B24]/[0.035] font-bold select-none pointer-events-none group-hover:text-[#725B24]/[0.07] transition-colors duration-500">
                      0{idx + 1}
                    </span>

                    <div className="flex flex-col gap-3 relative z-10">
                      {/* Description */}
                      <p className="font-body-sm text-xs text-[#404945] leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Classy Micro Highlights Checklist */}
                      <div className="flex flex-col gap-2 pt-2.5 border-t border-[#F0EDE9] my-0.5">
                        {pillar.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-[#333936] font-body-sm leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#725B24] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Curated Bottom Seal Badge */}
                    <div className="mt-3 pt-3 border-t border-[#F0EDE9] flex items-center justify-between text-[10px] font-label-sm uppercase tracking-wider text-[#725B24] font-bold bg-[#FAF8F5]/90 -mx-1 px-2.5 py-1.5 rounded-lg border border-[#EBE6DD] relative z-10">
                      <span className="flex items-center gap-1.5 truncate">
                        <Sparkles className="w-3 h-3 text-[#d4af37] shrink-0" />
                        <span className="truncate">{pillar.badge}</span>
                      </span>
                      <span className="font-mono text-[8.5px] text-[#725B24] bg-white px-1.5 py-0.5 rounded border border-[#E8DFCE] shrink-0 shadow-2xs font-semibold">
                        ASSURED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Startup Foundation Metrics Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#111113] via-[#1c1b1c] to-[#111113] text-white border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {startupStats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1.5 border-l-2 border-[#d4af37]/60 pl-4 sm:pl-6">
                <span className="font-headline-lg text-3xl sm:text-4xl text-[#FFDF9B] font-bold">
                  {stat.value}
                </span>
                <span className="font-headline-sm text-sm sm:text-base text-white font-semibold">
                  {stat.label}
                </span>
                <span className="font-body-sm text-xs text-[#C8C6C5] leading-relaxed">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#FFDF9B] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping"></span>
              <span>Committed to quality, transparency, and timely turnkey project delivery</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4af37] text-[#111113] font-label-sm text-xs uppercase tracking-wider font-bold hover:bg-[#FFDF9B] transition-all duration-300 w-fit shadow-md hover:-translate-y-0.5"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
