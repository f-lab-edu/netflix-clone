import Link from "next/link";
import Image from "next/image";
import SubNav from "@/app/(afterLogin)/_component/sub-nav";

function Header() {
  const navigationMenuList = [
    { id: 1, title: "홈", url: "/browse" },
    { id: 2, title: "시리즈", url: "/series/10759" },
    { id: 3, title: "영화", url: "/movies/28" },
    { id: 4, title: "NEW! 요즘 대세 콘텐츠", url: "/latest" },
    { id: 5, title: "내가 찜한 콘텐츠", url: "/my-list" },
    { id: 6, title: "언어별로 찾아보기", url: "/original-audio" },
  ];

  return (
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
      <SubNav />
    </nav>
  );
}

export default Header;
