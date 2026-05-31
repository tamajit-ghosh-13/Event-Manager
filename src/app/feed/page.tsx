import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { db } from "@/lib/db";

export default async function FeedPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // Fetch the active profile and its associated role/membership
  const activeProfileId =
    session.session.activeProfileId || session.user.activeProfileId;

  // If activeProfileId exists, look it up directly; otherwise fall back
  // to the user's default profile (common right after signup when the
  // session row hasn't been updated with the profile id yet).
  const activeProfile = activeProfileId
    ? await db.profile.findUnique({
        where: { id: activeProfileId },
        include: {
          organizerAccess: {
            include: {
              membership: true,
            },
          },
        },
      })
    : await db.profile.findFirst({
        where: { userId: session.user.id, isDefault: true },
        include: {
          organizerAccess: {
            include: {
              membership: true,
            },
          },
        },
      });

  if (!activeProfile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-semibold">
          Please set up your profile to view the feed.
        </h1>
      </div>
    );
  }

  const role = activeProfile.organizerAccess?.membership.role || "participant";

  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Campus Attention Feed
          </h1>
          <p className="text-slate-500">
            Viewing as:{" "}
            <span className="font-medium text-indigo-600">
              {activeProfile.displayName}
            </span>
          </p>
        </div>
        <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-wider">
          {role}
        </div>
      </div>

      {role === "participant" ? (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">Discover Events</h2>
          <p className="text-slate-600">
            Your personalized feed of trending events based on your interests.
          </p>
          {/* ParticipantFeed content would go here */}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">Organizer Dashboard</h2>
          <p className="text-slate-600">
            Manage your events and track engagement analytics.
          </p>
          {role === "admin" && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
              <strong>Admin Access:</strong> You can verify event requests and
              manage college settings.
            </div>
          )}
          {/* OrganizerFeed content would go here */}
        </div>
      )}
    </div>
  );
}
