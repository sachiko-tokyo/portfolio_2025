import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#666B68",
        second: "#BFB378",
        bg: "#fafafa",
      },
    },
    screens: {
      xl: {max: '1400px'},
      lg: {max: '1150px'},
      md: {max: '767px'},
      sm: {max: '639px'}
    },
  },
  plugins: [],
} satisfies Config;
