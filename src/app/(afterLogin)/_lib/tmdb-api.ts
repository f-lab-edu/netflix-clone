import { options } from "@/app/(afterLogin)/_lib/tmdb-config";
import { Media, Movie, ReqMovie, Tv, Video } from "@/model/media";

export const getDetail = async (mediaType: string, id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?language=ko`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  if (mediaType === "tv") {
    const {
      name,
      overview,
      episode_run_time,
      backdrop_path,
      vote_average,
      vote_count,
      seasons,
      homepage,
      last_air_date,
    } = response;
    const result: Tv = {
      id: response.id,
      name,
      overview,
      episode_run_time,
      backdrop_path,
      vote_average,
      vote_count,
      seasons: seasons.length,
      homepage,
      last_air_date,
    };
    return result;
  }
  const {
    runtime,
    genres,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    homepage,
    tagline,
  } = response;
  const result: Movie = {
    id: response.id,
    runtime,
    genres,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    homepage,
    tagline,
  };

  return result;
};

export const getVideo = async (mediaType: string, id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=ko`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  if (response.results.length > 0) {
    const temp = response.results[0];
    const result: Video = { key: temp.key, site: temp.site };
    return result;
  }
};

export async function getFavorite(includePoster?: boolean) {
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/account/${process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID}/favorite/movies?language=ko&page=1&&sort_by=created_at.asc`,
    options,
  ).then((response) => response.json());

  const responseTv = await fetch(
    `https://api.themoviedb.org/3/account/${process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID}/favorite/tv?language=ko&page=1&&sort_by=created_at.asc`,
    options,
  ).then((response) => response.json());

  if (includePoster) {
    const movies = responseMovies.results.map((movie: Media) => ({
      id: movie.id,
      poster_path: movie.poster_path,
    }));
    const tv = responseTv.results.map((t: Media) => ({
      id: t.id,
      poster_path: t.poster_path,
    }));
    return { movies, tv };
  }
  const movies = responseMovies.results.map((movie: Media) => movie.id);
  const tv = responseTv.results.map((t: Media) => t.id);

  return { movies, tv };
}

export const addFavorite = async (
  mediaType: string,
  id: string,
  favorite: boolean,
) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/account/20466738/favorite`,
    {
      ...options,
      method: "POST",
      body: JSON.stringify({
        media_type: mediaType,
        media_id: id,
        favorite,
      }),
    },
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  if (!response.success) return;
};

export async function getMovies(params: Partial<ReqMovie>) {
  let queryParams = "";

  for (let param in params) {
    queryParams += `${param}=${params[param]}&`;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=ko&${queryParams}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  res.media_type = "movie";

  return res;
}
