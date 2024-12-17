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
        primary: {
          DEFAULT: '#2B2B2B', // Primary Dark Gray
          text: '#2D2D2D',    // Text Dark Gray
        },
        secondary: '#D72638', // Deep Red
        highlight: '#FACC15', // Vibrant Yellow
        neutral: {
          DEFAULT: '#F5F5F5', // Light Gray
        },
        text: {
          white: '#FFFFFF',   // Text White
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
