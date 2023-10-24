import OptionList from "@/components/ui/option-list";
import CardList from "@/components/ui/card-list";
import { getTrendContents } from "@/services/contents";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NEW! 요즘 대세 콘텐츠",
  description: "NEW! 요즘 대세 콘텐츠",
};
async function LatestContentPage() {
  const selectTimeWindow = "week";
  const data = await getTrendContents(selectTimeWindow).then((res) =>
    res.json(),
  );

  const options = [
    { id: "week", name: "주간" },
    { id: "day", name: "일별" },
  ];

  const selectBoxStyles = "select bg-transparent border-white";

  return (
    <section>
      <div className={"ml-5 mt-5 mb-10"}>
        <OptionList
          options={options}
          sStyle={selectBoxStyles}
          defaultOption={false}
        />
      </div>
      <div className={"grid gap-4 grid-cols-4 px-5"}>
        <CardList dataList={data.results} />
      </div>
    </section>
  );
}

export default LatestContentPage;
