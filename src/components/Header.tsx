/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { CONTACT_INFO } from "../data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to add shadow/bg to navbar for dynamic effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Layanan", href: "#layanan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#kontak" }
  ];

  return (
    <header id="app-header" className="relative w-full z-50">
      {/* 1. Top Bar (Inspired by UPPKB Tenayan Raya) */}
      <div className="bg-brand-darkblue text-gray-300 text-xs py-2 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-white/5 font-sans">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5 hover:text-brand-blue transition-colors">
            <Icon name="Clock" size={14} className="text-brand-blue" />
            <span>{CONTACT_INFO.hours}</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 hover:text-brand-blue transition-colors">
            <Icon name="Mail" size={14} className="text-brand-blue" />
            <span>{CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-brand-blue transition-colors">
            <Icon name="MapPin" size={14} className="text-brand-blue" />
            <span>Pekanbaru, Riau</span>
          </div>
        </div>
        
        {/* Quick Contact Links & Social */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${CONTACT_INFO.phone1}`}
            className="flex items-center gap-1 hover:text-brand-orange font-medium transition-colors"
          >
            <Icon name="Phone" size={12} className="text-brand-orange animate-pulse" />
            <span>{CONTACT_INFO.phone1Formatted}</span>
          </a>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2.5">
            <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Facebook">
              <Icon name="Facebook" size={14} />
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Instagram">
              <Icon name="Instagram" size={14} />
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors" aria-label="Youtube">
              <Icon name="Youtube" size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <nav
        id="main-navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-brand-darkblue/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
            : "absolute bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#beranda" className="flex items-center focus:outline-none">
            <Logo showText={true} />
          </a>

          {/* Desktop Links (Inspired by modern clean layouts) */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display font-medium text-[15px] text-gray-200 hover:text-brand-blue transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#kontak"
              className="bg-brand-blue hover:bg-blue-600 text-white font-display font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 glow-blue"
            >
              <Icon name="Phone" size={15} />
              <span>Pesan Sekarang</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[var(--nav-height,56px)] bg-brand-darkblue border-b border-white/10 shadow-2xl z-40 transition-all duration-300">
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-medium text-base text-gray-200 hover:text-brand-blue py-2.5 border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <a
                  href={CONTACT_INFO.whatsapp1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-center font-display font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 glow-orange"
                >
                  <Icon name="MessageCircle" size={18} />
                  <span>WhatsApp Admin</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone1}`}
                  className="border border-white/20 text-white text-center font-display font-medium py-3 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="Phone" size={16} />
                  <span>Telepon {CONTACT_INFO.phone1Formatted}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to push content down when navbar is fixed */}
      {isScrolled && <div className="h-[76px] lg:h-[84px] bg-brand-darkblue"></div>}
    </header>
  );
}
