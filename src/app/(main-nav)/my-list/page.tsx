"use client";
import { getMyListMovie, getMyListTv } from "@/services/contents";
import CardItem from "@/components/ui/card-item";
import { useUserState } from "@/context/user-context";
import { Contents } from "@/types/browse/types";

async function MyListPage() {
  //TODO: preloading 사용하여 서버 컴포넌트로 변경
  const user = useUserState();
  const myListMoviesData = getMyListMovie(user.sessionId);
  const myListTvData = getMyListTv(user.sessionId);
  const [MovieList, tvList]: [Contents, Contents] = await Promise.all([
    myListMoviesData,
    myListTvData,
  ]);

  return (
    <div className={"grid gap-4 grid-cols-4 px-5"}>
      {MovieList.results.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={MovieList.media_type}
          posterPath={data.poster_path}
          inMyList={true}
        />
      ))}
      {tvList.results.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={tvList.media_type}
          posterPath={data.poster_path}
          inMyList={true}
        />
      ))}
    </div>
  );
}

export default MyListPage;
