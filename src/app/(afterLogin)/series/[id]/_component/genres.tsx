"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getGenres } from "@/services/contents";
import OptionList from "@/app/(afterLogin)/_component/option-list";
import { Options } from "@/model/category";

export default function Genres({ params }: { params: string }) {
  const router = useRouter();
  const [genres, setGenres] = useState<Options[]>();
  const selectBoxStyles = "select bg-transparent border-white";

  const onChangeGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/series/${e.target.value}`);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await getGenres("tv");
      setGenres(res.genres);
    };
    fetchGenres();
  }, []);
  return (
    <div className={"pl-5 py-3"}>
      {genres && (
        <OptionList
          options={genres}
          sStyle={selectBoxStyles}
          onChange={onChangeGenres}
          selected={params}
        />
      )}
    </div>
  );
}
