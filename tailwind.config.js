const { Babylonica, Niconne } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        anton: ["var(--font-anton)"],
        montserrat: ["var(--font-montserrat)"],
        nunito: ["var(--font-nunito)"],
        lora: ["var(--font-lora)"],
        opensans: ["var(--font-open-sans)"],
        allura: ["var(--font-allura)"],
        caveat: ["var(--font-caveat)"],
        luxurious: ["var(--font-luxurious)"],
        rocksalt: ["var(--font-rocksalt)"],
        playfair: ["var(--font-playfair)"],
        dangrek: ["var(--font-dangrek)"],
        majormono: ["var(--font-majormono)"],
        ballet: ["var(--font-ballet)"],
        forum: ["var(--font-forum)"],
      },
    },
  },
  plugins: [],
};
