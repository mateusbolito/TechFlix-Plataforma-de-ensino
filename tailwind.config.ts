import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      body: {
        margin: "0",
        padding: "0",
        border: "0",
      },
      colors: {
        background: " #0f0f0f",
        colorsecondary: "rgb(41, 41, 46, 0.10);",
        colorViewProfileButon: "rgb(141 141 153 );",
        roseColor: "#D8B4FE",
      },
      maxWidth: {
        "7xl": "82rem",
      },
    },
  },
  plugins: [],
};
export default config;
