import DetailContents from "@/components/contents/detail-contents";
import { Metadata, ResolvingMetadata } from "next";
import { getDetailContents } from "@/services/contents";

interface Props {
  params: { cid: string };
  searchParams: { contentsType: string };
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const contentsType = searchParams.contentsType;
  const id = params.cid;
  const detailContents: DetailContents = await getDetailContents(
    id,
    contentsType,
  ).then((data) => data.json());
  console.log(detailContents);
  const title = detailContents?.title ?? detailContents.name;
  return {
    title: title,
    description: detailContents?.overview ?? `${title} 지금 시청하세요! `,
    openGraph: {
      images: [],
    },
  };
}

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
