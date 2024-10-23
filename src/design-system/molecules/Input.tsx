import clsx from "clsx";
import "./Input.scss";

export interface InputProps {
  className?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
}

export const Input = ({
  className: classNameProps,
  type = "text",
  placeholder,
  value,
  onChange,
  min,
}: InputProps) => {
  const className = clsx("ds-c-input", classNameProps);

  return (
    <input
      min={min}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
