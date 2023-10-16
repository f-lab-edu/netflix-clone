function Seasons({ seasons, series }) {
  return (
    <div className={"flex justify-between"}>
      <div>
        <p>회차</p>
        <small className={"block"}>{seasons.name}</small>
      </div>
      <select
        className="select select-bordered w-full max-w-xs"
        defaultValue={seasons.id}
      >
        {series.map((s) => (
          <option value={s.id} key={s.id}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Seasons;
