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
  HeartHandshake
} from "lucide-react";

export default function StartupCompanySection() {
  const startupPillars = [
    {
      icon: Award,
      tag: "Vision in Action",
      title: "Uncompromising Quality & Precision",
      description:
        "True to our vision, we build structures that are not only aesthetically pleasing but engineered for generational permanence. Every column, beam, and finish adheres to rigorous civil precision and structural ethics.",
      badge: "Built for Generations",
    },
    {
      icon: Building2,
      tag: "Mission Scope",
      title: "Residential, Commercial, Villas & Apartments",
      description:
        "Delivering versatile architectural developments across turnkey luxury villas, contemporary residential communities, and prime commercial enclaves—all tailored with functional elegance and long-term utility.",
      badge: "Comprehensive Turnkey Delivery",
    },
    {
      icon: ShieldCheck,
      tag: "Guiding Principle",
      title: "Transparency & Professional Responsibility",
      description:
        "We uphold absolute professional accountability: 100% legally clear titles, statutory compliance, transparent milestone budgets, and direct engineer-led supervision with zero hidden surprises.",
      badge: "100% Legal & Ethical Clarity",
    },
    {
      icon: HeartHandshake,
      tag: "Enduring Ethos",
      title: "Lasting Value Beyond Completion",
      description:
        "We don't just aim to finish construction handovers; we craft spaces that continue to reflect our quality and values decades down the road. Our greatest credential is the lifelong trust of our clients.",
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
    <section className="w-full py-20 px-5 sm:px-8 md:px-16 bg-[#FCF9F4] relative border-b border-[#E8DFCE] overflow-hidden" id="startup-story">
      {/* Subtle architectural background accents */}
      <div className="absolute -left-20 top-20 w-80 h-80 rounded-full bg-[#d4af37]/8 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-10 w-96 h-96 rounded-full bg-[#0f2347]/10 blur-3xl pointer-events-none"></div>

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

        {/* 4 Pillars Aligned with Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {startupPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="h-full">
                <div className="group relative h-full flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E5E2DD] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#F0EDE9] flex items-center justify-center text-[#725B24] group-hover:bg-[#725B24] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-headline-sm text-lg text-[#725B24]/40 font-bold group-hover:text-[#725B24] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 pt-1">
                      <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#725B24] font-bold">
                        {pillar.tag}
                      </span>
                      <h3 className="font-headline-sm text-lg sm:text-xl text-[#1C1C19] font-bold group-hover:text-[#0f2347] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="font-body-sm text-xs sm:text-[13px] text-[#404945] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0EDE9] flex items-center justify-between text-[11px] font-label-sm uppercase tracking-wider text-[#725B24] font-bold">
                    <span>{pillar.badge}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#0f2347]" />
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
