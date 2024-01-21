import { z, defineCollection } from "astro:content"

const footerColumnThreeCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional()

	})

})
const footerColumnFourCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),

	})

})

export const collections = {

	"footer-column-three": footerColumnThreeCollection,
	"footer-column-four": footerColumnFourCollection,

}
