import clsx from "clsx";
import "./CardContainer.scss";

export interface CardContainerProps extends React.PropsWithChildren<unknown> {
  className?: string;
}

export const CardContainer = ({
  children,
  className,
}: CardContainerProps): JSX.Element => {
  const cardContainerClassName = clsx("ds-c-card-container", className);

  return <div className={cardContainerClassName}>{children}</div>;
};
