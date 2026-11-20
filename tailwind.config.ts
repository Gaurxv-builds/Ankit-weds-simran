import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FFF7E8",
          50: "#FFFCF7",
          100: "#FFF7E8",
          200: "#FDF0D5",
          300: "#FBE6BE",
          400: "#F7D69B",
          500: "#EFC172",
        },
        burgundy: {
          DEFAULT: "#800D29",
          light: "#9A1536",
          dark: "#6B0A22",
        },
        maroon: {
          DEFAULT: "#59091D",
          dark: "#400614",
          deep: "#2B030D",
        },
        gold: {
          DEFAULT: "#B88632",
          antique: "#B88632",
          soft: "#D9B56F",
          pale: "#F3E3BC",
          dark: "#8C631F",
          gradient: "#E5C158",
        },
        darktext: {
          DEFAULT: "#3B2525",
          light: "#5A3D3D",
          muted: "#7A5C5C",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        devanagari: ["var(--font-devanagari)", "Noto Serif Devanagari", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;