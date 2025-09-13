import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4EAC68", // VotixCare main green
          light: "#7FDDA3",
          dark: "#2A7F46",
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#4EAC68',
          600: '#2A7F46',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          DEFAULT: "#4E8EF7", // Secondary blue
          light: "#7CAFFC",
          dark: "#2661D4",
        },
        success: {
          DEFAULT: "#22C55E",
        },
        warning: {
          DEFAULT: "#FACC15",
        },
        destructive: {
          DEFAULT: "#EF4444",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        heading: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
}
export default config