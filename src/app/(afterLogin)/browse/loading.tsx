import CardItemSkeleton from "@/app/(afterLogin)/browse/_component/card-item-skeleton";

export default function Loading() {
  return (
    <>
      <div className={"mt-5"}>
        <h1>인기 있는 콘텐츠</h1>
        <CardItemSkeleton />
      </div>
      <div className={"mt-5"}>
        <h1>극장에서 상영중인 콘텐츠</h1>
        <CardItemSkeleton />
      </div>
      <div className={"mt-5"}>
        <h1>평점 높은 콘텐츠</h1>
        <CardItemSkeleton />
      </div>
      <div className={"mt-5"}>
        <h1>개봉 예정 콘텐츠</h1>
        <CardItemSkeleton />
      </div>
      <div className={"mt-5"}>
        <h1>인기 있는 TV 프로그램</h1>
        <CardItemSkeleton />
      </div>
      <div className={"mt-5"}>
        <h1>평점 높은 TV 프로그램</h1>
        <CardItemSkeleton />
      </div>
    </>
  );
}
