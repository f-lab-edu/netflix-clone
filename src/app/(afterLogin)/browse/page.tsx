"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickItem from "@/app/(afterLogin)/browse/_component/slick-item";
import style from "./browse.module.css";
import { settings } from "./_lib/slider-setting";
import { Media } from "@/model/media";
import { useEffect, useState } from "react";
import { getInitData } from "@/app/(afterLogin)/browse/_lib/initial-data";

function BrowsePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const initFunc = async () => {
      const response = await getInitData();
      setData(response);
    };
    initFunc();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularTvProgram,
    topRateTvProgram,
  } = data;

  return (
    <div>
      <div className={"mt-5"}>
        <h1>인기 있는 콘텐츠</h1>
        <div className={style.container}>
          <Slider {...settings}>
            {popularMovies?.results.map((media: Media) => (
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
        <div className={style.container}>
          <Slider {...settings}>
            {nowPlayingMovies?.results.map((media: Media) => (
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
        <div className={style.container}>
          <Slider {...settings}>
            {topRatedMovies?.results.map((media: Media) => (
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
        <div className={style.container}>
          <Slider {...settings}>
            {upcomingMovies?.results.map((media: Media) => (
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
        <div className={style.container}>
          <Slider {...settings}>
            {popularTvProgram?.results.map((media: Media) => (
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
        <div className={style.container}>
          <Slider {...settings}>
            {topRateTvProgram?.results.map((media: Media) => (
              <SlickItem
                key={media.id}
                id={media.id}
                image={media.backdrop_path}
                mediaType={topRateTvProgram.media_type}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;
