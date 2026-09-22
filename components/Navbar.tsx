"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Verified, Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    opacity: 0,
  });

  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Only track scroll position for navbar style & progress bar - NOT for section selection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max((currentScrollY / docHeight) * 100, 0), 100) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  // Sync selected index with current route pathname
  useEffect(() => {
    const pathIdx = navLinks.findIndex((l) => l.href === pathname);
    if (pathIdx !== -1) {
      setSelectedIndex(pathIdx);
    } else if (pathname === "/") {
      setSelectedIndex(0);
    }
  }, [pathname, navLinks]);

  // Update floating glass pill position ONLY when selectedIndex changes or on window resize
  useEffect(() => {
    const updatePill = () => {
      const targetEl = linkRefs.current[selectedIndex];
      if (targetEl && navRef.current) {
        setPillStyle({
          left: targetEl.offsetLeft,
          width: targetEl.offsetWidth,
          top: targetEl.offsetTop,
          height: targetEl.offsetHeight,
          opacity: 1,
        });
      }
    };

    updatePill();
    const timer = setTimeout(updatePill, 60);
    window.addEventListener("resize", updatePill);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updatePill);
    };
  }, [selectedIndex]);

  const isScrolled = scrollY > 70;

  return (
    <>
      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm pointer-events-auto z-40 lg:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 inset-x-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-500 ease-out ${
          isScrolled ? "pt-2 sm:pt-3 px-3 sm:px-4" : "pt-3 sm:pt-4 md:pt-5 px-3 sm:px-6"
        }`}
        id="floatingNavContainer"
      >
        <div
          className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-out backdrop-blur-2xl w-full rounded-2xl md:rounded-full border border-[#d4af37]/35 px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled
              ? "max-w-[94%] lg:max-w-5xl bg-[#0f1112]/92 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.18)] border-[#d4af37]/60"
              : "max-w-[96%] lg:max-w-7xl bg-[#111315]/85 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.65),0_0_20px_rgba(212,175,55,0.08)]"
          }`}
          id="navCapsule"
        >
          {/* Real-time scroll indicator laser line at bottom edge of capsule */}
          <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent rounded-full overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#d4af37]/60 via-[#ffdf9b] to-[#d4af37] shadow-[0_0_8px_#d4af37] transition-[width] duration-150 ease-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Architectural Brand Mark */}
          <Link
            href="/"
            onClick={() => {
              setSelectedIndex(0);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 sm:gap-3 group text-left relative z-10 py-1"
            id="navBrand"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-br from-[#d4af37] via-[#ffdf9b]/80 to-[#725b24] shadow-md group-hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-300">
              <img
                src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto,w_200,c_limit/v1790008909/WhatsApp_Image_2026-09-06_at_1.22.50_PM_dqtlyg.jpg"
                alt="Ganga Homes Logo"
                className="w-full h-full rounded-full object-cover bg-[#151515]"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-[17px] sm:text-[20px] text-[#FCF9F4] tracking-tight leading-tight group-hover:text-[#FFDF9B] transition-colors font-medium">
                  Ganga Homes
                </span>
              </div>
              <span className="font-label-sm text-[9px] sm:text-[10px] uppercase text-[#d4af37] tracking-[0.24em] -mt-0.5 font-semibold">
                and Developers
              </span>
            </div>
          </Link>

          {/* Adaptive Floating Navigation Menu with Floating Glass Effect - strictly runs on selection */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md relative z-10"
          >
            {/* Floating Glass Pill Indicator */}
            <div
              className="absolute rounded-full pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-xl border border-[#d4af37]/60 shadow-[0_0_18px_rgba(212,175,55,0.28),inset_0_1px_1px_rgba(255,255,255,0.35)] bg-gradient-to-r from-[#d4af37]/25 via-[#ffdf9b]/20 to-[#725b24]/30 z-0"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                top: `${pillStyle.top}px`,
                height: `${pillStyle.height}px`,
                opacity: pillStyle.opacity,
              }}
            >
              {/* Specular sheen highlight on glass pill */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/25 pointer-events-none"></div>
            </div>

            {navLinks.map((link, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <Link
                  key={link.name}
                  ref={(el) => {
                    linkRefs.current[idx] = el;
                  }}
                  href={link.href}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative px-4 py-1.5 rounded-full text-[12px] font-label-lg font-semibold uppercase tracking-wider transition-colors duration-300 z-10 select-none ${
                    isSelected ? "text-white font-bold" : "text-[#E5E2DD] hover:text-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]"></span>
                    )}
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Magnetic Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 relative z-10">
            <Link
              href="/contact"
              className="hidden sm:inline-flex relative overflow-hidden items-center justify-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#725b24] via-[#92742e] to-[#725b24] text-white font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(114,91,36,0.5)] border border-[#ffdf9b]/40 pulse-gold"
            >
              <span className="absolute top-0 left-0 w-8 h-full bg-white/30 transform -skew-x-12 animate-gold-shine pointer-events-none"></span>
              <span className="font-semibold tracking-[0.16em]">Book Visit</span>
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ffdf9b]" />
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] text-[#FFDF9B] hover:text-white transition-all duration-200 flex items-center justify-center focus:outline-none cursor-pointer active:scale-95"
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer Menu with Explicit pointer-events-auto */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden w-full max-w-[96%] sm:max-w-md mx-auto mt-2 transition-all duration-300 animate-fadeIn z-50">
            <div className="rounded-2xl bg-[#111113]/98 backdrop-blur-2xl border border-[#d4af37]/45 shadow-[0_20px_60px_rgba(0,0,0,0.95)] p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
                <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                  Navigation Portfolio
                </span>
                <span className="text-xs text-neutral-400 font-body-sm">
                  Explore Ganga Homes &amp; Developers
                </span>
              </div>

              <nav className="flex flex-col gap-1.5 py-1">
                {navLinks.map((link, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setMobileMenuOpen(false);
                      }}
                      className={`pointer-events-auto cursor-pointer flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                        isSelected
                          ? "bg-[#725b24]/40 text-white border border-[#d4af37]/50 shadow-inner"
                          : "text-neutral-300 hover:text-white hover:bg-white/10 active:bg-white/15"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>}
                        <span>{link.name}</span>
                      </span>
                      <span className="font-mono text-[11px] text-neutral-500">0{idx + 1}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/919961832347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#128C7E] hover:bg-[#075E54] active:scale-98 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#725b24] to-[#92742e] active:scale-98 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#ffdf9b]" />
                  <span>Book Atelier Visit</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

