/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        franchise: ['"Franchise Regular"', "sans-serif"],
        inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
