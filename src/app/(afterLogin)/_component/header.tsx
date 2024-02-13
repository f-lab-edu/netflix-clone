import Link from "next/link";
import Image from "next/image";
import SubNav from "@/app/(afterLogin)/_component/sub-nav";
import MainNav from "@/app/(afterLogin)/_component/main-nav";

function Header() {
  return (
    <nav className={"flex h-16 px-16 text-sm items-center"}>
      <Link className={"w-24"} href={"/"}>
        <Image src={"/logo.png"} alt={"logo"} width={200} height={200} />
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
