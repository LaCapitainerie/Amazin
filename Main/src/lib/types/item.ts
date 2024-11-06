import { z } from 'zod';

export const ItemSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    price: z.number(),
    image: z.string(),
    description: z.string(),

    lat: z.number(),
    long: z.number(),

    createdAt: z.date(),
    updatedAt: z.date(),
});

export type ItemType = z.infer<typeof ItemSchema>;