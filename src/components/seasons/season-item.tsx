import Image from "next/image";
import Link from "next/link";

function SeasonItem({
  seriesId,
  itemPoster,
  mainPoster,
  contentsType,
  seasonNumber,
}: {
  seriesId: number;
  itemPoster?: string;
  mainPoster?: string;
  contentsType: string;
  seasonNumber?: number;
}) {
  const imgSrc = itemPoster ?? mainPoster;
  const href = seasonNumber ? `&seasonNumber=${seasonNumber}` : "";

  return (
    <div className={"rounded border bg-[#2f2f2f]"}>
      <Link href={`/contents/${seriesId}?contentsType=${contentsType}${href}`}>
        <Image
          className={"rounded rounded-b-none"}
          src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
          alt={"image"}
          width={500}
          height={500}
        />
      </Link>
    </div>
  );
}

export default SeasonItem;
