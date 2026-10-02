import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().default(5000),
  DATABASE_URL: z.string().min(1),

  ADMIN_EMAIL: z.string().email(),
  ADMIN_PASSWORD: z.string().min(12),

  FRONTEND_URL: z.url(),

  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().min(1).default("7d"),

  IMAGEKIT_PUBLIC_KEY: z.string().min(1),
  IMAGEKIT_PRIVATE_KEY: z.string().min(1),
  IMAGEKIT_URL_ENDPOINT: z.url(),
});

export const env = envSchema.parse(process.env);
