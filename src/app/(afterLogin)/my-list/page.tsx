"use client";

import CardItem from "@/app/(afterLogin)/_component/card-item";
import { useEffect, useState } from "react";
import { getFavorite } from "@/app/(afterLogin)/_lib/tmdb-api";

interface Props {
  id: number;
  poster_path: string;
}
function MyListPage() {
  const [movies, setMovies] = useState<Props[] | null>(null);
  const [tv, setTv] = useState<Props[] | null>(null);

  useEffect(() => {
    getFavorite(true).then((res) => {
      setMovies(res.movies);
      setTv(res.tv);
    });
  }, []);

  if (!movies && !tv) return <div>Loading...</div>;

  if (movies?.length === 0 && tv?.length === 0)
    return <div>찜한 콘텐츠가 없습니다.</div>;

  return (
    <div
      className={
        "min-[375px]:grid-cols-2 max-w-[1480px] grid px-5 grid-col-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      }
    >
      {movies?.map((m) => (
        <CardItem
          key={m.id}
          id={m.id}
          mediaType={"movie"}
          posterPath={m.poster_path}
        />
      ))}
      {tv?.map((t) => (
        <CardItem
          key={t.id}
          id={t.id}
          mediaType={"tv"}
          posterPath={t.poster_path}
        />
      ))}
    </div>
  );
}

export default MyListPage;
