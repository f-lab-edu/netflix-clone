"use client";

import Link from "next/link";
import Image from "next/image";
import SubNav from "@/app/(afterLogin)/_component/sub-nav";
import MainNav from "@/app/(afterLogin)/_component/main-nav";
import { useSelectedLayoutSegment } from "next/navigation";

function Header() {
  const segment = useSelectedLayoutSegment();
  if (segment === "search") return;
  return (
    <nav className={"flex h-16 text-sm items-center mx-1"}>
      <Link className={"min-w-[100px] min-h-[50px]"} href={"/"}>
        <Image
          className={"min-w-[100px] min-h-[50px]"}
          src={"/logo.png"}
          alt={"logo"}
          width={100}
          height={50}
        />
      </Link>
      <div className={"flex flex-1 items-center"}>
        <ul className={"flex flex-1 justify-around"}>
          <MainNav />
        </ul>
        <SubNav />
      </div>
    </nav>
  );
}

export default Header;
