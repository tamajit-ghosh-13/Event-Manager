import { db } from "../lib/db";
import { Prisma } from "../../generated/prisma/client";

export class UserRepository {
  /**
   * Creates a new user
   */
  static async createUser(data: Prisma.UserCreateInput) {
    return await db.user.create({
      data,
    });
  }

  /**
   * Finds a user by their email address
   */
  static async findUserByEmail(email: string) {
    return await db.user.findUnique({
      where: { email },
    });
  }

  /**
   * Updates the user's last login timestamp
   */
  static async updateLoginTimestamp(userId: string) {
    return await db.user.update({
      where: { id: userId },
      data: { lastLoginAt: new Date() },
    });
  }
}
