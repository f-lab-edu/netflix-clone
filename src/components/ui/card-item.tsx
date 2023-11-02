import Image from "next/image";
import Link from "next/link";

export default function CardItem({
  id,
  mediaType,
  posterPath,
}: {
  id: number;
  mediaType?: string;
  posterPath?: string;
}) {
  return (
    <Link href={`/contents/${id}?&mediaType=${mediaType}`}>
      <Image
        className={"w-full border rounded cursor-pointer hover:scale-125 "}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={"movie-poster"}
        width={500}
        height={500}
      />
    </Link>
  );
}
