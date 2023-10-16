import Image from "next/image";

function SeasonItem({ itemPoster, mainPoster }) {
  const imgSrc = itemPoster ?? mainPoster;

  return (
    <div className={"rounded border bg-[#2f2f2f]"}>
      <Image
        className={" rounded rounded-b-none"}
        src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
        alt={"image"}
        width={500}
        height={500}
      />
    </div>
  );
}

export default SeasonItem;
