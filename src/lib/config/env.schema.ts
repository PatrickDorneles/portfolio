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