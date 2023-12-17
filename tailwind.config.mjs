/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {

				"proxima_nova_condensed": [ "proxima-nova-condensed", "sans-serif" ],

			},
			colors: {

				"urbaninsight_orange": "#BF472D",

			}
		},
	},
	plugins: [],
}
