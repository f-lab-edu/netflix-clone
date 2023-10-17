"use client";
import { useSearchParams } from "next/navigation";
import DetailContents from "@/components/contents/detail-contents";

function ContentDetailPage({ params }: { params: { cid: string } }) {
  const searchParams = useSearchParams();
  const contentsType = searchParams.get("contentsType") as string;
  // const contentsType = searchParams?.contentsType as string;
  // console.log(params);
  // console.log(contentsType);

  return (
    <section className={"px-10 min-w-[1080px]"}>
      <DetailContents id={params.cid} contentsType={contentsType} />
    </section>
  );
}

export default ContentDetailPage;
