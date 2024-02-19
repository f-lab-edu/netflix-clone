import { options } from "@/app/(afterLogin)/_lib/tmdb-config";

export const getMovies = async (genreId: string, pageParam?: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=ko&page=${pageParam}&with_genres=${genreId}`,
    {
      ...options,
      next: { tags: ["movies", "genres"] },
      cache: "no-store",
    },
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response;
};
