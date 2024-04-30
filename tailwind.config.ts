import { blue } from "@mui/material/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          art : 'url("/img/62fb5a0685be150d73280955_the checklist manifesto.png")'
      },
      fontFamily : {
        "yekan" : "yekan"
      },
      colors : {
        blue : {
          dark : '#253382'
        } 
      }
    },
  },
  plugins: [],
};
export default config;
