"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  async function handleSignup(formData: FormData) {
    setLoading(true);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await authClient.signUp.email({
        email,
        password,
        name,
      });

      window.location.href = "/feed";
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Signup</h1>

      <form action={handleSignup}>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />

        <button disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
