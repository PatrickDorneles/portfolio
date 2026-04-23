import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "../config/env";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as { db: ReturnType<typeof createDrizzle> | undefined };

function createDrizzle() {
  const client = createClient({
    url: env.DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  });
  return drizzle(client, { schema });
}

export const db = globalForDb.db ?? (globalForDb.db = createDrizzle());

export * from "./schema";
