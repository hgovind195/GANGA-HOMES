"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderSection from "@/components/FounderSection";
import VisionMission from "@/components/VisionMission";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. Architectural Standards / Why Choose Us */}
      <WhyChooseUs />

      {/* 3. Founder Feature & Credentials */}
      <FounderSection />

      {/* 4. Purpose & Guiding Ethos */}
      <VisionMission />

      {/* 5. Contact & Private Briefing Form */}
      <ContactForm />
    </div>
  );
}
