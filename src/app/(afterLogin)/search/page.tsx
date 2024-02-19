"use client";

import style from "./search.module.css";
import SearchBar from "@/app/(afterLogin)/search/_component/search-bar";
import { useState } from "react";
import { SearchResult } from "@/model/media";
import CardItem from "@/app/(afterLogin)/_component/card-item";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function SearchPage() {
  const [searchData, setSearchData] = useState<SearchResult | null>(null);
  const router = useRouter();
  const onClick = (id: number, media_type: string) => {
    router.push(`/contents/${id}?&mediaType=${media_type}`);
  };
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
        {searchData?.results.map((media) => (
          <div
            className={style.media}
            key={media.id}
            onClick={() => onClick(media.id, media.media_type)}
          >
            <Image
              className={
                "h-60 max-h-[390px] max-w-[285px] min-h-[390px] border rounded cursor-pointer hover:scale-95 "
              }
              src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
              alt={"movie-poster"}
              width={285}
              height={390}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
