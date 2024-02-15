import style from "@/app/(afterLogin)/@modal/(.)contents/[cid]/_component/modal.module.css";
import { formatGenres } from "@/app/(afterLogin)/contents/[cid]/_lib/format";
import Link from "next/link";
import CloseButton from "@/app/(afterLogin)/_component/close-button";
import { getDetail, getVideo } from "@/app/(afterLogin)/_lib/tmdb-api";
import { Movie } from "@/model/media";

export default async function ModalMovie({ id }: { id: string }) {
  const media = (await getDetail("movie", id)) as Movie;
  const video = await getVideo("movie", id);

  return (
    <>
      <div className={style.container}>
        <div className={style.modal}>
          <div className={style.header}>
            <CloseButton />
          </div>
          <div className={style.videoZone}>
            {/*밑에 h-72ㄷ ㅐ신 최소 높이 설정하면 될듯*/}
            <div className={"w-full h-72 overflow-hidden relative"}>
              <iframe
                className={"w-full h-full"}
                src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&loop=1&playlist=${video?.key}&mute=1&controls=0&si=nh5lkzt8Jqa2v4Z1&amp;`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          {media.tagline && (
            <div className={style.tagline}>{media.tagline}</div>
          )}
          <div className={style.title}>
            <h1>{media.title}</h1>
            <small>{media.runtime}분</small>
          </div>
          <div className={style.infoZone}>
            {media.overview ? (
              <div className={style.left}>{media.overview}</div>
            ) : (
              <div className="flex-1 min-w-[1px]" />
            )}
            <div className={style.right}>
              <small>장르: {formatGenres(media.genres)}</small>
              <small>개봉일: {media.release_date}</small>
              <small>
                별점: {media.vote_average}({media.vote_count})
              </small>
            </div>
          </div>
          <div className={style.link}>
            {/*  넷플릭스 단독일 경우 넷플릭스롷 바로 보러가기 */}
            {/* homepage */}
            {/*<Link href={media.homepage}>{media.homepage}</Link>*/}
          </div>
        </div>
      </div>

      {/*<div className={style.container}>*/}

      {/*</div>*/}
    </>
  );
}
