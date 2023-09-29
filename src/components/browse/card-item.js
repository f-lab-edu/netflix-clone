import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

export default forwardRef(function CardItem({ id, backdropPath }, ref) {
  return (
    // div 에 alert 크게 띄워서 alert 에 `/contents/${id}`페이지 출력 되게
    <Link
      href={`/contents/${id}`}
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
