import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1B2E6B',
          orange: '#F47920',
        },
        navy: '#1B2E6B',
        orange: {
          DEFAULT: '#F47920',
          dark: '#D4670A'
        },
        "orange-dark": "#D66315",
        "theme-bg": "#FFFFFF",
        "theme-text": "#2C2C2C",
        "theme-muted": "#6B7280",
        "theme-border": "#E5E7EB",
      },
      keyframes: {
        "shimmer-sweep": {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "shimmer-sweep": "shimmer-sweep 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
