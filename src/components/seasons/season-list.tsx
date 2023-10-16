import SeasonItem from "@/components/seasons/season-item";

function SeasonList({ contents }) {
  const { seasons, poster_path } = contents;
  const seriesList = seasons ?? "";

  if (!seriesList) {
    return <SeasonItem mainPoster={poster_path} />;
  }
  return (
    <>
      {seriesList.map((content) => (
        <SeasonItem
          key={content.id}
          itemPoster={content?.poster_path}
          mainPoster={poster_path}
        />
      ))}
    </>
  );
}

export default SeasonList;
