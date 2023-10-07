"use client";

import ContentsInfo from "./content-info";
import {
  getDetailContent,
  getTrailersContent,
} from "../../app/api/contents/route";
import PreviewContents from "./preview-contents";
import { useSearchParams } from "next/navigation";

async function getContent(id, contentsType) {
  const res = await getDetailContent(id, contentsType).then((data) =>
    data.json(),
  );
  return res;
}
async function getTrailers(id, contentType) {
  const res = await getTrailersContent(id, contentType).then((data) =>
    data.json(),
  );

  return res;
}

async function DetailContent({ id }) {
  const searchParams = useSearchParams();
  const contentsType = searchParams.get("contentsType");

  const contents = await getContent(id, contentsType);
  const trailers = await getTrailers(id, contentsType);

  const key = trailers[0]?.key;
  const src = key
    ? `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&playlist=${key}&mute=1&controls=0&si=nh5lkzt8Jqa2v4Z1&amp;`
    : `https://image.tmdb.org/t/p/w500${contents?.backdrop_path}`;

  return (
    <>
      <PreviewContents src={src} />
      <ContentsInfo contents={contents} />
    </>
  );
}

export default DetailContent;
