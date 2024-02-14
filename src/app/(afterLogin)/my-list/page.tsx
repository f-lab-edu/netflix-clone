"use client";

import { getMyListMovie, getMyListTv } from "@/services/contents";
import CardItem from "@/app/(afterLogin)/_component/card-item";
import { useUserState } from "@/context/user-context";
import { Contents } from "@/types/browse/types";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

function MyListPage() {
  //TODO: preloading 사용하여 서버 컴포넌트로 변경
  const user = useUserState();
  const myListMoviesData = getMyListMovie(user.sessionId);
  const myListTvData = getMyListTv(user.sessionId);
  const [movies, setMovies] = useState<Contents | null>(null);
  const [tv, setTv] = useState<Contents | null>(null);
  const getList = async () => {
    const [movieList, tvList]: [Contents, Contents] = await Promise.all([
      myListMoviesData,
      myListTvData,
    ]);
    setMovies(movieList);
    setTv(tvList);
  };
  useEffect(() => {
    getList();
  }, []);

  if (!movies && !tv) return <Loading />;

  if (movies?.total_results === 0 && tv?.total_results === 0)
    return <div>찜한 콘텐츠가 없습니다.</div>;

  return (
    <div
      className={
        "min-[375px]:grid-cols-2 max-w-[1480px] grid px-5 grid-col-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      }
    >
      {movies!.results.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={movies!.media_type}
          posterPath={data.poster_path}
          inMyList={true}
        />
      ))}
      {tv!.results.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={tv!.media_type}
          posterPath={data.poster_path}
          inMyList={true}
        />
      ))}
    </div>
  );
}

export default MyListPage;
