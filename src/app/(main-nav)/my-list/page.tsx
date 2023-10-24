import CardList from "@/components/ui/card-list";
import { getPopularTVProgram } from "@/services/contents";
import { Metadata } from "next";
//TODO: data  재정의 Mylist 불러오깁
export const metadata: Metadata = {
  title: "내가 찜한 콘텐츠",
  description: "내가 찜한 콘텐츠",
};
async function MyListPage() {
  const data = await getPopularTVProgram().then((res) => res.json());

  console.log("movies Page: ", data);
  return (
    <>
      <div className={"ml-5 mt-5 mb-10"}>
        <select className={"select bg-transparent border-white"}>
          <option>장르</option>
          <option>ㄴㅁㅇㄴㅁ</option>
        </select>
      </div>
      <div className={"grid gap-4 grid-cols-4 px-5"}>
        <CardList dataList={data.results} contentsType={data.contentsType} />
      </div>
    </>
  );
}

export default MyListPage;
