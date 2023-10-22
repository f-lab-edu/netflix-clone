export default function OptionList({ options, sStyle }) {
  return (
    <select className={sStyle}>
      <option value={"all"}>전체</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
