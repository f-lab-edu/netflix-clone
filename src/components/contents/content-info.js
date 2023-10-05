import Link from "next/link";

function ContentInfo({ content }) {
  console.log(content);
  const genres = content.genres.map((g) => g.name + " ");
  const isSeries = content.belongs_to_collection ?? "";
  const customDate = content.release_date.split("-")[0];
  const runtimeHour = Math.floor(content.runtime / 60);
  const runtimeMin = content.runtime % 60;

  return (
    <div>
      <div className={" grid grid-cols-preview-detail gap-8 "}>
        <div className={"preview-left "}>
          <p>
            <span className={"ml-1 text-sm text-gray-500"}>{customDate}</span>
            <span className={"ml-1 text-sm text-gray-500"}>
              {runtimeHour}시간
            </span>
            <span className={"ml-1 text-sm text-gray-500"}>{runtimeMin}분</span>
          </p>
          <div className={"flex text-lg"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-red-600"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
            {content.title} 지금 시청하세요!
          </div>
          <small className={"block mt-3"}>{content.overview}</small>
        </div>

        <div className={"preview-right"}>
          <small className={" block "}>
            <span className={"text-gray-700"}>평점: </span>
            {content.vote_average.toFixed(2)} ({content.vote_count})
          </small>
          <small className={" block "}>
            <span className={"text-gray-700"}>장르: </span>
            {genres}
          </small>
          <small className={" block "}>
            <span className={"text-gray-700"}> 시리즈 : </span>
            <Link href={`/contents/${isSeries.id}`} className={"text-blue-600"}>
              {isSeries.name}
            </Link>
          </small>
        </div>
      </div>
      {/*<div className={"mt-10"}>*/}
      {/*  <h2 className={"text-xl"}>예고편 및 다른 영상</h2>*/}
      {/*  <div>추가 예정 ...</div>*/}
      {/*</div>*/}

      {/*<div className={"mt-36"}>*/}
      {/*  <h2 className={"text-xl"}>{content.title} 상세 정보</h2>*/}
      {/*  <div>출시일 : {content.release_date}</div>*/}
      {/*  <div>상영 시간: {content.runtime}</div>*/}
      {/*  <div>*/}
      {/*    지원 언어: [*/}
      {/*    {content.spoken_languages.map((l) => l.english_name + " ")}]*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    평점: {content.vote_average.toFixed(2)}({content.vote_count})*/}
      {/*  </div>*/}
      {/*  <p>장르: {content.genres.map((g) => g.name + " ")}</p>*/}
      {/*  <p>{content.overview}</p>*/}
      {/*</div>*/}
    </div>
  );
}

export default ContentInfo;
