import Image from "next/image";

type Props = {
  preview:
    | string
    | {
        key: string;
        site: string;
      }[];
};

function PreviewContents({ preview }: Props) {
  const isPicture = !Array.isArray(preview);
  let src = `https://image.tmdb.org/t/p/w500${preview}`;

  if (isPicture)
    return (
      <div>
        <Image
          className={"w-full"}
          src={src}
          alt={"poster"}
          width={400}
          height={400}
        />
      </div>
    );

  const key = preview[0]?.key;
  src = `https://www.youtube.com/embed/${key}?autoplay=1&loop=1&playlist=${key}&mute=1&controls=0&si=nh5lkzt8Jqa2v4Z1&amp;`;

  return (
    <div className={"w-full h-[40rem] overflow-hidden relative"}>
      <iframe
        className={"w-full h-full"}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default PreviewContents;
