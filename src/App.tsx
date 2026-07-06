/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactAndMap from "./components/ContactAndMap";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import { CONTACT_INFO } from "./data";

export default function App() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Show floating WhatsApp button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-dark antialiased selection:bg-brand-blue/20 selection:text-brand-dark overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services (Layanan Kami) & Cost Calculator */}
        <Services />

        {/* 4. Advantages (Keunggulan & Cakupan) */}
        <Advantages />

        {/* 5. Testimonials (Pengalaman Kami) */}
        <Testimonials />

        {/* 6. FAQ Accordion Section */}
        <Faq />

        {/* 7. Contact Info & Interactive Form & Location Map */}
        <ContactAndMap />
      </main>

      {/* 8. Footer Block */}
      <Footer />

      {/* 9. Floating WhatsApp Shortcut CTA (High-conversion optimization) */}
      <a
        href={CONTACT_INFO.whatsapp1Url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 active:scale-95 group glow-orange ${
          showFloatingButton ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-75 pointer-events-none"
        }`}
        style={{ boxShadow: "0 8px 30px rgba(37, 211, 102, 0.4)" }}
        title="Hubungi Kami via WhatsApp"
        id="floating-whatsapp-cta"
      >
        <Icon name="MessageCircle" size={24} className="fill-white/10" />
        
        {/* Floating Tooltip Label (visible on hover) */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 font-display font-extrabold text-sm transition-all duration-300 ease-out whitespace-nowrap">
          Tanya Kami (Respon Cepat)
        </span>

        {/* Glowing badge indicator */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border border-white text-[8px] text-white items-center justify-center font-black">
            1
          </span>
        </span>
      </a>

    </div>
  );
}

