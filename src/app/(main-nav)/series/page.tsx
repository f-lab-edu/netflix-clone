import CardList from "@/components/ui/card-list";
import { getGenres, getTvContents } from "@/services/contents";
import OptionList from "@/components/ui/option-list";

async function Series() {
  const queryParams = {
    include_adult: true,
    include_null_first_air_dates: true,
    language: "ko",
    sort_by: "popularity.desc",
    page: 1,
  };
  const data = await getTvContents(queryParams);
  const genres = await getGenres("tv");
  const selectBoxStyles = "select bg-transparent border-white";

  return (
    <>
      <section>
        <div className={"ml-5 mt-5 mb-10"}>
          <OptionList options={genres.genres} sStyle={selectBoxStyles} />
        </div>
        <div className={"grid gap-4 grid-cols-4 px-5"}>
          <CardList dataList={data.results} mediaType={data.media_type} />
        </div>
      </section>
    </>
  );
}

export default Series;
