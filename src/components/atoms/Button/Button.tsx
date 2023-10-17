import React from "react";
import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  testId: string;
  variant: S.ButtonProps["variant"];
}

export const Button: React.FC<ButtonProps> = ({
  testId,
  children,
  variant,
  ...rest
}) => {
  return (
    <S.Button variant={variant} data-testid={testId} {...rest}>
      {children}
    </S.Button>
  );
};
