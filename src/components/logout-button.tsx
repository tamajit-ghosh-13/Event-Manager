"use client";

import { authClient } from "@/lib/auth-client";

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await authClient.signOut();
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  );
}
