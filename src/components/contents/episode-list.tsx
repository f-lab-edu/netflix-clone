import EpisodeItem from "./episode-item";
import { getSeasons } from "@/app/api/contents/route";
import { useEffect, useState } from "react";

function EpisodeList({ id, seasonNumber }) {
  const [season, setSeason] = useState();

  useEffect(() => {
    const getData = async () => {
      getSeasons(id, seasonNumber)
        .then((res) => res.json())
        .then((data) => setSeason(data));
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
