"use client";

import React from "react";
import { GroomBrideHero } from "@/components/GroomBrideHero";
import { PatrikaCountdown } from "@/components/PatrikaCountdown";
import { PatrikaFooter } from "@/components/PatrikaFooter";
import {
  GaneshaIcon,
  KalashIcon,
  SwastikIcon,
  DiyaIcon,
  PatrikaCorner,
  HavanKundIcon,
  MandapIcon,
  DoliPalanquinIcon,
} from "@/components/Decorations";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  Users,
  Heart,
  Sparkles,
  Baby,
} from "lucide-react";

function generateCalendarUrl(
  title: string,
  details: string,
  location: string,
  startDateIso: string,
  endDateIso: string
) {
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startDateIso}/${endDateIso}&details=${encodeURIComponent(
    details
  )}&location=${encodeURIComponent(location)}`;
}

export default function MainPage() {
  const googleMapsUrl = "https://maps.app.goo.gl/oXCLGqkKh1qt8QYA7?g_st=ac";
  const saketGalaxyMapUrl = "https://maps.google.com/?q=Saket+Galaxy+Kanpur";
  const vrindavanLawnMapUrl = googleMapsUrl;

  const vivahCalendarUrl = generateCalendarUrl(
    "शुभ विवाह: चि. अंकित एवं आयु. सिमरन",
    "पावन पाणिग्रहण संस्कार एवं विवाह समारोह। बारात प्रस्थान दोपहर 2:00 बजे साकेत गैलेक्सी, कानपुर से।",
    "वृन्दावन लॉन, लोलाई, एमिटी यूनिवर्सिटी के निकट, लखनऊ, उत्तर प्रदेश",
    "20261124T123000Z",
    "20261124T193000Z"
  );

  const contacts = [
    {
      relation: "वर के पिता",
      name: "श्री दिलीप कुमार श्रीवास्तव",
      phone: "+91 92364 99965",
      cleanPhone: "9236499965",
      whatsappMsg: encodeURIComponent(
        "नमस्ते, मैं अंकित एवं सिमरन के शुभ विवाह के संबंध में संपर्क कर रहा हूँ।"
      ),
    },
    {
      relation: "परिवार समन्वयक",
      name: "श्री आलोक श्रीवास्तव",
      phone: "+91 76782 11877",
      cleanPhone: "7678211877",
      whatsappMsg: encodeURIComponent(
        "नमस्ते, मैं अंकित एवं सिमरन के शुभ विवाह की व्यवस्था/जानकारी के संबंध में संपर्क कर रहा हूँ।"
      ),
    },
  ];

  const swagatkartaList = [
    "दिलीप श्रीवास्तव",
    "पवन श्रीवास्तव",
    "ललित श्रीवास्तव",
    "अभिषेक श्रीवास्तव",
    "अनुज श्रीवास्तव",
    "विवेक श्रीवास्तव",
  ];

  const darshanabhilashiList = [
    "नीलम / फूलकमल श्रीवास्तव",
    "प्रिया / अंकित श्रीवास्तव",
    "सुरभि / जितेन्द्र (भानु)",
  ];

  const vinitText =
    "आलोक, शिवम, अक्षिता, रिद्धि, सिद्धि, निहारिका, आयरा, यश, लक्ष्य, शुभ, समृद्धि एवं समस्त श्रीवास्तव परिवार।";

  return (
    <main className="min-h-screen bg-[#FAF5EB] text-[#24140E]">

      {/* ═══════════════════════════════════════════════════════════
          STICKY HEADER BAR
      ═══════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 bg-[#821422] text-[#FFFDF7] py-2 px-3 text-center text-xs sm:text-sm font-devanagari font-semibold tracking-wider flex items-center justify-center gap-3 shadow-md">
        <span className="text-[#F6D155] text-xs">ॐ</span>
        <span>॥ श्री गणेशाय नमः ॥</span>
        <span className="text-[#F6D155] text-xs">ॐ</span>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: मुख्य विवाह निमंत्रण
      ═══════════════════════════════════════════════════════════ */}
      <div id="invitation" className="max-w-lg mx-auto w-full px-3 py-6 sm:py-8">
        <div className="patrika-card rounded-2xl p-4 sm:p-6 relative overflow-hidden bg-[#FFFDF9]">
          <PatrikaCorner position="top-left" className="absolute top-1.5 left-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="top-right" className="absolute top-1.5 right-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="bottom-left" className="absolute bottom-1.5 left-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="bottom-right" className="absolute bottom-1.5 right-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />

          <div className="patrika-inner-border rounded-xl p-3 sm:p-5 relative z-10 text-center">

            {/* Opening Sanskrit Blessings */}
            <div className="flex flex-col items-center justify-center mb-5">
              <div className="p-2.5 rounded-full bg-[#FAF5EB] border-2 border-[#B88632] shadow-sm mb-2.5">
                <GaneshaIcon className="w-10 h-10 sm:w-14 sm:h-14 text-[#821422]" />
              </div>
              <div className="space-y-0.5 font-devanagari">
                <p className="text-xs sm:text-sm text-[#821422] font-semibold">
                  सदा सर्वदा मंगल भवतु।
                </p>
                <p className="text-sm sm:text-base text-[#821422] font-bold">
                  श्री गणपति महाराज।
                </p>
                <p className="text-xs sm:text-sm text-[#821422] font-semibold">
                  प्रारम्भे विवाहस्य सर्वमङ्गलम् भवतु।
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 my-2.5 text-[#B88632]">
                <div className="h-[1px] w-10 sm:w-16 bg-[#B88632]" />
                <SwastikIcon className="w-3.5 h-3.5 text-[#821422]" />
                <div className="h-[1px] w-10 sm:w-16 bg-[#B88632]" />
              </div>
            </div>

            {/* Hero: Couple Photo + Names */}
            <GroomBrideHero />

            {/* Invitation Message */}
            <div className="my-5 bg-[#FAF5EB] p-3.5 sm:p-5 rounded-xl border border-[#B88632]/40 shadow-sm">
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <KalashIcon className="w-5 h-5 text-[#821422]" />
                <span className="font-devanagari text-[11px] sm:text-xs uppercase tracking-wider text-[#821422] font-bold">
                  ॥ सादर आमंत्रण ॥
                </span>
                <KalashIcon className="w-5 h-5 text-[#821422]" />
              </div>
              <p className="font-devanagari text-sm sm:text-base text-[#24140E] leading-relaxed font-medium">
                सपरिवार सादर आमंत्रित करते हैं कि आप सपरिवार पधारकर वर-वधू को अपना स्नेह, आशीर्वाद एवं शुभकामनाएँ प्रदान करें तथा इस पावन मांगलिक अवसर की शोभा बढ़ाएँ।
              </p>
            </div>

            {/* Date & Venue */}
            <div className="space-y-3 my-5">
              <div className="p-3.5 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
                <span className="font-devanagari text-[11px] uppercase tracking-wider text-[#821422] font-bold">
                  विवाह दिनांक
                </span>
                <p className="font-devanagari text-lg sm:text-xl font-bold text-[#821422] mt-0.5">
                  मंगलवार, 24 नवम्बर 2026
                </p>
                <p className="text-[11px] text-[#5C3A28] mt-0.5 font-devanagari">
                  शुभ विवाह एवं पाणिग्रहण संस्कार
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
                <span className="font-devanagari text-[11px] uppercase tracking-wider text-[#821422] font-bold">
                  विवाह स्थल
                </span>
                <p className="font-devanagari text-base sm:text-lg font-bold text-[#24140E] mt-0.5">
                  वृन्दावन लॉन
                </p>
                <p className="text-[11px] sm:text-xs text-[#4A2618] font-devanagari leading-snug">
                  लोलाई, एमिटी यूनिवर्सिटी के निकट,
                  <br />
                  लखनऊ, उत्तर प्रदेश।
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="my-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl btn-patrika-maroon font-devanagari font-bold text-xs shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#F6D155]" />
                <span>गूगल मैप्स पर रास्ता देखें</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Countdown */}
            <PatrikaCountdown targetDate="2026-11-24T18:00:00+05:30" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════ SECTION DIVIDER */}
      <div className="flex items-center justify-center gap-3 py-2 px-4">
        <div className="h-[1px] flex-1 max-w-[80px] bg-[#B88632]/50" />
        <SwastikIcon className="w-5 h-5 text-[#821422]/60" />
        <div className="h-[1px] flex-1 max-w-[80px] bg-[#B88632]/50" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: वर-वधू परिचय एवं मांगलिक कार्यक्रम
      ═══════════════════════════════════════════════════════════ */}
      <div id="karyakram" className="max-w-lg mx-auto w-full px-3 py-4 sm:py-6">
        <div className="patrika-card rounded-2xl p-4 sm:p-6 relative overflow-hidden bg-[#FFFDF9]">
          <PatrikaCorner position="top-left" className="absolute top-1.5 left-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="top-right" className="absolute top-1.5 right-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="bottom-left" className="absolute bottom-1.5 left-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="bottom-right" className="absolute bottom-1.5 right-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />

          <div className="patrika-inner-border rounded-xl p-3 sm:p-5 relative z-10">

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full bg-[#821422]/10 border border-[#821422]/30 mb-1.5">
                <SwastikIcon className="w-3 h-3 text-[#821422]" />
                <h2 className="font-devanagari text-base sm:text-lg font-bold text-[#821422] tracking-wide">
                  ॥ वर-वधू परिचय ॥
                </h2>
                <SwastikIcon className="w-3 h-3 text-[#821422]" />
              </div>
              <p className="text-[11px] sm:text-xs text-[#5C3A28] font-devanagari">
                पूज्यनीय पूर्वजों के आशीर्वाद एवं कुल की सुदीर्घ परंपराओं के साथ
              </p>
            </div>

            {/* Family Pedigree Cards */}
            <div className="space-y-3 mb-8">
              {/* वर पक्ष */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border-2 border-[#821422]/20 text-center">
                <div className="inline-block px-3 py-0.5 rounded-full bg-[#821422] text-[#FFFDF7] text-[11px] font-devanagari font-bold mb-2 shadow-sm">
                  वर पक्ष
                </div>
                <h3 className="font-devanagari text-xl font-bold text-[#821422] mb-3">
                  चि. अंकित श्रीवास्तव
                </h3>
                <div className="h-[1px] w-12 bg-[#B88632] mx-auto mb-3" />
                <div className="mb-3">
                  <p className="text-[11px] font-devanagari font-bold text-[#821422] uppercase tracking-wider mb-0.5">
                    पौत्र:
                  </p>
                  <p className="font-devanagari text-xs sm:text-sm text-[#24140E] leading-relaxed">
                    स्वर्गीय श्री राज कुमार श्रीवास्तव
                    <br />
                    स्वर्गीय श्रीमती राज कुमारी श्रीवास्तव
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-devanagari font-bold text-[#821422] uppercase tracking-wider mb-0.5">
                    सुपुत्र:
                  </p>
                  <p className="font-devanagari text-sm sm:text-base text-[#24140E] font-bold leading-relaxed">
                    श्री दिलीप कुमार श्रीवास्तव
                    <br />
                    श्रीमती लता श्रीवास्तव
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#B88632]/30 text-[11px] font-devanagari text-[#6B3E26]">
                  समस्त श्रीवास्तव परिवार
                </div>
              </div>

              {/* वधू पक्ष */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border-2 border-[#821422]/20 text-center">
                <div className="inline-block px-3 py-0.5 rounded-full bg-[#821422] text-[#FFFDF7] text-[11px] font-devanagari font-bold mb-2 shadow-sm">
                  वधू पक्ष
                </div>
                <h3 className="font-devanagari text-xl font-bold text-[#821422] mb-3">
                  आयु. सिमरन सिंह
                </h3>
                <div className="h-[1px] w-12 bg-[#B88632] mx-auto mb-3" />
                <div className="mb-3">
                  <p className="text-[11px] font-devanagari font-bold text-[#821422] uppercase tracking-wider mb-0.5">
                    पौत्री:
                  </p>
                  <p className="font-devanagari text-xs sm:text-sm text-[#24140E] leading-relaxed">
                    श्री महेन्द्र प्रताप सिंह
                    <br />
                    श्रीमती कृष्णा सिंह
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-devanagari font-bold text-[#821422] uppercase tracking-wider mb-0.5">
                    सुपुत्री:
                  </p>
                  <p className="font-devanagari text-sm sm:text-base text-[#24140E] font-bold leading-relaxed">
                    स्वर्गीय श्री नवीन कुमार सिंह
                    <br />
                    श्रीमती ऋतु सिंह
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#B88632]/30 text-[11px] font-devanagari text-[#6B3E26]">
                  समस्त सिंह परिवार
                </div>
              </div>
            </div>

            {/* ॥ मांगलिक कार्यक्रम ॥ */}
            <div className="text-center mb-5 pt-3 border-t-2 border-[#B88632]/40">
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full bg-[#821422] text-[#FFFDF7] mb-1.5 shadow-sm">
                <DiyaIcon className="w-3.5 h-3.5 text-[#F6D155]" />
                <h2 className="font-devanagari text-base sm:text-lg font-bold tracking-wider">
                  ॥ मांगलिक कार्यक्रम ॥
                </h2>
                <DiyaIcon className="w-3.5 h-3.5 text-[#F6D155]" />
              </div>
              <p className="text-[11px] sm:text-xs text-[#5C3A28] font-devanagari">
                समस्त पावन वैवाहिक अनुष्ठानों का विवरण
              </p>
            </div>

            {/* Three Ceremonies */}
            <div className="space-y-4">

              {/* 1. मातृ पूजन, मेहंदी एवं हल्दी */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF5EB] border-2 border-[#821422]/30 shadow-sm">
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="p-1.5 rounded-lg bg-[#821422] text-[#FFFDF7] shrink-0">
                    <HavanKundIcon className="w-5 h-5 text-[#F6D155]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-devanagari font-bold text-[#821422] uppercase tracking-wider">
                      प्रथम दिवस
                    </span>
                    <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] leading-tight">
                      1. मातृ पूजन, मेहंदी एवं हल्दी उत्सव
                    </h3>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-devanagari mb-2.5">
                  <div className="flex items-center gap-1.5 text-[#24140E]">
                    <Calendar className="w-3.5 h-3.5 text-[#821422] shrink-0" />
                    <span><strong>दिनांक:</strong> सोमवार, 23 नवम्बर 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#24140E]">
                    <Clock className="w-3.5 h-3.5 text-[#821422] shrink-0" />
                    <span><strong>समय:</strong> प्रातः 11:00 बजे</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FFFDF9] border border-[#B88632]/30 mb-2.5">
                  <div className="flex items-start gap-1.5 text-xs font-devanagari text-[#24140E]">
                    <MapPin className="w-3.5 h-3.5 text-[#821422] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#821422]">स्थान:</strong>
                      <p className="mt-0.5 leading-relaxed">
                        साकेत गैलेक्सी, समाधि पुलिया,
                        <br />
                        निहाल बाबा मंदिर के निकट, नौबस्ता,
                        <br />
                        कानपुर, उत्तर प्रदेश।
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FFF5EB] border border-[#821422]/30 text-xs font-devanagari text-[#821422] mb-3">
                  <strong>बारात प्रस्थान:</strong> मंगलवार, 24 नवम्बर 2026, दोपहर 2:00 बजे
                  <br />
                  <span className="text-[#4A2618]">प्रस्थान स्थल: साकेत गैलेक्सी, कानपुर।</span>
                </div>

                <a
                  href={saketGalaxyMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg btn-patrika-maroon text-[11px] font-devanagari font-bold"
                >
                  <Navigation className="w-3 h-3 text-[#F6D155]" />
                  <span>रास्ता देखें (साकेत गैलेक्सी)</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                </a>
              </div>

              {/* 2. शुभ विवाह (MAIN EVENT) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFFDF9] border-2 border-[#821422] shadow-md">
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="p-1.5 rounded-lg bg-[#821422] text-[#FFFDF7] shrink-0">
                    <MandapIcon className="w-5 h-5 text-[#F6D155]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-devanagari font-bold text-[#C85A17] uppercase tracking-wider">
                      मुख्य वैवाहिक महोत्सव
                    </span>
                    <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] leading-tight">
                      2. शुभ विवाह एवं पाणिग्रहण संस्कार
                    </h3>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs font-devanagari mb-2.5">
                  <div className="flex items-center gap-1.5 text-[#24140E]">
                    <Calendar className="w-3.5 h-3.5 text-[#821422] shrink-0" />
                    <span><strong>दिनांक:</strong> मंगलवार, 24 नवम्बर 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#24140E]">
                    <Clock className="w-3.5 h-3.5 text-[#821422] shrink-0" />
                    <span><strong>शुभ मुहूर्त:</strong> सायं 6:00 बजे से</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-[#B88632]/40 mb-2.5">
                  <div className="flex items-start gap-1.5 text-xs font-devanagari text-[#24140E]">
                    <MapPin className="w-3.5 h-3.5 text-[#821422] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#821422]">स्थान:</strong>
                      <p className="mt-0.5 leading-relaxed font-medium">
                        वृन्दावन लॉन, लोलाई,
                        <br />
                        एमिटी यूनिवर्सिटी के निकट,
                        <br />
                        लखनऊ, उत्तर प्रदेश।
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-[#4A2618] font-devanagari leading-relaxed mb-3">
                  पवित्र अग्नि के समक्ष वैदिक मंत्रोच्चार एवं सप्तपदी के साथ विवाह संस्कार सम्पन्न होगा।
                </p>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={vrindavanLawnMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg btn-patrika-maroon text-[11px] font-devanagari font-bold"
                  >
                    <Navigation className="w-3 h-3 text-[#F6D155]" />
                    <span>रास्ता देखें</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                  </a>
                  <a
                    href={vivahCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg btn-patrika-outline text-[11px] font-devanagari font-bold"
                  >
                    <Calendar className="w-3 h-3 text-[#821422]" />
                    <span>कैलेंडर में जोड़ें</span>
                  </a>
                </div>
              </div>

              {/* 3. विदाई */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF5EB] border-2 border-[#821422]/30 shadow-sm">
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="p-1.5 rounded-lg bg-[#821422] text-[#FFFDF7] shrink-0">
                    <DoliPalanquinIcon className="w-5 h-5 text-[#F6D155]" />
                  </span>
                  <div>
                    <span className="text-[10px] font-devanagari font-bold text-[#821422] uppercase tracking-wider">
                      तृतीय दिवस
                    </span>
                    <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] leading-tight">
                      3. विदाई समारोह
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-devanagari mb-2.5">
                  <div className="flex items-center gap-1.5 text-[#24140E]">
                    <Calendar className="w-3.5 h-3.5 text-[#821422] shrink-0" />
                    <span><strong>दिनांक:</strong> बुधवार, 25 नवम्बर 2026</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FFFDF9] border border-[#B88632]/30 mb-3">
                  <div className="flex items-start gap-1.5 text-xs font-devanagari text-[#24140E]">
                    <MapPin className="w-3.5 h-3.5 text-[#821422] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#821422]">स्थान:</strong>
                      <p className="mt-0.5 leading-relaxed">
                        वृन्दावन लॉन, लोलाई,
                        <br />
                        लखनऊ, उत्तर प्रदेश।
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={vrindavanLawnMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg btn-patrika-outline text-[11px] font-devanagari font-bold"
                >
                  <Navigation className="w-3 h-3 text-[#821422]" />
                  <span>वृन्दावन लॉन का रास्ता देखें</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════ SECTION DIVIDER */}
      <div className="flex items-center justify-center gap-3 py-2 px-4">
        <div className="h-[1px] flex-1 max-w-[80px] bg-[#B88632]/50" />
        <DiyaIcon className="w-5 h-5 text-[#821422]/60" />
        <div className="h-[1px] flex-1 max-w-[80px] bg-[#B88632]/50" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: पारिवारिक आमंत्रण एवं संपर्क
      ═══════════════════════════════════════════════════════════ */}
      <div id="parivar" className="max-w-lg mx-auto w-full px-3 py-4 sm:py-6">
        <div className="patrika-card rounded-2xl p-4 sm:p-6 relative overflow-hidden bg-[#FFFDF9]">
          <PatrikaCorner position="top-left" className="absolute top-1.5 left-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="top-right" className="absolute top-1.5 right-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="bottom-left" className="absolute bottom-1.5 left-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />
          <PatrikaCorner position="bottom-right" className="absolute bottom-1.5 right-1.5 w-10 h-10 sm:w-14 sm:h-14 text-[#821422]/70" />

          <div className="patrika-inner-border rounded-xl p-3 sm:p-5 relative z-10">

            {/* ॥ अतिथि देवो भवः ॥ */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full bg-[#821422] text-[#FFFDF7] mb-2.5 shadow-sm">
                <DiyaIcon className="w-3.5 h-3.5 text-[#F6D155]" />
                <h2 className="font-devanagari text-base sm:text-lg font-bold tracking-wider">
                  ॥ अतिथि देवो भवः ॥
                </h2>
                <DiyaIcon className="w-3.5 h-3.5 text-[#F6D155]" />
              </div>

              <div className="bg-[#FAF5EB] p-4 sm:p-5 rounded-xl border-2 border-[#821422]/20 text-center space-y-2.5 shadow-sm font-devanagari">
                <p className="text-sm sm:text-base text-[#24140E] leading-relaxed font-medium">
                  ईश्वर की असीम कृपा एवं पूज्यनीय बड़े-बुजुर्गों के आशीर्वाद से श्रीवास्तव एवं सिंह परिवार इस शुभ विवाह के पावन अवसर पर आपका हार्दिक स्वागत एवं अभिनंदन करता है।
                </p>
                <p className="text-xs sm:text-sm text-[#4A2618] leading-relaxed">
                  दो परिवारों के इस पवित्र मिलन एवं नवजीवन के शुभारम्भ पर आपकी गरिमामयी उपस्थिति और शुभाशीष हमारे लिए अमूल्य हैं।
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#821422] pt-1">
                  कृपया सपरिवार पधारकर वर-वधू को अपना आशीर्वाद प्रदान करें।
                </p>
                <div className="pt-2 border-t border-[#B88632]/40">
                  <p className="text-[11px] uppercase tracking-widest text-[#821422] font-bold">
                    सादर आमंत्रण,
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#24140E] mt-0.5">
                    श्रीवास्तव एवं सिंह परिवार
                  </p>
                </div>
              </div>
            </div>

            {/* ॥ स्नेही स्वजन ॥ */}
            <div className="text-center mb-5 pt-3 border-t-2 border-[#B88632]/40">
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full bg-[#821422]/10 border border-[#821422]/30 mb-1.5">
                <SwastikIcon className="w-3 h-3 text-[#821422]" />
                <h2 className="font-devanagari text-base sm:text-lg font-bold text-[#821422] tracking-wider">
                  ॥ स्नेही स्वजन ॥
                </h2>
                <SwastikIcon className="w-3 h-3 text-[#821422]" />
              </div>
            </div>

            {/* 4 Sections */}
            <div className="space-y-3 mb-8">
              {/* स्वागतकर्ता */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
                <div className="inline-flex p-1.5 rounded-full bg-[#821422] text-[#FFFDF7] mb-1.5 shadow-sm">
                  <Users className="w-4 h-4 text-[#F6D155]" />
                </div>
                <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] mb-2.5">
                  स्वागतकर्ता:
                </h3>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-devanagari text-[#24140E] font-medium">
                  {swagatkartaList.map((name, idx) => (
                    <div key={idx} className="p-1.5 rounded-lg bg-[#FFFDF9] border border-[#B88632]/25">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* दर्शनाभिलाषी */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
                <div className="inline-flex p-1.5 rounded-full bg-[#821422] text-[#FFFDF7] mb-1.5 shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#F6D155]" />
                </div>
                <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] mb-2.5">
                  दर्शनाभिलाषी:
                </h3>
                <div className="space-y-1.5 text-xs font-devanagari text-[#24140E] font-medium">
                  {darshanabhilashiList.map((name, idx) => (
                    <div key={idx} className="p-1.5 rounded-lg bg-[#FFFDF9] border border-[#B88632]/25">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* विनीत */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
                <div className="inline-flex p-1.5 rounded-full bg-[#821422] text-[#FFFDF7] mb-1.5 shadow-sm">
                  <Heart className="w-4 h-4 text-[#F6D155]" />
                </div>
                <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] mb-1.5">
                  विनीत:
                </h3>
                <div className="p-2.5 rounded-lg bg-[#FFFDF9] border border-[#B88632]/25 text-xs font-devanagari text-[#24140E] leading-relaxed">
                  {vinitText}
                </div>
              </div>

              {/* बाल मनुहार */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#B88632]/40 text-center">
                <div className="inline-flex p-1.5 rounded-full bg-[#821422] text-[#FFFDF7] mb-1.5 shadow-sm">
                  <Baby className="w-4 h-4 text-[#F6D155]" />
                </div>
                <h3 className="font-devanagari text-sm sm:text-base font-bold text-[#821422] mb-1.5">
                  बाल मनुहार:
                </h3>
                <div className="p-2.5 rounded-lg bg-[#FFFDF9] border border-[#B88632]/25 space-y-1">
                  <p className="font-devanagari text-sm font-bold text-[#821422]">
                    यशस्वी एवं अनाया
                  </p>
                  <p className="font-devanagari text-[11px] text-[#5C3A28] font-bold">
                    मामा-मामी:
                  </p>
                  <p className="font-devanagari text-xs text-[#24140E] italic leading-relaxed pt-1 border-t border-[#B88632]/20">
                    &ldquo;मीठी-मीठी बातों से सबको मनाएंगे, मामा-मामी की शादी में जरूर-जरूर आएंगे!&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* ॥ संपर्क ॥ */}
            <div className="text-center mb-5 pt-3 border-t-2 border-[#B88632]/40">
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full bg-[#821422] text-[#FFFDF7] mb-1.5 shadow-sm">
                <Phone className="w-3.5 h-3.5 text-[#F6D155]" />
                <h2 className="font-devanagari text-base sm:text-lg font-bold tracking-wider">
                  ॥ संपर्क सूत्र ॥
                </h2>
                <Phone className="w-3.5 h-3.5 text-[#F6D155]" />
              </div>
              <p className="text-[11px] sm:text-xs text-[#5C3A28] font-devanagari">
                किसी भी जानकारी या सहायता के लिए संपर्क करें।
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contacts.map((contact, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF5EB] border-2 border-[#821422]/20 text-center shadow-sm"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#821422] text-[#FFFDF7] text-[10px] font-devanagari font-bold mb-1.5">
                    {contact.relation}
                  </span>
                  <h4 className="font-devanagari text-base sm:text-lg font-bold text-[#821422]">
                    {contact.name}
                  </h4>
                  <p className="font-devanagari text-sm font-bold text-[#24140E] mt-0.5 tabular-nums">
                    मोबाइल: {contact.phone}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-[#B88632]/30">
                    <a
                      href={`tel:+91${contact.cleanPhone}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg btn-patrika-maroon text-xs font-devanagari font-bold"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F6D155]" />
                      <span>कॉल करें</span>
                    </a>
                    <a
                      href={`https://wa.me/91${contact.cleanPhone}?text=${contact.whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-devanagari font-bold shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <PatrikaFooter />
    </main>
  );
}
