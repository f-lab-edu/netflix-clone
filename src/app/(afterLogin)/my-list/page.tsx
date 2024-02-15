import { getMyListMovie, getMyListTv } from "@/services/contents";
import CardItem from "@/app/(afterLogin)/_component/card-item";
import { Contents } from "@/types/browse/types";
import { auth } from "@/auth";

async function MyListPage() {
  const session = await auth();
  const sessionId = session?.user?.name as string;

  const myListMoviesData = getMyListMovie(sessionId);
  const myListTvData = getMyListTv(sessionId);

  const [movies, tv]: [Contents, Contents] = await Promise.all([
    myListMoviesData,
    myListTvData,
  ]);

  if (movies.total_results === 0 && tv.total_results === 0)
    return <div>찜한 콘텐츠가 없습니다.</div>;

  return (
    <div
      className={
        "min-[375px]:grid-cols-2 max-w-[1480px] grid px-5 grid-col-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      }
    >
      {movies.results.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={movies!.media_type}
          posterPath={data.poster_path}
          inMyList={true}
        />
      ))}
      {tv.results.map((data) => (
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
