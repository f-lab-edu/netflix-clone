import SeasonContents from "@/components/seasons/season-contents";

function SelectedSeriesPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { contentsType: string };
}) {
  const contentsType = searchParams.contentsType;

  return (
    <>
      <div>
        <SeasonContents id={params.id} contentsType={contentsType} />
      </div>
    </>
  );
}

export default SelectedSeriesPage;
