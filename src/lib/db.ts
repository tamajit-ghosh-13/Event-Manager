import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { any } from "zod";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const connectionString = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "production") {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  globalForPrisma.prisma = new PrismaClient({
    adapter,
    log: ["query"],
  });
} else {
  if (!globalForPrisma.prisma) {
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    globalForPrisma.prisma = new PrismaClient({
      adapter,
      log: ["query"],
    });
  }
}

export const db =
  globalForPrisma.prisma || new PrismaClient({ log: ["query"] });
