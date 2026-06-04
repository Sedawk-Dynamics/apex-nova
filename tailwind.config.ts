import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Extra-small phones (used by Hero headline scaling, etc.)
        xs: "475px",
        // Wide desktops / 4K — lets layouts breathe on very large displays
        "3xl": "1920px",
      },
      colors: {
        primary: {
          navy: '#1B2E6B',
          orange: '#F47920',
        },
        navy: {
          DEFAULT: '#1B2E6B',
          deep: '#0F1D4A',
          950: '#0A1538',
        },
        orange: {
          DEFAULT: '#F47920',
          dark: '#D4670A',
          glow: '#FF9A4A',
        },
        "orange-dark": "#D66315",
        "theme-bg": "#FFFFFF",
        "theme-text": "#0F1D4A",
        "theme-dark": "#1F2937",
        "theme-light": "#F7F8FC",
        "theme-muted": "#6B7280",
        "theme-border": "#E5E7EB",
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 32px rgba(244,121,32,0.45), 0 0 12px rgba(244,121,32,0.3)',
        'glow-navy': '0 0 32px rgba(27,46,107,0.4)',
        'soft': '0 10px 40px -12px rgba(15,29,74,0.18)',
        'premium': '0 24px 60px -20px rgba(15,29,74,0.25), 0 8px 24px -8px rgba(15,29,74,0.12)',
        'card-hover': '0 30px 80px -20px rgba(15,29,74,0.35)',
      },
      backgroundImage: {
        'mesh-navy': 'radial-gradient(at 20% 20%, rgba(244,121,32,0.18) 0px, transparent 45%), radial-gradient(at 80% 60%, rgba(99,138,255,0.18) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(15,29,74,0.95) 0px, transparent 50%)',
      },
      keyframes: {
        "shimmer-sweep": { "100%": { transform: "translateX(100%)" } },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "blob": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-15px,20px) scale(0.95)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        "shimmer-sweep": "shimmer-sweep 1s ease-in-out infinite",
        "marquee": "marquee 38s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "float-y": "float-y 5s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "blob": "blob 18s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "scroll-cue": "scroll-cue 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
