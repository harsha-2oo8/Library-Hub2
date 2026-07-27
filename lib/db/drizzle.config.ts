import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

const url = DATABASE_URL.includes("?")
  ? DATABASE_URL + "&sslmode=require"
  : DATABASE_URL + "?sslmode=require";

export default defineConfig({
  schema: "./src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url,
  },
});
