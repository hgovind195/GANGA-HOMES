"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, Mail, Phone, MapPin, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#181818] text-[#f2f0ed] pt-14 pb-10 border-t border-[#d4af37]/20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/w1tsvtbe/image/upload/f_webp,q_auto,w_200,c_limit/v1790008909/WhatsApp_Image_2026-09-06_at_1.22.50_PM_dqtlyg.jpg"
                alt="Ganga Homes Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/50 bg-[#151515]"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg text-white tracking-tight">
                  Ganga Homes
                </span>
                <span className="font-label-sm text-[10px] uppercase text-[#E2C381] tracking-[0.2em]">
                  &amp; Developers
                </span>
              </div>
            </div>
            <p className="font-sans font-medium text-base sm:text-lg leading-snug text-[#FFDF9B] tracking-wide mt-2">
              Building Dreams. Creating Legacies.
            </p>
            <p className="font-body-sm text-sm text-[#C0C8C4] max-w-sm leading-relaxed mt-1">
              Curators of monumental residential landmarks and serene boutique estates designed with architectural precision and timeless permanence.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-lg text-xs uppercase tracking-widest text-[#FFDF9B] mb-1">
              Developments
            </span>
            <Link href="/projects" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              All Projects
            </Link>
            <Link href="/projects#ongoing" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Ongoing Developments
            </Link>
            <Link href="/projects#ready" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Ready to Move
            </Link>
            <Link href="/projects#land" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Land Parcels
            </Link>
            <Link href="/services" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Bespoke Clubhouses
            </Link>
          </div>

          {/* Quick Links 2 */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-lg text-xs uppercase tracking-widest text-[#FFDF9B] mb-1">
              The Maison
            </span>
            <Link href="/about" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              About Ganga Homes
            </Link>
            <Link href="/about#leadership" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Leadership &amp; Vision
            </Link>
            <Link href="/services" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Services &amp; Capabilities
            </Link>
            <Link href="/contact" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Press &amp; Recognition
            </Link>
            <Link href="/contact" className="font-body-sm text-sm text-[#C8C6C5] hover:text-white transition-colors">
              Private Concierge
            </Link>
          </div>

          {/* Atelier Contact & Dispatch Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-label-lg text-xs uppercase tracking-widest text-[#FFDF9B]">
              Private Enquiries &amp; Atelier
            </span>
            <div className="flex flex-col gap-1 font-body-sm text-sm text-[#C8C6C5]">
              <span>Pallipurathuserry, Vaikom</span>
              <span>Kottayam - 686606, Kerala</span>
              <span className="mt-2 text-white">Direct: <a href="tel:+919961832347" className="hover:text-[#FFDF9B] transition-colors">+91 99618 32347</a></span>
              <span className="text-white">Office: <a href="tel:+917012926113" className="hover:text-[#FFDF9B] transition-colors">+91 70129 26113</a></span>
              <span className="text-white">WhatsApp: <a href="https://wa.me/919961832347" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline transition-colors">+91 99618 32347</a></span>
              <span>Private Showing: <a href="mailto:gangahomesanddevelopers@gmail.com" className="hover:text-[#FFDF9B] transition-colors">gangahomesanddevelopers@gmail.com</a></span>
            </div>

            <div className="mt-1 flex flex-col gap-2">
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#E5E2DD]">
                Join Private Dispatch
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your correspondence email"
                  required
                  className="flex-1 bg-[#2A2A2B] text-white font-body-sm text-xs px-3 py-2 rounded-none border-b border-[#717975] focus:outline-none focus:border-[#FFDF9B] transition-colors placeholder:text-neutral-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2 bg-[#725B24] text-white font-label-sm text-xs uppercase tracking-wider hover:bg-[#FFDF9B] hover:text-[#1c1c19] transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <span className="text-xs text-emerald-400">
                  Thank you for subscribing to Ganga Homes Private Dispatch.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-xs text-[#717975]">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/" aria-label="Headquarters" className="p-1.5 hover:text-[#FFDF9B] transition-colors">
              <Building2 className="w-5 h-5" />
            </Link>
            <a href="mailto:gangahomesanddevelopers@gmail.com" aria-label="Official Mail" className="p-1.5 hover:text-[#FFDF9B] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+919961832347" aria-label="Direct Call" className="p-1.5 hover:text-[#FFDF9B] transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919961832347" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Concierge" className="p-1.5 hover:text-[#25D366] transition-colors">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </a>
            <Link href="/contact" aria-label="Gallery Map Location" className="p-1.5 hover:text-[#FFDF9B] transition-colors">
              <MapPin className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-label-sm text-[10px] uppercase tracking-widest text-neutral-400">
            <Link href="#" className="hover:text-[#C8C6C5] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#C8C6C5] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#C8C6C5] transition-colors">Legal Disclaimer</Link>
            <Link href="#" className="hover:text-[#C8C6C5] transition-colors">Cookie Protocol</Link>
          </div>

          <div className="text-neutral-400 text-center md:text-right">
            © {new Date().getFullYear()} Ganga Homes and Developers. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
