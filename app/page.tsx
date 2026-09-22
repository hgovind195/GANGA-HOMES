"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Hammer, Compass, Ruler, Sparkles, Layers } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectCard from "@/components/ProjectCard";
import FounderSection from "@/components/FounderSection";
import VisionMission from "@/components/VisionMission";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const coreServices = [
    {
      title: "Demolition & Comprehensive Renovation",
      desc: "Specialized engineering-led demolition, structural dismantling, space reconfigurations, and full-scale modern villa and commercial remodeling.",
      tag: "CIVIL & STRUCTURAL",
      icon: Hammer,
      spec: "SPEC-01",
    },
    {
      title: "Interior Masterplanning & Decor",
      desc: "Bespoke interior design solutions blending Italian marble flooring, custom hardwood joinery, modular kitchens, and ambient lighting curation.",
      tag: "INTERIOR ATELIER",
      icon: Compass,
      spec: "SPEC-02",
    },
    {
      title: "Architectural Contracting & Turnkey",
      desc: "Complete EPC turnkey execution for commercial complexes, executive residences, and gated enclaves with BIM digital twin oversight.",
      tag: "EPC CONTRACTING",
      icon: Ruler,
      spec: "SPEC-03",
    },
  ];

  const featuredProject = {
    id: "haris-residence",
    title: "Hari's Residence",
    category: "Traditional Residence",
    location: "Vaikom",
    status: "Ongoing" as const,
    image: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto:good,w_1200,c_limit/v1790012512/IMG-20260810-WA0022.jpg_y67ljs.jpg",
    sqft: "1,827 SQ FT",
    units: "Traditional Work",
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Architectural Standards / Why Choose Us */}
      <WhyChooseUs />

      {/* 3. Core Capabilities & Services Showcase Section */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#F6F3EE] scroll-mt-24 border-t border-[#E8DFCE]" id="services">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#725B24] font-label-sm uppercase tracking-[0.25em] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                <span>Capabilities &amp; Disciplines</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1C1C19] font-bold">
                Our Architectural Services
              </h2>
              <p className="font-body-md text-xs sm:text-sm md:text-base text-[#404945] leading-relaxed">
                From precision structural renovations to bespoke interior joinery and complete turnkey developments.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#725B24] text-white font-label-sm text-xs uppercase tracking-widest font-bold hover:bg-[#0f2347] transition-all shadow-md self-start md:self-end"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {coreServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl bg-white border border-[#E8DFCE] border-l-4 border-l-[#725B24] hover:border-l-[#0f2347] p-5 sm:p-7 flex flex-col justify-between gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F0EDE9]">
                      <div className="w-10 h-10 rounded-xl bg-[#F0EDE9] flex items-center justify-center text-[#725B24]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#725B24] bg-[#725B24]/10 px-2 py-0.5 rounded font-semibold">
                        {service.spec}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#725B24] font-bold">
                      0{idx + 1} &bull; {service.tag}
                    </span>

                    <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-[#1C1C19]">
                      {service.title}
                    </h3>

                    <p className="font-body-sm text-xs sm:text-sm text-[#404945] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 font-label-sm text-xs font-bold uppercase tracking-wider text-[#725B24] hover:text-[#0f2347] pt-2 border-t border-[#F0EDE9]"
                  >
                    <span>Read Full Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Architectural Portfolio / Projects Section */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#FCF9F4] scroll-mt-24 border-t border-[#E8DFCE]" id="projects">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#725B24] font-label-sm uppercase tracking-[0.25em] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                <span>Architectural Portfolio</span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1C1C19] font-bold">
                Featured Projects
              </h2>
              <p className="font-body-md text-xs sm:text-sm md:text-base text-[#404945] leading-relaxed">
                Explore active commissions engineered with structural ethics, heritage joinery, and meticulous execution.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f2347] text-white font-label-sm text-xs uppercase tracking-widest font-bold hover:bg-[#725B24] transition-all shadow-md self-start md:self-end"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Project Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard {...featuredProject} />
          </div>
        </div>
      </section>

      {/* 5. Founder Feature & Credentials */}
      <FounderSection />

      {/* 6. Purpose & Guiding Ethos */}
      <VisionMission />

      {/* 7. Contact & Private Briefing Form */}
      <ContactForm />
    </div>
  );
}

