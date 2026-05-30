"use client";

import { authClient } from "../lib/auth-client";

export class AuthService {
  /**
   * Sign up a new user with email and password
   */
  static async signup(email: string, password: string, name: string) {
    return await authClient.signUp.email({
      email,
      password,
      name,
    });
  }

  /**
   * Log in a user with email and password
   */
  static async login(email: string, password: string) {
    return await authClient.signIn.email({
      email,
      password,
    });
  }

  /**
   * Log out the current user
   */
  static async logout() {
    return await authClient.signOut();
  }

  /**
   * Send an email verification link
   */
  static async sendVerificationEmail(email: string) {
    return await authClient.sendVerificationEmail({
      email,
    });
  }

  /**
   * Send a password reset email
   */
  static async resetPassword(email: string) {
    return await authClient.requestPasswordReset({
      email,
      redirectTo: "/newpassword",
    });
  }

  /**
   * Reset the password using the token
   */
  static async updatePassword(newPassword: string) {
    return await authClient.resetPassword({
      newPassword,
    });
  }
}
