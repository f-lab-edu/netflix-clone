"use client";
import { useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  if (session) return;
  return <Header />;
}

export default Header;
