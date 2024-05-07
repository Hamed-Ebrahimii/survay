import { blue, orange, yellow } from "@mui/material/colors";
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
        art: 'url("/img/60.customer-satisfaction-survey-concept-businessman-touching-smiley-face-icon-with-yellow-five-stars-correct-mark-evaluate-product-service_50039-2495.jpg")',
      },
      fontFamily: {
        yekan: "yekan",
      },
      colors: {
        blue: {
          dark: "#253382",
          custome: "#354faa",
          primary: "#4663c2",
          hover: "#85A5F5",
        },
        orange : {
          primary : '#FFC470',
          secondary : '#FF8911'
        },
        yellow : {
          primary : '#FFF455',
          secondary : '#FDDE55'
        }
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
