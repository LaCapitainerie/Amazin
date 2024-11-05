import { z } from 'zod';

export const ItemSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    price: z.number(),
    image: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type ItemType = z.infer<typeof ItemSchema>;