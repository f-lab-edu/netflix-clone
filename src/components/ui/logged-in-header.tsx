import Link from "next/link";
import Image from "next/image";

function LoggedInHeader() {
  const navigationMenuList = [
    { id: 1, title: "홈", url: "/browse" },
    { id: 2, title: "시리즈", url: "/series/10759" },
    { id: 3, title: "영화", url: "/movies/28" },
    { id: 4, title: "NEW! 요즘 대세 콘텐츠", url: "/latest" },
    { id: 5, title: "내가 찜한 콘텐츠", url: "/my-list" },
    { id: 6, title: "언어별로 찾아보기", url: "/original-audio" },
  ];

  return (
    //   TODO: Navbar 로 변경
    <nav className={"main-header flex h-16 px-16 text-sm items-center"}>
      <Link className={"flex-none w-24"} href={"/"}>
        <Image src={"/logo.png"} alt={"logo"} width={200} height={200} />
      </Link>
      <ul className={"main-navigation flex-auto flex"}>
        {navigationMenuList.map((menu) => (
          <li key={menu.id} className={"ml-5"}>
            <Link href={menu.url}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      {/* TODO: Join(group items) 로 변경*/}
      <div className={"sub-navigation flex-none flex "}>
        <div className={"nav-element"}>
          <div className={"search-box"}>
            {/* TODO:  Button icon 추가 */}
            <button className={"search-tab"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={"nav-element ml-5"}>
          <span className={"notifications"}>
            {/* notification Icon TODO: 컴포넌트 분리, onMouseOver={e => console.log('onMouseOver')} 추가*/}
            <button className={"notification-menu"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className={"nav-element ml-5"}>
          <div className={"profile-menu-item"}>
            {/* TODO: Arrow Icon  추가 */}
            <div className={"profile-dropdown-button w-8 rounded"}>
              <Image
                className={"profile-icon"}
                src={
                  "https://occ-0-7129-3996.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                }
                alt={"profile-icon"}
                width={32}
                height={32}
              />
              <span className={"profile-arrow-icon"}></span>
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LoggedInHeader;
