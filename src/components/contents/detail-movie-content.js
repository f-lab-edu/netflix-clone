import Image from "next/image";
import { getDetailContent } from "../../app/api/contents/route";
async function getContent(id) {
  const content = await getDetailContent(id).then((data) => data.json());

  return content;
}

async function DetailMovieContent({ id }) {
  const content = await getContent(id);
  return (
    <>
      <div>
        Content Detail Page.
        <h1> 제목: {content.title}</h1>
        <Image
          src={`https://image.tmdb.org/t/p/w500${content.backdrop_path}`}
          alt={"poster"}
          width={500}
          height={500}
        />
        <div>
          <div>출시일 : {content.release_date}</div>
          <div>상영 시간: {content.runtime}</div>
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
      </div>
    </>
  );
}

export default DetailMovieContent;
