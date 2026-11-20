"use client";

import React, { useState } from "react";
import { Volume2, Music } from "lucide-react";
import { globalShehnaiPlayer } from "@/lib/audioEngine";

export function FloatingShehnai() {
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={toggleMusic}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#821422] text-[#FFFDF7] border-2 border-[#B88632] shadow-lg hover:bg-[#6B0E1B] active:scale-95 transition-all text-xs font-devanagari font-bold"
        aria-label="शहनाई मंगल धुन चालू/बंद करें"
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3.5 w-3.5">
              <span className="w-0.5 bg-[#F6D155] rounded-full h-3 animate-pulse" />
              <span className="w-0.5 bg-[#FFFDF7] rounded-full h-2 animate-pulse" />
              <span className="w-0.5 bg-[#F6D155] rounded-full h-3.5 animate-pulse" />
            </div>
            <span className="text-[11px] text-[#F6D155]">धुन चालू</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#F6D155]" />
            <span className="text-[11px]">मंगल धुन</span>
          </>
        )}
      </button>
    </div>
  );
}