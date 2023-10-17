import styled, { css } from "styled-components";

export interface ButtonProps {
  variant: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    background-color: ${variant === "secondary"
      ? theme.palette.secondary.main
      : theme.palette.primary.main};
  `
);
