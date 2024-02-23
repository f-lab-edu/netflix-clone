import { allContents } from "@/services/contents";

export const getInitData = async () => {
  const [
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRatedTvProgram,
  ] = await allContents();

  return {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRatedTvProgram,
  };
};
