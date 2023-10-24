import React from "react";
import * as S from "./SkeletonBox.styled";

export interface SkeletonBoxProps {
  width?: string;
  height?: string;
}

export const SkeletonBox = ({ width = "100%", height = "100%" }) => {
  return <S.SkeletonBox width={width} height={height} />;
};
