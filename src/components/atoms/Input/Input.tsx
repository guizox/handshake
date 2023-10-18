import React from "react";
import * as S from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  testId: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  testId,
  children,
  className,
  ...rest
}) => {
  return (
    <S.Input data-testid={testId} className={className} {...rest}>
      {children}
    </S.Input>
  );
};
