"use client";
import { StudentList } from "../components/organism/StudentList/StudentList";
import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div(({ theme }) => {
  return css`
    margin: 5rem 2rem;
    ${theme.mediaQueries.fromDesktopSmall(css`
      margin: 12.5rem;
    `)}
  `;
});

const Students = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <StudentList testId="student-list" />
    </Wrapper>
  );
};

export default Students;
