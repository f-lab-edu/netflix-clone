"use client";
import DetailTvContent from "../../../components/contents/detail-tv-content";
import { useSearchParams } from "next/navigation";
import DetailMovieContent from "../../../components/contents/detail-movie-content";

function ContentDetailPage({ params }) {
  const searchParams = useSearchParams();
  const isMovie = searchParams.get("isMovie");

  if (isMovie === "true") {
    return <DetailMovieContent id={params.cid} />;
  }

  return (
    <>
      <DetailTvContent id={params.cid} />
    </>
  );
}

export default ContentDetailPage;
