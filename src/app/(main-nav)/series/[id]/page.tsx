"use client";
import SeasonContents from "../../../../components/seasons/season-contents";
import { useSearchParams } from "next/navigation";

function SelectedSeriesPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const contentsType = searchParams.get("contentsType");

  return (
    <>
      <div>
        <SeasonContents id={params.id} contentsType={contentsType!} />
      </div>
    </>
  );
}

export default SelectedSeriesPage;
