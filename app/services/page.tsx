"use client";

import React from "react";
import Link from "next/link";
import { Compass, Ruler, ArrowRight, CheckCircle2, Hammer, Layers, Sparkles, MessageCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Demolition & Comprehensive Renovation",
      subtitle: "Controlled Dismantling & Modern Remodeling",
      tag: "CIVIL & STRUCTURAL",
      specCode: "SPEC-01",
      description:
        "Specialized engineering-led demolition and full-scale renovation solutions for residential and commercial properties. From precision structural dismantling and load-bearing adjustments to complete modern layout transformations and turnkey aesthetic revitalization.",
      features: [
        "Safe, controlled structural demolition with complete site clearance",
        "Complete villa, apartment & commercial remodeling and modernization",
        "Structural retrofitting, beam strengthening & space reconfigurations",
        "Turnkey civil renovations with MEP upgrades and premium finishes",
      ],
      icon: Hammer,
    },
    {
      title: "Interior Masterplanning & Decor",
      subtitle: "Custom Joinery & Lighting Curation",
      tag: "INTERIOR ATELIER",
      specCode: "SPEC-02",
      description:
        "Bespoke interior design solutions led by certified interior designers, seamlessly blending space optimization, ambient lighting, and artisanal woodwork.",
      features: [
        "Italian marble flooring & custom hardwood joinery",
        "Acoustic wall paneling & concealed ambient lighting",
        "Modular kitchen ergonomics with German hardware",
        "Custom bath sanctuary fixtures & wellness layouts",
      ],
      icon: Compass,
    },
    {
      title: "Architectural Contracting & Turnkey",
      subtitle: "Commercial & Multi-Family Enclaves",
      tag: "EPC CONTRACTING",
      specCode: "SPEC-03",
      description:
        "Complete EPC turnkey project execution for commercial complexes, executive apartment towers, and gated residential communities.",
      features: [
        "BIM digital twin oversight & milestone tracking",
        "100% legal title clarity & regulatory compliance",
        "Sustainable & eco-friendly green building practices",
        "Dedicated site engineering & quality assurance auditing",
      ],
      icon: Ruler,
    },
  ];

  return (
    <div className="w-full flex flex-col pt-24 sm:pt-28">
      {/* Banner */}
      <section className="w-full py-16 px-5 sm:px-8 md:px-16 bg-[#111113] text-white border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 text-[#d4af37] font-label-sm uppercase tracking-[0.25em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span>Capabilities &amp; Expertise</span>
          </div>
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Services &amp; Capabilities
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-[#E5E2DD] max-w-2xl leading-relaxed mt-2">
            Combining 14+ years of civil engineering ethics, interior architecture, and turnkey project management to deliver uncompromised quality.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="w-full py-10 sm:py-16 md:py-20 px-3.5 sm:px-8 md:px-16 bg-[#FCF9F4] relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl bg-white border border-[#E8DFCE] border-l-4 border-l-[#725B24] hover:border-l-[#0f2347] shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center overflow-hidden"
              >
                {/* Architectural Blueprint Corner Registration Marks */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-[#725B24]/30 pointer-events-none group-hover:border-[#725B24] transition-colors"></div>
                <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-[#725B24]/30 pointer-events-none group-hover:border-[#725B24] transition-colors"></div>
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-[#725B24]/30 pointer-events-none group-hover:border-[#725B24] transition-colors"></div>
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-[#725B24]/30 pointer-events-none group-hover:border-[#725B24] transition-colors"></div>

                {/* Left Column: Capability details */}
                <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
                  {/* Top Technical Metadata Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-[#F0EDE9]">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0EDE9] flex items-center justify-center text-[#725B24] group-hover:bg-[#725B24] group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#725B24] font-bold uppercase">
                          0{index + 1} &bull; {service.tag}
                        </span>
                        <span className="font-label-sm text-[8px] sm:text-[9px] uppercase tracking-widest text-neutral-400">
                          Discipline Standard
                        </span>
                      </div>
                    </div>

                    {/* Architectural Spec Pill */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#FCF9F4] border border-[#E8DFCE] font-mono text-[9px] sm:text-[10px] text-[#725B24] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#725B24] group-hover:bg-[#0f2347] transition-colors"></span>
                      <span>{service.specCode}</span>
                    </div>
                  </div>

                  <h2 className="font-headline-lg text-xl sm:text-2xl md:text-3xl text-[#1C1C19] font-bold group-hover:text-[#0f2347] transition-colors break-words">
                    {service.title}
                  </h2>

                  <span className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[#725B24] font-semibold">
                    {service.subtitle}
                  </span>

                  <p className="font-body-md text-xs sm:text-sm text-[#404945] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right Column: Key Deliverables Box with Micro Element Styling */}
                <div className="lg:col-span-7 bg-[#FBF9F5] p-4 sm:p-6 md:p-7 rounded-xl border border-[#E8DFCE] flex flex-col gap-3.5 sm:gap-4 relative group-hover:border-[#725B24]/40 transition-colors">
                  {/* Small Header Element with Decorative Dot-bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8DFCE]">
                    <span className="font-label-sm text-[11px] sm:text-xs uppercase tracking-wider text-[#1C1C19] font-bold flex items-center gap-1.5 sm:gap-2">
                      <Layers className="w-4 h-4 text-[#725B24] shrink-0" />
                      <span>Key Deliverables &amp; Specs</span>
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#725B24] bg-[#725B24]/10 px-2 py-0.5 rounded-md font-semibold">
                      Quality Verified
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-0.5">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs font-body-sm text-[#404945] group/item">
                        <div className="w-4 h-4 rounded-full bg-[#725B24]/10 text-[#725B24] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#725B24] group-hover/item:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-3 border-t border-[#E8DFCE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-label-sm text-[11px] text-[#725B24] flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3 text-[#725B24] shrink-0" />
                      <span>Direct Atelier Consultation</span>
                    </span>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/919961832347?text=${encodeURIComponent(`Hello Ganga Homes, I would like to enquire about your service: ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white font-label-sm text-xs font-semibold shadow-xs transition-colors cursor-pointer text-center min-h-[42px] active:scale-98"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" />
                        <span>WhatsApp Enquiry</span>
                      </a>
                      <Link
                        href="/contact#consultation"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#725B24] text-white font-label-sm text-xs uppercase tracking-widest font-bold hover:bg-[#0f2347] transition-all duration-300 shadow-xs text-center min-h-[42px] active:scale-98"
                      >
                        <span>Proposal Brief</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
