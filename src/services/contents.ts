import { NextResponse } from "next/server";
import { options } from "@/config/config";
import { ReqMovie, ReqTv } from "@/types/contents/types";

export async function getPopularMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return NextResponse.json({ results: res.results, contentsType: "movie" });
}
export async function getNowPlayingMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return NextResponse.json({ results: res.results, contentsType: "movie" });
}
export async function getUpcomingMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return NextResponse.json({ results: res.results, contentsType: "movie" });
}
export async function getTopRatedMovies(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return NextResponse.json({ results: res.results, contentsType: "movie" });
}

export async function getPopularTVProgram(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return NextResponse.json({ results: res.results, contentsType: "tv" });
}

export async function getTopRateTVProgram(language = "ko", page = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=${language}&page=${page}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return NextResponse.json({ results: res.results, contentsType: "tv" });
}
export async function getAllContents() {
  const functionsToExecution = [
    getPopularMovies(),
    getNowPlayingMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
    getPopularTVProgram(),
    getTopRateTVProgram(),
  ];
  const responses = await Promise.all(functionsToExecution);
  const promises = responses.map((response) => response.json());
  return await Promise.all(promises);
}

export async function getDetailContents(
  id: string,
  contentsType: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${contentsType}/${id}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.contentsType = contentsType;

  return NextResponse.json(res);
}

export async function getTrailersContent(
  id: string,
  contentType: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${contentType}/${id}/videos?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return NextResponse.json(res.results);
}

export async function getSeasons(
  seriesId: number,
  seasonNumber: number,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return NextResponse.json(res);
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

  return NextResponse.json(res);
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

  return NextResponse.json(res);
}

export async function getGenres(contentsType, language = "ko") {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/${contentsType}/list?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return NextResponse.json(res);
}
