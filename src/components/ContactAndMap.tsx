/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CONTACT_INFO, SERVICES_DATA } from "../data";
import Icon from "./Icon";

export default function ContactAndMap() {
  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[1].name); // default to 'cuci ac'
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with user details
    const textMessage = `Halo Mr. Cool, saya ingin memesan layanan lewat website:
- Nama: *${name || "-"}*
- No. WhatsApp: *${phone || "-"}*
- Alamat: *${address || "-"}*
- Layanan: *${selectedService}*
- Catatan Tambahan: *${description || "-"}*

Mohon bantuannya untuk mengatur jadwal kunjungan teknisi. Terima kasih!`;

    const encodedText = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/62895329832165?text=${encodedText}`;
    
    // Open in a new tab
    window.open(waUrl, "_blank");
  };

  return (
    <section id="kontak" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="bg-brand-blue/10 text-brand-blue text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-extrabold font-mono inline-block mb-3">
            Hubungi & Lokasi
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-darkblue tracking-tight leading-none mb-4">
            Kami Siap Menuju Tempat Anda
          </h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Isi formulir pesanan di bawah ini atau hubungi kami langsung untuk pengerjaan perbaikan dan cuci AC hari ini juga.
          </p>
        </div>

        {/* Form and Map Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-split-grid">
          
          {/* Left Column: Direct info & Booking form */}
          <div className="lg:col-span-7 bg-slate-50 border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-8 text-left">
            <div>
              <h3 className="font-display font-bold text-2xl text-brand-darkblue mb-2">
                Formulir Booking Servis AC
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500">
                Isi form berikut agar admin kami dapat segera menghubungi Anda via WhatsApp untuk konfirmasi jam kedatangan teknisi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Input: Nama */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600 tracking-wider uppercase font-mono">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full bg-white border border-gray-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-gray-800"
                />
              </div>

              {/* Input: No Telp/WA & Layanan side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* No Telp */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 tracking-wider uppercase font-mono">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812XXXXXXXX"
                    className="w-full bg-white border border-gray-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-gray-800"
                  />
                </div>

                {/* Layanan Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 tracking-wider uppercase font-mono">Layanan Servis</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-gray-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-gray-800"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Input: Alamat */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600 tracking-wider uppercase font-mono">Alamat Lengkap Pekanbaru</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Contoh: Perumahan Indah Asri Blok C-12, Panam"
                  className="w-full bg-white border border-gray-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-gray-800"
                />
              </div>

              {/* Input: Catatan */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-600 tracking-wider uppercase font-mono">Catatan Tambahan (Opsional)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Contoh: AC sering meneteskan air, atau AC kurang dingin semenjak 2 hari lalu."
                  rows={3}
                  className="w-full bg-white border border-gray-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/15 text-gray-800"
                ></textarea>
              </div>

              {/* CTA Form submit */}
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-display font-black text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 glow-orange mt-2 cursor-pointer"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Kirim Pemesanan via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact info cards & Google Map embed */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full text-left">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4" id="contact-info-cards">
              
              {/* Card 1: Telepon */}
              <div className="bg-slate-50 border border-gray-100 p-4 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-darkblue">Hubungi Telepon / WhatsApp</h4>
                  <p className="font-mono text-xs text-gray-500 mt-1">Admin 1: <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-brand-blue underline">{CONTACT_INFO.phone1Formatted}</a></p>
                  <p className="font-mono text-xs text-gray-500">Admin 2: <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-brand-blue underline">{CONTACT_INFO.phone2Formatted}</a></p>
                </div>
              </div>

              {/* Card 2: Lokasi */}
              <div className="bg-slate-50 border border-gray-100 p-4 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-darkblue">Alamat Workshop</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1 leading-normal">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Card 3: Jam Operasional */}
              <div className="bg-slate-50 border border-gray-100 p-4 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-darkblue">Jam Operasional Pelayanan</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1 leading-normal">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Embed container (Beautiful shadow framed) */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-slate-100 aspect-video lg:aspect-[4/3] min-h-[250px]" id="map-iframe-container">
              <iframe
                title="Google Maps Lokasi Servis AC Pekanbaru"
                src={CONTACT_INFO.mapsEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
