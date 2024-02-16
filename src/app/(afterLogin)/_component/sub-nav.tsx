import Profile from "@/app/(afterLogin)/_component/profile";
import { auth } from "@/auth";
import Notification from "@/app/(afterLogin)/_component/notification";
import SearchBar from "@/app/(afterLogin)/_component/search-icon";

export default async function SubNav() {
  const session = await auth();

  return (
    <>
      <div className={"sub-navigation flex items-center"}>
        <SearchBar />
        {session?.user && (
          <>
            <Notification />
            {/* TODO: Arrow Icon  추가 */}
            <Profile />
          </>
        )}
      </div>
    </>
  );
}
