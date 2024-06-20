/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      primary: "var(--font-Manrose)",
    },
    fontSize: {
      Heading: "5rem",
      nav: "2rem",
      body: "1.25rem",
      accent: "1rem",
      subheading: "2rem",
      work: "3.5rem",
      mobHeading: "2.25rem",
      mobnav: "1.25rem",
      mobbody: "0.75rem",
      mobaccent: "0.875rem",
      mobsubheading: "1rem",
      mobwork: "2.5rem",
      mdheading: "3rem",
    },
    letterSpacing: {
      tight: "-.035em",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        prim: "#E3E1DE",
        txt: "#000000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
