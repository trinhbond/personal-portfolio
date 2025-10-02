/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderColor: "#E5E7EB",
    colors: {
      green: {
        light: "#F2F8F1",
        dark: "#CAE2A2",
        darker: "#749B31",
      },
    },
  },
};
