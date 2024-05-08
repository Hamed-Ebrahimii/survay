const withMT = require("@material-tailwind/react/utils/withMT");
import type { Config } from "tailwindcss";

const config: Config = withMT({
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
        neo : ' -5px 11px 80px -25px rgba(0,0,0,0.52)',
        normal  : ' 6px 6px 10px 0px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
});
export default config;
