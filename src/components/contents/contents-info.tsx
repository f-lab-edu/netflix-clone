import Link from "next/link";
import { Contents } from "@/types/contents/types";

function ContentsInfo({ contents }: { contents: Contents }) {
  console.log(contents);
  const title = contents.title ?? contents.name;
  const genres = contents?.genres.map((g) => g.name + " ");
  const series = contents?.belongs_to_collection?.name ?? contents.name;
  const releaseDate = contents?.release_date ?? contents?.last_air_date;

  const runtime = contents.runtime ?? "";

  const hour = Math.floor(runtime / 60);
  const minute = runtime % 60;

  const date = releaseDate?.split("-")[0];

  return (
    <div>
      <div className={" grid grid-cols-preview-detail gap-8 "}>
        <div className={"preview-left "}>
          <p>
            <span className={"ml-1 text-sm text-gray-500"}>{date}</span>
            {hour ? (
              <span className={"ml-1 text-sm text-gray-500"}>{hour}시간</span>
            ) : null}

            <span className={"ml-1 text-sm text-gray-500"}>
              {runtime ? `${minute}분` : `시즌 ${contents.seasons.length}개`}
            </span>
          </p>
          <div className={"flex text-lg"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-red-600 mr-1"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
            <h1>[{title}] 지금 시청하세요!</h1>
          </div>
          <small className={"block mt-3"}>{contents.overview}</small>
        </div>

        <div className={"preview-right"}>
          <small className={" block "}>
            <span className={"text-gray-700"}>평점: </span>
            {contents.vote_average.toFixed(2)} ({contents.vote_count})
          </small>
          <small className={" block "}>
            <span className={"text-gray-700"}>장르: </span>
            {genres}
          </small>
          <small className={" block "}>
            <span className={"text-gray-700"}> 시리즈 : </span>
            {series && (
              <Link
                href={`/series/${contents.id}/?contentsType=${contents.contentsType}`}
                className={"text-blue-600"}
              >
                {contents.contentsType === "movie"
                  ? series
                  : `${series} 시리즈`}
              </Link>
            )}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ContentsInfo;
