import { options } from "@/config/config";
import { ReqMovie, ReqTv } from "@/types/contents/types";

export async function getPopularMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.media_type = "movie";

  return res;
}
export async function getNowPlayingMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.media_type = "movie";

  return res;
}
export async function getUpcomingMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.media_type = "movie";
  return res;
}
export async function getTopRatedMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.media_type = "movie";

  return res;
}

export async function getPopularTVProgram(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.media_type = "tv";

  return res;
}

export async function getTopRateTVProgram(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.media_type = "tv";
  return res;
}

export const allContents = await Promise.all([
  getPopularMovies(),
  getNowPlayingMovies(),
  getUpcomingMovies(),
  getTopRatedMovies(),
  getPopularTVProgram(),
  getTopRateTVProgram(),
]);

export async function getDetailContents(
  id: string,
  mediaType: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  console.log("reszz: ", id, mediaType);

  res.media_type = mediaType;

  return res;
}

export async function getTrailersContent(
  id: string,
  mediaType: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return res;
}

export async function getSeasons(
  seriesId: number,
  seasonNumber: number | string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return res;
}
export async function getMovieContents(MovieQueryParams: Partial<ReqMovie>) {
  let queryParams = "";

  for (let param in MovieQueryParams) {
    queryParams += `${param}=${MovieQueryParams[param]}&`;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?${queryParams}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  res.media_type = "movie";

  return res;
}

export async function getTvContents(TvQueryParams: Partial<ReqTv>) {
  let queryParams = "";

  for (let param in TvQueryParams) {
    queryParams += `${param}=${TvQueryParams[param]}&`;
  }
  console.log(queryParams);

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?${queryParams}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  res.media_type = "tv";

  return res;
}
export async function getTrendContents(time_window: string, language = "ko") {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/${time_window}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return res;
}

export async function getGenres(mediaType: string, language = "ko") {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/${mediaType}/list?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return res;
}
