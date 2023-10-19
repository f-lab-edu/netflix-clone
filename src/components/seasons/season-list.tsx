import SeasonItem from "@/components/seasons/season-item";
import { DetailContents } from "@/types/contents/types";

function SeasonList({ detailContents }: { detailContents: DetailContents }) {
  const { id, seasons, poster_path, contentsType } = detailContents;
  const seriesContentsList = seasons ?? "";

  if (!seriesContentsList) {
    return (
      <SeasonItem
        seriesId={id}
        mainPoster={poster_path}
        contentsType={contentsType}
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
          contentsType={contentsType}
          seasonNumber={series.season_number}
        />
      ))}
    </>
  );
}

export default SeasonList;
