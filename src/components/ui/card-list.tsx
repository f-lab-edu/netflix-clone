import CardItem from "@/components/ui/card-item";
import { Contents, Result } from "@/types/browse/types";

export default function CardList({
  dataList,
  mediaType,
}: {
  dataList: Result[];
  mediaType: Pick<Contents, "media_type">;
}) {
  return (
    <>
      {dataList.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={mediaType}
          posterPath={data.poster_path}
        />
      ))}
    </>
  );
}
