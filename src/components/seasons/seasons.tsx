"use client";

import React, { useState } from "react";
import { DetailContents } from "@/types/contents/types";
import { useSearchParams } from "next/navigation";

const EpisodeList = React.lazy(
  () => import("@/components/contents/episode-list"),
);

function Seasons({ detailContents }: { detailContents: DetailContents }) {
  const searchParams = useSearchParams();
  const seasonNumber = searchParams.get("seasonNumber");

  const { id, number_of_seasons, seasons } = detailContents;
  const [selected, setSelected] = useState(seasonNumber ?? number_of_seasons);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className={"flex justify-between items-end mt-8"}>
        <div>
          <p>회차</p>
        </div>
        <select
          className="select select-bordered w-full max-w-xs border-2 bg-red-500 "
          defaultValue={selected}
          onChange={handleChange}
        >
          {seasons.map((s) => (
            <option key={s.id} value={s.season_number}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <EpisodeList id={id} seasonNumber={selected} />
      </div>
    </>
  );
}

export default Seasons;
