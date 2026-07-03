import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        updatedDate: z.date().optional(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        prompt: z.string().optional(),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        coverImage: z.string().optional(),
        crossposted: z.object({
            medium: z.string().optional(),
            substack: z.string().optional(),
            x: z.string().optional(),
        }).optional(),
    }),
});

export const collections = { essays };