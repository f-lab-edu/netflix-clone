import Image from "next/image";
import Link from "next/link";

function EpisodeItem({ episode, posterPath }) {
  const { episode_number, name, overview, runtime, still_path } = episode;
  const poster = still_path ?? posterPath;
  const imgSrc = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : "/logo.png";

  return (
    <>
      <div className={"flex min-w-[60px] border-b rounded px-10 py-2"}>
        <Link href={``} />
        <div className={"flex items-center"}>{episode_number}</div>
        <Image
          className={"rounded mx-5 w-[200px] h-[100px]"}
          src={imgSrc}
          alt={"poster"}
          width={200}
          height={100}
        />
        <div className={"flex flex-col justify-center w-full  "}>
          <div className={"flex justify-between "}>
            <div>
              <h3>{name}</h3>
              <small>{episode_number} 화</small>
            </div>
            <div className={" flex justify-center items-center "}>
              <small>{runtime}분</small>
            </div>
          </div>
          <small className={"block"}>{overview}</small>
        </div>
      </div>
    </>
  );
}

export default EpisodeItem;
