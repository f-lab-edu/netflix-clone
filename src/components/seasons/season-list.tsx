import SeasonItem from "@/components/seasons/season-item";
import { DetailContents } from "@/types/contents/types";

function SeasonList({ detailContents }: { detailContents: DetailContents }) {
  const { id, seasons, poster_path } = detailContents;
  const mediaType = detailContents.media_type;
  const seriesContentsList = seasons ?? "";

  if (mediaType === "movie") {
    return (
      <SeasonItem
        seriesId={id}
        mainPoster={poster_path}
        mediaType={mediaType}
      />
    );
  }

  return (
    <>
      {seriesContentsList.map((series) => (
        <SeasonItem
          key={series.id}
          seriesId={id}
          itemPoster={series.poster_path}
          mainPoster={poster_path}
          mediaType={mediaType}
          seasonNumber={series.season_number}
        />
      ))}
    </>
  );
}

export default SeasonList;
