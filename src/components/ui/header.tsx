import InitialHeader from "@/components/ui/initial-header";
import LoggedInHeader from "@/components/ui/logged-in-header";
import { useContext } from "react";
import UserContext from "@/context/user";

function Header() {
  const userCtx = useContext(UserContext);
  if (userCtx.accessToken) {
    return <LoggedInHeader />;
  }
  return <InitialHeader />;
}

export default Header;
