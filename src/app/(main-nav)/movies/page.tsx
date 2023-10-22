import CardList from "@/components/ui/card-list";
import { getMovieContents, getGenres } from "@/services/contents";
import OptionList from "@/components/ui/option-list";

async function MoviesPage() {
  const queryParams = {
    include_adult: true,
    include_video: true,
    language: "ko",
    sort_by: "popularity.desc",
    page: 1,
  };
  const data = await getMovieContents(queryParams).then((res) => res.json());
  const genres = await getGenres("movie").then((res) => res.json());
  const selectBoxStyles = "select bg-transparent border-white";

  return (
    <section>
      <div className={"ml-5 mt-5 mb-10"}>
        <OptionList options={genres.genres} sStyle={selectBoxStyles} />
      </div>
      <div className={"grid gap-4 grid-cols-4 px-5"}>
        <CardList dataList={data.results} contentsType={data.media_type} />
      </div>
    </section>
  );
}

export default MoviesPage;
