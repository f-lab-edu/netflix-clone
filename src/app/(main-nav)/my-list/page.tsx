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
      <div></div>
    </>
  );
}

export default MyListPage;
