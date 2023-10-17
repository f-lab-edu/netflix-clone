import CardList from "../../components/browse/card-list";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getPopularTVProgram,
  getTopRatedMovies,
  getTopRateTVProgram,
  getUpcomingMovies,
} from "../api/browse/route";

async function getContentsList() {
  const popularMovies = await getPopularMovies().then((res) => res.json());
  const nowPlayingMovies = await getNowPlayingMovies().then((res) =>
    res.json(),
  );
  const topRatedMovies = await getTopRatedMovies().then((res) => res.json());
  const upcomingMovies = await getUpcomingMovies().then((res) => res.json());
  const popularTvProgram = await getPopularTVProgram().then((res) =>
    res.json(),
  );
  const topRateTvProgram = await getTopRateTVProgram().then((res) =>
    res.json(),
  );

  return {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRateTvProgram,
  };
}
async function BrowsePage() {
  const {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRateTvProgram,
  } = await getContentsList();

  return (
    <div>
      <div className={"mt-5"}>
        <h1>인기 있는 콘텐츠</h1>
        <CardList contents={popularMovies} />
      </div>
      <div className={"mt-5"}>
        <h1>극장에서 상영중인 콘텐츠</h1>
        <CardList contents={nowPlayingMovies} />
      </div>
      <div className={"mt-5"}>
        <h1>평점 높은 콘텐츠</h1>
        <CardList contents={topRatedMovies} />
      </div>
      <div className={"mt-5"}>
        <h1>개봉 예정 콘텐츠</h1>
        <CardList contents={upcomingMovies} />
      </div>
      <div className={"mt-5"}>
        <h1>인기 있는 TV 프로그램</h1>
        <CardList contents={popularTvProgram} />
      </div>
      <div className={"mt-5"}>
        <h1>평점 높은 TV 프로그램</h1>
        <CardList contents={topRateTvProgram} />
      </div>
    </div>
  );
}

export default BrowsePage;
