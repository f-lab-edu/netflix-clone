import { NextResponse } from "next/server";
import { options } from "../../../config/config";

export async function getDetailContent(id, contentsType, language = "ko") {
  const res = await fetch(
    `https://api.themoviedb.org/3/${contentsType}/${id}?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return NextResponse.json(res);
}

export async function getTrailersContent(id, contentType, language = "ko") {
  const res = await fetch(
    `https://api.themoviedb.org/3/${contentType}/${id}/videos?language=${language}`,
    options,
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return NextResponse.json(res.results);
}
