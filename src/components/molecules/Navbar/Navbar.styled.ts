import styled, { css } from "styled-components";

export const Navbar = styled.nav(
  ({ theme }) => css`
    background: ${theme.palette.white};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 6.75rem;
    position: sticky;
  `
);

export const Header = styled.h1`
  color: #000;

  font-feature-settings: "ss08" on, "ss10" on;
  font-family: Inter;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
  padding-left: 4.375rem;
`;

export const TabsWrapper = styled.div`
  display: flex;
  height: 2.8125rem;
`;

export const TextItem = styled.div(
  ({ theme }) => css`
    text-align: center;
    font-variant-numeric: stacked-fractions;
    font-family: Suisse Int'l;
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


`
);
