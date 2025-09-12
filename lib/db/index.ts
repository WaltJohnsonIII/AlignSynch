import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Use placeholder URL for build time if DATABASE_URL is not set
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgresql://placeholder:placeholder@localhost:5432/placeholder";

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL not set, using placeholder for build");
}

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });

// Export all schema tables for easy access
export * from "./schema";
