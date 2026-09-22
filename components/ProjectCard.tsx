"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Ruler, Hammer, Clock, X, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import Card3D from "@/components/Card3D";
import { getOptimizedImageUrl } from "@/lib/cloudinary";

export interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  status: "Completed" | "Ongoing" | "Upcoming" | "Ready to Move";
  image: string;
  sqft?: string;
  units?: string;
  completionYear?: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  location,
  status,
  image,
  sqft,
  units,
  completionYear,
}: ProjectCardProps) {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDossierOpen(false);
      }
    };
    if (isDossierOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDossierOpen]);

  const getStatusBadge = () => {
    switch (status) {
      case "Completed":
      case "Ready to Move":
        return "bg-[#0f2347]/10 text-[#0f2347] border-[#0f2347]/30";
      case "Ongoing":
        return "bg-[#725B24] text-white border-[#FFDF9B]/40";
      default:
        return "bg-neutral-200 text-neutral-800 border-neutral-300";
    }
  };

  return (
    <>
      <Card3D maxTilt={6} scale={1.01} className="h-full">
        <div
          onClick={() => setIsDossierOpen(true)}
          className="group relative h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E8DFCE] border-l-4 border-l-[#725B24] hover:border-l-[#0f2347] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          {/* Architectural Blueprint Corner Registration Marks */}
          <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-[#725B24]/40 pointer-events-none group-hover:border-[#725B24] transition-colors z-20"></div>
          <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-[#725B24]/40 pointer-events-none group-hover:border-[#725B24] transition-colors z-20"></div>
          <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-[#725B24]/40 pointer-events-none group-hover:border-[#725B24] transition-colors z-20"></div>
          <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-[#725B24]/40 pointer-events-none group-hover:border-[#725B24] transition-colors z-20"></div>

          {/* Image Container */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-neutral-100">
            <img
              src={getOptimizedImageUrl(image, { width: 1200, format: "webp", quality: "auto:good" })}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

            {/* Top Status Pill - Clean & Minimal */}
            <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
              {status === "Ongoing" ? (
                <span className="px-3 py-1 rounded-full text-xs font-label-sm tracking-wider uppercase font-semibold backdrop-blur-md border bg-[#725B24] text-white border-[#FFDF9B]/40 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFDF9B]"></span>
                  <span>Ongoing Project</span>
                </span>
              ) : (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-label-sm tracking-wider uppercase font-semibold backdrop-blur-md border ${getStatusBadge()} flex items-center gap-1.5`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                  <span>{status}</span>
                </span>
              )}
            </div>

            {/* Hover Blueprint Prompt Overlay */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[#FFDF9B] border border-white/20 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                <FileText className="w-3 h-3" />
                <span>Open Dossier</span>
              </span>
            </div>

            {/* Location & Category Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-1.5 text-xs font-body-sm font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#FFDF9B]" />
                <span>{location}, Kerala</span>
              </div>
              <span className="font-mono text-[10px] uppercase text-[#FFDF9B] tracking-wider font-semibold bg-black/40 px-2 py-0.5 rounded-md border border-white/10">
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-4">
            {/* Top Technical Metadata Bar */}
            <div className="flex items-center justify-between pb-1 border-b border-[#F0EDE9]">
              <span className="font-mono text-[10px] tracking-wider text-[#725B24] font-bold uppercase">
                Bespoke Residential Commission
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FCF9F4] border border-[#E8DFCE] font-mono text-[9px] text-[#725B24] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725B24]"></span>
                <span>PRJ-01 &bull; ACTIVE</span>
              </div>
            </div>

            <h3 className="font-headline-sm text-xl text-[#1C1C19] font-bold group-hover:text-[#0f2347] transition-colors flex items-center justify-between">
              <span>{title}</span>
              <span className="font-mono text-[10px] text-[#725B24] font-normal underline decoration-dotted">
                View Dossier &rarr;
              </span>
            </h3>

            {/* Specification Matrix with Plain Single-Color Icons */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#F0EDE9] font-body-sm text-xs text-[#404945] bg-[#FBF9F5] px-3.5 rounded-xl">
              {sqft && (
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#725B24] font-bold flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-[#725B24]" />
                    <span>Area</span>
                  </span>
                  <span className="font-semibold text-[#1C1C19]">{sqft}</span>
                </div>
              )}
              {units && (
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#725B24] font-bold flex items-center gap-1">
                    <Hammer className="w-3 h-3 text-[#725B24]" />
                    <span>Work Type</span>
                  </span>
                  <span className="font-semibold text-[#1C1C19]">{units}</span>
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#725B24] font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#725B24]" />
                  <span>Location</span>
                </span>
                <span className="font-semibold text-[#1C1C19]">{location}</span>
              </div>
            </div>

            {/* Ongoing Active Milestone Status Strip */}
            {status === "Ongoing" && (
              <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F6F3EE] border border-[#E5E2DD] text-[11px] font-mono text-[#404945]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#725B24]" />
                  <span>Execution: Framing &amp; Masonry</span>
                </div>
                <span className="text-[9px] bg-[#725B24]/10 text-[#725B24] border border-[#725B24]/20 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                  On Schedule
                </span>
              </div>
            )}

            {/* Action Trigger */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDossierOpen(true);
                }}
                className="inline-flex items-center gap-1.5 font-label-sm text-xs uppercase tracking-widest font-bold text-[#725B24] hover:text-[#0f2347] transition-colors"
              >
                <span>Inspect Project Dossier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Card3D>

      {/* Architectural Paper Sliding Modal */}
      {isDossierOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setIsDossierOpen(false)}
        >
          <div
            className="animate-paper-slide relative w-full max-w-3xl bg-white text-[#1C1C19] rounded-2xl border-2 border-[#d4af37]/45 shadow-[0_30px_90px_rgba(0,0,0,0.4),0_0_35px_rgba(15,35,71,0.12)] p-6 sm:p-9 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Paper Blueprint Registration Corner Marks in Gold */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#725B24]/50 pointer-events-none"></div>
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#725B24]/50 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#725B24]/50 pointer-events-none"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#725B24]/50 pointer-events-none"></div>

            {/* Paper Header Strip on Pure White */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EDE9] bg-white">
              <div className="flex flex-col gap-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0f2347]/10 text-[#0f2347] font-mono text-[9px] tracking-widest uppercase font-bold border border-[#0f2347]/20 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f2347]"></span>
                  <span>Architectural Project Dossier &bull; PRJ-01</span>
                </div>
                <span className="font-label-sm text-xs uppercase tracking-wider text-neutral-400">
                  Ganga Homes &amp; Developers &bull; Active Commission Portfolio
                </span>
              </div>

              <button
                onClick={() => setIsDossierOpen(false)}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#0f2347] text-neutral-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Close Dossier"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image & Key Info */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-white">
              <div className="md:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E8DFCE] shadow-sm bg-neutral-50">
                <img
                  src={getOptimizedImageUrl(image, { width: 1200, format: "webp", quality: "auto:good" })}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0f2347]/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-white border border-[#FFDF9B]/30 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FFDF9B]" />
                    <span>{location}, Kerala</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#FFDF9B] font-bold tracking-wider">
                    ACTIVE COMMISSION
                  </span>
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col gap-3.5 bg-white">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase text-[#725B24] tracking-widest font-bold">
                    {category}
                  </span>
                  <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#0f2347] font-bold tracking-tight">
                    {title}
                  </h2>
                </div>

                <p className="font-body-sm text-xs sm:text-sm text-[#404945] leading-relaxed">
                  A bespoke traditional residence commissioned in Vaikom, combining heritage Kerala joinery with reinforced modern civil engineering. Engineered for generational durability with open courtyards and climate-responsive architecture.
                </p>

                {/* White Spec Matrix Card */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-white border border-[#E8DFCE] shadow-xs text-xs font-body-sm">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#725B24] font-bold flex items-center gap-1">
                      <Ruler className="w-3 h-3 text-[#725B24]" />
                      <span>Plinth Area</span>
                    </span>
                    <span className="font-bold text-[#0f2347] mt-0.5">{sqft}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#725B24] font-bold flex items-center gap-1">
                      <Hammer className="w-3 h-3 text-[#725B24]" />
                      <span>Typology</span>
                    </span>
                    <span className="font-bold text-[#0f2347] mt-0.5">{units}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#725B24] font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#725B24]" />
                      <span>Territory</span>
                    </span>
                    <span className="font-bold text-[#0f2347] mt-0.5">{location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone Timeline on Pure White */}
            <div className="mt-6 pt-5 border-t border-[#F0EDE9] flex flex-col gap-3 bg-white">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase tracking-wider text-[#0f2347] font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#725B24]" />
                  <span>Construction Milestone Execution</span>
                </span>
                <span className="font-mono text-[10px] text-[#725B24] font-semibold uppercase">
                  Direct Field Supervision
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFCE] border-l-4 border-l-emerald-600 shadow-xs flex flex-col gap-1">
                  <span className="text-[9px] text-[#725B24] font-bold">01 / Foundation</span>
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Completed
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFCE] border-l-4 border-l-[#0f2347] shadow-xs flex flex-col gap-1">
                  <span className="text-[9px] text-[#725B24] font-bold">02 / Framing</span>
                  <span className="text-[11px] font-bold text-[#0f2347] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f2347] animate-pulse"></span>
                    In Progress
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFCE] border-l-4 border-l-[#d4af37]/60 shadow-xs flex flex-col gap-1 text-neutral-400">
                  <span className="text-[9px] font-bold text-neutral-500">03 / Roofing</span>
                  <span className="text-[11px] text-neutral-500">Upcoming</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFCE] border-l-4 border-l-neutral-300 shadow-xs flex flex-col gap-1 text-neutral-400">
                  <span className="text-[9px] font-bold text-neutral-500">04 / Handover</span>
                  <span className="text-[11px] text-neutral-500">Upcoming</span>
                </div>
              </div>
            </div>

            {/* Actions on Pure White */}
            <div className="mt-6 pt-4 border-t border-[#F0EDE9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
              <span className="text-xs text-neutral-500 font-body-sm">
                Supervised under direct leadership of Aneesh V M
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsDossierOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-white border border-[#E2D9C8] text-xs font-label-sm uppercase tracking-wider text-[#404945] hover:bg-neutral-50 hover:text-[#1C1C19] transition-colors font-medium shadow-xs"
                >
                  Close Dossier
                </button>
                <a
                  href={`https://wa.me/919961832347?text=${encodeURIComponent(`Hello Ganga Homes, I would like to enquire about visiting/showing for ${title} (${location}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white font-label-sm text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0f2347] text-white font-label-sm text-xs uppercase tracking-wider font-bold hover:bg-[#16325c] transition-all shadow-md hover:gap-2.5"
                >
                  <span>Schedule Site Showing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
