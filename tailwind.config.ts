import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        "bright-blue": "hsl(220, 98%, 61%)",
        "bg-from": "hsl(192, 100%, 67%)",
        "bg-to": "hsl(280, 87%, 65%)",

        //light
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue-1": "hsl(235, 19%, 35%)",

        //dark
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue-hover": "hsl(234, 39%, 85%)",
        "very-dark-grayish-blue-2": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-3": "hsl(237, 14%, 26%)",
      },
      fontSize: {
        regular: "18px",
      },
      fontFamily: {
        josefin: "Josefin Sans",
      },
      fontWeight: {
        medium: "400",
        bold: "700",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
