import style from "./search-bar.module.css";
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { getSearch } from "../_lib/search";
import { SearchResult } from "@/model/media";
export default function SearchBar({
  setSearchData,
}: {
  setSearchData: Dispatch<SetStateAction<null | SearchResult>>;
}) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const deferredValue = useDeferredValue(input);

  const debounce = async () => {
    const response = await getSearch(deferredValue);
    setSearchData(response);
  };

  useEffect(() => {
    debounce();
  }, [deferredValue]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await getSearch(input);
      setSearchData(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={" flex flex-col"}>
      <div className={style.searchBar}>
        <form onSubmit={onSubmit}>
          <input
            className={style.input}
            onChange={onChangeInput}
            placeholder={"검색어를 입력하세요."}
          />
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
      {loading && <div>Loading...</div>}
      {/*{!loading &&*/}
      {/*  searchData?.total_results === 0 &&*/}
      {/*  input.trim().length > 0 && <div>검색 결과가 없습니다.</div>}*/}
    </div>
  );
}
