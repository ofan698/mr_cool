/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ADVANTAGES_DATA, BUILDING_TYPES } from "../data";
import Icon from "./Icon";

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-20 bg-white relative">
      {/* Structural subtle gradients */}
      <div className="absolute top-[-10%] right-[5%] w-[30%] h-[30%] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Header */}
        <span className="bg-brand-orange/10 text-brand-orange text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-extrabold font-mono inline-block mb-3">
          Kenapa Mr. Cool?
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-darkblue tracking-tight leading-none mb-4">
          Keunggulan Layanan Kami
        </h2>
        <p className="font-sans text-gray-500 max-w-2xl mx-auto text-base sm:text-lg mb-16">
          Komitmen kami adalah memberikan rasa aman dan dingin yang maksimal untuk setiap pelanggan di Pekanbaru.
        </p>

        {/* 1. Core Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="advantages-grid">
          {ADVANTAGES_DATA.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-slate-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Checkmark Badge Icon */}
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 relative">
                <Icon name={advantage.iconName} size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] flex items-center justify-center border-2 border-white font-extrabold shadow-sm">
                  ✓
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg text-brand-darkblue mb-2">
                {advantage.title}
              </h3>
              <p className="font-sans text-gray-500 text-xs sm:text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Target Scope Segment (Image 3 layout: Rumah, Kantor, Toko, Gedung) */}
        <div id="target-scope" className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">CAKUPAN LAYANAN KAMI</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-darkblue mt-2">
              Siap Melayani Segala Tipe Bangunan
            </h3>
            <p className="font-sans text-sm text-gray-500 max-w-xl mx-auto mt-2">
              Dipercaya oleh rumah tangga, pemilik ruko, instansi, hingga kontraktor gedung bertingkat di Pekanbaru.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BUILDING_TYPES.map((building) => (
              <div
                key={building.id}
                className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all border-b-4 hover:border-b-brand-blue group"
              >
                {/* SVG/Icon block */}
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors mb-4">
                  <Icon name={building.iconName} size={24} />
                </div>
                
                {/* Building Name */}
                <h4 className="font-display font-bold text-base text-brand-darkblue mb-1 group-hover:text-brand-blue transition-colors">
                  {building.name}
                </h4>
                
                {/* Description */}
                <p className="font-sans text-gray-400 text-[11px] sm:text-xs leading-normal">
                  {building.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
