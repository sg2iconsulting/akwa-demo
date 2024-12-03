import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'slider-shadow': '0px 0px 34px -8px rgba(0, 0, 0, 0.36)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  darkMode: 'class'
} satisfies Config;
