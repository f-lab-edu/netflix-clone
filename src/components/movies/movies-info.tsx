"use client";
import React, { useRef } from "react";
import { getMovieContents } from "@/services/contents";
import { useInfiniteQuery } from "react-query";
import { useObserver } from "@/hooks/use-observer";
import Loading from "@/app/(afterLogin)/movies/loading";
import CardList from "@/app/(afterLogin)/_component/card-list";
import { useUserState } from "@/context/user-context";

export default function MoviesInfo({ genres }: { genres: string }) {
  const bottom = useRef<HTMLDivElement | null>(null);
  const fetchMovies = async ({ pageParam = 1 }) => {
    const queryParams = {
      include_adult: true,
      include_video: true,
      language: "ko",
      sort_by: "popularity.desc",
      page: pageParam,
      with_genres: genres,
    };
    return await getMovieContents(queryParams);
  };
  const { data, fetchNextPage, status } = useInfiniteQuery(
    ["moviesList"],
    fetchMovies,
    {
      getNextPageParam: (lastPage) => {
        const page = lastPage.page;
        if (lastPage.total_pages === page) return false;
        return page + 1;
      },
      notifyOnChangeProps: "tracked",
    },
  );
  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => entry.isIntersecting && fetchNextPage());
  };

  useObserver({ target: bottom, onIntersect });
  return (
    <div className={"flex flex-col items-center"}>
      {status === "loading" && <Loading />}
      {status === "error" && (
        <p>에러가 발생했습니다. 잠시후 다시 시도해주세요.</p>
      )}
      {status === "success" && data && (
        <>
          <div
            className={
              "min-[375px]:grid-cols-2 max-w-[1480px] grid px-5 grid-col-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }
          >
            {data?.pages.map((page) => (
              <CardList
                key={page.page}
                dataList={page.results}
                mediaType={page.media_type}
              />
            ))}
          </div>
        </>
      )}
      <div ref={bottom} className={"flex justify-center my-10"}>
        <span className="loading loading-spinner loading-md" />
      </div>
    </div>
  );
}
