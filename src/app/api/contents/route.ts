import { NextResponse } from "next/server";
import { options } from "@/config/config";

export async function getDetailContents(
  id: string,
  contentsType: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${contentsType}/${id}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  res.contentsType = contentsType;

  return NextResponse.json(res);
}

export async function getTrailersContent(
  id: string,
  contentType: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${contentType}/${id}/videos?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return NextResponse.json(res.results);
}

export async function getSeasons(
  seriesId: number,
  seasonNumber: string,
  language = "ko",
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return NextResponse.json(res);
}
