import clsx from "clsx";
import "./Button.scss";
import { Typography } from "../atoms/Typography";

export interface ButtonProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string | number;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({
  className: classNameProps,
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  const className = clsx("ds-c-button", classNameProps);
  return (
    <button type={type} onClick={onClick} className={className}>
      <Typography size="S" isBold>
        {children}
      </Typography>
    </button>
  );
};
