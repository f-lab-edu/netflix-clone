import ContentsInfo from "./contents-info";

import PreviewContents from "./preview-contents";
import {
  getDetailContents,
  getTrailersContent,
} from "@/app/api/contents/route";
import Seasons from "@/components/seasons/seasons";
import { Contents, Trailers } from "@/types/contents/types";

async function getContents(id: string, contentsType: string) {
  return await getDetailContents(id, contentsType).then((data) => data.json());
}
async function getTrailers(id: string, contentType: string) {
  return await getTrailersContent(id, contentType).then((data) => data.json());
}

async function DetailContents({
  id,
  contentsType,
}: {
  id: string;
  contentsType: string;
}) {
  const contents: Contents = await getContents(id, contentsType);
  const trailers: Trailers = await getTrailers(id, contentsType);

  const key = trailers[0]?.key ?? "";
  const src = key
    ? `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&playlist=${key}&mute=1&controls=0&si=nh5lkzt8Jqa2v4Z1&amp;`
    : `https://image.tmdb.org/t/p/w500${contents?.backdrop_path}`;

  return (
    <>
      <PreviewContents src={src} />
      <ContentsInfo contents={contents} />
      {contents?.seasons && <Seasons contents={contents} />}
    </>
  );
}

export default DetailContents;
