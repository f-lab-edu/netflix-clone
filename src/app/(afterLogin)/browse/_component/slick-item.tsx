import Link from "next/link";
import Image from "next/image";
export default function SlickItem({
  id,
  mediaType,
  image,
}: {
  id: number;
  mediaType: string;
  image: string;
}) {
  return (
    <Link href={`/contents/${id}?mediaType=${mediaType}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={"poster"}
        width={300}
        height={150}
      />
    </Link>
    // </div>
  );
}
