"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import ConstructionRoadDivider from "@/components/ConstructionRoadDivider";

interface ContactFormProps {
  showMap?: boolean;
}

export default function ContactForm({ showMap = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential Villa",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare formatted enquiry message for WhatsApp
    const details = [
      "*New Project Enquiry - Ganga Homes & Developers*",
      formData.name ? `• *Client Name:* ${formData.name}` : null,
      formData.phone ? `• *Mobile Number:* ${formData.phone}` : null,
      formData.email ? `• *Email:* ${formData.email}` : null,
      formData.projectType ? `• *Interest:* ${formData.projectType}` : null,
      formData.message ? `• *Enquiry Briefing:* ${formData.message}` : null,
    ].filter(Boolean);

    const messageText = details.join("\n");
    const whatsappUrl = `https://wa.me/919961832347?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp directly with the enquiry
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Residential Villa",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleWhatsAppSend = (e: React.MouseEvent) => {
    e.preventDefault();
    const details = [
      "*Project Enquiry - Ganga Homes & Developers*",
      formData.name ? `• *Client Name:* ${formData.name}` : null,
      formData.phone ? `• *Mobile Number:* ${formData.phone}` : null,
      formData.email ? `• *Email:* ${formData.email}` : null,
      formData.projectType ? `• *Interest:* ${formData.projectType}` : null,
      formData.message ? `• *Enquiry Briefing:* ${formData.message}` : null,
    ].filter(Boolean);

    const messageText =
      details.length > 1
        ? details.join("\n")
        : "Hello Ganga Homes, I would like to inquire about your architectural and construction services.";

    const whatsappUrl = `https://wa.me/919961832347?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full relative">
      {/* Animated Concrete Mixer Road Divider */}
      <ConstructionRoadDivider />

      <section className="w-full py-14 sm:py-20 px-4 sm:px-8 md:px-16 bg-[#F6F3EE] relative scroll-mt-24" id="consultation">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2 text-[#725B24] font-label-sm uppercase tracking-[0.25em] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
            <span>Connect With Ganga Homes</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#111113] font-bold tracking-tight max-w-2xl">
            Start Your Journey With Us
          </h2>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-[#404945] font-normal max-w-2xl leading-relaxed">
            Whether you are envisioning a bespoke private residence or wish to discuss an architectural commission, our leadership and project team are at your service.
          </p>
        </div>

        {/* Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl shadow-lg border border-[#E8DFCE]">
            {submitted ? (
              <div className="p-6 sm:p-8 rounded-xl bg-[#0f2347]/10 border border-[#0f2347]/30 flex flex-col items-center text-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-[#0f2347]" />
                <h3 className="font-headline-sm text-xl text-[#0f2347] font-bold">
                  Enquiry Transmitted to WhatsApp
                </h3>
                <p className="font-body-md text-sm text-[#404945] max-w-md">
                  Your enquiry briefing has been formatted and directed to our official WhatsApp concierge. If WhatsApp did not open automatically, tap below to chat:
                </p>
                <a
                  href="https://wa.me/919961832347?text=Hello%20Ganga%20Homes,%20I%20have%20submitted%20an%20enquiry%20via%20your%20website%20and%20would%20like%20to%20follow%20up."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-2 border-b border-[#F0EDE9]">
                  <h3 className="font-headline-sm text-xl text-[#1C1C19] font-bold">
                    Private Enquiry Form
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#128C7E] font-medium font-body-sm bg-[#128C7E]/10 px-2.5 py-1 rounded-full">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Connected</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-[#725B24] font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Kumar"
                      className="px-4 py-2.5 rounded-lg bg-[#FCF9F4] border border-[#E2D9C8] font-body-sm text-sm text-[#1C1C19] focus:outline-none focus:border-[#725B24] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-[#725B24] font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="px-4 py-2.5 rounded-lg bg-[#FCF9F4] border border-[#E2D9C8] font-body-sm text-sm text-[#1C1C19] focus:outline-none focus:border-[#725B24] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-[#725B24] font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@example.com"
                      className="px-4 py-2.5 rounded-lg bg-[#FCF9F4] border border-[#E2D9C8] font-body-sm text-sm text-[#1C1C19] focus:outline-none focus:border-[#725B24] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-[#725B24] font-bold">
                      Interest Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="px-4 py-2.5 rounded-lg bg-[#FCF9F4] border border-[#E2D9C8] font-body-sm text-sm text-[#1C1C19] focus:outline-none focus:border-[#725B24] transition-colors"
                    >
                      <option value="Residential Villa">Bespoke Heritage Villa</option>
                      <option value="Boutique Apartments">Luxury Apartment Suite</option>
                      <option value="Commercial Enclave">Commercial Address</option>
                      <option value="Land Parcel">Strategic Land Parcel</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-[11px] uppercase tracking-wider text-[#725B24] font-bold">
                    Project Briefing / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your timeline, preferred location, or space requirements..."
                    className="px-4 py-2.5 rounded-lg bg-[#FCF9F4] border border-[#E2D9C8] font-body-sm text-sm text-[#1C1C19] focus:outline-none focus:border-[#725B24] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white font-label-lg text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 border border-[#25D366]/40 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Submit Form via WhatsApp</span>
                    <Send className="w-3.5 h-3.5 ml-1 opacity-90" />
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-xs text-[#725B24] font-body-sm">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                      <span>Direct WhatsApp Dispatch</span>
                    </span>
                    <a
                      href="https://wa.me/919961832347?text=Hello%20Ganga%20Homes,%20I%20would%20like%20to%20make%20a%20direct%20project%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline font-semibold text-[#128C7E] hover:text-[#0f2347] transition-colors"
                    >
                      <span>Direct Chat Without Form</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Direct Atelier Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111113] text-white border border-[#d4af37]/40 shadow-xl flex flex-col gap-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#FFDF9B] font-semibold">
                Headquarters Atelier
              </span>
              <div className="flex items-start gap-3 text-sm text-neutral-300 font-body-sm">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">Ganga Homes &amp; Developers</span>
                  <span>Pallipurathuserry, Vaikom</span>
                  <span>Kottayam - 686141, Kerala</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300 font-body-sm pt-3 border-t border-white/10">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-400 font-label-sm uppercase">WhatsApp Direct</span>
                  <a
                    href="https://wa.me/919961832347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] font-medium transition-colors"
                  >
                    +91 99618 32347
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300 font-body-sm pt-3 border-t border-white/10">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-400 font-label-sm uppercase">Direct Phone</span>
                  <a href="tel:+919961832347" className="text-white hover:text-[#FFDF9B] font-medium">
                    +91 99618 32347
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300 font-body-sm pt-3 border-t border-white/10">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-400 font-label-sm uppercase">Private Concierge</span>
                  <a href="mailto:gangahomesanddevelopers@gmail.com" className="text-white hover:text-[#FFDF9B] font-medium text-xs break-all">
                    gangahomesanddevelopers@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Micro Guarantees */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFCE] flex flex-col gap-3 font-label-sm text-xs uppercase tracking-wider text-[#1C1C19]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                Direct Atelier Leadership Access
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                100% Confidential Briefings
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#725B24]"></span>
                Kerala &amp; Global Resident Support
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Atelier Location Map - Rendered on Contact section */}
        {showMap && (
          <div className="mt-12 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#E8DFCE]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#725B24]"></span>
                <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-[#725B24] font-bold">
                  Atelier Location &amp; Directions
                </span>
              </div>
              <span className="font-body-sm text-xs text-[#404945]">
                Pallipurathuserry, Vaikom, Kottayam &bull; Kerala 686141
              </span>
            </div>

            <div className="w-full h-[300px] sm:h-[420px] md:h-[450px] rounded-2xl overflow-hidden border border-[#E8DFCE] shadow-lg bg-neutral-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.86300252721!2d76.40206303582312!3d9.743509157787088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0879ee8d365d01%3A0xcd4dd2a9147620b1!2sPalliprathussery%2C%20Vaikom!5e0!3m2!1sen!2sin!4v1790094677708!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ganga Homes Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
      </section>
    </div>
  );
}
