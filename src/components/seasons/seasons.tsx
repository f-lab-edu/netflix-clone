"use client";
import EpisodeList from "@/components/contents/episode-list";
import React, { useState } from "react";
import { Contents } from "@/types/contents/types";

function Seasons({ contents }: { contents: Contents }) {
  const { id, number_of_seasons, seasons } = contents;
  const [selected, setSelected]: [selected: string, setSelected: Function] =
    useState(number_of_seasons);

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
