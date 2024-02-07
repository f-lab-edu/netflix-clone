import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("https://broken-netflix.com/login");
  }
}
export const config = {
  matcher: ["/my-list", "/profile/account", "/profile/manage"],
};
