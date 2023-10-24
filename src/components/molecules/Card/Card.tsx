"use client";
import React from "react";
import * as S from "./Card.styled";

export interface CardProps {
  testId: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ testId, children }) => {
  return <S.Card data-testId={testId}>{children}</S.Card>;
};
