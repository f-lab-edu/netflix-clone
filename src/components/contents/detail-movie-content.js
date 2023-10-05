import { getDetailContent, getVideos } from "../../app/api/contents/route";
import ContentInfo from "./content-info";
async function getContent(id) {
  const content = await getDetailContent(id).then((data) => data.json());
  return content;
}
async function getTeaser(id) {
  const videos = await getVideos(id).then((data) => data.json());
  return videos;
}
// TODO: 추 후 detail-movie-content, detail-TV-content를  공통 파일로 합치고
// content-info를 movie-content-info, tv-content-info로 나누어야함
async function DetailMovieContent({ id }) {
  const content = await getContent(id);
  const videos = await getTeaser(id);
  const key = videos[0]?.key ?? "";
  const videoSrc = `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&playlist=${key}&mute=1&controls=0&si=nh5lkzt8Jqa2v4Z1&amp;`;

  return (
    <>
      <div className={"w-full h-[40rem] overflow-hidden relative"}>
        <iframe
          className={"w-full h-full"}
          src={videoSrc}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <ContentInfo content={content} />
    </>
  );
}

export default DetailMovieContent;
