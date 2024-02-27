"use client";

import style from "./my-list.module.css";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getFavorite } from "@/app/(afterLogin)/_lib/tmdb-api";
import CardItem from "@/app/(afterLogin)/_component/card-item";

type Media = { id: number; poster_path: string };
type Props = {
  movies: Media[];
  tv: Media[];
};
export default function MyListResults() {
  const { data } = useSuspenseQuery<Props, Object, Props, [_1: string]>({
    queryKey: ["favorites"],
    queryFn: () => getFavorite(true),
  });

  if (data.tv.length === 0 && data.movies.length === 0)
    return <div> 찜한 콘텐츠가 없습니다.</div>;

  return (
    <div className={style.container}>
      <div className={style.results}>
        {data.movies.map((m) => (
          <CardItem
            key={m.id}
            id={m.id}
            mediaType={"movie"}
            posterPath={m.poster_path}
          />
        ))}
        {data.tv.map((t) => (
          <CardItem
            key={t.id}
            id={t.id}
            mediaType={"tv"}
            posterPath={t.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
