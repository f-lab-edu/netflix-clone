"use client";

import style from "./search.module.css";
import SearchBar from "@/app/(afterLogin)/search/_component/search-bar";
import { useState } from "react";
import { SearchResult } from "@/model/media";
import CardItem from "@/app/(afterLogin)/_component/card-item";
import { useRouter } from "next/navigation";

function SearchPage() {
  const [searchData, setSearchData] = useState<SearchResult | "">("");
  const router = useRouter();
  // 아무 추천 콘텐츠 보여주기 밑에 return 에서 분기처리
  // if (!searchData) return;

  // console.log(searchData.results);

  // if (searchData.results)
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.fixed}>
          <div className={style.backButton}>
            <button onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                fill={"white"}
                viewBox="0 0 1024 1024"
              >
                <path d="m222.927 580.115 301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 0 1-13.784-20.022 68.03 68.03 0 0 1-5.977-29.488l.001-.063a68.343 68.343 0 0 1 7.265-29.134 68.28 68.28 0 0 1 1.384-2.6 67.59 67.59 0 0 1 10.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
              </svg>
            </button>
          </div>
          <SearchBar setSearchData={setSearchData} />
        </div>
      </div>
      <div className={style.results}>
        {searchData &&
          searchData?.results.map((media) => (
            <CardItem
              key={media.id}
              id={media.id}
              mediaType={media.media_type}
              posterPath={media.poster_path}
            />
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
