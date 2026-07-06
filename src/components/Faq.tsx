/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FAQ_DATA, CONTACT_INFO } from "../data";
import Icon from "./Icon";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Default open first FAQ

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-[-10%] w-[35%] h-[35%] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="bg-brand-blue/10 text-brand-blue text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-extrabold font-mono inline-block mb-3">
            Tanya Jawab
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-darkblue tracking-tight leading-none mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Temukan jawaban cepat mengenai prosedur garansi, layanan, dan pemesanan teknisi kami di bawah ini.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-[15px] sm:text-lg text-brand-darkblue group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Status Indicator Icon */}
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-brand-blue text-white" : "bg-slate-50 text-gray-400 group-hover:bg-brand-blue/10 group-hover:text-brand-blue"
                  }`}>
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
                  </span>
                </button>

                {/* Accordion Content (with smooth max-height animation style) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-gray-50" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-slate-50/50 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Conversional Link */}
        <div className="mt-12 text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-base text-brand-darkblue">Punya pertanyaan lain yang belum terjawab?</h4>
            <p className="text-xs text-gray-500 font-sans">Hubungi tim customer support kami langsung via WhatsApp untuk respon instan.</p>
          </div>
          <a
            href={CONTACT_INFO.whatsapp1Url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-display font-bold text-xs sm:text-sm px-5 py-3 rounded-lg flex items-center justify-center gap-2 glow-orange"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
