import styled, { css } from "styled-components";

export const TwoColumnsWrapper = styled.div(
  ({ theme }) => css`
    display: flex;

    ${theme.mediaQueries.fromDesktop(css`
      flex-direction: row;
    `)}
  `
);

export const ColumnWrapper = styled.div`
  width: 100%;
`;

export const LeftColumnWrapper = styled(ColumnWrapper)`
  border-right: solid 1px #f3f3f3;
`;

export const RightColumnWrapper = styled(ColumnWrapper)(
  ({ theme }) => css`
    display: none;
    ${theme.mediaQueries.fromDesktop(css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    `)}
  `
);

export const CurrentStudentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
`;

export const MobileDetail = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 3.125rem;
    height: 2.25rem;
    border-bottom: solid 1px #f0f0f0;

    ${theme.mediaQueries.fromDesktop(css`
      display: none;
    `)};
  `
);

export const CardHeader = styled.p`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.5rem;
  padding: 1.5625rem 1.5625rem 0;
  border-bottom: solid 1px black;
`;

export const CardLineWrapper = styled.div(
  ({ theme }) => css`
    margin: 0 1.5625rem 1.5625rem;
    display: flex;
    flex-direction: column;
    min-height: 35.625rem;

    ${theme.mediaQueries.fromDesktop(css`
      margin: 4.375rem 1.5625rem 1.5625rem;
    `)}
  `
);

export const PaginationWrapper = styled.div`
  padding-bottom: 1.5625rem;
`;
