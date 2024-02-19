import Genres from "@/app/(afterLogin)/movies/[id]/_component/genres";
import MovieResults from "@/app/(afterLogin)/movies/[id]/_component/movie-results";
import { getMovies } from "@/app/(afterLogin)/movies/[id]/_lib/get-movies";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import style from "./movies.module.css";

export default async function MoviesPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["movies", "genre", params.id],
    queryFn: () => getMovies(params.id, 1),
    initialPageParam: 1,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <section className={style.container}>
        <Genres params={params.id} />
        <MovieResults genresId={params.id} />
      </section>
    </HydrationBoundary>
  );
}
