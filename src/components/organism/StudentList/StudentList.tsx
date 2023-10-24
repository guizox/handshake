/* eslint-disable no-console */
"use client";
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/molecules/Card/Card";
import React, { useEffect } from "react";
import * as S from "./StudentList.styled";
import { Student } from "../../../services/SwapiService/PeopleApi/PeopleApi";
import { useFetchPeople } from "../../../hooks/useFetchPeople";
import { Pagination } from "../../../components/molecules/Pagination/Pagination";
import { useRouter } from "next/router";
import {
  LoadingStudentItem,
  StudentItem,
} from "../../../components/molecules/StudentItem/StudentItem";
import {
  LocalStorageKeys,
  readFromStorage,
} from "../../../helper/readFromStorage";
import { range } from "../../../helper/range";

export interface StudentListProps {
  testId: string;
}

export const StudentList: React.FC<StudentListProps> = ({ testId }) => {
  console.log("student");
  const initialPage = readFromStorage(LocalStorageKeys.Page, 1);
  const initialStudent = readFromStorage<Student | null>(
    LocalStorageKeys.Student,
    null
  );

  console.log("read from storage");

  const router = useRouter();
  const [page, setPage] = React.useState(initialPage as number);
  const { data, isLoading, error } = useFetchPeople({
    page,
  });

  console.log("fetch people");

  const [currentStudent, setCurrentStudent] = React.useState<Student | null>(
    initialStudent
  );

  useEffect(() => {
    setCurrentStudent(null);
  }, [page]);

  if (error) {
    console.log(error);
    router.push("_error");
  }

  const loadingItems = range(10);

  const studentDetail = currentStudent ? (
    <S.CurrentStudentWrapper>
      <div>
        <b>Email:</b> {currentStudent?.email}
      </div>
      <div>
        <b>Birth Date:</b> {currentStudent?.birth_year}
      </div>
    </S.CurrentStudentWrapper>
  ) : (
    <div>{`You haven't selected any student on the list yet.`}</div>
  );

  return (
    <Card testId="card-list">
      <S.TwoColumnsWrapper>
        <S.LeftColumnWrapper>
          <S.CardHeader data-testId={testId}>Checked In Students</S.CardHeader>

          <S.MobileDetail>{studentDetail}</S.MobileDetail>
          <S.CardLineWrapper>
            {isLoading
              ? loadingItems.map((item) => <LoadingStudentItem key={item} />)
              : data?.results?.map((item) => {
                  return (
                    <StudentItem
                      student={item as Student}
                      onClick={(student) => setCurrentStudent(student)}
                      key={item.name}
                      isLoading={isLoading}
                    />
                  );
                })}
          </S.CardLineWrapper>
          <S.PaginationWrapper>
            <Pagination
              count={data?.count as number}
              currentPage={parseInt(page.toString(), 10)}
              setPage={setPage}
              hasNextPage={Boolean(data?.next)}
              isLoading={isLoading}
            />
          </S.PaginationWrapper>
        </S.LeftColumnWrapper>
        <S.RightColumnWrapper>{studentDetail}</S.RightColumnWrapper>
      </S.TwoColumnsWrapper>
    </Card>
  );
};
