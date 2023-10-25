import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins5: "var(--font-poppins5)",
        poppins6: "var(--font-poppins6)",
        poppins7: "var(--font-poppins7)"
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-elevation")({
      color: "#000000",
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#222221",
          secondary: "#f3f4f6",
          accent: "#2563eb",
          neutral: "#535353",
          info: "#252C34",
          success: "#1d4ed8",
          warning: "#fbbd23",
          error: "#f43f5e",
        },
      },
    ],
  },
};
export default config;
