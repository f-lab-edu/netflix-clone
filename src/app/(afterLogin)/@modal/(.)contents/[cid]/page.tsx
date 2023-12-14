import DetailContents from "@/components/contents/detail-contents";

function ContentDetailPage({
  params,
  searchParams,
}: {
  params: { cid: string };
  searchParams: { mediaType: string };
}) {
  const mediaType = searchParams?.mediaType as string;

  return (
    <section
      className={
        "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black overflow-y-scroll w-[80vw] h-[80vh]"
        // "fixed my-0 mx-auto bg-black overflow-y-scroll
      }
    >
      <DetailContents id={params.cid} mediaType={mediaType} />
    </section>
  );
}

export default ContentDetailPage;
