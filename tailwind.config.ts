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
        accent: {
          DEFAULT: "#6366F1",
          hover: "#4F46E5",
          light: "#EEF2FF",
          ring: "#C7D2FE",
        },
        ink: {
          DEFAULT: "#111827",
          secondary: "#374151",
          muted: "#6B7280",
          faint: "#9CA3AF",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#FAFAFB",
          border: "#E5E7EB",
        },
        charcoal: "#111827",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(17, 24, 39, 0.06), 0 4px 12px rgba(17, 24, 39, 0.04)",
        card: "0 2px 8px rgba(17, 24, 39, 0.05), 0 12px 32px rgba(17, 24, 39, 0.06)",
        glow: "0 0 80px rgba(99, 102, 241, 0.12)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
