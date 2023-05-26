/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#f2f2f2",
        200: "#d9d9d9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1a1a1a",
        700: "#0d0d0d",
      },
      feedback: {
        danger: "#e25858",
      },
      product: {
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        purple: "#8284FA",
        purpleDark: "#5E60CE",
      },
    },
    fontSize: {
      sm: ["12px", { lineHeight: "140%" }],
      md: ["14px", { lineHeight: "140%" }],
      lg: ["16px", { lineHeight: "140%" }],
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
