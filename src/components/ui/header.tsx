"use client";
import { usePathname } from "next/navigation";
import InitialHeader from "@/components/ui/initial-header";
import LoggedInHeader from "@/components/ui/logged-in-header";

function Header() {
  const pathname = usePathname();

  // TODO: ADD 조건 - 세션이 있거나 메인 페이지가 아닐 경우 //  수정1 -> 로그인(세션)이 유효한 경우만 LoggedInHeader
  // 그럼 ... 바꿔야하나 파일이름도 InitialHeader 가 아닌 기본? general? basic   //  LoggedInHeader 는  LoggedIn?
  if (
    pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/login" ||
    pathname === "/signup/regform"
  ) {
    return <InitialHeader />;
  }

  return <LoggedInHeader />;
}

export default Header;
