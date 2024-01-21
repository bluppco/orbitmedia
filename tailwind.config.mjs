/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {

				"proxima_nova_condensed": [ "proxima-nova-condensed", "sans-serif" ],
				"proxima_nova": [ "proxima-nova", "sans-serif" ]

			},
			colors: {

				"om_orange": "#d85b41",
				"om_zinc": "#f2f2f3",
				"om_red": "#bf472d",
				"om_black": "#1a1a1a"

			}
		},
	},
	plugins: [],
}
