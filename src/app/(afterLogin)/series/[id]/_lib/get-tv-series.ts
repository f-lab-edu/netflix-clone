import { options } from "@/app/(afterLogin)/_lib/tmdb-config";

export const getTvSeries = async (genreId: string, pageParam?: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?language=ko&page=${pageParam}&sort_by=popularity.desc&with_genres=${genreId}`,
    {
      ...options,
      next: {
        tags: ["tv", "series"],
      },
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response;
};
