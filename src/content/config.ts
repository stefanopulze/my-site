import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
        summary: z.string(),
    })
})

export interface BlogData {
    title: string;
    tags: string[];
    date: string;
    summary: string;
}

export const collections = {
    'blog': blogCollection
}
