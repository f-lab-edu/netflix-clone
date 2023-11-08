"use client";
import CardList from "@/components/ui/card-list";
import { getGenres, getTvContents } from "@/services/contents";
import OptionList from "@/components/ui/option-list";
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useObserver } from "@/hooks/use-observer";
import { Options } from "@/types/ui/types";
import { Contents } from "@/types/browse/types";

function Series() {
  const [genres, setGenres] = useState<Options[]>();
  const bottom = useRef<HTMLDivElement | null>(null);
  const selectBoxStyles = "select bg-transparent border-white";

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await getGenres("tv");
      setGenres(res.genres);
    };
    fetchGenres();
  }, []);

  const fetchData = async ({ pageParam = 1 }) => {
    const queryParams = {
      include_adult: true,
      include_null_first_air_dates: true,
      language: "ko",
      sort_by: "popularity.desc",
      page: pageParam,
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
    <section>
      {genres && (
        <div className={"ml-5 mt-5 mb-10"}>
          <OptionList options={genres} sStyle={selectBoxStyles} />
        </div>
      )}

      {status === "success" && data && (
        <div className={"grid gap-4 grid-cols-4 px-5"}>
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
    </section>
  );
}

export default Series;
