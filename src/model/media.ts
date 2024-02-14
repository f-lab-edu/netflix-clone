export interface Genre {
  id: number;
  name: string;
}
export interface Movie {
  id: number;
  runtime: number;
  genres: Genre[];
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  homepage: string;
  tagline: string;
}
export interface Tv {
  id: number;
  overview: string;
  episode_run_time: [number];
  name: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  seasons: number;
  homepage: string;
  last_air_date: string;
}
export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Video {
  key: string;
  site: string;
}
