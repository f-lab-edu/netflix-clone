import CardList from "@/components/ui/card-list";
import { getGenres, getTvContents } from "@/services/contents";
import OptionList from "@/components/ui/option-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV 시리즈",
  description: "넷 뿌러졌스에서 TV 시리즈를 시청하세요!",
};

async function Series() {
  const queryParams = {
    include_adult: true,
    include_null_first_air_dates: true,
    language: "ko",
    sort_by: "popularity.desc",
    page: 1,
  };
  const data = await getTvContents(queryParams).then((res) => res.json());
  const genres = await getGenres("tv").then((res) => res.json());
  const selectBoxStyles = "select bg-transparent border-white";

  return (
    <>
      <section>
        <div className={"ml-5 mt-5 mb-10"}>
          <OptionList options={genres.genres} sStyle={selectBoxStyles} />
        </div>
        <div className={"grid gap-4 grid-cols-4 px-5"}>
          <CardList dataList={data.results} contentsType={data.media_type} />
        </div>
      </section>
    </>
  );
}

export default Series;
