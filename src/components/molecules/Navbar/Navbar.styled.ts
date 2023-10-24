import styled, { css } from "styled-components";

export const Navbar = styled.nav(
  ({ theme }) => css`
    background: ${theme.palette.white};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 6.75rem;
    position: sticky;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `
);

export const Header = styled.h1`
  color: #000;

  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
  padding-left: 4.375rem;
  margin: 0px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  height: 2.8125rem;
`;

export interface TextItemProps {
  isActive?: boolean;
}

export const TextItem = styled.div<TextItemProps>(
  ({ theme, isActive }) => css`
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    width: 12.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #f0f0f0;
    }

    border-bottom: solid 2px ${isActive ? theme.palette.primary.main : "none"};
  `
);

export const ActiveTextItem = styled(TextItem)(
  ({ theme }) => css`
    color: ${theme.palette.primary.main};
  `
);
