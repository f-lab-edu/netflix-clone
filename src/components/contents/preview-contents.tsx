function PreviewContents({ src }: { src: string }) {
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
