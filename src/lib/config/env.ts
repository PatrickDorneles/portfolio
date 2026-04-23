import { createEnv } from "@t3-oss/env-nextjs";
import { profileSchema, serverSchema, socialSchema } from "./env.schema";

export const env = createEnv({
  server: {
    DATABASE_URL: serverSchema.shape.DATABASE_URL,
    TURSO_AUTH_TOKEN: serverSchema.shape.TURSO_AUTH_TOKEN,
  },
  client: {
    NEXT_PUBLIC_PROFILE_NAME: profileSchema.shape.name,
    NEXT_PUBLIC_PROFILE_TITLE: profileSchema.shape.title,
    NEXT_PUBLIC_PROFILE_IMAGE: profileSchema.shape.image,
    NEXT_PUBLIC_GITHUB_URL: socialSchema.shape.github,
    NEXT_PUBLIC_LINKEDIN_URL: socialSchema.shape.linkedin,
    NEXT_PUBLIC_EMAIL: socialSchema.shape.email,
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
    NEXT_PUBLIC_PROFILE_NAME: process.env.NEXT_PUBLIC_PROFILE_NAME,
    NEXT_PUBLIC_PROFILE_TITLE: process.env.NEXT_PUBLIC_PROFILE_TITLE,
    NEXT_PUBLIC_PROFILE_IMAGE: process.env.NEXT_PUBLIC_PROFILE_IMAGE,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});