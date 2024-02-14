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
  inMyList: boolean;
}) {
  return (
    <Link href={`/contents/${id}?&mediaType=${mediaType}`}>
      <Image
        className={
          "h-60 md:h-[390px] w-max-[285px] h-max-[390px] border rounded cursor-pointer hover:scale-95 "
        }
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={"movie-poster"}
        width={285}
        height={390}
      />
    </Link>
  );
}
