"use client";

import React, { useState } from "react";
import { GaneshaIcon, SwastikIcon, DiyaIcon, LotusMotif } from "./Decorations";
import { MessageCircle, Copy, Check, ArrowUp, Volume2, VolumeX } from "lucide-react";
import { globalShehnaiPlayer } from "@/lib/audioEngine";

export function PatrikaFooter() {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCopyLink = async () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const toggleMusic = async () => {
    if (!globalShehnaiPlayer) return;
    if (isPlaying) {
      globalShehnaiPlayer.pause();
      setIsPlaying(false);
    } else {
      const started = await globalShehnaiPlayer.startAudio();
      if (started) setIsPlaying(true);
    }
  };

  const shareText = encodeURIComponent(
    `॥ श्री गणेशाय नमः ॥\n\nसपरिवार सादर आमंत्रित हैं!\n\nचि. अंकित श्रीवास्तव एवं आयु. सिमरन सिंह के शुभ विवाह का पावन निमंत्रण स्वीकार करें।\n\nदिनांक: मंगलवार, 24 नवम्बर 2026\nस्थान: वृन्दावन लॉन, लोलाई, लखनऊ।\n\nडिजिटल पत्रिका यहाँ देखें:`
  );
  const currentUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${currentUrl}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-10 bg-[#821422] text-[#FFFDF7] border-t-4 border-[#B88632] pt-8 pb-8 px-4 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <div className="flex flex-col items-center justify-center">
          <div className="p-2 rounded-full bg-[#6B0E1B] border border-[#B88632] mb-1.5 shadow-sm">
            <GaneshaIcon className="w-7 h-7 text-[#F6D155]" />
          </div>
          <p className="font-devanagari text-base font-bold text-[#F6D155] tracking-wide">
            ॥ श्री गणेशाय नमः ॥
          </p>
        </div>

        <div className="bg-[#6B0E1B]/80 p-3 rounded-xl border border-[#B88632]/50">
          <p className="font-devanagari text-xs text-[#FFFDF7] leading-relaxed">
            मङ्गलं भगवान विष्णुः मङ्गलं गरुड़ध्वजः।
            <br />
            मङ्गलं पुण्डरीकाक्षः मङ्गलाय तनो हरिः॥
          </p>
        </div>

        <div className="space-y-0.5 font-devanagari">
          <p className="text-[11px] uppercase tracking-widest text-[#F6D155] font-semibold">
            ॥ सादर आमंत्रण ॥
          </p>
          <h4 className="text-lg font-bold text-[#FFFDF7]">
            श्रीवास्तव एवं सिंह परिवार
          </h4>
          <p className="text-xs text-[#E6CDA3]">
            24 नवम्बर 2026 • लखनऊ, उत्तर प्रदेश
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 text-[#F6D155] opacity-80">
          <SwastikIcon className="w-3.5 h-3.5 text-[#F6D155]" />
          <LotusMotif className="w-4 h-4 text-[#F6D155]" />
          <DiyaIcon className="w-4 h-4 text-[#F6D155]" />
          <LotusMotif className="w-4 h-4 text-[#F6D155]" />
          <SwastikIcon className="w-3.5 h-3.5 text-[#F6D155]" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-devanagari font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp पर साझा करें</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6B0E1B] border border-[#B88632] text-[#F6D155] text-xs font-devanagari font-semibold hover:bg-[#59091D] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-300">कॉपी हो गया</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>लिंक कॉपी करें</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFFDF7]/10 hover:bg-[#FFFDF7]/20 border border-[#B88632]/50 text-xs text-[#FFFDF7] font-devanagari transition-colors"
          >
            <ArrowUp className="w-3 h-3" />
            <span>शीर्ष पर जाएँ</span>
          </button>
        </div>

        <p className="text-[10px] text-[#D4B582] font-devanagari pt-2">
          ॥ ॐ श्री गणेशाय नमः ॥ चिरंजीव अंकित एवं आयुष्मती सिमरन का पावन विवाह महोत्सव
        </p>
      </div>
    </footer>
  );
}