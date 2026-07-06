/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TESTIMONIALS_DATA } from "../data";
import Icon from "./Icon";

export default function Testimonials() {
  return (
    <section
      id="testi-section"
      className="py-20 bg-gradient-to-b from-brand-darkblue to-slate-900 text-white relative overflow-hidden"
    >
      {/* Cool glow overlay elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Heading */}
        <span className="bg-white/10 border border-white/10 text-brand-blue text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-extrabold font-mono inline-block mb-3">
          Testimoni Pelanggan
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none mb-4">
          Pengalaman Bersama Mr. Cool
        </h2>
        <p className="font-sans text-gray-300 max-w-xl mx-auto text-sm sm:text-base mb-16">
          Dipercaya oleh ribuan keluarga, pemilik toko, kantor, dan pengelola instansi di seluruh wilayah Kota Pekanbaru.
        </p>

        {/* Testimonials Grid (High contrast card layout from Image 3) */}
        <div id="testi-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card-dark rounded-2xl p-6 text-left hover:border-brand-blue/30 transition-all flex flex-col justify-between group transform hover:-translate-y-1 duration-300"
            >
              {/* Quote & Stars */}
              <div>
                {/* Stars Indicator */}
                <div className="flex gap-1 mb-4 text-brand-orange">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                {/* Testimonial body */}
                <p className="font-sans text-gray-300 text-sm leading-relaxed italic mb-6">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* User Profiling info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                {/* Avatar image */}
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                
                {/* Identity labels */}
                <div>
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{testimonial.name}</span>
                    {/* Tiny green verification checkmark */}
                    <span className="w-4 h-4 rounded-full bg-green-500 text-white text-[9px] flex items-center justify-center font-black">
                      ✓
                    </span>
                  </h4>
                  <p className="text-[11px] text-gray-400 font-sans">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Label at Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-1">
            <span className="text-brand-orange">★★★★★</span>
            <span>4.9/5 Rata-rata Kepuasan</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div>
            <span>100% Pengerjaan Bergaransi Nyata</span>
          </div>
        </div>

      </div>
    </section>
  );
}
