/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12", showText = true }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  // If the user uploads a custom logo to /assets/mr_cool.png, we render it directly.
  // Otherwise, it falls back to our high-quality styled SVG logo.
  if (!imgError) {
    return (
      <div id="mrcool-logo-container" className={`flex items-center ${className}`}>
        <img
          src="/assets/mr_cool.png"
          alt="Mr. Cool Logo"
          className="h-full w-auto object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div id="mrcool-logo-container" className={`flex items-center gap-3 ${className}`}>
      {/* SVG Mascot Emblem */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-brand-darkblue border-2 border-brand-blue flex items-center justify-center overflow-hidden shadow-md">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue background accent gradient circle */}
          <circle cx="50" cy="50" r="45" fill="url(#blue-grad)" />
          
          {/* Snowflake background outline */}
          <path
            d="M50 15V85M15 50H85M25 25L75 75M25 75L75 25"
            stroke="rgba(30, 144, 255, 0.3)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M50 25L45 30M50 25L55 30M50 75L45 70M50 75L55 70M25 50L30 45M25 50L30 55M85 50L80 45M85 50L80 55"
            stroke="rgba(30, 144, 255, 0.4)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Technician Silhouette wearing Cap */}
          {/* Head & Face */}
          <path
            d="M55 42C55 37 51 34 46 34C41 34 37 38 37 43C37 45 38 47 39 49"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Cap (Visor facing left) */}
          <path
            d="M34 35C30 36 26 38 23 41L25 43C28 41 32 39 36 38"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M37 36C38 32 42 29 47 29C52 29 55 32 55 36"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Collar & Body outline */}
          <path
            d="M35 55C35 50 40 47 46 47C52 47 57 50 57 55V68H35V55Z"
            fill="white"
          />
          <path
            d="M31 68C31 58 38 52 46 52C54 52 61 58 61 68H31Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Crossed Arms simplified */}
          <path
            d="M35 60C40 62 52 62 57 60"
            stroke="#1E90FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Snowflake Vector Accent on the upper right */}
          <g transform="translate(68, 28) scale(0.3)">
            <path d="M25 0V50M0 25H50M6 6L44 44M6 44L44 6" stroke="#FFA500" strokeWidth="8" strokeLinecap="round"/>
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="blue-grad" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E36" />
              <stop offset="1" stopColor="#1E90FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1">
            <span className="font-display font-extrabold text-xl tracking-tight text-brand-blue">
              Mr.
            </span>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white uppercase italic">
              Cool
            </span>
            {/* Small Snowflake badge */}
            <span className="text-brand-orange text-xs animate-spin-slow font-sans">❄</span>
          </div>
          <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-gray-400 -mt-1 leading-none">
            Air Conditioner Service
          </span>
        </div>
      )}
    </div>
  );
}
