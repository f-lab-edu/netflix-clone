"use client";
import CardItem from "./card-item";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Pagination from "./pagination";
import { Contents } from "@/types/browse/types";

function CardList({ contents }: { contents: Contents }) {
  const [index, setIndex] = useState(0);
  const items = contents.results;
  const selectedRef = useRef<HTMLAnchorElement | null>(null);
  let page = Math.floor(index / 5) + 1;

  const onClickLeft = () => {
    flushSync(() => {
      setIndex(0);
    });
    selectedRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const onClickRight = () => {
    flushSync(() => {
      setIndex(index + 5);
      if (index + 5 > items.length - 1) {
        // getContents
        setIndex(0);
      }
      console.log(index);
    });
    selectedRef.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <>
      <Pagination page={page} />
      <div className="py-1 space-x-4 bg-neutral relative h-44">
        <div className={"flex justify-between items-center w-full h-full"}>
          <div className={"h-full flex mx-2 justify-center"}>
            <button className={""} onClick={onClickLeft}>
              ❮
            </button>
          </div>
          <div className={"carousel carousel-center"}>
            {items.map((item, idx) => {
              return (
                <CardItem
                  key={item.id}
                  id={item.id}
                  ref={index === idx ? selectedRef : null}
                  backdropPath={item.backdrop_path}
                  mediaType={contents.media_type}
                />
              );
            })}
          </div>
          <div className={"h-full flex mx-2"}>
            <button className={""} onClick={onClickRight}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardList;
