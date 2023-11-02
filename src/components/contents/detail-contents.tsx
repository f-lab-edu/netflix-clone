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

  const key = trailers[0]?.key ?? "";
  const src = key
    ? `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&playlist=${key}&mute=1&controls=0&si=nh5lkzt8Jqa2v4Z1&amp;`
    : `https://image.tmdb.org/t/p/w500${detailContents?.backdrop_path}`;

  return (
    <>
      <PreviewContents src={src} />
      <DetailContentsInfo detailContents={detailContents} />
      {detailContents?.seasons && <Seasons detailContents={detailContents} />}
    </>
  );
}

export default DetailContents;
