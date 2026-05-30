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
        brand: {
          50: "#f8f7f4",
          100: "#efede6",
          200: "#ddd8cb",
          300: "#c4bcaa",
          400: "#a89d86",
          500: "#8f826c",
          600: "#7a6d5a",
          700: "#64584a",
          800: "#544a40",
          900: "#484037",
          950: "#26211c",
        },
        ink: {
          DEFAULT: "#1a1816",
          muted: "#5c5650",
          faint: "#8a837a",
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#faf9f7",
          border: "#e8e5df",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(26, 24, 22, 0.06), 0 4px 12px rgba(26, 24, 22, 0.04)",
        card: "0 2px 8px rgba(26, 24, 22, 0.05), 0 12px 32px rgba(26, 24, 22, 0.06)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
