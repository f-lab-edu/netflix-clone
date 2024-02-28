import SeasonContents from "@/app/(afterLogin)/contents/[cid]/_component/seasons/season-contents";

function SelectedSeriesPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { mediaType: string };
}) {
  const mediaType = searchParams.mediaType;

  return (
    <>
      <div>
        <SeasonContents id={params.id} mediaType={mediaType} />
      </div>
    </>
  );
}

export default SelectedSeriesPage;
