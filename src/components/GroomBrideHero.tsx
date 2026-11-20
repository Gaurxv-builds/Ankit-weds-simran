"use client";

import React, { useState } from "react";
import { SwastikIcon } from "./Decorations";

export function GroomBrideHero() {
  const [imgSrc, setImgSrc] = useState(
    "https://ik.imagekit.io/gaurxverse/Wedding/MAIN.png?tr=cm-extract,x-0,y-1180,w-2584,h-2689"
  );

  return (
    <section className="text-center my-3 sm:my-5 w-full">
      {/* Auspicious Subtitle Banner */}
      <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-1 rounded-full bg-[#821422]/10 border border-[#821422]/30 mb-3">
        <SwastikIcon className="w-3.5 h-3.5 text-[#821422]" />
        <h2 className="font-devanagari text-base sm:text-xl font-bold text-[#821422] tracking-wider">
          ॥ शुभ विवाह ॥
        </h2>
        <SwastikIcon className="w-3.5 h-3.5 text-[#821422]" />
      </div>

      {/* SINGLE COUPLE PHOTO CARD - MOBILE FIRST */}
      <div className="max-w-sm sm:max-w-md mx-auto w-full px-1">
        <div className="patrika-card rounded-2xl p-3 sm:p-4 text-center bg-[#FFFDF9] shadow-md">
          {/* Ornate Traditional Photo Frame for Couple */}
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden patrika-photo-frame mb-3 bg-[#FAF5EB]">
            <img
              src={imgSrc}
              alt="चि. अंकित श्रीवास्तव एवं आयु. सिमरन सिंह (वर-वधू)"
              className="w-full h-auto block"
              onError={() => {
                setImgSrc("https://ik.imagekit.io/gaurxverse/Wedding/MAIN.png");
              }}
              loading="eager"
            />
            {/* Corner Golden Accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#F6D155] rounded-tl-sm pointer-events-none" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#F6D155] rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#F6D155] rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#F6D155] rounded-br-sm pointer-events-none" />
          </div>

          {/* Couple Names */}
          <div className="py-1">
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs font-devanagari font-bold text-[#821422] uppercase tracking-wider">
                वर • GROOM
              </span>
              <h3 className="font-devanagari text-xl sm:text-2xl font-bold text-[#821422] leading-tight">
                चि. अंकित श्रीवास्तव
              </h3>
            </div>

            {/* Sacred Sang Divider */}
            <div className="my-2 flex items-center justify-center gap-2">
              <div className="h-[1px] w-10 sm:w-14 bg-[#B88632]" />
              <div className="px-2.5 py-0.5 rounded-full bg-[#821422] text-[#F6D155] text-xs font-devanagari font-bold shadow-sm">
                संग
              </div>
              <div className="h-[1px] w-10 sm:w-14 bg-[#B88632]" />
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs font-devanagari font-bold text-[#821422] uppercase tracking-wider">
                वधू • BRIDE
              </span>
              <h3 className="font-devanagari text-xl sm:text-2xl font-bold text-[#821422] leading-tight">
                आयु. सिमरन सिंह
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}