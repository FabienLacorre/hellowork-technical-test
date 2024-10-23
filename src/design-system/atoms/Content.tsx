import { clsx } from "clsx";
import "./Content.scss";

export interface ContentProps extends React.PropsWithChildren<unknown> {
  className?: string;
}

export const Content = ({
  children,
  className: classNameProps,
}: ContentProps): JSX.Element => {
  const className = clsx("ds-content", classNameProps);

  return <div className={className}>{children}</div>;
};
