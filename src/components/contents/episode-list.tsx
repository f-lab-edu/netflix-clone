import EpisodeItem from "./episode-item";
import { getSeasons } from "@/services/contents/route";
import { useEffect, useState } from "react";
import { Season } from "@/types/seasons/types";

function EpisodeList({
  id,
  seasonNumber,
}: {
  id: number;
  seasonNumber: number;
}) {
  const [season, setSeason] = useState<Season>();

  useEffect(() => {
    const getData = async () => {
      getSeasons(id, seasonNumber)
        .then((res) => res.json())
        .then((data: Season) => setSeason(data));
    };
    getData();
    return () => {};
  }, [seasonNumber]);
  const episodes = season?.episodes;
  return (
    <>
      <small className={"block"}>{season?.name}</small>
      {episodes?.map((episode) => (
        <EpisodeItem
          key={episode.id}
          episode={episode}
          posterPath={season?.poster_path}
        />
      ))}
    </>
  );
}

export default EpisodeList;
