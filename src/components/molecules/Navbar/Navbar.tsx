import React from "react";
import * as S from "./Navbar.styled";
import { useRouter } from "next/router";

export interface NavbarProps {
  testId: string;
  currentTab: "checkin" | "students";
}

export const Navbar: React.FC<NavbarProps> = ({ testId, currentTab }) => {
  const router = useRouter();

  return (
    <S.Navbar data-testid={testId}>
      <S.Header>Event Check in Kiosk</S.Header>
      <S.TabsWrapper>
        <S.TextItem onClick={() => router.push("/checkin")}>
          Check In
        </S.TextItem>
        <S.TextItem onClick={() => router.push("/students")}>
          Students
        </S.TextItem>
      </S.TabsWrapper>
    </S.Navbar>
  );
};
