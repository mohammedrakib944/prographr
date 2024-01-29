import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        blog_light: {
          primary: "#7666E3",
          secondary: "#032041",
          accent: "#35198c",
          neutral: "#717066",
          "base-100": "#FFFFFF",
          "base-200": "#f1f1f1",
          info: "#58a6ff",
          success: "#00d600",
          warning: "#ef4444",
          error: "#0b397f4d",
        },
      },
    ],
  },
};
export default config;
