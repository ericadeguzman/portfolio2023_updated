/** @type {import('tailwindcss').Config} */

//this funciton is so that we can rgba values (colors using opacity)

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "400px",
      // = > @media (min-width: 400px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        lime: "#84cc16 ",
      },
      fontFamily: {
        bungeeFont: "var(--font-bungeeFont)",
        pressStartFont: "var(--font-pressStartFont)",
      },
      textColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          highlight: withOpacity("--color-highlight"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          background: withOpacity("--color-background"),
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
          button: withOpacity("--color-button"),
          buttonHover: withOpacity("--color-buttonHover"),
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideY: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideYb: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slideY: "slideY 2s",
        slideYb: "slideYb 2s",
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
