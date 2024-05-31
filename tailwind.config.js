/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#135D66",
        secondary: "#76ABAE",
        third: "#E3FEF7",
      },
      fontFamily: {
        poppinsReguler: ["Poppins-Reguler", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsSemiBold: ["Poppins-semiBold", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
      },
      fontSize: {
        header1: ["32px"],
        header2: ["24px"],
        header3: ["20px"],
        body: ["16px"],
        subhead: ["14px"],
        caption: ["12px"],
      },
    },
  },
  plugins: [],
};
