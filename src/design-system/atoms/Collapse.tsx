import clsx from "clsx";
import "./Collapse.scss";

export interface CollapseProps extends React.PropsWithChildren<unknown> {
  isOpen: boolean;
}

export const Collapse = ({ isOpen, children }: CollapseProps) => {
  const className = clsx("ds-c-collapse", {
    "ds-c-collapse--open": isOpen,
  });
  return <div className={className}>{children}</div>;
};
