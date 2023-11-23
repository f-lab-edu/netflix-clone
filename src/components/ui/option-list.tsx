import React from "react";
import { Options } from "@/types/ui/types";

export default function OptionList({
  options,
  sStyle,
  onChange,
  selected,
}: {
  options: Options[];
  sStyle: string;
  defaultOption?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string;
}) {
  return (
    <select className={sStyle} onChange={onChange} defaultValue={selected}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
