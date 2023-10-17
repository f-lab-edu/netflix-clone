"use client";
import { useSearchParams } from "next/navigation";
import SeasonContents from "@/components/seasons/season-contents";

function SelectedSeriesPage({ params }) {
  const searchParams = useSearchParams();
  const contentsType = searchParams.get("contentsType");

  return (
    <>
      <div>
        <SeasonContents id={params.id} contentsType={contentsType} />
      </div>
    </>
  );
}

export default SelectedSeriesPage;
