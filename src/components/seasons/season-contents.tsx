import SeasonList from "./season-list";
import { getDetailContents } from "@/services/contents";

async function getContents(id: string, contentsType: string) {
  const res = await getDetailContents(id, contentsType).then((data) =>
    data.json(),
  );
  return res;
}

async function SeasonContents({
  id,
  contentsType,
}: {
  id: string;
  contentsType: string;
}) {
  const detailContents = await getContents(id, contentsType);

  return (
    <div className={"grid grid-cols-3 gap-4"}>
      <SeasonList detailContents={detailContents} />
    </div>
  );
}

export default SeasonContents;
