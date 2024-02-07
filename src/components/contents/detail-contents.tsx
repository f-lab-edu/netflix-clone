import PreviewContents from "./preview-contents";
import {
  getDetailContents,
  getMyListMovie,
  getMyListTv,
  getTrailersContent,
} from "@/services/contents";
import Seasons from "@/components/seasons/seasons";
import DetailContentsInfo from "./detail-contents-info";
import React from "react";
import { useUserState } from "@/context/user-context";
import { DetailContents } from "@/types/contents/types";

async function DetailContents({
  id,
  mediaType,
}: {
  id: string;
  mediaType: string;
}) {
  const { sessionId } = useUserState();
  const detailContents = await getDetailContents(id, mediaType);
  const trailers = await getTrailersContent(id, mediaType);
  const favoriteMovies = await getMyListMovie(sessionId);
  const favoriteTv = await getMyListTv(sessionId);
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
