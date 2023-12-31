import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";

export default forwardRef(function CardItem(
  {
    id,
    backdropPath,
    mediaType,
  }: { id: number; backdropPath: string; mediaType: string },
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const href = `${id}?mediaType=${mediaType}`;
  return (
    <Link
      href={`/contents/${href}`}
      ref={ref}
      className="carousel-item ml-2 bg-white text-black cursor-pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
        alt="poster"
        width={300}
        height={150}
      />
    </Link>
  );
});
