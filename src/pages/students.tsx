"use client";
import { Button } from "@/components/atoms/Button/Button";
import { useFetchPeople } from "@/hooks/useFetchPeople";
import { Student } from "@/services/SwapiService/PeopleApi/PeopleApi";
import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div(({ theme }) => {
  return css`
    margin: 12.5rem;
  `;
});

const TwoColumnsWrapper = styled.div``;

export interface StudentItemProps {
  student: Student;
  onClick: (student: Student) => void;
}

export const StudentItem: React.FC<StudentItemProps> = ({
  student,
  onClick,
}) => {
  return (
    <div
      key={student.name}
      style={{
        height: 40,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => onClick(student)}
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(student.svg)}`}
        style={{
          width: 25,
        }}
      />
      {student.name}
    </div>
  );
};

const Students = () => {
  const localStorageData = window.localStorage.getItem("page");

  const [page, setPage] = React.useState(1);
  const { data, isLoading, error } = useFetchPeople({
    page,
  });

  React.useEffect(() => {
    window.localStorage.setItem("page", page.toString());
  }, [page]);

  const [currentStudent, setCurrentStudent] = React.useState<Student | null>(
    null
  );

  if (error) {
    return <div> something wrong have happened, please try again</div>;
  }

  const length = data ? Math.round(data?.count / 10) : 0;
  const paginationButtons = Array.from({ length }, (_, index) => index + 1);

  return (
    <Wrapper>
      <h3>Checked In Students</h3>

      {isLoading ? (
        <div>loading...</div>
      ) : (
        <TwoColumnsWrapper style={{ display: "flex", gap: "15rem" }}>
          <div>
            {data?.results.map((item) => (
              <StudentItem
                key={item.name}
                student={item as Student}
                onClick={(student) => setCurrentStudent(student)}
              />
            ))}

            <Button
              testId="pagination"
              variant="primary"
              onClick={() => {
                if (page > 1) {
                  setPage((current) => current - 1);
                }
              }}
            >
              {"<"}
            </Button>
            {paginationButtons.map((item) => (
              <Button
                testId="pagination"
                variant="primary"
                key={item}
                onClick={() => {
                  setPage(item);
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              testId="pagination"
              variant="primary"
              onClick={() => {
                if (data?.next) {
                  setPage((current) => current + 1);
                }
              }}
            >
              {">"}
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {currentStudent && (
              <>
                <div>email: {currentStudent?.email}</div>
                <div>birthDate: {currentStudent?.birth_year}</div>
              </>
            )}
          </div>
        </TwoColumnsWrapper>
      )}
    </Wrapper>
  );
};

export default Students;
