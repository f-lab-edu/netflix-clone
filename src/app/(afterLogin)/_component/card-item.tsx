import Image from "next/image";
import Link from "next/link";

export default function CardItem({
  id,
  mediaType,
  posterPath,
}: {
  id: number;
  mediaType: string;
  posterPath?: string;
}) {
  return (
    <Link href={`/contents/${id}?&mediaType=${mediaType}`}>
      <Image
        className={
          "h-60 max-w-[285px] min-h-[390px] max-min-[390px] border rounded cursor-pointer hover:scale-95 "
        }
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={"movie-poster"}
        width={285}
        height={390}
      />
    </Link>
  );
}
