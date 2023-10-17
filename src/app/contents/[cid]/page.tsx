import DetailContents from "@/components/contents/detail-contents";

function ContentDetailPage({
  params,
  searchParams,
}: {
  params: { cid: string };
  searchParams: { contentsType: string };
}) {
  const contentsType = searchParams?.contentsType as string;

  return (
    <section className={"px-10 min-w-[1080px]"}>
      <DetailContents id={params.cid} contentsType={contentsType} />
    </section>
  );
}

export default ContentDetailPage;
