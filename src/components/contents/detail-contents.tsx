import PreviewContents from "./preview-contents";
import { getDetailContents, getTrailersContent } from "@/services/contents";
import Seasons from "@/components/seasons/seasons";
import DetailContentsInfo from "./detail-contents-info";
import React from "react";

async function DetailContents({
  id,
  mediaType,
}: {
  id: string;
  mediaType: string;
}) {
  const detailContents = await getDetailContents(id, mediaType);
  const trailers = await getTrailersContent(id, mediaType);
  const preview =
    trailers?.results?.length === 0
      ? detailContents?.backdrop_path
      : trailers.results;

  return (
    <>
      <PreviewContents preview={preview} />
      <DetailContentsInfo detailContents={detailContents} />
      {detailContents?.seasons && <Seasons detailContents={detailContents} />}
    </>
  );
}

export default DetailContents;
