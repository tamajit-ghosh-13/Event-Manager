import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { dash } from "@better-auth/infra";
import { db } from "./db";
import { UserRepository } from "../repositories/user.repo";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  baseURL: "http://localhost:3000/",
  emailAndPassword: { enabled: true },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    apple: {
      clientId: process.env.APPLE_CLIENT_ID || "",
      clientSecret: process.env.APPLE_CLIENT_SECRET || "",
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          const profile = await db.profile.create({
            data: {
              userId: user.id,
              type: "participant",
              displayName: user.name || user.email,
              isDefault: true,
            },
          });

          await db.user.update({
            where: { id: user.id },
            data: { activeProfileId: profile.id },
          });
        },
      },
    },
    session: {
      create: {
        after: async (session) => {
          await UserRepository.updateLoginTimestamp(session.userId);
        }
      }
    }
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  plugins: [
    // ... other plugins
    dash(),
  ],
});

