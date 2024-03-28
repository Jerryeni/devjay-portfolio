/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
				sans: ["Rubik", "sans-serif"],
			  },
      colors: {
        secondary: "#B16CEA",
        background: "#0F030C",
        border: "#BD40B2",
        white2: " #F0D3E7"
      },
      backgroundImage: {
        'text_gradient': 'linear-gradient(137.59deg, #FF8660 9.86%, #8000FF 100%)',
        'text_gradient2': 'linear-gradient(85.81deg, #FF8660 3.84%, #BD40B2 75.17%, #8000FF 141.52%)',
        

    }
    },
  },

  plugins: [],
};

module.exports = config;
