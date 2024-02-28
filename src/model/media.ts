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
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  seasons: number;
  homepage: string;
  last_air_date: string;
}
export interface Media extends SearchMedia {
  original_title: string;
  release_date: string;
  title: string;
  name: string;
  video: boolean;
}
export interface Video {
  key: string;
  site: string;
}
export interface SearchMedia {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface SearchResult {
  page: number;
  results: SearchMedia[];
  total_pages: number;
  total_results: number;
}
export interface Contents extends SearchResult {
  media_type: "movie" | "tv";
  results: Result[];
}

export interface Result extends Media {
  origin_country: string[];
  media_type: string;
}

export interface Season {
  air_date: string | null;
  episodes: Episode[];
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
  _id: string;
}

export interface Episode {
  air_date: string;
  crew: unknown;
  episode_number: number;
  episode_type: string;
  guest_stars: unknown;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

// 정리 필요

export interface ReqMovie {
  [key: string]: string | boolean | number;
  certification: string;
  certification_gte: string;
  certification_lte: string;
  certification_country: string;
  include_adult: boolean;
  include_video: boolean;
  language: string;
  page: number;
  primary_release_year: number;
  primary_release_date_gte: string;
  primary_release_date_lte: string;
  region: string;
  release_date_gte: string;
  release_date_lte: string;
  sort_by: string;
  vote_average_gte: number;
  vote_average_lte: number;
  vote_count_gte: number;
  vote_count_lte: number;
  watch_region: string;
  with_cast: string;
  with_companies: string;
  with_crew: string;
  with_genres: string;
  with_keywords: string;
  with_origin_country: string;
  with_original_language: string;
  with_people: string;
  with_release_type: number;
  with_runtime_gte: number;
  with_runtime_lte: number;
  with_watch_monetization_types: string;
  with_watch_providers: string;
  without_companies: string;
  without_genres: string;
  without_keywords: string;
  without_watch_providers: string;
  year: number;
}

export interface ReqTv {
  [key: string]: string | boolean | number;
  air_date_gte: string;
  air_date_lte: string;
  first_air_date_year: string;
  first_air_date_gte: string;
  first_air_date_lte: string;
  include_adult: boolean;
  include_null_first_air_dates: boolean;
  language: string;
  page: number;
  screened_theatrically: boolean;
  sort_by: string;
  timezone: string;
  vote_average_gte: number;
  vote_average_lte: number;
  vote_count_gte: number;
  vote_count_lte: number;
  watch_region: string;
  with_companies: string;
  with_genres: string;
  with_keywords: string;
  with_networks: number;
  with_origin_country: string;
  with_original_language: string;
  with_runtime_gte: number;
  with_runtime_lte: number;
  with_status: string;
  with_watch_monetization_types: string;
  with_watch_providers: string;
  without_companies: string;
  without_genres: string;
  without_keywords: string;
  without_watch_providers: string;
  with_type: string;
}
export interface DetailContents {
  title: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  media_type: "movie" | "tv";
  genres: { id: number; name: string }[];
  homepage: "string";
  id: number;
  imdb_id: string;
  languages: string[];
  last_air_date?: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
  };
  name: string;
  networks: {
    id: string;
    logo_path: string;
    name: string;
    origin_country: string;
  };
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    episode_type: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];

  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  release_date?: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  type: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
