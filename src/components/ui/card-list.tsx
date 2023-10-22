import CardItem from "@/components/ui/card-item";

export default function CardList({ dataList, contentsType }) {
  return (
    <>
      {dataList.map((data) => (
        <CardItem key={data.id} item={data} contentsType={contentsType} />
      ))}
    </>
  );
}
