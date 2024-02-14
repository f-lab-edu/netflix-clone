import { options } from "@/app/(afterLogin)/_lib/tmdb-config";
import { Movie, Tv, Video } from "@/model/media";

export const getDetail = async (mediaType: string, id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?language=ko`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  // console.log(response);
  if (mediaType === "tv") {
    const {
      name,
      overview,
      episode_run_time,
      poster_path,
      vote_average,
      vote_count,
      seasons,
      homepage,
    } = response;
    const result: Tv = {
      id: response.id,
      name,
      overview,
      episode_run_time,
      poster_path,
      vote_average,
      vote_count,
      seasons: seasons.length,
      homepage,
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
  // console.log(response);
  if (response.results.length > 0) {
    const temp = response.results[0];
    const result: Video = { key: temp.key, site: temp.site };
    return result;
  }
};
