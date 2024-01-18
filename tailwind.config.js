const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        lg: "30px",
        xl: "50px",
        "2xl": "80px",
      },
    },
    extend: {
      backgroundImage: {
        BG1: "url('https://i.ibb.co/z6PG6Nb/bg.jpg')",
        BG2: "url('https://i.ibb.co/SXyx1R4/bgtwo.jpg')",
        "common-bg": "linear-gradient(to right, #fa5252, #dd2476)",
        "common-bg-hover": "linear-gradient(to left, #fa5252, #dd2476)",
      },
    
      colors: {
        whiteColor: "#fff",
        lightWhiteColor: "#F3F6F6",
        darkColor: "#111111",
        lightdarkColor: "#1D1D1D",
        primaryColor: "#00BE63",
        secondoryColor: "#5b6e7f",
        lightSkyBlue: "#98d5c7",
      },
    },
  },
  plugins: [nextui()],
};
