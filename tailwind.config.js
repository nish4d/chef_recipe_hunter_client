/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C69F7C",

          secondary: "#374151",

          accent: "#ffe0c6",

          neutral: "#333333",

          "base-100": "#F2F2F3",

          info: "#6184D6",

          success: "#4EE994",

          warning: "#B48108",

          error: "#DF2A45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
