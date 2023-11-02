import SeasonList from "./season-list";
import { getDetailContents } from "@/services/contents";

async function SeasonContents({
  id,
  mediaType,
}: {
  id: string;
  mediaType: string;
}) {
  const detailContents = await getDetailContents(id, mediaType);

  return (
    <div className={"grid grid-cols-3 gap-4"}>
      <SeasonList detailContents={detailContents} />
    </div>
  );
}

export default SeasonContents;
