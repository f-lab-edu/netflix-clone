import Genres from "@/app/(afterLogin)/series/[id]/_component/genres";
import TvResults from "@/app/(afterLogin)/series/[id]/_component/tv-results";
import { getTvSeries } from "@/app/(afterLogin)/series/[id]/_lib/get-tv-series";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import style from "./series.module.css";

export default async function SeriesPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["tv", "series", params.id],
    queryFn: () => getTvSeries(params.id, 1),
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <section className={style.container}>
        <Genres params={params.id} />
        <TvResults genreId={params.id} />
      </section>
    </HydrationBoundary>
  );
}
