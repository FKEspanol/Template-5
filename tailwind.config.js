/** @type {import('tailwindcss').Config} */
import { theme1, theme2, theme3, theme4 } from "./themes";
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      ...theme4,
    },
  },
  plugins: [],
};
