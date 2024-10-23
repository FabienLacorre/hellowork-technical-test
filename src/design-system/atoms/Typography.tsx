import "./Typography.scss";
import clsx from "clsx";

export interface TypographyProps {
  children: JSX.Element | JSX.Element[] | string | number;
  className?: string;
  isBold?: boolean;
  isBarred?: boolean;
  size?: "XS" | "S" | "M" | "L";
  color?: "primary" | "secondary";
}

export const Typography = ({
  children,
  isBold = false,
  size = "M",
  isBarred = false,
  className: classNameProps,
  color = "primary",
}: TypographyProps): JSX.Element => {
  const className = clsx(
    "ds-c-typography",
    {
      "ds-c-typography--bold": isBold,
      "ds-c-typography--primary": color === "primary",
      "ds-c-typography--secondary": color === "secondary",
      "ds-c-typography--XS": size === "XS",
      "ds-c-typography--S": size === "S",
      "ds-c-typography--M": size === "M",
      "ds-c-typography--L": size === "L",
    },
    classNameProps
  );

  return <span className={className}>{children}</span>;
};
