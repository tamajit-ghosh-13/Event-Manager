import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_API_KEY: z.string().min(1),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_API_KEY: process.env.BETTER_AUTH_API_KEY,
});

export type Env = z.infer<typeof envSchema>;
