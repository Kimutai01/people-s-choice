/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        allura: ["Allura", "cursive"],
        barlow: ["Barlow", "sans"],
        josefin: ["Josefin Sans", "sans"],
      },
    },
  },
  plugins: [],
};
