/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { SERVICES_DATA } from "../data";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Dynamic background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Heading */}
        <span className="bg-brand-blue/10 text-brand-blue text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-extrabold font-mono inline-block mb-3">
          Layanan Kami
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-darkblue tracking-tight leading-none mb-4">
          Solusi Lengkap untuk AC Anda
        </h2>
        <p className="font-sans text-gray-500 max-w-2xl mx-auto text-base sm:text-lg mb-16">
          Dari pemasangan baru hingga perawatan rutin berkala, semua kebutuhan AC rumah dan kantor Anda kami tangani secara profesional.
        </p>

        {/* 1. Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 hover:border-brand-blue/30 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left group transform hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <Icon name={service.iconName} size={24} />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-xl text-brand-darkblue mb-3 group-hover:text-brand-blue transition-colors">
                {service.name}
              </h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Footer quick CTA */}
              <div className="w-full pt-4 border-t border-gray-50 flex justify-between items-center text-sm font-medium">
                <span className="text-gray-400 text-xs font-mono">KONSULTASI GRATIS</span>
                <a
                  href={`https://wa.me/62895329832165?text=Halo%20Mr.%20Cool%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.name)}%20di%20Pekanbaru.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-blue-600 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>Pesan Sekarang</span>
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
