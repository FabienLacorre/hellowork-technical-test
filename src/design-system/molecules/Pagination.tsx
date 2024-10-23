import clsx from "clsx";
import { Button } from "./Button";

import "./Pagination.scss";

export interface PaginationProps {
  onNextPageClick: () => void;
  onPreviousPageClick: () => void;
  currentPage: number;
  hasNext: boolean;
}

export const Pagination = ({
  currentPage,
  hasNext,
  onNextPageClick,
  onPreviousPageClick,
}: PaginationProps) => {
  const className = clsx("ds-c-pagination");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOnPreviousPageClick = () => {
    scrollToTop();
    onPreviousPageClick();
  };

  const handleOnNextPageClick = () => {
    scrollToTop();
    onNextPageClick();
  };
  return (
    <div className={className}>
      {currentPage !== 1 && (
        <Button onClick={handleOnPreviousPageClick}>Previous page</Button>
      )}
      {hasNext && <Button onClick={handleOnNextPageClick}>Next page</Button>}
    </div>
  );
};
