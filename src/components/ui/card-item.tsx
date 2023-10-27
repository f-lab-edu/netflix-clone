import Image from "next/image";
import Link from "next/link";

export default function CardItem({
  id,
  mediaType,
  posterPath,
  contentsType,
}: {
  id: number;
  mediaType?: string;
  posterPath?: string;
  contentsType?: string;
}) {
  const type = mediaType ?? contentsType;
  return (
    <Link
      href={`/contents/${id}?&contentsType=${type}`}
      className={"h-[393px]"}
    >
      <Image
        className={
          "w-full h-full border rounded cursor-pointer hover:scale-125 "
        }
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={"movie-poster"}
        width={500}
        height={500}
      />
    </Link>
  );
}
