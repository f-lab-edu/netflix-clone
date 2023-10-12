"use client";
import { useSearchParams } from "next/navigation";
import DetailContents from "@/components/contents/detail-contents";

function ContentDetailPage({ params }) {
  const searchParams = useSearchParams();
  const contentsType = searchParams.get("contentsType");
  return (
    <section className={"px-10 min-w-[1080px]"}>
      <DetailContents id={params.cid} contentsType={contentsType} />
    </section>
  );
}

export default ContentDetailPage;
