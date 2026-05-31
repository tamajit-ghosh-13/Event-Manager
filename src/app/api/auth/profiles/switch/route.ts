import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { profileId } = await req.json();

    if (!profileId) {
      return NextResponse.json({ error: "Profile ID is required" }, { status: 400 });
    }

    // Verify that the profile belongs to the authenticated user
    const profile = await db.profile.findFirst({
      where: {
        id: profileId,
        userId: session.user.id,
      },
    });

    if (!profile) {
      return NextResponse.json({ error: "Invalid profile" }, { status: 400 });
    }

    // Update the active profile in the User record for persistence
    await db.user.update({
      where: { id: session.user.id },
      data: { activeProfileId: profileId },
    });

    // Update the active profile in the current Session for immediate access
    await db.session.update({
      where: { 
        userId: session.user.id, 
        token: session.session.token 
      },
      data: { activeProfileId: profileId },
    });

    return NextResponse.json({
      success: true,
      activeProfile: profile
    });
  } catch (error) {
    console.error("Profile switch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
