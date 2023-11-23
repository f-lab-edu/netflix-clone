"use client";
import OptionList from "@/components/ui/option-list";
import CardList from "@/components/ui/card-list";
import { getTrendContents } from "@/services/contents";
import React, { useEffect, useState } from "react";
import ClientSideLoading from "@/components/ui/client-side-loading";
import { Contents } from "@/types/browse/types";

function LatestContentPage() {
  const [selected, setSelected] = useState("week");
  const [data, setData] = useState<Contents | null>(null);

  const options = [
    { id: "week", name: "주간" },
    { id: "day", name: "일별" },
  ];

  const selectBoxStyles = "select bg-transparent border-white";

  const fetchTrend = async () => {
    const res = await getTrendContents(selected);
    setData(res);
  };

  const onChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    fetchTrend();
  }, [selected]);

  if (!data) {
    return <ClientSideLoading />;
  }

  return (
    <section>
      <div className={"ml-5 mt-5 mb-10"}>
        <OptionList
          options={options}
          sStyle={selectBoxStyles}
          selected={selected}
          onChange={onChangeOptions}
        />
      </div>
      <div className={"grid gap-4 grid-cols-4 px-5"}>
        <CardList dataList={data.results} />
      </div>
    </section>
  );
}

export default LatestContentPage;
