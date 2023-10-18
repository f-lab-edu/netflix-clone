import { Contents } from "@/types/browse/types";
import CardList from "@/components/browse/card-list";
import { getAllContents } from "@/app/api/browse/route";

async function BrowsePage() {
  const [
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRateTvProgram,
  ]: Contents[] = await getAllContents();

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
