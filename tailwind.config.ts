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
          custome: "#5AB2FF",
          primary: "#4663c2",
          hover: "#85A5F5",
        },
        orange: {
          primary: "#FFBB70",
          secondary: "#ED9455",
        },
        yellow: {
          primary: "#FFF455",
          secondary: "#FDDE55",
        },
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
      boxShadow : {
        neo : ' 6px 6px 10px -1px rgba(0,0,0,0.15), -3px -3px 5px -1px rgba(255,255,255,0.7)'
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
