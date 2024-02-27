import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare({
		runtime: {
			mode: 'local',
			type: 'pages'
		}
	}),
	image: {
		service: {
			entrypoint: "astro/assets/services/noop"
		}
	},
	integrations: [mdx(), tailwind({ applyBaseStyles: false }), react(), lottie()]
});
