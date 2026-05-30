import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function FeedPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Campus Attention Feed</h1>

      <p>{session.user.email}</p>
    </div>
  );
}
