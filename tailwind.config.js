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
        maguntia: ["var(--font-maguntia)"],
        montserrat: ["var(--font-montserrat)"],
        nunito: ["var(--font-nunito)"],
        lora: ["var(--font-lora)"],
        opensans: ["var(--font-open-sans)"],
        allura: ["var(--font-allura)"],
        beau: ["var(--font-beau)"],
      },
    },
  },
  plugins: [],
};
