import { getFavorite } from "@/app/(afterLogin)/_lib/tmdb-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import MyListResults from "@/app/(afterLogin)/my-list/_component/my-list-results";
import { Suspense } from "react";
import Loading from "@/app/loading";

interface Props {
  id: number;
  poster_path: string;
}
async function MyListPage() {
  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorite(true),
  });
  const dehydratedState = dehydrate(query);

  return (
    <Suspense fallback={<Loading />}>
      <HydrationBoundary state={dehydratedState}>
        <MyListResults />
      </HydrationBoundary>
    </Suspense>
  );
}

export default MyListPage;
