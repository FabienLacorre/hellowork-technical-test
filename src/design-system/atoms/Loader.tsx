import "./Loader.scss";
import clsx from "clsx";

export interface LoaderProps {
  className?: string;
  classNameContainer?: string;
}

export const Loader = ({
  className: classNameProps,
  classNameContainer: classNameContainerProps,
}: LoaderProps) => {
  const className = clsx("ds-c-loader", classNameProps);
  const classNameLoaderContainer = clsx(
    "ds-c-loader__container",
    classNameContainerProps
  );
  return (
    <div className={classNameLoaderContainer}>
      <div className={className}></div>
    </div>
  );
};
