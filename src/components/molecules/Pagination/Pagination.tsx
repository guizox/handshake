"use client";
import React from "react";
import * as S from "./Pagination.styled";
import { range } from "../../../helper/range";

export interface PaginationProps {
  count: number;
  setPage: (page: number) => void;
  currentPage: number;
  hasNextPage?: boolean;
  isLoading?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  setPage,
  currentPage,
  hasNextPage,
  isLoading,
}) => {
  const [paginationButtonsList, setPaginationButtonsList] = React.useState<
    number[]
  >([]);
  const rest = count % 10 === 0 ? 0 : 1;
  const length = Math.floor(count / 10) + rest;
  const paginationButtons = range(length);

  React.useEffect(() => {
    if (!paginationButtonsList.length) {
      setPaginationButtonsList(paginationButtons);
    }
  }, [paginationButtons, paginationButtonsList.length]);

  return (
    <S.PaginationWrapper>
      <S.StyledButton
        testId="pagination"
        variant="primary"
        disabled={currentPage === 1 || isLoading}
        onClick={() => {
          if (currentPage > 1) {
            setPage(currentPage - 1);
          }
        }}
      >
        {"<"}
      </S.StyledButton>

      {paginationButtonsList.map((pageNumber) => (
        <S.StyledButton
          testId="pagination"
          variant="primary"
          key={pageNumber}
          disabled={isLoading}
          isActive={currentPage === pageNumber}
          onClick={() => {
            setPage(pageNumber);
          }}
        >
          {pageNumber}
        </S.StyledButton>
      ))}
      <S.StyledButton
        testId="pagination"
        variant="primary"
        disabled={!hasNextPage || isLoading}
        onClick={() => {
          if (hasNextPage) {
            setPage(currentPage + 1);
          }
        }}
      >
        {">"}
      </S.StyledButton>
    </S.PaginationWrapper>
  );
};
