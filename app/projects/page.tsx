"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      id: "haris-residence",
      title: "Hari's Residence",
      category: "Traditional Residence",
      location: "Vaikom",
      status: "Ongoing" as const,
      image: "https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto:good,w_1200,c_limit/v1790012512/IMG-20260810-WA0022.jpg_y67ljs.jpg",
      sqft: "1,827 SQ FT",
      units: "Traditional Work",
    },
  ];

  return (
    <div className="w-full flex flex-col pt-24 sm:pt-28">
      {/* Banner */}
      <section className="w-full py-14 px-5 sm:px-8 md:px-16 bg-[#111113] text-white border-b border-[#d4af37]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-[#d4af37] font-label-sm uppercase tracking-[0.25em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
            <span>Architectural Portfolio</span>
          </div>
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Our Projects
          </h1>
          <p className="font-body-lg text-sm sm:text-base text-[#E5E2DD] max-w-2xl leading-relaxed mt-1">
            Explore our architectural portfolio featuring bespoke traditional residences crafted with structural ethics and precision.
          </p>
        </div>
      </section>

      {/* Small Tiles Grid */}
      <section className="w-full py-10 sm:py-16 px-4 sm:px-8 md:px-16 bg-[#FCF9F4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
