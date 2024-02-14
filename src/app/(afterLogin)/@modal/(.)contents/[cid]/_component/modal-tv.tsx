import CloseButton from "@/app/(afterLogin)/_component/close-button";
import style from "@/app/(afterLogin)/@modal/(.)contents/[cid]/_component/modal.module.css";
import Link from "next/link";
import { getDetail } from "@/app/(afterLogin)/_lib/tmdb-api";
import { Tv } from "@/model/media";
import Image from "next/image";

export default async function ModalTv({ id }: { id: string }) {
  const media = (await getDetail("tv", id)) as Tv;
  return (
    <div
      className={
        "w-[90vw] h-full flex justify-center absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.4)]"
      }
    >
      <div
        className={
          "relative top-5 min-w-[400px] max-w-[800px] flex flex-col bg-black  border border-rose-600 rounded-lg z-20"
        }
      >
        <CloseButton />
        <div className={style.container}>
          <div className={style.videoZone}>
            {/*밑에 h-72ㄷ ㅐ신 최소 높이 설정하면 될듯*/}
            <div className={"w-full h-72 overflow-hidden relative"}>
              <Image
                className={"w-full"}
                src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                alt={"poster"}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={style.title}>
            <h1>{media.name}</h1>
            <small>{media.episode_run_time}분</small>
          </div>
          <div className={style.body}>
            <div className={style.left}>{media.overview}</div>
            <div className={style.right}>
              {/*<small>장르: {formatGenres(media.genres)}</small>*/}
              <small>최근 방영: {media.last_air_date}</small>
              <small>
                별점: {media.vote_average}({media.vote_count})
              </small>
            </div>
          </div>
          <div className={style.link}>
            {/*  넷플릭스 단독일 경우 넷플릭스롷 바로 보러가기 */}
            {/* homepage */}
            <Link href={media.homepage}>{media.homepage}</Link>
          </div>
          <div className={style.seasons}>
            {/*  시리즈 있는 경우, 다른 시리즈 보러가기! seasons > 1*/}
          </div>
        </div>
      </div>
    </div>
  );
}
