"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ConstructionRoadDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [truckProgress, setTruckProgress] = useState(0); // 0 (left beginning) to 1 (right end)
  const [speed, setSpeed] = useState(0); // KM/H - 0 when idle/stopped
  const [isSwiping, setIsSwiping] = useState(false);
  const lastScrollY = useRef(0);
  const swipeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Responsive viewport width detection
  const [viewportWidth, setViewportWidth] = useState(1024);
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isCompactMobile = viewportWidth < 380;
  const isMobile = viewportWidth < 640;
  const truckWidth = isCompactMobile ? 145 : isMobile ? 170 : 260; // px
  const startPadding = isMobile ? 4 : 16; // px from left edge

  // RAF-optimized scroll & swipe tracking for smooth 60/120fps performance
  const rafId = useRef<number | null>(null);
  const pendingProgress = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const computePosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const elementDocTop = rect.top + currentScrollY;

      let progress = 0;

      // Medium to slow speed calibration:
      // Calibrated to ~1300px on /contact and ~1400px on homepage
      // Each swipe advances the truck ~24–28px smoothly on mobile, taking ~8 deliberate swipes to travel across the road
      if (elementDocTop < winHeight) {
        // Standalone /contact page: medium-slow controlled pace
        const docScrollable = Math.max(300, document.documentElement.scrollHeight - winHeight);
        const maxScroll = Math.max(1300, docScrollable * 1.8);
        progress = maxScroll > 0 ? Math.max(0, Math.min(1, currentScrollY / maxScroll)) : 0;
      } else {
        // Homepage / sections where divider is below fold:
        // Starts strictly at left beginning (0) when entering viewport
        const scrollStart = elementDocTop - winHeight + 60;
        // Advances across road across a balanced ~1400px range for a smooth, steady medium-to-slow speed
        const scrollRange = Math.max(1400, winHeight * 1.6);
        progress = Math.max(0, Math.min(1, (currentScrollY - scrollStart) / scrollRange));
      }

      setTruckProgress(progress);

      // Measure swipe velocity & active state with medium-slow speed telemetry
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;

      if (delta > 0) {
        const dynamicSpeed = Math.min(22, Math.max(10, Math.round(10 + delta * 0.18)));
        setSpeed(dynamicSpeed);
        setIsSwiping(true);

        if (swipeTimeout.current) clearTimeout(swipeTimeout.current);
        swipeTimeout.current = setTimeout(() => {
          setIsSwiping(false);
          setSpeed(0);
        }, 160);
      }
    };

    window.addEventListener("scroll", computePosition, { passive: true });
    window.addEventListener("touchmove", computePosition, { passive: true });
    window.addEventListener("wheel", computePosition, { passive: true });

    computePosition();

    return () => {
      window.removeEventListener("scroll", computePosition);
      window.removeEventListener("touchmove", computePosition);
      window.removeEventListener("wheel", computePosition);
      if (swipeTimeout.current) clearTimeout(swipeTimeout.current);
    };
  }, []);

  // Total wheel rotations strictly synchronized with swiped distance
  const wheelRotation = truckProgress * 2880;

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden bg-[#F6F3EE] pt-5 sm:pt-7 select-none border-t border-[#E8DFCE]"
      aria-hidden="true"
    >
      {/* Dynamic Keyframe Styles for Realistic Organic Truck Animations */}
      <style>{`
        @keyframes truckEngineVibe {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-0.7px); }
        }
        @keyframes streetLightAura {
          0%, 100% { opacity: 0.88; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Top Header Strip: Speedometer & Fleet Telemetry */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-between text-neutral-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1">
        <div className="flex items-center gap-2 text-[#725B24]">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isSwiping ? "bg-[#128C7E] animate-ping" : "bg-[#725B24]"
            }`}
          ></span>
          <span className="font-semibold text-[#1C1C19]">
            {isSwiping ? `${speed} KM/H` : "PARKED &bull; 0 KM/H"}
          </span>
          <span className="hidden sm:inline text-neutral-400">
            {isSwiping ? "&bull; CONCRETE IN TRANSIT" : "&bull; MIXER CHURNING"}
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-neutral-400 shrink-0">
          <span className="hidden md:inline">FLEET NO. GH-MIXER-08</span>
          <span>ATELIER SITE DELIVERY</span>
        </div>
      </div>

      {/* Track Area with Street Lights & Concrete Mixer Truck Rolling Strictly on the Road */}
      <div className="w-full relative h-[88px] sm:h-[114px] md:h-[124px] overflow-hidden z-10">
        {/* 3 STREET LIGHTS ALONG THE ROADSIDE (Lights turned ON, casting luminous beams onto road) */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0">
          {[
            { left: "15%", id: "sl-1" },
            { left: "50%", id: "sl-2" },
            { left: "85%", id: "sl-3" },
          ].map((light) => (
            <div
              key={light.id}
              className="absolute bottom-0"
              style={{
                left: light.left,
                transform: isMobile ? "translateX(-20px)" : "translateX(-28px)",
                animation: "streetLightAura 4s ease-in-out infinite",
              }}
            >
              <svg
                viewBox="0 0 100 160"
                className="w-[56px] sm:w-[74px] md:w-[82px] h-[86px] sm:h-[112px] md:h-[122px] overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Volumetric light beam gradient shining down onto road */}
                  <linearGradient id={`beam-${light.id}`} x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.55" />
                    <stop offset="25%" stopColor="#FDE047" stopOpacity="0.28" />
                    <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Core bright beam gradient */}
                  <linearGradient id={`core-${light.id}`} x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                    <stop offset="30%" stopColor="#FEF08A" stopOpacity="0.35" />
                    <stop offset="75%" stopColor="#FDE047" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Lamp fixture bulb corona glow */}
                  <radialGradient id={`glow-${light.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="35%" stopColor="#FEF08A" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.0" />
                  </radialGradient>

                  {/* Ground road reflection */}
                  <radialGradient id={`road-glow-${light.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#78350F" stopOpacity="0.0" />
                  </radialGradient>
                </defs>

                {/* Volumetric Light Beam Cones (LIGHTS ON) */}
                <polygon
                  points="68,26 12,160 105,160"
                  fill={`url(#beam-${light.id})`}
                  className="opacity-75"
                />
                <polygon
                  points="68,26 34,160 88,160"
                  fill={`url(#core-${light.id})`}
                  className="opacity-90"
                />
                <ellipse
                  cx="62"
                  cy="158"
                  rx="44"
                  ry="6"
                  fill={`url(#road-glow-${light.id})`}
                />

                {/* Pole Foundation Anchor */}
                <rect x="23" y="152" width="10" height="8" rx="1" fill="#3F3F46" />
                <rect x="24" y="150" width="8" height="3" rx="0.8" fill="#52525B" />

                {/* Main Steel Mast / Vertical Post */}
                <line x1="28" y1="150" x2="28" y2="46" stroke="#27272A" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="27.5" y1="150" x2="27.5" y2="46" stroke="#52525B" strokeWidth="1.2" />

                {/* Arched Neck Arm Curving Over the Road */}
                <path
                  d="M 28 48 C 28 20, 48 18, 68 23"
                  fill="none"
                  stroke="#27272A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 28 48 C 28 21, 48 19, 68 23"
                  fill="none"
                  stroke="#71717A"
                  strokeWidth="1"
                />

                {/* Luminaire Head Fixture (Modern Architectural Street Lamp) */}
                <path
                  d="M 62 21 L 76 24 L 75 27 L 60 25 Z"
                  fill="#18181B"
                  stroke="#27272A"
                  strokeWidth="0.8"
                />

                {/* Light Source (Turned ON: Glowing Lamp & Halo) */}
                <circle cx="68" cy="26" r="12" fill={`url(#glow-${light.id})`} className="opacity-80" />
                <ellipse cx="68" cy="26" rx="4.5" ry="2" fill="#FFFBEB" />
                <circle cx="68" cy="26" r="2" fill="#FFFFFF" />
              </svg>
            </div>
          ))}
        </div>

        {/* Moving Concrete Mixer Truck Assembly
            STRICT LEFT BEGINNING: starts at startPadding (4px mobile, 16px desktop) and only moves while swiping */}
        <div
          className="absolute bottom-0 will-change-transform flex items-end z-10"
          style={{
            left: `calc(${startPadding}px + ${truckProgress} * (100% - ${truckWidth + startPadding * 2}px))`,
            // Exact offset so tire contact patch (y = 314 out of 340) rests flush on the road top curb line
            transform: "translate3d(0, 7.65%, 0)",
            transition: isSwiping ? "none" : "left 0.2s ease-out",
          }}
        >
          {/* Truck Container with Engine Rumble & Always-Rotating Drum */}
          <div
            className="relative aspect-[734/340] select-none"
            style={{
              width: `${truckWidth}px`,
              animation: isSwiping ? "truckEngineVibe 0.12s ease-in-out infinite" : "none",
            }}
          >
            {/* TRUCK BODY & ROTATING WHEELS (Flipped with scale-x-[-1] so cab drives forward facing right) */}
            <div className="absolute inset-0 scale-x-[-1]">
              {/* 4 ROTATING WHEELS (Positioned at exact hub centers) */}
              {/* Wheel 1 (Front Steer Axle) */}
              <div
                className="absolute pointer-events-none z-0"
                style={{
                  left: `${(187.5 / 734) * 100}%`,
                  top: `${(279.4 / 340) * 100}%`,
                  width: `${(68 / 734) * 100}%`,
                  height: `${(68 / 340) * 100}%`,
                  transform: `translate(-50%, -50%) rotate(${-wheelRotation}deg)`,
                  transition: isSwiping ? "none" : "transform 0.2s ease-out",
                }}
              >
                <img
                  src="/truck-wheel.png"
                  alt=""
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              {/* Wheel 2 (Second Steer Axle) */}
              <div
                className="absolute pointer-events-none z-0"
                style={{
                  left: `${(301.6 / 734) * 100}%`,
                  top: `${(280.6 / 340) * 100}%`,
                  width: `${(68 / 734) * 100}%`,
                  height: `${(68 / 340) * 100}%`,
                  transform: `translate(-50%, -50%) rotate(${-wheelRotation}deg)`,
                  transition: isSwiping ? "none" : "transform 0.2s ease-out",
                }}
              >
                <img
                  src="/truck-wheel.png"
                  alt=""
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              {/* Wheel 3 (First Drive Axle) */}
              <div
                className="absolute pointer-events-none z-0"
                style={{
                  left: `${(466.0 / 734) * 100}%`,
                  top: `${(280.8 / 340) * 100}%`,
                  width: `${(68 / 734) * 100}%`,
                  height: `${(68 / 340) * 100}%`,
                  transform: `translate(-50%, -50%) rotate(${-wheelRotation}deg)`,
                  transition: isSwiping ? "none" : "transform 0.2s ease-out",
                }}
              >
                <img
                  src="/truck-wheel.png"
                  alt=""
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              {/* Wheel 4 (Second Drive Axle) */}
              <div
                className="absolute pointer-events-none z-0"
                style={{
                  left: `${(555.4 / 734) * 100}%`,
                  top: `${(281.2 / 340) * 100}%`,
                  width: `${(68 / 734) * 100}%`,
                  height: `${(68 / 340) * 100}%`,
                  transform: `translate(-50%, -50%) rotate(${-wheelRotation}deg)`,
                  transition: isSwiping ? "none" : "transform 0.2s ease-out",
                }}
              >
                <img
                  src="/truck-wheel.png"
                  alt=""
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              {/* CONCRETE MIXER DRUM (3D ROTATING WEB-P - ROTATES ALWAYS CONTINUOUSLY) */}
              <img
                src="/concrete-mixer-drum-rotating-v3.webp?v=3"
                alt="Rotating Concrete Mixer Drum"
                className="absolute pointer-events-none"
                style={{
                  left: `${(268 / 734) * 100}%`,
                  top: `${(65 / 340) * 100}%`,
                  width: `${(297 / 734) * 100}%`,
                  height: `${(173 / 340) * 100}%`,
                  objectFit: "contain",
                  zIndex: 2,
                }}
                loading="eager"
              />

              {/* TRUCK BODY (Foreground layer with wheel & drum cutouts, chassis cradle, and cab) */}
              <img
                src="/concrete-mixer-truck-body.png?v=3"
                alt="Ganga Homes Concrete Mixer Truck"
                className="w-full h-full object-contain relative pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]"
                style={{ zIndex: 4 }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ROAD SECTION (Strict contact baseline: the tires roll directly on top of this curb line) */}
      <div className="w-full relative bg-[#18181A] border-t-2 border-[#3F3F46] pt-1 pb-2 shadow-inner z-20">
        {/* Crisp Top Road Curb / Surface Contact Line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-[#52525B]/70"></div>

        {/* Ambient street light ground reflections across the asphalt road (3 Street Lights) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["15%", "50%", "85%"].map((pos, i) => (
            <div
              key={i}
              className="absolute top-0 w-28 sm:w-44 h-full bg-gradient-to-r from-transparent via-[#FEF08A]/18 to-transparent blur-[3px]"
              style={{ left: pos, transform: isMobile ? "translateX(-16px)" : "translateX(-24px)" }}
            />
          ))}
        </div>

        {/* Highway Asphalt Road Surface with Dashed Center Markings */}
        <div className="w-full h-3.5 sm:h-4 flex items-center relative overflow-hidden">
          {/* Animated Dashed Lane Markings creating highway motion illusion */}
          <div
            className="w-[200%] absolute inset-y-0 flex items-center gap-6 sm:gap-8 opacity-75"
            style={{
              transform: `translateX(-${(truckProgress * 400) % 56}px)`,
            }}
          >
            {Array.from({ length: 48 }).map((_, i) => (
              <span
                key={i}
                className="inline-block h-[2px] sm:h-[2.5px] w-8 sm:w-12 bg-white/70 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.4)] shrink-0"
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


