import Image from "next/image";
import Link from "next/link";

export default function CardItem({ item, contentsType }) {
  return (
    <Link href={`/contents/${item.id}?&contentsType=${contentsType}`}>
      <Image
        className={"w-full border rounded cursor-pointer hover:scale-125 "}
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={"movie-poster"}
        width={500}
        height={500}
        onMouseOver={null}
        // style={{ width: "100%", height: "auto" }}
      />
    </Link>
  );
}
