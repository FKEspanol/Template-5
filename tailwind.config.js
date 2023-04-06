/** @type {import('tailwindcss').Config} */
import { theme1, theme2, theme3 } from "./themes";
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      ...theme3,
    },
  },
  plugins: [],
};
