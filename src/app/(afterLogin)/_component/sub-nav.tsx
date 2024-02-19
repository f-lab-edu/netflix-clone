import Profile from "@/app/(afterLogin)/_component/profile";
import Notification from "@/app/(afterLogin)/_component/notification";
import SearchIcon from "@/app/(afterLogin)/_component/search-icon";

export default async function SubNav() {
  return (
    <>
      <div className={"sub-navigation flex items-center"}>
        <SearchIcon />
        <Notification />
        <Profile />
      </div>
    </>
  );
}
