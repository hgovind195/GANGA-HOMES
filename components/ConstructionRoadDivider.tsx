"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ConstructionRoadDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [truckX, setTruckX] = useState(0); // percentage (0 to 100)
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isDriving, setIsDriving] = useState(false);
  const lastScrollY = useRef(0);
  const driveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;

      // Start when 150px before entering viewport, finish when scrolled 150px past
      const start = winHeight + 100;
      const end = -100;
      const current = start - rect.top;
      const total = start - end;

      const rawProgress = Math.max(0, Math.min(1, current / total));
      setTruckX(rawProgress * 100);

      // Detect active scrolling speed for wheel spin & drum rotation
      const delta = Math.abs(window.scrollY - lastScrollY.current);
      lastScrollY.current = window.scrollY;
      setScrollSpeed(Math.min(delta * 2, 40));
      setIsDriving(true);

      if (driveTimeout.current) clearTimeout(driveTimeout.current);
      driveTimeout.current = setTimeout(() => {
        setIsDriving(false);
        setScrollSpeed(0);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (driveTimeout.current) clearTimeout(driveTimeout.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Road Bed: Sleek Architectural Highway Strip */}
      <div className="w-full relative flex flex-col justify-center">
        {/* Top Asphalt Curb with Golden Guideline */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#C0C8C4]/20 via-[#725B24]/40 to-[#C0C8C4]/20"></div>

        {/* Road Surface */}
        <div className="w-full h-8 sm:h-9 bg-[#232326] relative flex items-center overflow-hidden shadow-inner">
          {/* Subtle Road Texture Noise & Shoulder Lines */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/10"></div>

          {/* Center Dashed Lane Markings */}
          <div
            className="w-full h-[2px] opacity-70"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #FFDF9B 0, #FFDF9B 16px, transparent 16px, transparent 32px)",
            }}
          ></div>

          {/* Road Milestones / Subtle Technical Markers */}
          <div className="absolute left-6 sm:left-12 flex items-center gap-2 pointer-events-none opacity-40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFDF9B]"></span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-[#FFDF9B]">
              SITE PASSAGE &bull; 0.4 KM
            </span>
          </div>

          <div className="absolute right-6 sm:right-12 hidden md:flex items-center gap-2 pointer-events-none opacity-40">
            <span className="font-mono text-[8px] uppercase tracking-widest text-[#FFDF9B]">
              GANGA HOMES &bull; TRANSIT ATELIER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFDF9B]"></span>
          </div>

          {/* Moving Concrete Mixer Truck */}
          <div
            className="absolute top-1/2 -translate-y-1/2 will-change-transform transition-transform duration-100 ease-out flex items-center"
            style={{
              left: `calc(${truckX}% - 40px)`,
            }}
          >
            {/* Cement Mixer Truck SVG - Facing Right */}
            <svg
              className="w-16 h-8 sm:w-20 sm:h-9 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
              viewBox="0 0 100 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Exhaust Smoke Particles when Driving */}
              {isDriving && (
                <g className="animate-ping opacity-60">
                  <circle cx="10" cy="18" r="1.5" fill="#E8DFCE" />
                  <circle cx="6" cy="15" r="1" fill="#E8DFCE" />
                </g>
              )}

              {/* Truck Chassis Base Frame */}
              <rect x="14" y="27" width="70" height="4.5" rx="1.5" fill="#1C1C19" />
              <rect x="22" y="30" width="18" height="2" fill="#725B24" />

              {/* Front Cabin (Right side - driving forward to right) */}
              {/* Cabin Hood & Windshield */}
              <path
                d="M62 13 H75 C77.5 13 79.5 14.8 80.5 17 L85 24 C85.8 25.2 86.2 26.5 86.2 28 V31 H62 V13 Z"
                fill="#0F2347"
                stroke="#FFDF9B"
                strokeWidth="0.8"
              />

              {/* Windshield Glass */}
              <path
                d="M74 15.5 L79.5 22.5 H69 V15.5 H74 Z"
                fill="#7EC8E3"
                opacity="0.9"
              />

              {/* Side Window */}
              <rect x="64" y="16" width="4" height="6.5" rx="0.8" fill="#7EC8E3" opacity="0.8" />

              {/* Front Bumper & Headlight */}
              <rect x="85" y="27.5" width="2.5" height="3.5" rx="1" fill="#FFDF9B" />
              {/* Headlight Beam Effect */}
              <polygon
                points="87.5,28 99,25 99,33 87.5,30.5"
                fill="url(#headlightGlow)"
                opacity="0.45"
              />

              {/* Cabin Door Trim */}
              <line x1="68.5" y1="16" x2="68.5" y2="30" stroke="#FFDF9B" strokeWidth="0.6" opacity="0.5" />

              {/* Mixer Barrel / Drum Support Tower */}
              <polygon points="26,27 31,14 36,27" fill="#2A2A2B" stroke="#725B24" strokeWidth="0.6" />
              <polygon points="54,27 58,16 62,27" fill="#2A2A2B" />

              {/* Concrete Mixer Barrel (Tilted Drum) */}
              <g
                className="origin-[38px_20px]"
                style={{
                  transform: `rotate(${truckX * 8 + scrollSpeed * 2}deg)`,
                  transition: "transform 0.1s linear",
                }}
              >
                {/* Main Barrel Body */}
                <ellipse
                  cx="38"
                  cy="20"
                  rx="18"
                  ry="10.5"
                  fill="url(#drumGradient)"
                  stroke="#FFDF9B"
                  strokeWidth="0.9"
                  transform="rotate(-15 38 20)"
                />

                {/* Spiral Mixing Blade Stripes on Drum */}
                <path
                  d="M26 18 Q38 12 50 21"
                  stroke="#FFDF9B"
                  strokeWidth="1.2"
                  strokeDasharray="2 1.5"
                  fill="none"
                  transform="rotate(-15 38 20)"
                />
                <path
                  d="M24 23 Q38 29 48 17"
                  stroke="#1C1C19"
                  strokeWidth="1.2"
                  fill="none"
                  transform="rotate(-15 38 20)"
                />

                {/* Central Drum Ring */}
                <ellipse
                  cx="38"
                  cy="20"
                  rx="18"
                  ry="3.5"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.7"
                  transform="rotate(-15 38 20)"
                />
              </g>

              {/* Rear Concrete Discharge Funnel & Chute (Left side) */}
              <path d="M16 16 L22 21 V24 L14 20 Z" fill="#725B24" stroke="#FFDF9B" strokeWidth="0.5" />
              <path d="M14 20 L9 25 H12 L16 21 Z" fill="#2A2A2B" />

              {/* Wheels - Front & Tandem Rear with Rotating Rims */}
              {/* Rear Wheel 1 */}
              <g
                className="origin-[24px_33px]"
                style={{
                  transform: `rotate(${truckX * 18 + scrollSpeed * 5}deg)`,
                  transition: "transform 0.05s linear",
                }}
              >
                <circle cx="24" cy="33" r="5" fill="#151515" stroke="#3A3A3C" strokeWidth="1" />
                <circle cx="24" cy="33" r="2.2" fill="#D4AF37" />
                <line x1="24" y1="29" x2="24" y2="37" stroke="#151515" strokeWidth="0.8" />
                <line x1="20" y1="33" x2="28" y2="33" stroke="#151515" strokeWidth="0.8" />
              </g>

              {/* Rear Wheel 2 */}
              <g
                className="origin-[36px_33px]"
                style={{
                  transform: `rotate(${truckX * 18 + scrollSpeed * 5}deg)`,
                  transition: "transform 0.05s linear",
                }}
              >
                <circle cx="36" cy="33" r="5" fill="#151515" stroke="#3A3A3C" strokeWidth="1" />
                <circle cx="36" cy="33" r="2.2" fill="#D4AF37" />
                <line x1="36" y1="29" x2="36" y2="37" stroke="#151515" strokeWidth="0.8" />
                <line x1="32" y1="33" x2="40" y2="33" stroke="#151515" strokeWidth="0.8" />
              </g>

              {/* Front Steer Wheel */}
              <g
                className="origin-[75px_33px]"
                style={{
                  transform: `rotate(${truckX * 18 + scrollSpeed * 5}deg)`,
                  transition: "transform 0.05s linear",
                }}
              >
                <circle cx="75" cy="33" r="5" fill="#151515" stroke="#3A3A3C" strokeWidth="1" />
                <circle cx="75" cy="33" r="2.2" fill="#D4AF37" />
                <line x1="75" y1="29" x2="75" y2="37" stroke="#151515" strokeWidth="0.8" />
                <line x1="71" y1="33" x2="79" y2="33" stroke="#151515" strokeWidth="0.8" />
              </g>

              {/* SVG Gradients */}
              <defs>
                <linearGradient id="drumGradient" x1="20" y1="12" x2="56" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#725B24" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="70%" stopColor="#8C6E2D" />
                  <stop offset="100%" stopColor="#0F2347" />
                </linearGradient>
                <linearGradient id="headlightGlow" x1="87.5" y1="29" x2="99" y2="29" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFE89E" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFE89E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Bottom Road Curb */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#C0C8C4]/20 via-[#725B24]/40 to-[#C0C8C4]/20"></div>
      </div>
    </div>
  );
}
