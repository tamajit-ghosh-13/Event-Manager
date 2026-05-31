import { db } from './src/lib/db';
import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";

const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  emailAndPassword: { enabled: true }
});

async function run() {
  try {
    const user = await auth.api.signUpEmail({
      body: {
        email: "test_db_direct_" + Date.now() + "@test.com",
        password: "Password123!",
        name: "Test"
      }
    });
    console.log("Success:", user);
  } catch (e) {
    console.error("Error creating user:", e);
  }
}

run();
