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
