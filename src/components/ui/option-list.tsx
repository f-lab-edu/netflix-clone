import { Options } from "@/types/ui/types";

export default function OptionList({
  options,
  sStyle,
  defaultOption,
}: {
  options: Options[];
  sStyle: string;
  defaultOption?: boolean;
}) {
  return (
    <select className={sStyle}>
      {defaultOption && <option value={"all"}>전체</option>}
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
