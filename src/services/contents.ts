import { options } from "@/app/(afterLogin)/_lib/tmdb-config";
import { ReqTv } from "@/model/media";

export async function getPopularMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`,
    { ...options, cache: "no-store" },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.media_type = "movie";

  return res;
}
export async function getNowPlayingMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=${language}&page=${page}`,
    { ...options, cache: "no-store" },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.media_type = "movie";

  return res;
}
export async function getUpcomingMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=${language}&page=${page}`,
    { ...options, cache: "no-store" },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.media_type = "movie";
  return res;
}
export async function getTopRatedMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=${language}&page=${page}`,
    { ...options, cache: "no-store" },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.media_type = "movie";

  return res;
}

export async function getPopularTVProgram(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=${language}&page=${page}`,
    { ...options, cache: "no-store" },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.media_type = "tv";

  return res;
}

export async function getTopRateTVProgram(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=${language}&page=${page}`,
    { ...options, cache: "no-store" },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.media_type = "tv";
  return res;
}

export const allContents = async () => {
  return await Promise.all([
    getPopularMovies(),
    getNowPlayingMovies(),
    getUpcomingMovies(),
    getTopRatedMovies(),
    getPopularTVProgram(),
    getTopRateTVProgram(),
  ]);
};

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

export async function getTvContents(TvQueryParams: Partial<ReqTv>) {
  let queryParams = "";

  for (let param in TvQueryParams) {
    queryParams += `${param}=${TvQueryParams[param]}&`;
  }

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
export async function addOrRemoveInMyList(
  sessionId: string,
  mediaType: string,
  mediaId: number,
  favorite: boolean,
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/account/20466738/favorite?session_id=${sessionId}`,
    {
      ...options,
      method: "POST",
      body: JSON.stringify({
        media_type: mediaType,
        media_id: mediaId,
        favorite,
      }),
    },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return res;
}

export async function getMyListMovie(sessionId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/account/20466738/favorite/movies?language=ko&page=1&session_id=${sessionId}&sort_by=created_at.asc`,
    options,
  ).then((response) => response.json());

  res.media_type = "movie";

  return res;
}
export async function getMyListTv(sessionId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/account/20466738/favorite/tv?language=ko&page=1&session_id=${sessionId}&sort_by=created_at.asc`,
    options,
  ).then((response) => response.json());

  res.media_type = "tv";

  return res;
}
