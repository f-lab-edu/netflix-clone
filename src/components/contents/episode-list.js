import EpisodeItem from "./episode-item";

async function EpisodeList({ seasons }) {
  const { episodes } = seasons;
  return (
    <ul>
      {episodes.map((episode) => (
        <EpisodeItem
          key={episode.id}
          episode={episode}
          posterPath={seasons.poster_path}
        />
      ))}
    </ul>
  );
}

export default EpisodeList;
