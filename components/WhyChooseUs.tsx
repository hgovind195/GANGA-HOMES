"use client";

import React from "react";
import { ShieldCheck, Clock, Navigation, Users, ArrowRight, Award } from "lucide-react";
import Card3D from "@/components/Card3D";

export default function WhyChooseUs() {
  const pillars = [
    {
      number: "01 / Craft",
      title: "Uncompromising Quality",
      description:
        "Grade-A high-tensile steel, imported German fittings, low-VOC finishes, and seismically certified earthquake-resistant structural engineering.",
      footer: "Rigorous Protocols",
      icon: ShieldCheck,
    },
    {
      number: "02 / Punctuality",
      title: "On-Time Delivery",
      description:
        "Digital milestone synchronization and BIM oversight ensure uncompromising construction cadence with zero handover delays across every tower.",
      footer: "100% Track Record",
      icon: Clock,
    },
    {
      number: "03 / Enclave",
      title: "Prime Locations",
      description:
        "Curated addresses positioned alongside major arterial transit, lush protected greenbelts, top diplomatic enclaves, and prime capital corridors.",
      footer: "High Appreciation",
      icon: Navigation,
    },
    {
      number: "04 / Trust",
      title: "Client-Centric Dedication",
      description:
        "As a dynamic startup, every homeowner is our absolute priority. We forge trust through direct founder access, 100% legal clarity, and transparent milestone execution.",
      footer: "Dedicated Partnership",
      icon: Users,
    },
  ];

  return (
    <section className="w-full py-16 px-5 sm:px-8 md:px-16 bg-[#FCF9F4] relative scroll-mt-24" id="standards">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-[#725B24] font-bold">
              The Architectural Standard
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1C1C19] font-bold">
              Why Choose Ganga Homes
            </h2>
            <p className="font-body-md text-base text-[#404945] font-medium leading-relaxed">
              True luxury is uncompromised peace of mind. Every square foot is engineered through rigorous structural ethics and meticulous material provenance.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[#1C1C19] font-label-sm text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full bg-[#F0EDE9] border border-[#E5E2DD]">
            <span>Structural Ethics &amp; Engineering Precision</span>
            <Award className="w-4 h-4 text-[#725B24]" />
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <Card3D key={item.number} maxTilt={10} scale={1.03} className="h-full">
                <div className="group h-full flex flex-col justify-between p-6 rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-[#E5E2DD]">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F0EDE9] flex items-center justify-center text-[#725B24] group-hover:bg-[#725B24] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#725B24] font-bold">
                        {item.number}
                      </span>
                      <h3 className="font-headline-sm text-xl text-[#1C1C19] font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-xs text-[#404945] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center gap-2 text-[#725B24] font-label-sm text-xs uppercase tracking-widest font-bold border-t border-[#F0EDE9]">
                    <span>{item.footer}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
