import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  image: z.string().url(),
});

export const socialSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  email: z.string().email(),
});

export const serverSchema = z.object({
  /** Local: `file:./.data/local.db` — Turso: `libsql://…` from dashboard */
  DATABASE_URL: z.string().min(1),
  TURSO_AUTH_TOKEN: z.string().optional(),
});