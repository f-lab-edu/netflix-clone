"use client";

import DetailContents from "@/components/contents/detail-contents";
import CloseButton from "@/app/(afterLogin)/_component/close-button";
import { usePathname } from "next/navigation";

function ContentsModal({
  params,
  searchParams,
}: {
  params: { cid: string };
  searchParams: { mediaType: string; seasonNumber?: string };
}) {
  const mediaType = searchParams?.mediaType as string;
  const pathname = usePathname();

  // if (searchParams?.seasonNumber)
  //   return <ContentsDetailPage params={params} searchParams={searchParams} />;
  if (!pathname.split("/").includes("contents")) return null;

  return (
    <div
      className={
        "w-[100vw] h-full flex justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.4)]"
      }
    >
      <div
        className={
          "relative top-5 min-w-[400px] max-w-[800px] flex flex-col bg-black  border border-rose-600 rounded-lg "
        }
      >
        <CloseButton />
        <DetailContents id={params.cid} mediaType={mediaType} />
      </div>
    </div>
  );
}

export default ContentsModal;
