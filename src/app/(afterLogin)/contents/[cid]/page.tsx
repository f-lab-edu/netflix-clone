import DetailContents from "@/components/contents/detail-contents";

function ContentsDetailPage({
  params,
  searchParams,
}: {
  params: { cid: string };
  searchParams: { mediaType: string };
}) {
  const mediaType = searchParams?.mediaType as string;

  return (
    <section className={"px-10 min-w-[1080px]"}>
      <DetailContents id={params.cid} mediaType={mediaType} />
    </section>
  );
}

export default ContentsDetailPage;
