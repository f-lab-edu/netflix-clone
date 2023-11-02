"use client";
import EpisodeItem from "./episode-item";
import { getSeasons } from "@/services/contents";
import { useEffect, useState } from "react";
import { Season } from "@/types/seasons/types";

function EpisodeList({
  id,
  seasonNumber,
}: {
  id: number;
  seasonNumber: number | string;
}) {
  const [season, setSeason] = useState<Season>();

  useEffect(() => {
    const getData = async () => {
      const response = await getSeasons(id, seasonNumber);
      setSeason(response);
    };
    getData();
    return () => {};
  }, [id, seasonNumber]);
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
