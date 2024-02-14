import { allContents } from "@/services/contents";

export const getInitData = async () => {
  const [
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRateTvProgram,
  ] = await allContents();

  return {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRateTvProgram,
  };
};
