import Link from "next/link";
import Image from "next/image";
function InitialNav() {
  return (
    <header className={"my-0 mx-auto"}>
      <div className="navbar h-24">
        <div className="flex-1">
          <Link className="btn w-48 btn-ghost normal-case text-xl" href={"/"}>
            <Image src={"/logo.png"} alt={"logo"} width={200} height={200} />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <select className="select hover:text-white select-bordered border-white border-1 h-9 bg-base-content select-xs w-full max-w-xs">
                <option defaultValue>한국어</option>
                <option>English</option>
              </select>
            </li>
            <li className={"ml-7"}>
              <Link className={"bg-red-500"} href={"/login"}>
                로그인
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default InitialNav;
