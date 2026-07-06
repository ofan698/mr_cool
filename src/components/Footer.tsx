/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { BUILDING_TYPES, CONTACT_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-brand-darkblue text-gray-400 font-sans">
      
      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5">
        
        {/* Column 1: Brand & Desc (4 cols) */}
        <div className="md:col-span-5 flex flex-col items-start text-left gap-4">
          <Logo showText={true} />
          
          <p className="text-sm text-gray-300 leading-relaxed mt-2 max-w-sm">
            Mr. Cool adalah penyedia jasa layanan cuci, perbaikan, isi freon, dan bongkar pasang AC terpercaya di Kota Pekanbaru dan sekitarnya. Kami mengutamakan kerapian, kecepatan kerja, dan garansi nyata demi kepuasan Anda.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all text-gray-300" aria-label="Facebook">
              <Icon name="Facebook" size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all text-gray-300" aria-label="Instagram">
              <Icon name="Instagram" size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all text-gray-300" aria-label="Youtube">
              <Icon name="Youtube" size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Building Scopes (4 cols) - Inspired by Image 3 footer representation */}
        <div className="md:col-span-4 flex flex-col items-start text-left gap-4">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider border-b-2 border-brand-blue pb-1">
            Kategori Pelayanan
          </h4>
          
          <div className="grid grid-cols-2 gap-3 w-full mt-2">
            {BUILDING_TYPES.map((building) => (
              <div key={building.id} className="flex items-center gap-2.5 bg-white/5 px-3 py-2.5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-brand-blue">
                  <Icon name={building.iconName} size={16} />
                </div>
                <span className="text-xs font-semibold text-gray-200">{building.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[11px] text-gray-500 italic mt-1 leading-normal">
            Melayani pengerjaan skala residensial, ritel, ruko, perkantoran, dan gedung bertingkat.
          </p>
        </div>

        {/* Column 3: Quick Links & Quick WhatsApp (3 cols) */}
        <div className="md:col-span-3 flex flex-col items-start text-left gap-4">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider border-b-2 border-brand-blue pb-1">
            Tautan Cepat
          </h4>

          <div className="flex flex-col gap-2 w-full text-sm mt-2">
            <a href="#beranda" className="hover:text-brand-blue transition-colors flex items-center gap-1.5">
              <span>Beranda Utama</span>
            </a>
            <a href="#layanan" className="hover:text-brand-blue transition-colors flex items-center gap-1.5">
              <span>Layanan Jasa</span>
            </a>
            <a href="#keunggulan" className="hover:text-brand-blue transition-colors flex items-center gap-1.5">
              <span>Keunggulan Kami</span>
            </a>
            <a href="#testimoni" className="hover:text-brand-blue transition-colors flex items-center gap-1.5">
              <span>Testimoni</span>
            </a>
            <a href="#faq" className="hover:text-brand-blue transition-colors flex items-center gap-1.5">
              <span>Pertanyaan FAQ</span>
            </a>
            <a href="#kontak" className="hover:text-brand-blue transition-colors flex items-center gap-1.5">
              <span>Hubungi Kontak</span>
            </a>
          </div>
        </div>

      </div>

      {/* 2. Sub-Footer (Copyright Section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div>
          <p>© {currentYear} Mr. Cool Air Conditioner Service. Seluruh hak cipta dilindungi.</p>
        </div>
        <div className="flex items-center gap-1">
          <span>Dibuat penuh dengan</span>
          <span className="text-red-500 animate-pulse">❤️</span>
          <span>untuk Kenyamanan Keluarga Pekanbaru</span>
        </div>
      </div>

    </footer>
  );
}
