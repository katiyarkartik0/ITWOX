import Button from "components/Button/Button";

import "./Pagination.css";

interface PaginationProps {
  onPreviousClick: () => void;
  onNextClick: () => void;
  currentPage:number,
  isPreviousButtonDisabled: boolean;
  isNextButtonDisabled: boolean;
}

const Pagination = ({
  onPreviousClick,
  onNextClick,
  currentPage,
  isPreviousButtonDisabled,
  isNextButtonDisabled,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <Button
        text="Previous"
        onClickEvent={onPreviousClick}
        type="button"
        disabled={isPreviousButtonDisabled}
      />
      <span className="currentPageNumber">{currentPage}</span>
      <Button
        text="Next"
        onClickEvent={onNextClick}
        type="button"
        disabled={isNextButtonDisabled}
      />
    </div>
  );
};

export default Pagination;
