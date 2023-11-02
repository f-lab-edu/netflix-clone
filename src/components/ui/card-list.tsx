import CardItem from "@/components/ui/card-item";
import { Result } from "@/types/browse/types";

export default function CardList({ dataList }: { dataList: Result[] }) {
  return (
    <>
      {dataList.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          mediaType={data.media_type}
          posterPath={data.poster_path}
        />
      ))}
    </>
  );
}
