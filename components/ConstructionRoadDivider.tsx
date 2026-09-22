"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ConstructionRoadDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [truckProgress, setTruckProgress] = useState(0); // 0 to 1
  const [speed, setSpeed] = useState(27);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Track progress across viewport
      // Starts before entering viewport and moves completely through to the right
      const start = winHeight + 180;
      const end = -180;
      const current = start - rect.top;
      const total = start - end;

      const progress = Math.max(0, Math.min(1, current / total));
      setTruckProgress(progress);

      // Dynamic speed matching the "27 KM/H" reference telemetry
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;

      // Dynamic speed between 22 km/h and 48 km/h during scrolling, idling at 27 km/h
      const dynamicSpeed = Math.min(48, Math.max(20, Math.round(22 + delta * 0.9)));
      setSpeed(dynamicSpeed);
      setIsScrolling(true);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setSpeed(27); // Standard cruise speed as seen in reference
      }, 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden bg-[#F6F3EE] pt-8 sm:pt-10 select-none border-t border-[#E8DFCE]"
      aria-hidden="true"
    >
      {/* Top Header Strip: Speedometer & Fleet Telemetry (Matching reference video) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 flex items-center justify-between text-neutral-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1">
        <div className="flex items-center gap-2 text-[#725B24]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#725B24] animate-pulse"></span>
          <span className="font-semibold text-[#1C1C19]">{speed} KM/H</span>
          <span className="hidden sm:inline text-neutral-400">&bull; CARGO LOGISTICS IN TRANSIT</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] sm:text-[10px] text-neutral-400">
          <span className="hidden md:inline">FLEET NO. GH-FREIGHT-09</span>
          <span>ATELIER SITE DELIVERY</span>
        </div>
      </div>

      {/* Faint Oversized Architectural Typography (Exact match to "OUR SERVICES" background in reference) */}
      <div className="w-full overflow-hidden flex items-center justify-center pointer-events-none absolute inset-x-0 bottom-4 sm:bottom-6 select-none z-0">
        <span className="text-[15vw] sm:text-[12vw] font-black uppercase tracking-[0.18em] text-[#1C1C19]/[0.05] leading-none whitespace-nowrap transform translate-y-2">
          OUR SERVICES
        </span>
      </div>

      {/* Track Area with Container Semi-Trailer Truck Rolling Directly on the Road */}
      <div className="w-full relative h-[78px] sm:h-[95px] overflow-hidden z-10">
        {/* Moving Long-Haul Container Semi-Trailer Truck */}
        <div
          className="absolute bottom-0 will-change-transform flex items-end"
          style={{
            left: `calc(${truckProgress * 120}% - 260px)`,
            transform: "translateY(0px)",
            transition: isScrolling ? "none" : "left 0.2s ease-out",
          }}
        >
          {/* Detailed Side-Profile Container Semi-Trailer Truck SVG (Matching reference image) */}
          <svg
            className="w-[260px] h-[65px] sm:w-[360px] sm:h-[90px] drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
            viewBox="0 0 460 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Corrugated Container Panel Pattern */}
              <pattern
                id="containerCorrugation"
                width="6"
                height="38"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="6" height="38" fill="#D3D7DC" />
                <rect x="0" y="0" width="3" height="38" fill="#E6EAED" />
                <line x1="0" y1="0" x2="0" y2="38" stroke="#A8AFB6" strokeWidth="0.8" />
                <line x1="6" y1="0" x2="6" y2="38" stroke="#FFFFFF" strokeWidth="0.6" />
              </pattern>

              {/* Headlight Beam Projection */}
              <linearGradient id="truckHeadlightBeam" x1="428" y1="54" x2="460" y2="54" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF2B2" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FFF2B2" stopOpacity="0" />
              </linearGradient>

              {/* Cab Metallic Gradient */}
              <linearGradient id="cabPaint" x1="330" y1="12" x2="425" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2A2A2E" />
                <stop offset="45%" stopColor="#18181A" />
                <stop offset="100%" stopColor="#0E0E10" />
              </linearGradient>

              {/* Tinted Windshield Glass */}
              <linearGradient id="windshieldTint" x1="388" y1="22" x2="422" y2="38" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3B4252" />
                <stop offset="60%" stopColor="#2E3440" />
                <stop offset="100%" stopColor="#88C0D0" stopOpacity="0.7" />
              </linearGradient>

              {/* Tire Rim Radial Shading */}
              <radialGradient id="rimShading" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E5E7EB" />
                <stop offset="70%" stopColor="#9CA3AF" />
                <stop offset="100%" stopColor="#4B5563" />
              </radialGradient>
            </defs>

            {/* Aerodynamic Dust / Air Trail when moving */}
            {isScrolling && (
              <g className="opacity-40">
                <circle cx="8" cy="58" r="2" fill="#B0B5B9" />
                <circle cx="3" cy="56" r="1.5" fill="#B0B5B9" />
                <circle cx="-3" cy="54" r="1.2" fill="#C8CDD0" />
              </g>
            )}

            {/* 1. LONG FREIGHT CARGO CONTAINER TRAILER */}
            {/* Main Trailer Container Box (White/Silver Corrugated Body) */}
            <rect
              x="16"
              y="14"
              width="292"
              height="36"
              rx="1.5"
              fill="url(#containerCorrugation)"
              stroke="#8F969E"
              strokeWidth="0.8"
            />

            {/* Top Roof Edge Rail */}
            <rect x="15" y="13" width="294" height="3" rx="0.8" fill="#B8BDC3" />
            <line x1="15" y1="13" x2="309" y2="13" stroke="#FFFFFF" strokeWidth="0.6" />

            {/* Bottom Structural Chassis Rail */}
            <rect x="15" y="48" width="294" height="4" rx="0.8" fill="#6B7280" />
            <line x1="15" y1="48" x2="309" y2="48" stroke="#4B5563" strokeWidth="0.8" />

            {/* Rear Frame & Corner Posts */}
            <rect x="15" y="13" width="3.5" height="38" fill="#4B5563" />
            <rect x="306" y="13" width="3.5" height="38" fill="#4B5563" />

            {/* Rear Bumper & Mudflap */}
            <rect x="12" y="52" width="4" height="12" rx="0.5" fill="#18181B" />
            <rect x="11" y="60" width="6" height="3" rx="0.5" fill="#E5E7EB" /> {/* Rear Reflective Strip */}

            {/* Trailer Underrun Protection Guard (Side Silver Safety Bars) */}
            <g>
              <rect x="145" y="54" width="118" height="2" fill="#D1D5DB" />
              <rect x="145" y="58" width="118" height="2" fill="#D1D5DB" />
              {/* Vertical Mount Brackets */}
              <rect x="152" y="51" width="2" height="9" fill="#4B5563" />
              <rect x="185" y="51" width="2" height="9" fill="#4B5563" />
              <rect x="220" y="51" width="2" height="9" fill="#4B5563" />
              <rect x="255" y="51" width="2" height="9" fill="#4B5563" />
            </g>

            {/* Trailer Landing Gear Support Legs (Retracted during transit) */}
            <rect x="274" y="50" width="4" height="9" fill="#374151" />
            <rect x="272" y="58" width="8" height="2" rx="0.5" fill="#1F2937" />

            {/* Heavy Chassis Subframe Over Trailer Axles */}
            <rect x="48" y="51" width="90" height="4.5" fill="#1F2937" />

            {/* Mudguard Arc Over 3 Trailer Axles */}
            <path
              d="M48 56 C48 51 60 51 64 56 C64 51 86 51 92 56 C92 51 114 51 120 56 H138 V52 H48 V56 Z"
              fill="#18181B"
            />

            {/* 2. TRACTOR UNIT (EURO CAB-OVER-ENGINE) */}
            {/* Coupling Fifth Wheel & Pneumatic Spiral Susie Lines */}
            <rect x="310" y="49" width="22" height="3.5" rx="1" fill="#1F2937" />
            <path
              d="M308 44 Q318 40 326 46"
              stroke="#D97706"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="2 1.5"
            />
            <path
              d="M308 46 Q318 43 326 48"
              stroke="#EF4444"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="2 1.5"
            />

            {/* Tractor Chassis Frame */}
            <rect x="320" y="51" width="102" height="4.5" rx="1" fill="#1F2937" />

            {/* Tractor Side Skirt / Fuel Tank & Battery Box */}
            <rect x="352" y="53" width="36" height="8" rx="1" fill="#27272A" stroke="#3F3F46" strokeWidth="0.6" />
            <rect x="356" y="55" width="28" height="1.5" fill="#71717A" />

            {/* Tractor Rear Axle Fender / Mudguard */}
            <path
              d="M322 58 C322 50 350 50 350 58 H344 C344 52 328 52 328 58 Z"
              fill="#18181B"
            />

            {/* Front Steer Axle Mudguard */}
            <path
              d="M392 58 C392 50 420 50 420 58 H414 C414 52 398 52 398 58 Z"
              fill="#18181B"
            />

            {/* Cab Main Aerodynamic Shell */}
            <path
              d="M330 14 H375 C392 14 412 20 418 26 L425 42 C426.5 45 427 48 427 52 V61 H330 V14 Z"
              fill="url(#cabPaint)"
              stroke="#3F3F46"
              strokeWidth="0.8"
            />

            {/* Aerodynamic Roof Deflector & Sun Visor */}
            <path d="M374 13 L422 23 L420 25.5 L372 16 Z" fill="#111113" stroke="#52525B" strokeWidth="0.5" />
            <path d="M410 23 L426 27 L425 29 L409 25 Z" fill="#D4AF37" /> {/* Gold Accented Visor */}

            {/* Front Windshield (Angled Sleek Aerodynamic Glass) */}
            <path
              d="M390 25 L418 27 L422 39 H390 V25 Z"
              fill="url(#windshieldTint)"
              opacity="0.95"
            />

            {/* Driver Side Door Window */}
            <rect x="354" y="26" width="32" height="13" rx="1" fill="url(#windshieldTint)" opacity="0.9" />
            {/* Window Pillar Division */}
            <line x1="384" y1="26" x2="384" y2="39" stroke="#18181B" strokeWidth="1.2" />

            {/* Cab Side Deflector Spoiler (Behind Cab Overlapping Trailer Gap) */}
            <path d="M328 16 H334 V52 H328 Z" fill="#18181A" stroke="#27272A" strokeWidth="0.5" />

            {/* Cab Door Handle & Character Line */}
            <line x1="344" y1="42" x2="400" y2="42" stroke="#3F3F46" strokeWidth="0.6" />
            <rect x="360" y="43" width="5" height="1.5" rx="0.5" fill="#A1A1AA" />

            {/* Cab Access Steps */}
            <rect x="410" y="52" width="10" height="1.5" fill="#9CA3AF" />
            <rect x="410" y="56" width="10" height="1.5" fill="#9CA3AF" />

            {/* Side Rearview Mirrors */}
            <rect x="420" y="28" width="3" height="9" rx="0.6" fill="#18181B" stroke="#52525B" strokeWidth="0.5" />
            <line x1="417" y1="30" x2="420" y2="30" stroke="#27272A" strokeWidth="0.8" />
            <line x1="417" y1="34" x2="420" y2="34" stroke="#27272A" strokeWidth="0.8" />

            {/* Front Headlight Assembly (Modern LED Matrix) */}
            <rect x="423" y="51" width="3.5" height="5" rx="0.8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.5" />
            <circle cx="425" cy="53" r="1.2" fill="#FEF08A" />

            {/* Headlight Beam Projecting on Road */}
            <polygon
              points="427,52 460,48 460,59 427,56"
              fill="url(#truckHeadlightBeam)"
              opacity="0.45"
            />

            {/* 3. WHEELS (ALL 5 ROTATING PROPORTIONALLY WITH SCROLL) */}
            {/* All wheels rest directly on the road baseline y = 68 (cy = 60, r = 8) */}

            {/* Trailer Wheel 1 (x = 64) */}
            <g
              className="origin-[64px_60px]"
              style={{
                transform: `rotate(${truckProgress * 2880}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="64" cy="60" r="8" fill="#18181B" stroke="#27272A" strokeWidth="1.2" />
              <circle cx="64" cy="60" r="5" fill="url(#rimShading)" stroke="#374151" strokeWidth="0.6" />
              <circle cx="64" cy="60" r="2" fill="#18181B" />
              <circle cx="64" cy="57" r="0.6" fill="#FFFFFF" />
              <circle cx="67" cy="60" r="0.6" fill="#FFFFFF" />
              <circle cx="64" cy="63" r="0.6" fill="#FFFFFF" />
              <circle cx="61" cy="60" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Trailer Wheel 2 (x = 92) */}
            <g
              className="origin-[92px_60px]"
              style={{
                transform: `rotate(${truckProgress * 2880}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="92" cy="60" r="8" fill="#18181B" stroke="#27272A" strokeWidth="1.2" />
              <circle cx="92" cy="60" r="5" fill="url(#rimShading)" stroke="#374151" strokeWidth="0.6" />
              <circle cx="92" cy="60" r="2" fill="#18181B" />
              <circle cx="92" cy="57" r="0.6" fill="#FFFFFF" />
              <circle cx="95" cy="60" r="0.6" fill="#FFFFFF" />
              <circle cx="92" cy="63" r="0.6" fill="#FFFFFF" />
              <circle cx="89" cy="60" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Trailer Wheel 3 (x = 120) */}
            <g
              className="origin-[120px_60px]"
              style={{
                transform: `rotate(${truckProgress * 2880}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="120" cy="60" r="8" fill="#18181B" stroke="#27272A" strokeWidth="1.2" />
              <circle cx="120" cy="60" r="5" fill="url(#rimShading)" stroke="#374151" strokeWidth="0.6" />
              <circle cx="120" cy="60" r="2" fill="#18181B" />
              <circle cx="120" cy="57" r="0.6" fill="#FFFFFF" />
              <circle cx="123" cy="60" r="0.6" fill="#FFFFFF" />
              <circle cx="120" cy="63" r="0.6" fill="#FFFFFF" />
              <circle cx="117" cy="60" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Tractor Rear Drive Wheel (x = 336) */}
            <g
              className="origin-[336px_60px]"
              style={{
                transform: `rotate(${truckProgress * 2880}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="336" cy="60" r="8" fill="#18181B" stroke="#27272A" strokeWidth="1.2" />
              <circle cx="336" cy="60" r="5" fill="url(#rimShading)" stroke="#374151" strokeWidth="0.6" />
              <circle cx="336" cy="60" r="2" fill="#18181B" />
              <circle cx="336" cy="57" r="0.6" fill="#FFFFFF" />
              <circle cx="339" cy="60" r="0.6" fill="#FFFFFF" />
              <circle cx="336" cy="63" r="0.6" fill="#FFFFFF" />
              <circle cx="333" cy="60" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Tractor Front Steer Wheel (x = 406) */}
            <g
              className="origin-[406px_60px]"
              style={{
                transform: `rotate(${truckProgress * 2880}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="406" cy="60" r="8" fill="#18181B" stroke="#27272A" strokeWidth="1.2" />
              <circle cx="406" cy="60" r="5" fill="url(#rimShading)" stroke="#374151" strokeWidth="0.6" />
              <circle cx="406" cy="60" r="2" fill="#18181B" />
              <circle cx="406" cy="57" r="0.6" fill="#FFFFFF" />
              <circle cx="409" cy="60" r="0.6" fill="#FFFFFF" />
              <circle cx="406" cy="63" r="0.6" fill="#FFFFFF" />
              <circle cx="403" cy="60" r="0.6" fill="#FFFFFF" />
            </g>
          </svg>
        </div>
      </div>

      {/* REALISTIC HIGHWAY ASPHALT ROAD SECTION ("moving through the road") */}
      <div className="w-full relative bg-[#141416] border-t-2 border-[#27272A] pt-1.5 pb-2.5 shadow-inner z-20">
        {/* Crisp Top Road Curb / Edge Line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-[#3F3F46]/80"></div>

        {/* Highway Asphalt Road Surface with Dashed Center Markings */}
        <div className="w-full h-4 sm:h-5 flex items-center relative overflow-hidden">
          {/* Animated Dashed Lane Markings creating highway motion illusion */}
          <div
            className="w-[200%] absolute inset-y-0 flex items-center gap-6 sm:gap-8 opacity-75"
            style={{
              transform: `translateX(-${(truckProgress * 250) % 50}px)`,
              transition: isScrolling ? "none" : "transform 0.15s ease-out",
            }}
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="inline-block h-[2.5px] sm:h-[3px] w-8 sm:w-12 bg-white/70 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)] shrink-0"
              />
            ))}
          </div>

          {/* Road Asphalt Texture Ambient Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#725B24]/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Lower Road Shoulder / Baseline */}
        <div className="w-full h-[1px] bg-[#27272A]"></div>
      </div>
    </div>
  );
}

