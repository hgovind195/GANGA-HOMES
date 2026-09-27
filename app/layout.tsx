import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111113",
};

export const metadata: Metadata = {
  title: "Ganga Homes & Developers | Architectural Luxury & Heritage",
  description:
    "Crafting architecturally refined residential sanctuaries and landmark commercial addresses with uncompromising permanence, bespoke materiality, and timeless poise.",
  keywords: [
    "Ganga Homes",
    "Ganga Developers",
    "Luxury Real Estate",
    "Kerala Heritage Villas",
    "Architectural Contracting Kerala",
    "Aneesh V M",
  ],
  authors: [{ name: "Ganga Homes and Developers" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FCF9F4] text-[#1C1C19] font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[#FCDC98] selection:text-[#775F28] overflow-x-hidden w-full relative">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
