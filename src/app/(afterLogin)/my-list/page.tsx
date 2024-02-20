"use client";

import CardItem from "@/app/(afterLogin)/_component/card-item";
import { useEffect, useState } from "react";
import { getFavorite } from "@/app/(afterLogin)/_lib/tmdb-api";
import style from "./my-list.module.css";

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
    <div className={style.container}>
      <div className={style.results}>
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
    </div>
  );
}

export default MyListPage;
