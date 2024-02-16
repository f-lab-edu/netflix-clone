import CloseButton from "@/app/(afterLogin)/_component/close-button";
import style from "@/app/(afterLogin)/@modal/(.)contents/[cid]/_component/modal.module.css";
import { getDetail, getFavorite } from "@/app/(afterLogin)/_lib/tmdb-api";
import { Tv } from "@/model/media";
import Image from "next/image";
import HeartIcon from "@/app/(afterLogin)/contents/[cid]/_component/heart-icon";
import ShareIcon from "@/app/(afterLogin)/contents/[cid]/_component/share-icon";

export default async function ModalTv({ id }: { id: string }) {
  const media = (await getDetail("tv", id)) as Tv;
  const { tv } = await getFavorite();
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.header}>
          <CloseButton />
        </div>
        {/*밑에 h-72ㄷ ㅐ신 최소 높이 설정하면 될듯*/}
        <div className={style.imageZone}>
          <Image
            className={style.image}
            src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
            alt={"poster"}
            width={400}
            height={600}
          />
        </div>
        <div className={style.tvTitle}>
          <h1>{media.name}</h1>
          <small>{media.episode_run_time}분</small>
        </div>
        <div className={style.infoZone}>
          {media.overview ? (
            <div className={style.left}>{media.overview}</div>
          ) : (
            <div className="flex-1 min-w-[1px]" />
          )}
          <div className={style.right}>
            <div className={style.actionZone}>
              <div className={style.action}>
                <HeartIcon id={id} favoriteIds={tv} />
                <small>찜하기</small>
              </div>
              <div className={style.action}>
                <ShareIcon />
                <small>공유</small>
              </div>
            </div>
            <small>최근 방영: {media.last_air_date}</small>
            <small>
              별점: ⭐ {media.vote_average}({media.vote_count})
            </small>
          </div>
        </div>
        <div className={style.link}>
          {/*  넷플릭스 단독일 경우 넷플릭스롷 바로 보러가기 */}
          {/* homepage */}
          {/*<Link href={media.homepage}>{media.homepage}</Link>*/}
        </div>
        <div className={style.seasons}>
          {/*  시리즈 있는 경우, 다른 시리즈 보러가기! seasons > 1*/}
        </div>
      </div>
    </div>
  );
}
