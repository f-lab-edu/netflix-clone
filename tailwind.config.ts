const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "108": "27rem",
      },
      height: {
        "80vh": "80vh",
      },
      gridTemplateColumns: {
        "preview-detail": "minmax(0,2fr) minmax(0,1fr)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
