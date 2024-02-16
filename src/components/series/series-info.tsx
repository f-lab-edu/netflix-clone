"use client";

import React, { useRef } from "react";
import { getTvContents } from "@/services/contents";
import { useInfiniteQuery } from "react-query";
import { useObserver } from "@/hooks/use-observer";
import { Contents } from "@/types/browse/types";
import CardList from "@/app/(afterLogin)/_component/card-list";

export default function SeriesInfo({ genres }: { genres: string }) {
  const bottom = useRef<HTMLDivElement | null>(null);
  const fetchData = async ({ pageParam = 1 }) => {
    const queryParams = {
      include_adult: true,
      include_null_first_air_dates: true,
      language: "ko",
      sort_by: "popularity.desc",
      page: pageParam,
      with_genres: genres,
    };
    return await getTvContents(queryParams);
  };
  const { data, fetchNextPage, status } = useInfiniteQuery(
    ["seriesList"],
    fetchData,
    {
      getNextPageParam: (lastPage) => {
        const page = lastPage.page;
        if (lastPage.total_pages === page) return false;
        return page + 1;
      },
    },
  );
  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => entry.isIntersecting && fetchNextPage());
  };

  useObserver({ target: bottom, onIntersect });
  return (
    <div className={"flex flex-col items-center"}>
      {status === "success" && data && (
        <div
          className={
            "min-[375px]:grid-cols-2 max-w-[1480px] grid px-5 grid-col-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          }
        >
          {data.pages.map((page: Contents) => (
            <CardList
              key={page.page}
              dataList={page.results}
              mediaType={page.media_type}
            />
          ))}
        </div>
      )}
      <div ref={bottom} className={"flex justify-center my-10"}>
        <span className="loading loading-spinner loading-md" />
      </div>
    </div>
  );
}
