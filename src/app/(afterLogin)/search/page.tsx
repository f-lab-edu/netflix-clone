"use client";

import style from "./search.module.css";
import SearchBar from "@/app/(afterLogin)/search/_component/search-bar";
import { useState } from "react";
import { SearchMedia } from "@/model/media";

function SearchPage() {
  const [searchData, setSearchData] = useState<SearchMedia | "">("");
  return (
    <div className={style.container}>
      <SearchBar setSearchData={setSearchData} />
    </div>
  );
}

export default SearchPage;
