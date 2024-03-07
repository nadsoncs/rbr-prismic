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
        rbr: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#F0F9FF',
          300: '#C0E9FF',
          400: '#d2bab0',
          500: '#02449D',
          600: '#a18072',
          700: '#1E3A8A',
          800: '#846358',
          900: '#43302b',

          750: '#02449D',
          350: '#81D3FF',
          250: '#C0E9FF',
          150: '#F0F9FF',
          950: '#01486E'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
