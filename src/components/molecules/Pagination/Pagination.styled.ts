import { Button } from "../../../components/atoms/Button/Button";
import styled, { css } from "styled-components";

export const PaginationWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;

    ${theme.mediaQueries.fromDesktopSmall(css``)}
  `
);

export interface PaginationButtonProps {
  isActive?: boolean;
}

export const StyledButton = styled(Button)<PaginationButtonProps>(
  ({ theme, isActive }) => css`
    padding: 0.5rem;
    border-radius: 0.75rem;
    background: ${isActive ? theme.palette.primary.main : theme.palette.white};
    color: ${isActive ? theme.palette.white : "black"};
    cursor: pointer;

    &:disabled {
      cursor: default;
    }

    ${theme.mediaQueries.fromDesktop(css`
      padding: 0.6rem;
    `)}
  `
);
