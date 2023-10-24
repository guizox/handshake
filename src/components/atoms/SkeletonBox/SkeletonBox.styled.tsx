import styled, { css } from "styled-components";
import type { SkeletonBoxProps } from "./SkeletonBox";

export const SkeletonBox = styled.div<SkeletonBoxProps>(
  ({ theme, height, width }) => css`
    border-radius: 0.125rem;
    background-image: linear-gradient(to right, #c2ced7, #e0ebf3);
    position: relative;
    min-width: 30px;
    height: ${height ?? "100%"};
    width: ${width ?? "100%"};
  `
);
