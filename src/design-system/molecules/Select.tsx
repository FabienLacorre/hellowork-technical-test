import clsx from "clsx";
import "./Select.scss";

export interface SelectProps {
  className?: string;
  options: { label: string; value: string | number }[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  className: classNameProps,
  options,
  value,
  onChange,
}: SelectProps) => {
  const className = clsx("ds-c-select", classNameProps);

  return (
    <select className={className} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
