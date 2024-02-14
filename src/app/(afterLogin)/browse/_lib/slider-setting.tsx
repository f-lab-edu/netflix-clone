import { CustomArrowProps } from "react-slick";

function PrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: 5, zIndex: 10 }}
      onClick={onClick}
    />
  );
}
function NextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: 5, zIndex: 10 }}
      onClick={onClick}
    />
  );
}

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 9,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 2400, settings: { slidesToShow: 8, slidesToScroll: 8 } },
    {
      breakpoint: 2250,
      settings: { slidesToShow: 7.5, slidesToScroll: 7.5, initialSlide: -0.5 },
    },
    { breakpoint: 2100, settings: { slidesToShow: 7, slidesToScroll: 7 } },
    {
      breakpoint: 1950,
      settings: { slidesToShow: 6.5, slidesToScroll: 6.5, initialSlide: -0.5 },
    },
    { breakpoint: 1800, settings: { slidesToShow: 6, slidesToScroll: 6 } },
    {
      breakpoint: 1650,
      settings: { slidesToShow: 5.5, slidesToScroll: 5.5, initialSlide: -0.5 },
    },
    { breakpoint: 1500, settings: { slidesToShow: 5, slidesToScroll: 5 } },
    {
      breakpoint: 1350,
      settings: { slidesToShow: 4.5, slidesToScroll: 4.5, initialSlide: -0.5 },
    },
    { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    {
      breakpoint: 1050,
      settings: { slidesToShow: 3.5, slidesToScroll: 3.5, initialSlide: -0.5 },
    },
    { breakpoint: 900, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    {
      breakpoint: 750,
      settings: { slidesToShow: 2.5, slidesToScroll: 2.5, initialSlide: -0.5 },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    {
      breakpoint: 450,
      settings: { slidesToShow: 1.5, slidesToScroll: 1.5, initialSlide: -0.5 },
    },
    { breakpoint: 300, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};
