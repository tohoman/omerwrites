import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        topic: z.enum(['Geopolitics', 'Energy & Economy', 'Identity & Faith', 'Technology']),
        kind: z.enum(['Policy Analysis', 'Academic', 'Column']).default('Policy Analysis'),
        journey: z.string().optional(),
        tags: z.array(z.string()).default([]),
        prompt: z.string().optional(),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        crossposted: z.object({
            medium: z.string().optional(),
            substack: z.string().optional(),
            x: z.string().optional(),
        }).optional(),
    }),
});

export const collections = { essays };