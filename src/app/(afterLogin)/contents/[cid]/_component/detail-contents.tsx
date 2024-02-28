import PreviewContents from "./preview-contents";
import {
  getDetailContents,
  getMyListMovie,
  getMyListTv,
  getTrailersContent,
} from "@/services/contents";
import Seasons from "@/app/(afterLogin)/contents/[cid]/_component/seasons/seasons";
import DetailContentsInfo from "./detail-contents-info";
import React from "react";
import { DetailContents } from "@/model/media";

async function DetailContents({
  id,
  mediaType,
}: {
  id: string;
  mediaType: string;
}) {
  const detailContents = await getDetailContents(id, mediaType);
  const trailers = await getTrailersContent(id, mediaType);
  const favoriteMovies = await getMyListMovie(
    "2bc5adb67cde82f05b5cc514f01dd01b6a41954e",
  );
  const favoriteTv = await getMyListTv(
    "2bc5adb67cde82f05b5cc514f01dd01b6a41954e",
  );
  const preview =
    trailers?.results?.length === 0
      ? detailContents?.backdrop_path
      : trailers.results;
  const favorites = {
    tv: [...favoriteTv.results.map((tv: DetailContents) => tv.id)],
    movie: [...favoriteMovies.results.map((movie: DetailContents) => movie.id)],
  };
  return (
    <>
      <PreviewContents preview={preview} />
      <DetailContentsInfo
        detailContents={detailContents}
        favorites={favorites}
      />
      {detailContents?.seasons && <Seasons detailContents={detailContents} />}
    </>
  );
}

export default DetailContents;
