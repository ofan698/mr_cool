/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Icon from "./Icon";
import { CONTACT_INFO } from "../data";

const SLIDES = [
  {
    id: 1,
    tagline1: "AC Sehat,",
    tagline2: "Keluarga Nyaman",
    subTagline: "Servis AC cepat, rapi, dan bergaransi di Pekanbaru. Teknisi berpengalaman siap datang langsung ke rumah, kantor, toko, atau gedung Anda.",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    badge: "Air Conditioner Service • Pekanbaru"
  },
  {
    id: 2,
    tagline1: "Teknisi Berpengalaman,",
    tagline2: "Kerja Profesional",
    subTagline: "Pembersihan menyeluruh, pengisian freon berkualitas, dan perbaikan tuntas oleh teknisi handal yang komunikatif dan bergaransi.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    badge: "Teknisi Berpengalaman & Terpercaya"
  },
  {
    id: 3,
    tagline1: "Udara Bersih,",
    tagline2: "Kerja Produktif",
    subTagline: "Tingkatkan produktivitas kerja karyawan dan kenyamanan pelanggan Anda dengan sirkulasi udara AC yang dingin, segar, dan bersih.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    badge: "Solusi Kantor & Tempat Usaha"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="beranda"
      className="relative min-h-[90vh] lg:min-h-[95vh] bg-brand-darkblue text-white flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Images Slider */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              index === current ? "opacity-100 scale-100 z-0" : "opacity-0 scale-105 -z-10"
            }`}
          >
            <img
              src={slide.imageUrl}
              alt="Background Slide"
              className="object-cover w-full h-full"
            />
            {/* Elegant Radial & Linear Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darkblue/95 via-brand-darkblue/85 to-slate-900/90 md:from-brand-darkblue/90 md:to-slate-900/80"></div>
          </div>
        ))}
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-[15%] left-[8%] text-brand-blue/25 text-3xl animate-float pointer-events-none select-none z-10">❄</div>
      <div className="absolute top-[60%] left-[45%] text-brand-blue/15 text-2xl animate-float pointer-events-none select-none z-10" style={{ animationDelay: '2s' }}>❄</div>
      <div className="absolute bottom-[20%] right-[8%] text-brand-blue/30 text-4xl animate-float pointer-events-none select-none z-10" style={{ animationDelay: '4s' }}>❄</div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 text-center"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/35 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-brand-blue uppercase font-mono shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-ping"></span>
              <span>{SLIDES[current].badge}</span>
            </div>

            {/* Slogans */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              {SLIDES[current].tagline1} <br />
              <span className="text-brand-blue drop-shadow-md relative inline-block mt-2">
                {SLIDES[current].tagline2}
                <svg className="absolute left-0 bottom-[-6px] w-full h-[6px] text-brand-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Sub-tagline */}
            <p className="font-sans text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed mt-2">
              {SLIDES[current].subTagline}
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-4">
              <a
                href={CONTACT_INFO.whatsapp1Url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-display font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-3 glow-orange animate-pulse-subtle"
              >
                <Icon name="MessageCircle" size={22} className="fill-white/10" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone1}`}
                className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-base px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2.5"
              >
                <Icon name="Phone" size={18} className="text-brand-blue" />
                <span>Telepon Langsung</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide navigation controls */}
        <div className="absolute inset-y-0 left-0 lg:-left-20 flex items-center z-30 pointer-events-none sm:pointer-events-auto">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:bg-brand-blue hover:border-brand-blue text-white flex items-center justify-center transition-all duration-300 focus:outline-none pointer-events-auto hover:-translate-x-1"
            aria-label="Slide Sebelumnya"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 lg:-right-20 flex items-center z-30 pointer-events-none sm:pointer-events-auto">
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:bg-brand-blue hover:border-brand-blue text-white flex items-center justify-center transition-all duration-300 focus:outline-none pointer-events-auto hover:translate-x-1"
            aria-label="Slide Selanjutnya"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Bullet dots indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10 z-30 relative">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                idx === current ? "w-8 bg-brand-orange" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Buka slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick Value Propositions */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 border-t border-white/10 w-full mt-8 text-sm font-medium text-gray-300">
          <div className="flex items-center gap-2">
            <Icon name="Check" className="text-brand-orange" size={18} />
            <span>Bergaransi Resmi</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Check" className="text-brand-orange" size={18} />
            <span>Teknisi Berpengalaman</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Check" className="text-brand-orange" size={18} />
            <span>Respon Cepat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
