/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        kdfj: ["Edu AU VIC WA NT Pre", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
