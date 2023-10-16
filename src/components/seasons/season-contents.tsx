import SeasonList from "./season-list";
import { getDetailContents } from "@/app/api/contents/route";

async function getContents(id, contentsType) {
  const res = await getDetailContents(id, contentsType).then((data) =>
    data.json(),
  );
  return res;
}

async function SeasonContents({ id, contentsType }) {
  const contents = await getContents(id, contentsType);

  return (
    <div className={"grid grid-cols-3 gap-4"}>
      <SeasonList contents={contents} />
    </div>
  );
}

export default SeasonContents;
