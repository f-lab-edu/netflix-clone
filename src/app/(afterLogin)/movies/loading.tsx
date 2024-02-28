import CardSkeleton from "@/app/(afterLogin)/movies/[id]/_component/card-skeleton";

export default function Loading() {
  const cardStyle = "w-[263.2px] h-[393px]";
  const categoryStyle = "ml-5 mt-5 mb-10 w-[118.4px] h-[48px]";
  const loadingSmall = "loading-sm";
  const loadingLarge = "loading-lg";
  return (
    <>
      <CardSkeleton styles={categoryStyle} loading={loadingSmall} />
      <div className={"grid gap-4 grid-cols-4 px-5"}>
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
        <CardSkeleton styles={cardStyle} loading={loadingLarge} />
      </div>
    </>
  );
}
