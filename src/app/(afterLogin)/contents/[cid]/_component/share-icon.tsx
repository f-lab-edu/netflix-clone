"use client";

import style from "./share-icon.module.css";
export default function ShareIcon() {
  const onClick = () => alert("준비중입니다.");
  return (
    <div className={style.share}>
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill={"rgb(228, 34, 126)"}
          viewBox="-1 0 26 26"
        >
          <path
            fillRule="evenodd"
            d="M19 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM5 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM19 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 14c-1.77 0-3.315.925-4.204 2.312l-5.355-3.06c.346-.68.559-1.438.559-2.252 0-.503-.097-.979-.235-1.437l5.571-3.183A4.97 4.97 0 0 0 19 10a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .503.097.979.235 1.438L8.664 9.62A4.973 4.973 0 0 0 5 8a5 5 0 0 0-5 5 5 5 0 0 0 5 5c1.14 0 2.179-.396 3.02-1.038L8 17l6.055 3.46c-.02.18-.055.354-.055.54a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5Z"
          />
        </svg>
      </button>
    </div>
  );
}
