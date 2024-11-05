import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
  phone: z.string().min(10),
  token: z.string().optional(),
  role: z.enum(["admin", "user"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
