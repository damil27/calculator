/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        custom: {
          "key-dark": "var(--text-dark-color)",
          "key-white": "var(--text-white-color)",
        },
      },
      backgroundColor: {
        custom: {
          main: "var(--main-background-color)",
          keypad: "var(--keypad-background-color)",
          screen: "var(--screen-background-color)",
          key: "var(--key-background-color)",
          toggle: "var(--key-toggle-shadow)",
        },
      },
      boxShadow: {
        "key-shadow-main": " 0px 4px var(--key-shadow-color) ",
        "key-shadow-text": " 0px 4px var(--key-shadow) ",
        "key-background-shadow": " 0px 4px var(--key-background-shadow-color) ",
      },
      fontFamily: {
        Spartan: "Spartan, sans-serif ",
      },
    },
  },
  plugins: [],
};
