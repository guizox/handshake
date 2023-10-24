import styled, { css } from "styled-components";

export interface CardLineProps {
  isLoading?: boolean;
}

export const CardLine = styled.div<CardLineProps>(
  ({ isLoading }) => css`
    height: 2.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 0.5rem 0px;
    ${!isLoading &&
    css`
      cursor: pointer;
      &:hover {
        background: #f0f0f0;
      }
    `}
  `
);

export const Image = styled.img`
  width: 2.5rem;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
`;
