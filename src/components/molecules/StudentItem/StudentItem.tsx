"use client";
import React from "react";
import { Student } from "../../../services/SwapiService/PeopleApi/PeopleApi";
import * as S from "./StudentItem.styled";
import { SkeletonBox } from "../../../components/atoms/SkeletonBox/SkeletonBox";

export interface StudentItemProps {
  student: Student;
  onClick: (student: Student) => void;
  isLoading?: boolean;
}

export const StudentItem: React.FC<StudentItemProps> = ({
  student,
  onClick,
  isLoading,
}) => {
  return (
    <S.CardLine
      key={student.name}
      onClick={() => onClick(student)}
      isLoading={isLoading}
    >
      <S.Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(student.svg)}`}
        alt={student.email}
      />
      {student.name}
    </S.CardLine>
  );
};

export const LoadingStudentItem: React.FC = () => {
  return (
    <S.CardLine isLoading>
      <SkeletonBox height="40px" width="50px" />
      <SkeletonBox />
    </S.CardLine>
  );
};
