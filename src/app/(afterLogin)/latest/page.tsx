"use client";
import OptionList from "@/app/(afterLogin)/_component/option-list";
import CardList from "@/app/(afterLogin)/_component/card-list";
import { getTrendContents } from "@/services/contents";
import React, { useEffect, useState } from "react";
import ClientSideLoading from "@/app/(afterLogin)/_component/client-side-loading";
import style from "./trend.module.css";
import { Contents } from "@/model/media";

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
      <div className={style.genresBox}>
        <OptionList
          options={options}
          sStyle={selectBoxStyles}
          selected={selected}
          onChange={onChangeOptions}
        />
      </div>
      <div className={style.results}>
        <CardList dataList={data.results} />
      </div>
    </section>
  );
}

export default LatestContentPage;
