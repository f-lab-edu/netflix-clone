import { options } from "@/app/(afterLogin)/_lib/tmdb-config";

export const getSearch = async (query: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=ko&page=1`,
    options,
  ).then((response) => response.json());
  return response;
};
