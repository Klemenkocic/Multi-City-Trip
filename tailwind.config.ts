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
        primary: {
          orange: "#FF5C29",
          peach: "#FFF3F0",
          purple: "#931FFF",
          "purple-light": "#F0E0FF",
          blue: "#0071EB",
          "blue-light": "#EBF4FF",
          green: "#00A316",
          "green-light": "#EBFFED",
        },
        gray: {
          dark: "#181D27",
          medium: "#414651",
          light: "#A4A7AE",
          lighter: "#C9CBCF",
          lightest: "#E4E5E7",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

