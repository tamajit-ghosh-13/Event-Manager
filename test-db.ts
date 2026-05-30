import "dotenv/config";
import { db } from "./src/lib/db";

async function main() {
  try {
    const user = await db.user.findFirst();
    console.log("DB connection successful!", user);
  } catch (e) {
    console.error("DB connection failed:", e);
  }
}

main();
