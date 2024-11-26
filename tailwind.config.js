import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#fafafa",
          100: "#e5e5e5",
          200: "#c9c9c9",
          300: "#bdbdbd",
          400: "#a4a4a4",
          500: "#8a8a8a",
          600: "#555555",
          700: "#373738",
          800: "#28282a",
          900: "#18181b",
        },
        teal: {
          50: "#ecf3f3",
          800: "#2f4a4a",
          900: "#182525",
        },
        yellow: {
          600: "#c38504",
        },
        green: {
          50: "#f0fff1",
          800: "#186325",
        },
        red: {
          50: "#fff0f1",
          800: "#b10000",
        },
      },
      fontFamily: {
        sans: ["Instrument Sans", ...fontFamily.sans],
        montserrat: ["Montserrat", ...fontFamily.sans],
      },
      fontSize: {
        m: ["0.9375rem", "1.35rem"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1100px",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        "autofill-220": "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
      maxWidth: {
        prose: "45ch",
      },
      strokeWidth: {
        0.5: "0.5",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities(
        {
          ".overflow-wrap-anywhere": {
            overflowWrap: "anywhere",
          },
          ".text-stroke-transparent": {
            WebkitTextStroke: "0.4px transparent",
          },
          ".text-stroke-neutral-900": {
            WebkitTextStroke: "0.4px " + theme("colors.neutral.900"),
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
