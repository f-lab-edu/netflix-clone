"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={"nav-element ml-5"}>
        <div className={"profile-menu-item"}>
          <div
            className={"profile-dropdown-button w-8 hover:cursor-pointer"}
            onClick={() => setIsOpen(!isOpen)}
          >
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
          {isOpen && (
            // <div className={"fixed mt-2 border"}>
            <div className={"absolute mt-2 border p-1 z-[9999]"}>
              <ul>
                <li>
                  <Link href={"#"}>설정</Link>
                </li>
                <li>
                  <div className={"border"} />
                </li>
                <li>
                  <button
                    onClick={() =>
                      signOut({ redirect: false }).then(() => {
                        router.replace("/");
                      })
                    }
                  >
                    로그아웃
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
