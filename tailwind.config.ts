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
        navy: {
          DEFAULT: "#0D2B52",
          light: "#1a4080",
          dark: "#091e3a",
          text: "#152238",
        },
        green: {
          golf: "#3F7D3B",
          "golf-light": "#4e9849",
          "golf-dark": "#2d5c2a",
        },
        gray: {
          bg: "#F6F8FA",
          border: "#E8ECEF",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(13, 43, 82, 0.08)",
        "card-hover": "0 8px 40px rgba(13, 43, 82, 0.14)",
        navy: "0 4px 20px rgba(13, 43, 82, 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(9,30,58,0.85) 0%, rgba(13,43,82,0.70) 60%, rgba(63,125,59,0.30) 100%)",
        "section-gradient": "linear-gradient(180deg, #F6F8FA 0%, #ffffff 100%)",
        "navy-gradient": "linear-gradient(135deg, #0D2B52 0%, #1a4080 100%)",
        "green-gradient": "linear-gradient(135deg, #3F7D3B 0%, #4e9849 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
