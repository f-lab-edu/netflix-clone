"use client";
import CardList from "@/components/ui/card-list";
import { getMovieContents, getGenres } from "@/services/contents";
import OptionList from "@/components/ui/option-list";
import { useInfiniteQuery } from "react-query";
import React, { useEffect, useRef, useState } from "react";
import { useObserver } from "@/hooks/use-observer";
import { Options } from "@/types/ui/types";

function MoviesPage() {
  const bottom = useRef<HTMLDivElement | null>(null);
  const [genres, setGenres] = useState<Options[]>();
  const [selected, setSelected] = useState();
  const onChangeGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };
  const fetchMovies = async ({ pageParam = 1 }) => {
    const queryParams = {
      include_adult: true,
      include_video: true,
      language: "ko",
      sort_by: "popularity.desc",
      page: pageParam,
      with_genres: selected,
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

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await getGenres("movie");
      setGenres(res.genres);
    };
    fetchGenres();
  }, []);

  const selectBoxStyles = "select bg-transparent border-white";

  return (
    <section>
      <div className={"ml-5 mt-5 mb-10"}>
        {genres && (
          <OptionList
            options={genres}
            sStyle={selectBoxStyles}
            onChange={onChangeGenres}
            defaultOption
          />
        )}
      </div>
      {status === "loading" && <p>불러오는중 </p>}
      {status === "error" && (
        <p>에러가 발생했습니다. 잠시후 다시 시도해주세요.</p>
      )}
      {status === "success" && data && (
        <div className={"grid gap-4 grid-cols-4 px-5"}>
          {data?.pages.map((page) => (
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
    </section>
  );
}

export default MoviesPage;
