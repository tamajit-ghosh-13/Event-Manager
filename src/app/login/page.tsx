"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(formData: FormData) {
    setLoading(true);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await authClient.signIn.email({
        email,
        password,
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
      <h1>Login</h1>

      <form action={handleLogin}>
        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />

        <button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <button
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
          })
        }
      >
        Continue with Google
      </button>

      <button
        onClick={() =>
          authClient.signIn.social({
            provider: "apple",
          })
        }
      >
        Continue with Apple
      </button>
    </div>
  );
}
