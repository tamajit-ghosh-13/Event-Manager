import { db } from "./src/lib/db";

async function main() {
  console.log("Connecting to DB...");
  try {
    const users = await db.user.findMany();
    console.log("Success! Users in DB count:", users.length);
  } catch (error) {
    console.error("Database query failed:", error);
  }
}

main();
