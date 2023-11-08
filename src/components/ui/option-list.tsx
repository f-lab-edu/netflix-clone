import { Options } from "@/types/ui/types";
import React from "react";

export default function OptionList({
  options,
  sStyle,
  defaultOption,
  onChange,
}: {
  options: Options[];
  sStyle: string;
  defaultOption?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select className={sStyle} onChange={onChange}>
      {defaultOption && <option value={"all"}>전체</option>}
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
