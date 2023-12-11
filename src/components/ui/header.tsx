import InitialHeader from "@/components/ui/initial-header";
import LoggedInHeader from "@/components/ui/logged-in-header";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname !== "/" || pathname !== "/login" || "/signup") {
    return <LoggedInHeader />;
  }
  return <InitialHeader />;
}

export default Header;
