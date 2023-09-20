function CardItem({ id, title, overview, releaseDate, posterPath }) {
  return (
    <div className="card w-96 ml-2 bg-white text-black">
      {/*<h1>{title}</h1>*/}
      {/*<div>*/}
      {/*  <p>{releaseDate}</p>*/}
      {/*  <p>{overview}</p>*/}
      {/*</div>*/}
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="Shoes" />
    </div>
  );
}

export default CardItem;
