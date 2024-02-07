import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.redirect("https://broken-netflix.com/login");
  }
}
export const config = {
  matcher: ["/my-list", "/profile/account", "/profile/manage"],
};
