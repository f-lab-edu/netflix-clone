"use client";
import CardItem from "./card-item";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Pagination from "./pagination";

function CardList(props) {
  const [index, setIndex] = useState(0);
  const items = props.items;
  const selectedRef = useRef();
  let page = Math.floor(index / 5) + 1;

  const onClickRight = () => {
    flushSync(() => {
      setIndex(index + 5);
      if (index + 5 > items.length - 1) {
        // getContents
        setIndex(0);
      }
      console.log(index);
    });
    selectedRef.current.scrollIntoView({
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
          <div className={"h-full flex ml-2"}>
            <button className={""}>❮</button>
          </div>
          <div className={"carousel carousel-center"}>
            {items.map((item, idx) => {
              return (
                <CardItem
                  key={item.id}
                  id={item.id}
                  ref={index === idx ? selectedRef : null}
                  title={item.title}
                  overview={item.overview}
                  releaseDate={item.release_date}
                  posterPath={item.poster_path}
                  backdropPath={item.backdrop_path}
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
