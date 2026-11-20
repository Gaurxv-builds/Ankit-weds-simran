import React from "react";

export function GaneshaIcon({ className = "w-16 h-16 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-label="Lord Ganesha">
      <path d="M50 8 L57 22 L43 22 Z" opacity="0.9" />
      <circle cx="50" cy="6" r="2.5" />
      <path d="M40 22 C40 18, 60 18, 60 22 L58 26 L42 26 Z" />
      <path d="M38 32 C26 28, 20 40, 24 52 C28 60, 36 56, 38 48 Z" opacity="0.85" />
      <path d="M62 32 C74 28, 80 40, 76 52 C72 60, 64 56, 62 48 Z" opacity="0.85" />
      <circle cx="50" cy="38" r="14" opacity="0.95" />
      <path d="M49 28 L51 28 L51 36 L49 36 Z" fill="#800D29" />
      <circle cx="50" cy="38" r="2" fill="#800D29" />
      <path d="M47 44 C47 54, 45 68, 36 74 C31 77, 26 73, 27 68 C28 64, 34 65, 34 68 C34 70, 38 70, 42 64 C45 58, 45 50, 45 44 Z" />
      <circle cx="28" cy="64" r="3" fill="#D9B56F" />
      <path d="M54 44 L56 48 L53 47 Z" fill="#FFF7E8" />
    </svg>
  );
}

export function LotusMotif({ className = "w-10 h-10 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" fill="currentColor" className={className} aria-hidden="true">
      <path d="M50 10 C46 25, 45 45, 50 65 C55 45, 54 25, 50 10 Z" />
      <path d="M50 65 C40 50, 32 30, 38 18 C45 28, 48 45, 50 65 Z" opacity="0.9" />
      <path d="M50 65 C60 50, 68 30, 62 18 C55 28, 52 45, 50 65 Z" opacity="0.9" />
      <path d="M50 65 C32 55, 18 42, 22 30 C32 38, 42 52, 50 65 Z" opacity="0.75" />
      <path d="M50 65 C68 55, 82 42, 78 30 C68 38, 58 52, 50 65 Z" opacity="0.75" />
      <path d="M30 68 C45 74, 55 74, 70 68 C62 76, 38 76, 30 68 Z" fill="#800D29" />
    </svg>
  );
}

export function KalashIcon({ className = "w-12 h-14 text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="currentColor" className={className} aria-hidden="true">
      <path d="M40 8 C48 18, 48 26, 40 32 C32 26, 32 18, 40 8 Z" fill="#800D29" />
      <path d="M39 4 L41 4 L40 10 Z" fill="#B88632" />
      <path d="M40 30 C25 22, 16 16, 12 24 C16 32, 28 35, 40 34 Z" opacity="0.9" />
      <path d="M40 30 C55 22, 64 16, 68 24 C64 32, 52 35, 40 34 Z" opacity="0.9" />
      <path d="M40 32 C30 26, 22 26, 20 34 C26 38, 34 38, 40 36 Z" opacity="0.8" />
      <path d="M40 32 C50 26, 58 26, 60 34 C54 38, 46 38, 40 36 Z" opacity="0.8" />
      <rect x="28" y="36" width="24" height="6" rx="2" fill="#B88632" />
      <line x1="28" y1="39" x2="52" y2="39" stroke="#800D29" strokeWidth="2" />
      <path d="M28 42 C16 48, 14 74, 24 86 C28 90, 52 90, 56 86 C66 74, 64 48, 52 42 Z" />
      <circle cx="40" cy="64" r="5" fill="#800D29" />
      <rect x="30" y="86" width="20" height="4" rx="1" opacity="0.8" />
    </svg>
  );
}

export function HavanKundIcon({ className = "w-10 h-10 text-gold-antique" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M40 12 C44 22, 49 26, 44 34 C41 28, 37 28, 38 22 C34 26, 31 32, 36 38 C30 35, 30 26, 36 18 C38 15, 39 12, 40 12 Z" fill="#7A0C22" stroke="none" />
      <path d="M40 22 C42 27, 44 29, 42 34 C40 31, 38 31, 39 28 C37 30, 35 33, 38 36 C35 34, 35 29, 38 25 Z" fill="#C49F58" stroke="none" />
      <rect x="22" y="38" width="36" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="26" y="43" width="28" height="5" rx="1" fill="currentColor" fillOpacity="0.2" />
      <rect x="30" y="48" width="20" height="6" rx="1" fill="currentColor" fillOpacity="0.25" />
      <line x1="16" y1="54" x2="64" y2="54" strokeWidth="2" />
      <path d="M22 54 L26 62 L54 62 L58 54" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

export function MandapIcon({ className = "w-10 h-10 text-gold-antique" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M18 64 L18 28 C18 22, 28 16, 40 16 C52 16, 62 22, 62 28 L62 64" />
      <path d="M24 64 L24 30 C24 25, 32 20, 40 20 C48 20, 56 25, 56 30 L56 64" strokeDasharray="3 2" />
      <rect x="14" y="62" width="8" height="4" fill="currentColor" fillOpacity="0.2" />
      <rect x="58" y="62" width="8" height="4" fill="currentColor" fillOpacity="0.2" />
      <path d="M18 32 C28 38, 34 38, 40 34 C46 38, 52 38, 62 32" strokeWidth="1.4" />
      <circle cx="29" cy="37" r="2" fill="#7A0C22" stroke="none" />
      <circle cx="40" cy="35" r="2.5" fill="#C49F58" stroke="none" />
      <circle cx="51" cy="37" r="2" fill="#7A0C22" stroke="none" />
      <circle cx="40" cy="12" r="3" fill="#C49F58" stroke="none" />
    </svg>
  );
}

export function DoliPalanquinIcon({ className = "w-10 h-10 text-gold-antique" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <line x1="8" y1="36" x2="72" y2="36" strokeWidth="2.5" />
      <path d="M24 36 C24 24, 32 18, 40 18 C48 18, 56 24, 56 36 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="16" r="2.5" fill="#7A0C22" stroke="none" />
      <rect x="24" y="36" width="32" height="22" rx="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M30 42 C30 38, 50 38, 50 42 L50 52 C50 54, 30 54, 30 52 Z" strokeDasharray="2 2" strokeWidth="1.2" />
      <line x1="28" y1="58" x2="28" y2="64" strokeWidth="2" />
      <line x1="52" y1="58" x2="52" y2="64" strokeWidth="2" />
    </svg>
  );
}

export function SwastikIcon({ className = "w-8 h-8 text-[#821422]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="स्वास्तिक">
      <path
        d="M50 15 L50 85 M15 50 L85 50 M50 15 L85 15 M85 50 L85 85 M50 85 L15 85 M15 50 L15 15"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="32" cy="32" r="4.5" fill="currentColor" />
      <circle cx="68" cy="32" r="4.5" fill="currentColor" />
      <circle cx="32" cy="68" r="4.5" fill="currentColor" />
      <circle cx="68" cy="68" r="4.5" fill="currentColor" />
    </svg>
  );
}

export function DiyaIcon({ className = "w-8 h-8 text-[#C59A45]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-label="दीपक">
      <path d="M50 10 C55 24, 62 36, 50 48 C38 36, 45 24, 50 10 Z" fill="#D96B27" />
      <path d="M50 20 C53 28, 57 36, 50 42 C43 36, 47 28, 50 20 Z" fill="#F6D155" />
      <path d="M18 48 C18 70, 82 70, 82 48 C74 57, 26 57, 18 48 Z" fill="#821422" />
      <ellipse cx="50" cy="48" rx="32" ry="7" fill="currentColor" />
      <path d="M45 63 L55 63 L58 78 L42 78 Z" fill="#821422" />
      <ellipse cx="50" cy="80" rx="22" ry="5" fill="currentColor" />
    </svg>
  );
}

export function PatrikaCorner({
  className = "w-16 h-16 text-[#821422]",
  position = "top-left",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  let rotation = "";
  if (position === "top-right") rotation = "rotate-90";
  if (position === "bottom-right") rotation = "rotate-180";
  if (position === "bottom-left") rotation = "-rotate-90";

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      className={`${className} ${rotation}`}
      aria-hidden="true"
    >
      <path d="M4 76 L4 4 L76 4" strokeWidth="2.5" />
      <path d="M9 72 L9 9 L72 9" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
      <path
        d="M14 14 C24 14, 32 22, 32 32 C32 40, 24 44, 18 38 C14 34, 18 26, 24 26 C28 26, 30 28, 28 32"
        strokeWidth="1.8"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="42" cy="14" r="2" fill="currentColor" />
      <circle cx="14" cy="42" r="2" fill="currentColor" />
    </svg>
  );
}
