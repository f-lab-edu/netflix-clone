"use client";

import InitialHeader from "@/components/ui/initial-header";
import LoggedInHeader from "@/components/ui/logged-in-header";
import { useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  if (session) return <LoggedInHeader />;
  return <InitialHeader />;
}

export default Header;
