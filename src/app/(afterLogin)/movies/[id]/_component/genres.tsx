"use client";
import React, { useEffect, useState } from "react";
import { Options } from "@/types/ui/types";
import { getGenres } from "@/services/contents";
import OptionList from "@/components/ui/option-list";
import { useRouter } from "next/navigation";

export default function Genres({ params }: { params: string }) {
  const router = useRouter();
  const [genres, setGenres] = useState<Options[]>();

  const selectBoxStyles = "select bg-transparent border-white";
  const onChangeGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/movies/${e.target.value}`);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await getGenres("movie");
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
