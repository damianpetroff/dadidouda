import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "sheet": "url('/img/sheet.png')",
      },
      colors: {
        'gray': '#292929',
        'blue': '#60A3D6',
        'orange': '#F48F49',
        'pink': '#DC639A',
        'yellow': '#EFD84D'
      }
    },
  },
  plugins: [],
};
export default config;
