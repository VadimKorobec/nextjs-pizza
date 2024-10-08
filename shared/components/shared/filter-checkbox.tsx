

import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}: FilterChecboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}-${String(name)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}-${String(name)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};

export default FilterCheckbox;
