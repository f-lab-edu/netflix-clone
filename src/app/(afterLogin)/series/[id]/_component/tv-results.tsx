"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getTvSeries } from "@/app/(afterLogin)/series/[id]/_lib/get-tv-series";
import { useInView } from "react-intersection-observer";
import CardItem from "@/app/(afterLogin)/_component/card-item";
import { Fragment, useEffect } from "react";
import { SearchResult } from "@/model/media";
import style from "./tv-results.module.css";

export default function TvResults({ genreId }: { genreId: string }) {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery<
    SearchResult,
    Object,
    InfiniteData<SearchResult>,
    [_1: string, _2: string, _3: string],
    number
  >({
    queryKey: ["tv", "series", genreId],
    queryFn: ({ pageParam }) => getTvSeries(genreId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
    gcTime: 300 * 1000,
    staleTime: 60 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 200,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [isFetching, hasNextPage, inView, fetchNextPage]);

  return (
    <>
      <div className={style.results}>
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((media) => (
              <CardItem
                key={media.id}
                id={media.id}
                mediaType={"tv"}
                posterPath={media.poster_path}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={ref} className={"flex justify-center my-10"}>
        <span className="loading loading-spinner loading-md" />
      </div>
    </>
  );
}
