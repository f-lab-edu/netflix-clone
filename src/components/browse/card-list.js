import CardItem from "./card-item";

function CardList(props) {
  const items = props.items;

  return (
    <ul>
      {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          title={item.title}
          overview={item.overview}
          releaseDate={item.release_date}
          posterPath={item.poster_path}
        />
      ))}
    </ul>
  );
}

export default CardList;
