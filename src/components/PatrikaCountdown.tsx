"use client";

import React, { useState, useEffect } from "react";
import { DiyaIcon } from "./Decorations";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function PatrikaCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="my-5 p-3.5 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
        <span className="text-xs font-devanagari text-[#821422] font-bold">
          शुभ विवाह की मंगल बेला
        </span>
      </div>
    );
  }

  return (
    <div className="my-5 p-3.5 sm:p-4 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center shadow-sm">
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <DiyaIcon className="w-3.5 h-3.5 text-[#821422]" />
        <span className="font-devanagari text-xs uppercase tracking-wider text-[#821422] font-bold">
          शुभ विवाह की मंगल बेला
        </span>
        <DiyaIcon className="w-3.5 h-3.5 text-[#821422]" />
      </div>

      <div className="grid grid-cols-4 gap-1.5 max-w-xs mx-auto">
        <div className="p-2 rounded-lg bg-[#FFFDF9] border border-[#B88632]/30">
          <div className="font-devanagari text-lg sm:text-xl font-bold text-[#821422] tabular-nums">
            {timeLeft.days}
          </div>
          <div className="text-[10px] font-devanagari text-[#6B3E26] font-medium">दिवस</div>
        </div>

        <div className="p-2 rounded-lg bg-[#FFFDF9] border border-[#B88632]/30">
          <div className="font-devanagari text-lg sm:text-xl font-bold text-[#821422] tabular-nums">
            {timeLeft.hours}
          </div>
          <div className="text-[10px] font-devanagari text-[#6B3E26] font-medium">घंटे</div>
        </div>

        <div className="p-2 rounded-lg bg-[#FFFDF9] border border-[#B88632]/30">
          <div className="font-devanagari text-lg sm:text-xl font-bold text-[#821422] tabular-nums">
            {timeLeft.minutes}
          </div>
          <div className="text-[10px] font-devanagari text-[#6B3E26] font-medium">मिनट</div>
        </div>

        <div className="p-2 rounded-lg bg-[#FFFDF9] border border-[#B88632]/30">
          <div className="font-devanagari text-lg sm:text-xl font-bold text-[#821422] tabular-nums">
            {timeLeft.seconds}
          </div>
          <div className="text-[10px] font-devanagari text-[#6B3E26] font-medium">सेकंड</div>
        </div>
      </div>
    </div>
  );
}