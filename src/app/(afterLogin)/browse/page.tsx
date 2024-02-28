"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickItem from "@/app/(afterLogin)/browse/_component/slick-item";
import style from "./browse.module.css";
import { settings } from "./_lib/slider-setting";
import { useEffect, useState } from "react";
import { getInitData } from "@/app/(afterLogin)/browse/_lib/initial-data";
import ClientSideLoading from "@/app/(afterLogin)/_component/client-side-loading";
import { Contents } from "@/model/media";

interface Dates {
  dates: { maximum: string; minimum: string };
}

type IncludeDatesContents = {
  [P in keyof Contents | keyof Dates]: P extends keyof Contents
    ? Contents[P]
    : Dates;
};
type Props = {
  nowPlayingMovies: IncludeDatesContents;
  popularMovies: Contents;
  popularTvProgram: Contents;
  topRatedTvProgram: Contents;
  topRatedMovies: IncludeDatesContents;
  upcomingMovies: Contents;
};
function BrowsePage() {
  const [data, setData] = useState<Props | null>(null);

  useEffect(() => {
    const initFunc = async () => {
      const response = await getInitData();
      setData(response);
    };
    initFunc();
  }, []);

  if (!data) {
    return <ClientSideLoading />;
  }

  const {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRatedTvProgram,
  } = data;

  return (
    <div className={style.container}>
      <div className={"mt-5"}>
        <h1>인기 있는 콘텐츠</h1>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {popularMovies?.results.map((media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={popularMovies.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={"mt-5"}>
        <h1>극장에서 상영중인 콘텐츠</h1>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {nowPlayingMovies?.results.map((media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={nowPlayingMovies.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={"mt-5"}>
        <h1>평점 높은 콘텐츠</h1>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {topRatedMovies?.results.map((media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={topRatedMovies.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={"mt-5"}>
        <h1>개봉 예정 콘텐츠</h1>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {upcomingMovies?.results.map((media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={upcomingMovies.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={"mt-5"}>
        <h1>인기 있는 TV 프로그램</h1>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {popularTvProgram?.results.map((media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={popularTvProgram.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className={"mt-5"}>
        <h1>평점 높은 TV 프로그램</h1>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {topRatedTvProgram?.results.map((media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={topRatedTvProgram.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;
