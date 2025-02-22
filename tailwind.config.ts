import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        secondaryBackground: "var(--secondary-background)",
        foreground: "var(--foreground)",
        mainBlue: "var(--primary-blue)",
        mainGray: "var(--primary-gray)",
        lavenderLight: "var(--lavender-light)",
        lavenderLighter: "var(--lavender-lighter)",
        input: "var(--input)",
        footer: "var(--footer-ground)",
      },
      backgroundImage: {
        mainGradient: "var(--main-gradient)",
      },
      dropShadow: {
        main: "var(--primary-drop-shadow)",
        secondary: "var(--secondary-drop-shadow)",
        card: "var(--card-drop-shadow)",
        statistics: "var(--statistics-drop-shadow)",
        dataCard: "var(--data-card-drop-shadow)",
        step: "var(--step-drop-shadow)",
        bonus: "var(--bonus-drop-shadow)",
        testimonial: "var(--testimonial-drop-shadow:)",
      },
      borderColor: {
        main: "var(--main-border)",
        secondary: "var(--secondary-border)",
        card: "var(--main-card)",
        testimonial: "var(--testimonial-border)",
      },
      borderWidth: {
        light: "var(--border-light)",
      },
      borderRadius: {
        large: "var(--radius-large)",
        larger: "var(--radius-larger)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
