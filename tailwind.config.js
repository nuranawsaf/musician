module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1267E4",
        secondary: "#FF8717",
        tertiary: "#ED1C3D",
        white_orange: "#F5F2EF",
        black: "#07031F",
        orange: "#ff6d00",
        dark_blue: "#161a3d",
        light_blue: "#193956",
        cheviot: "#f7f3ea",
      },
      letterSpacing: {
        widest: '.38em',
      },
      fontFamily: {
        lora: ["Lora"],
        inter: ["Inter"],
        roboto: ["Roboto"],
        oswald: ["Oswald"],
      },
    },
  },
  variants: {},
  plugins: [],
};
