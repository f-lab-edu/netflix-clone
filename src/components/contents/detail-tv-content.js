import { getDetailTVContent } from "../../app/api/contents/route";
import Image from "next/image";

async function getContent(id) {
  const content = await getDetailTVContent(id).then((data) => data.json());

  return content;
}
async function DetailTvContent({ id }) {
  const content = await getContent(id);

  return (
    <>
      <div>
        Content Detail Page.
        <h1> 제목: {content.name}</h1>
        <Image
          src={`https://image.tmdb.org/t/p/w500${content.backdrop_path}`}
          alt={"poster"}
          width={500}
          height={500}
        />
        <div>
          <div>출시일 : {content.first_air_date}</div>
          <div>상영 시간: {content.episode_run_time}</div>
          <div>
            지원 언어: [
            {content.spoken_languages.map((l) => l.english_name + " ")}]
          </div>
          <div>
            평점: {content.vote_average.toFixed(2)}({content.vote_count})
          </div>
          <p>장르: {content.genres.map((g) => g.name + " ")}</p>
          <p>{content.overview}</p>
        </div>
        <div>
          시즌:
          {content.seasons.map((s) => s.name)}
        </div>
      </div>
    </>
  );
}

export default DetailTvContent;
