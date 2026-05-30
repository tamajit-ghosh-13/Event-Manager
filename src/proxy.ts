import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Thinking process: This middleware runs before every matched route.
// It protects private routes (like /profile) from unauthenticated users,
// and prevents authenticated users from seeing login/signup pages.
// CRITICAL: /verifyemail, /forgotpassword, and /newpassword MUST be public
// because users accessing these pages are NOT yet logged in (no token).

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Thinking process: These are all the pages a user can access WITHOUT a token.
  // - /login and /signup: obvious public pages.
  // - /verifyemail: user just signed up, has no token yet.
  // - /forgotpassword: user forgot password, has no token.
  // - /newpassword: user is resetting password after OTP verification, has no token.
  const isPublicPath =
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyemail" ||
    path === "/forgotpassword" ||
    path === "/newpassword";

  const token = request.cookies.get("token")?.value || "";

  // If user is on a public path AND has a token, redirect to profile.
  // Thinking process: A logged-in user shouldn't see login/signup pages.
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // If user is on a private path AND has no token, redirect to login.
  // Thinking process: An unauthenticated user shouldn't access protected pages like /profile.
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Thinking process: The matcher defines which routes this middleware runs on.
// API routes are excluded so they don't get redirected.
export const config = {
  matcher: [
    "/",
    "/profile/:path*",
    "/login",
    "/signup",
    "/logout",
    "/verifyemail",
    "/forgotpassword",
    "/newpassword",
  ],
};
