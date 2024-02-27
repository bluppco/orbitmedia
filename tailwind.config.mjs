/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
	  fontFamily: {

			"proxima_nova_condensed": [ "proxima-nova-condensed", "sans-serif" ],
			"proxima_nova": [ "proxima-nova", "sans-serif" ]

		},
		colors: {

			"om_orange": "#d85b41",
			"om_zinc": "#f2f2f3",
			"om_red": "#bf472d",
			"om_carbon_black": "#1a1a1a",
			"om_black": "#0d0d0d"

		},
    screens: {

      "mac": "1440px"

    }
    },
  },
  plugins: [require("tailwindcss-animate")],
}