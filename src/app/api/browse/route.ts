import { NextResponse } from "next/server";
import { options } from "../../../config/config";

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
