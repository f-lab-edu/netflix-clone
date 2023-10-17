import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

export default forwardRef(function CardItem(
  {
    id,
    backdropPath,
    contentsType,
  }: { id: string; backdropPath: string; contentsType: string },
  ref,
) {
  const href = `${id}?contentsType=${contentsType}`;
  return (
    <Link
      href={`/contents/${href}`}
      ref={ref}
      className="carousel-item ml-2 bg-white text-black cursor-pointer"
    >
      <Image
        id={id}
        src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
        alt="poster"
        width={300}
        height={150}
      />
    </Link>
  );
});
