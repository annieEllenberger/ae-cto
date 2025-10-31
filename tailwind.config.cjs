/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Option 1: Current Emerald (bright & energetic)
        // primary: {
        //   DEFAULT: '#10b981', // emerald-500
        //   hover: '#059669',   // emerald-600
        //   light: '#6ee7b7',   // emerald-300
        // },
        // Option 2: Deeper Emerald (more sophisticated)
        primary: {
          DEFAULT: '#059669', // emerald-600
          hover: '#047857',   // emerald-700
          light: '#34d399',   // emerald-400
        },
        // Option 3: Teal (tech-forward, slightly cooler)
        // primary: {
        //   DEFAULT: '#14b8a6', // teal-500
        //   hover: '#0d9488',   // teal-600
        //   light: '#5eead4',   // teal-300
        // },
        // Option 4: Mint Green (softer, approachable)
        // primary: {
        //   DEFAULT: '#22c55e', // green-500
        //   hover: '#16a34a',   // green-600
        //   light: '#86efac',   // green-300
        // },
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
