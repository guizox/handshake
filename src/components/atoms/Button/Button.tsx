import React from "react";
import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  testId: string;
  variant: S.ButtonProps["variant"];
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  testId,
  children,
  variant,
  className,
  ...rest
}) => {
  return (
    <S.Button
      variant={variant}
      data-testid={testId}
      className={className}
      {...rest}
    >
      {children}
    </S.Button>
  );
};
