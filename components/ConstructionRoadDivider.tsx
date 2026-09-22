"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ConstructionRoadDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [truckProgress, setTruckProgress] = useState(0); // 0 to 1
  const [speed, setSpeed] = useState(24);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Track progress across viewport
      // Starts when divider is 150px below the viewport, completes when 150px above
      const start = winHeight + 150;
      const end = -150;
      const current = start - rect.top;
      const total = start - end;

      const progress = Math.max(0, Math.min(1, current / total));
      setTruckProgress(progress);

      // Calculate dynamic speed matching the "27 KM/H" reference in the video
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;

      // Dynamic speed between 18 km/h and 38 km/h during scrolling, idling at 24 km/h
      const dynamicSpeed = Math.min(38, Math.max(18, Math.round(18 + delta * 0.8)));
      setSpeed(dynamicSpeed);
      setIsScrolling(true);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        setSpeed(24); // Idle cruise speed
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
      className="w-full relative overflow-hidden bg-[#F6F3EE] pt-10 select-none"
      aria-hidden="true"
    >
      {/* Top Header Strip: Speedometer Telemetry (Matching "27 KM/H" in reference video) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 flex items-center justify-between text-neutral-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1">
        <div className="flex items-center gap-2 text-[#725B24]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#725B24] animate-pulse"></span>
          <span className="font-semibold text-[#1C1C19]">{speed} KM/H</span>
          <span className="hidden sm:inline text-neutral-400">&bull; CONCRETE IN TRANSIT</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] sm:text-[10px] text-neutral-400">
          <span className="hidden md:inline">FLEET NO. GH-MIXER-04</span>
          <span>ATELIER SITE DELIVERY</span>
        </div>
      </div>

      {/* Faint Oversized Architectural Typography (Matching "SERVICES" background in reference video) */}
      <div className="w-full overflow-hidden flex items-center justify-center pointer-events-none absolute inset-x-0 bottom-0 select-none">
        <span className="text-[14vw] sm:text-[11vw] font-black uppercase tracking-[0.16em] text-[#1C1C19]/[0.05] leading-none whitespace-nowrap transform translate-y-1">
          CONSTRUCTION
        </span>
      </div>

      {/* Track Area with Truck Rolling Directly on the Ground Line */}
      <div className="w-full relative h-[65px] sm:h-[75px] overflow-hidden">
        {/* Moving Concrete Cement Mixer Truck */}
        <div
          className="absolute bottom-0 will-change-transform flex items-end"
          style={{
            left: `calc(${truckProgress * 115}% - 170px)`,
            transform: "translateY(1px)", // Sits precisely on top of the dividing ground line
            transition: isScrolling ? "none" : "left 0.2s ease-out",
          }}
        >
          {/* Detailed Side-Profile Concrete Cement Mixer Truck SVG */}
          <svg
            className="w-[145px] h-[60px] sm:w-[175px] sm:h-[70px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]"
            viewBox="0 0 160 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Air / Exhaust trail when driving */}
            {isScrolling && (
              <g className="opacity-50">
                <circle cx="10" cy="40" r="1.5" fill="#C0C8C4" />
                <circle cx="5" cy="38" r="1.2" fill="#C0C8C4" />
                <circle cx="1" cy="37" r="0.8" fill="#C0C8C4" />
              </g>
            )}

            {/* Heavy-Duty Underbody Chassis Rails */}
            <rect x="18" y="44" width="124" height="4.5" rx="1.5" fill="#1C1C19" />
            <rect x="68" y="47" width="22" height="4" rx="1" fill="#3A3A3C" /> {/* Fuel Tank */}
            <rect x="94" y="47" width="10" height="3.5" rx="0.8" fill="#725B24" /> {/* Battery Box */}

            {/* Tandem Rear Wheel Fenders / Mudguards */}
            <path
              d="M32 46 C32 38 48 38 48 46 H49 C49 38 65 38 65 46"
              stroke="#1C1C19"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Front Wheel Mudguard */}
            <path
              d="M124 46 C124 38 140 38 140 46"
              stroke="#1C1C19"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Front Heavy Cab (Right side - Driving forward) */}
            {/* Cab Main Shell */}
            <path
              d="M110 20 H136 C139 20 142 22 143.5 25 L149 35 C150 37 150.5 39 150.5 41 V46 H110 V20 Z"
              fill="#0F2347"
              stroke="#725B24"
              strokeWidth="0.8"
            />

            {/* Aerodynamic Cab Sun Visor */}
            <path d="M133 18 L146 22 L145 24 L133 20 Z" fill="#D4AF37" />

            {/* Angled Windshield */}
            <path
              d="M134 22 L142.5 33 H127 V22 H134 Z"
              fill="#88C0D0"
              opacity="0.9"
            />

            {/* Driver Side Door Window */}
            <rect x="114" y="23" width="10" height="9" rx="1" fill="#88C0D0" opacity="0.85" />

            {/* Front Headlight Assembly with Golden Trim */}
            <rect x="148" y="41" width="3" height="4" rx="1" fill="#FFDF9B" />
            <circle cx="149.5" cy="43" r="1" fill="#FFFFFF" />

            {/* Headlight Amber Projection Cone onto Ground */}
            <polygon
              points="151,42 165,39 165,47 151,44"
              fill="url(#headlightBeam)"
              opacity="0.35"
            />

            {/* Cab Access Steps & Door Trim */}
            <line x1="120" y1="23" x2="120" y2="44" stroke="#725B24" strokeWidth="0.7" opacity="0.6" />
            <rect x="122" y="34" width="3" height="1" rx="0.5" fill="#FFDF9B" /> {/* Door handle */}
            <rect x="144" y="45" width="6" height="1.2" fill="#D4AF37" /> {/* Step 1 */}
            <rect x="144" y="47.5" width="6" height="1.2" fill="#D4AF37" /> {/* Step 2 */}

            {/* Side Mirror */}
            <rect x="141" y="25" width="2" height="6" rx="0.5" fill="#1C1C19" />
            <line x1="139" y1="27" x2="141" y2="27" stroke="#1C1C19" strokeWidth="0.8" />

            {/* Concrete Mixer Support Pedestals */}
            <polygon points="30,44 38,24 45,44" fill="#242426" stroke="#725B24" strokeWidth="0.6" />
            <polygon points="90,44 96,28 102,44" fill="#242426" stroke="#725B24" strokeWidth="0.6" />

            {/* Water Tank (Mounted behind cab for washdown) */}
            <rect x="104" y="30" width="6" height="13" rx="2" fill="#D4AF37" stroke="#725B24" strokeWidth="0.6" />
            <line x1="104" y1="36.5" x2="110" y2="36.5" stroke="#0F2347" strokeWidth="0.8" />

            {/* Concrete Mixer Drum Assembly (Rotating Tilted Barrel) */}
            <g
              className="origin-[65px_30px]"
              style={{
                transform: `rotate(${truckProgress * 1080}deg)`,
                transition: isScrolling ? "none" : "transform 0.2s ease-out",
              }}
            >
              {/* Main Pear-Shaped Concrete Mixer Drum */}
              <ellipse
                cx="65"
                cy="30"
                rx="32"
                ry="16"
                fill="url(#mixerDrumGrad)"
                stroke="#D4AF37"
                strokeWidth="1.2"
                transform="rotate(-15 65 30)"
              />

              {/* Central Welded Drive Ring */}
              <ellipse
                cx="65"
                cy="30"
                rx="32"
                ry="4"
                fill="none"
                stroke="#FFDF9B"
                strokeWidth="1"
                transform="rotate(-15 65 30)"
              />

              {/* High-Contrast Spiral Mixing Fins (Spinning inside/outside) */}
              <path
                d="M40 26 Q65 14 90 32"
                stroke="#FFDF9B"
                strokeWidth="1.8"
                strokeDasharray="4 2"
                fill="none"
                transform="rotate(-15 65 30)"
              />
              <path
                d="M38 34 Q65 46 88 28"
                stroke="#0F2347"
                strokeWidth="2"
                fill="none"
                transform="rotate(-15 65 30)"
              />
            </g>

            {/* Rear Discharge Hopper & Chute Assembly (Left side) */}
            {/* Collection Hopper */}
            <path d="M22 20 L30 26 V31 L18 25 Z" fill="#725B24" stroke="#FFDF9B" strokeWidth="0.6" />
            {/* Swivel Discharge Chute */}
            <path d="M19 28 L9 37 H14 L23 30 Z" fill="#1C1C19" stroke="#725B24" strokeWidth="0.6" />
            {/* Chute Support Arm */}
            <line x1="20" y1="36" x2="28" y2="44" stroke="#725B24" strokeWidth="1" />

            {/* Inspection Ladder on Side */}
            <line x1="98" y1="26" x2="98" y2="43" stroke="#D4AF37" strokeWidth="0.8" />
            <line x1="101" y1="26" x2="101" y2="43" stroke="#D4AF37" strokeWidth="0.8" />
            <line x1="98" y1="30" x2="101" y2="30" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="98" y1="34" x2="101" y2="34" stroke="#D4AF37" strokeWidth="0.6" />
            <line x1="98" y1="38" x2="101" y2="38" stroke="#D4AF37" strokeWidth="0.6" />

            {/* 3 Heavy-Duty Wheel Sets - Resting EXACTLY on Baseline y = 58 */}
            {/* Rear Tandem Wheel 1 (x = 40) */}
            <g
              className="origin-[40px_51px]"
              style={{
                transform: `rotate(${truckProgress * 2160}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="40" cy="51" r="7" fill="#151515" stroke="#2B2B2D" strokeWidth="1.2" />
              <circle cx="40" cy="51" r="4.2" fill="#C5A059" />
              <circle cx="40" cy="51" r="1.5" fill="#151515" />
              <circle cx="40" cy="48" r="0.6" fill="#FFFFFF" />
              <circle cx="43" cy="51" r="0.6" fill="#FFFFFF" />
              <circle cx="40" cy="54" r="0.6" fill="#FFFFFF" />
              <circle cx="37" cy="51" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Rear Tandem Wheel 2 (x = 57) */}
            <g
              className="origin-[57px_51px]"
              style={{
                transform: `rotate(${truckProgress * 2160}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="57" cy="51" r="7" fill="#151515" stroke="#2B2B2D" strokeWidth="1.2" />
              <circle cx="57" cy="51" r="4.2" fill="#C5A059" />
              <circle cx="57" cy="51" r="1.5" fill="#151515" />
              <circle cx="57" cy="48" r="0.6" fill="#FFFFFF" />
              <circle cx="60" cy="51" r="0.6" fill="#FFFFFF" />
              <circle cx="57" cy="54" r="0.6" fill="#FFFFFF" />
              <circle cx="54" cy="51" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Front Steer Wheel (x = 132) */}
            <g
              className="origin-[132px_51px]"
              style={{
                transform: `rotate(${truckProgress * 2160}deg)`,
                transition: isScrolling ? "none" : "transform 0.1s linear",
              }}
            >
              <circle cx="132" cy="51" r="7" fill="#151515" stroke="#2B2B2D" strokeWidth="1.2" />
              <circle cx="132" cy="51" r="4.2" fill="#C5A059" />
              <circle cx="132" cy="51" r="1.5" fill="#151515" />
              <circle cx="132" cy="48" r="0.6" fill="#FFFFFF" />
              <circle cx="135" cy="51" r="0.6" fill="#FFFFFF" />
              <circle cx="132" cy="54" r="0.6" fill="#FFFFFF" />
              <circle cx="129" cy="51" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="mixerDrumGrad" x1="35" y1="16" x2="95" y2="44" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#725B24" />
                <stop offset="28%" stopColor="#D4AF37" />
                <stop offset="65%" stopColor="#8F712E" />
                <stop offset="100%" stopColor="#0F2347" />
              </linearGradient>
              <linearGradient id="headlightBeam" x1="151" y1="43" x2="165" y2="43" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFE89E" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFE89E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* The Exact Dividing Line (acting as the road baseline, exactly matching the reference layout) */}
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#C0C8C4]/80 z-10"></div>
      </div>
    </div>
  );
}
