import { env } from "./env";

export const profile = {
  name: env.NEXT_PUBLIC_PROFILE_NAME,
  title: env.NEXT_PUBLIC_PROFILE_TITLE,
  image: env.NEXT_PUBLIC_PROFILE_IMAGE,
} as const;

export const social = {
  github: env.NEXT_PUBLIC_GITHUB_URL,
  linkedin: env.NEXT_PUBLIC_LINKEDIN_URL,
  email: env.NEXT_PUBLIC_EMAIL,
} as const;