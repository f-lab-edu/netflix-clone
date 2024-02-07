"use client";

import { useState } from "react";

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={"relative nav-element ml-5"}
        onClick={() => setIsOpen(!isOpen)}
      >
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
      {isOpen && (
        <div
          className={
            "absolute right-5 min-w-[200px] top-14 max-w-[300px] bg-gray-600 z-[9999] rounded border-red-600 border"
          }
        >
          <ul>
            <li className={"p-3"}>
              최신 영화, 드라마, TV 에 적용할 수 있는 최대 50% 할인 쿠폰
              받아가세요!
            </li>
            <hr className={"border-red-600"} />
            <li className={"p-3"}>
              안녕하세요. 넷 뿌러졌스에 오신 것을 환영합니다.
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
