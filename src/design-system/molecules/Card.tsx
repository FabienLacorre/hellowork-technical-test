import clsx from "clsx";

import "./Card.scss";

export interface CardProps extends React.PropsWithChildren<unknown> {
  className?: string;
  onClick?: () => void;
}

export const Card = ({
  children,
  className,
  onClick,
}: CardProps): JSX.Element => {
  const cardClassName = clsx("ds-c-card", className);

  return (
    <div onClick={onClick} className={cardClassName}>
      {children}
    </div>
  );
};
