import style from "./search-bar.module.css";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getSearch } from "@/app/(afterLogin)/_lib/tmdb-api";
import useDebounce from "@/app/(afterLogin)/search/_lib/use-debounce";
export default function SearchBar({
  setSearchData,
}: {
  setSearchData: Dispatch<SetStateAction<string>>;
}) {
  const [input, setInput] = useState("");
  const searchData = useDebounce(input, 5000);

  useEffect(() => {
    setSearchData(searchData);
  }, [input, searchData, setSearchData]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = async () => {
    await getSearch(input);
  };

  return (
    <div className={style.searchBar}>
      <form onSubmit={onSubmit}>
        <input className={style.input} onChange={onChangeInput} />
        <button className={style.action}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            stroke="white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.796 15.811 21 21m-3-10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
