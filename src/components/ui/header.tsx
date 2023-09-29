"use client";
import { usePathname } from "next/navigation";
import InitialNav from "@/components/ui/initial-nav";
import MainNav from "@/components/ui/main-nav";

function Header() {
  const pathname = usePathname();
  // TODO: ADD 조건 - 세션이 있거나 메인 페이지가 아닐 경우
  if (pathname === "/") {
    return <InitialNav />;
  } else {
    return <MainNav />;
  }
}

export default Header;
