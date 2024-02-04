"use client";

import InitialHeader from "@/components/ui/initial-header";
import LoggedInHeader from "@/components/ui/logged-in-header";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  if (pathname !== "/" && pathname !== "/login" && pathname !== "/signup") {
    return <LoggedInHeader />;
  }
  return <InitialHeader />;
}

export default Header;
