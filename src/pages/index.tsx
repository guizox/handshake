"use client";
import { StudentList } from "../components/organism/StudentList/StudentList";
import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";

const Students = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/students");
  }, [router]);

  return null;
};

export default Students;
