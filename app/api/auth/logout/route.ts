import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("token", "", {
    path: "/",
    expires: new Date(0),
  });

  return Response.json({ success: true });
}