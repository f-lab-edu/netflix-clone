"use client";

import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "@/app/(afterLogin)/movies/[id]/_lib/get-movies";
import CardItem from "@/app/(afterLogin)/_component/card-item";
import { SearchResult } from "@/model/media";
import style from "./movie-results.module.css";

export default function MovieResults({ genresId }: { genresId: string }) {
  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery<
    SearchResult,
    Object,
    InfiniteData<SearchResult>,
    [_1: string, _2: string, _3: string],
    number
  >({
    queryKey: ["movies", "genre", genresId],
    queryFn: ({ pageParam }) => getMovies(genresId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 300,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      <div className={style.results}>
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((media) => (
              <CardItem
                key={media.id}
                id={media.id}
                mediaType={"movie"}
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
